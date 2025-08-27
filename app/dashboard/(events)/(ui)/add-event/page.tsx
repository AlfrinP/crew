'use client';

import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { addEventFormSchema, CreateEventFormDTO } from '@/lib/types';
import { toast } from 'sonner';
import { addEvents } from '../../(actions)/eventActions';
import { uploadFile } from '@/actions/storage.actions';

export default function AddEventPage() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(addEventFormSchema),
    defaultValues: {
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      rules: '',
      note: '',
      importantInstructions: '',
      image: undefined,
    },
  });

  const onSubmit = async (data: CreateEventFormDTO) => {
    try {
      // First upload the image
      const imageUploadResponse = await uploadFile(data.image);
      if (!imageUploadResponse) {
        toast.error('Failed to upload image');
        return;
      }

      // Combine date and time
      const dateObj = new Date(data.date);
      const [hours, minutes] = data.time.split(':');
      dateObj.setHours(parseInt(hours), parseInt(minutes));

      // Destructure time & image so they don't get included in eventData
      const { time, image, ...rest } = data;

      // Create event data with image storage ID
      const eventData = {
        ...rest,
        date: dateObj,
        imageStorageId: imageUploadResponse.$id,
      };

      const eventFromResponse = await addEvents(eventData);
      if (!eventFromResponse) {
        toast.error('Failed to create event');
        return;
      }

      toast.success('Event created successfully!');
      form.reset();
      router.push('/dashboard');
    } catch (error) {
      console.error('Error creating event:', error);
      toast.error('Failed to create event');
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link href="dashboard">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 size-4" />
            Back to Dashboard
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add New Event</h1>
          <p className="text-muted-foreground">
            Create a new event for your college community
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
            <CardDescription>
              Fill in the information about your event
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter event title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            field.onChange(file);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your event..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            {...field}
                            value={
                              field.value
                                ? new Date(field.value)
                                    .toISOString()
                                    .split('T')[0]
                                : ''
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter event location" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="rules"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rules</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter event rules and guidelines..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Specify the rules and guidelines for participants
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Note</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any additional notes for participants..."
                          className="min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Optional notes that will be displayed on the event card
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="importantInstructions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Important Instructions</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Important information participants should know..."
                          className="min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Critical information that participants must be aware of
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="flex-1">
                  <Sparkles className="mr-2 size-4" />✨ Create Event
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

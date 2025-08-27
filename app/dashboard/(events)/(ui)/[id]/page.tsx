'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  getEventById,
  getParticipantsByEventId,
  getAnnouncementsByEventId,
  formatDate,
  formatTime,
} from '@/lib/data';
import { AnnouncementFormData } from '@/lib/types';
import { DataTable } from '@/components/data-table';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowLeft,
  Edit,
  CalendarDays,
  Clock,
  FileText,
  Users,
  Megaphone,
  TrendingUp,
  PieChart,
} from 'lucide-react';
import Announcements from './_sections/Announcements';
import EventDoesNotExisit from './_sections/EventDoesNotExisit';
import Image from 'next/image';

export default function EventDetailsPage() {
  const params = useParams();
  const eventId = params.id as string;

  const event = getEventById(eventId);
  const participants = getParticipantsByEventId(eventId);
  const announcements = getAnnouncementsByEventId(eventId);

  const [announcementForm, setAnnouncementForm] =
    useState<AnnouncementFormData>({
      title: '',
      message: '',
    });

  if (!event) {
    return <EventDoesNotExisit />;
  }

  const handleAnnouncementSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!announcementForm.title.trim() || !announcementForm.message.trim()) {
      alert('Please fill in both title and message');
      return;
    }

    // Here you would typically send to backend
    console.log('New announcement:', announcementForm);
    alert('Announcement posted successfully! 📢');
    setAnnouncementForm({ title: '', message: '' });
  };

  // const registeredCount = participants.filter(
  //   (p) => p.status === 'registered',
  // ).length;
  // const confirmedCount = participants.filter(
  //   (p) => p.status === 'confirmed',
  // ).length;
  // const cancelledCount = participants.filter(
  //   (p) => p.status === 'cancelled',
  // ).length;

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link href="dashboard">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="size-4" />
          </Button>
        </Link>

        <Button variant="outline">
          <Edit className="mr-2 size-4" />
          Edit Event
        </Button>
      </div>

      <Tabs defaultValue="info" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="info" className="flex items-center gap-2">
            <FileText className="size-4" />
            Event Info
          </TabsTrigger>
          <TabsTrigger value="participants" className="flex items-center gap-2">
            <Users className="size-4" />
            Participants
          </TabsTrigger>
          <TabsTrigger
            value="announcements"
            className="flex items-center gap-2"
          >
            <Megaphone className="size-4" />
            Announcements
          </TabsTrigger>
        </TabsList>

        <TabsContent value="info" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row gap-6">
              <div className="flex aspect-[10/16] h-72 items-center gap-2">
                <Image
                  src={event.image || '/api/placeholder/400/250'}
                  alt={event.title}
                  width={1000}
                  height={1000}
                  className="size-full rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col items-start justify-start gap-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tight">
                    {event.title}
                  </h1>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="text-muted-foreground size-5" />
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-muted-foreground size-5" />
                    <span className="text-sm">{formatTime(event.time)}</span>
                  </div>
                </div>

                {event.note && (
                  <div>
                    <h3 className="font-medium">Note</h3>
                    <p className="text-muted-foreground">{event.note}</p>
                  </div>
                )}

                {event.importantInstructions && (
                  <div>
                    <h3 className="font-medium">Important Instructions</h3>
                    <p className="text-muted-foreground">
                      {event.importantInstructions}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="participants" className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="size-5" />
                  Registrations Over Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted flex h-48 items-center justify-center rounded-lg">
                  <p className="text-muted-foreground">
                    Line Chart Placeholder
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="size-5" />
                  Registration Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted flex h-48 items-center justify-center rounded-lg">
                  <p className="text-muted-foreground">Pie Chart Placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Participants List</CardTitle>
              <CardDescription>
                Manage and view all registered participants
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable participants={participants} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="announcements">
          <Announcements
            announcements={announcements}
            handleAnnouncementSubmit={handleAnnouncementSubmit}
            announcementForm={announcementForm}
            setAnnouncementForm={setAnnouncementForm}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

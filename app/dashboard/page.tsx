import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { getAllEvents } from './(events)/(actions)/eventActions';
import EventCard from '@/components/event-card';

export default async function Dashboard() {
  const events =
    (await getAllEvents({ currentPage: 1, eventsPerPage: 20 })) ?? [];
  console.log(events);

  if (events.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle>No events yet</CardTitle>
            <CardDescription>
              No events yet — bring some magic to the world ✨
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/dashboard/add-event" about="adding new events">
              <Button className="w-full">
                <Plus className="mr-2 size-4" />✨ Add Event
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Events Dashboard
          </h1>
          <p className="text-muted-foreground">
            Discover and manage upcoming college events
          </p>
        </div>
        <Link href="/dashboard/add-event" about="adding new events">
          <Button>
            <Plus className="mr-2 size-4" />
            Add Event
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {events.map((event) => (
          <EventCard key={event.$id} eventDetails={event} />
        ))}
      </div>

      <div className="text-muted-foreground text-center text-sm">
        Showing {events.length} event{events.length !== 1 ? 's' : ''}
      </div>
    </div>
  );
}

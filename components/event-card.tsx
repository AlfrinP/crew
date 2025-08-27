import Link from 'next/link';
import Image from 'next/image';
import { EventListDTO } from '@/lib/types';
import { formatDate, formatTime } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CalendarDays, Clock } from 'lucide-react';
import { getFilePreviewFromStorage } from '@/actions/storage.actions';

export default async function EventCard({
  eventDetails,
}: {
  eventDetails: EventListDTO;
}) {
  const eventImage = eventDetails.imageStorageId
    ? await getFilePreviewFromStorage({
        fileId: eventDetails.imageStorageId,
        width: 400,
        height: 250,
      })
    : null;

  const imageUrl = eventImage ?? '/api/placeholder/400/250';

  return (
    <Link
      href={`/dashboard/events/${eventDetails.$id}`}
      className="group block"
    >
      <Card className="overflow-hidden pt-0">
        <div className="h-1/5 w-full overflow-clip transition-transform group-hover:scale-110">
          <Image
            src={imageUrl}
            alt={eventDetails.title}
            width={1000}
            height={1000}
            className="size-full object-cover"
          />
        </div>
        <div className="h-4/5 flex-1">
          <CardHeader className="pb-4">
            <CardTitle className="line-clamp-2 text-lg">
              {eventDetails.title}
            </CardTitle>
            <div className="text-muted-foreground flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <CalendarDays className="size-4" />
                {/* <span>{formatDate(eventDetails.date.toISOString())}</span> */}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4" />
                {/* <span>{formatTime(eventDetails.date.toISOString())}</span> */}
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <CardDescription className="line-clamp-3">
              {eventDetails.description}
            </CardDescription>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}

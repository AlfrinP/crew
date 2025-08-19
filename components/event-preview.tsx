'use client';

import { EventFormData } from '@/lib/types';
import { formatDate, formatTime } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CalendarDays, Clock } from 'lucide-react';

interface EventPreviewProps {
  data: EventFormData;
}

export function EventPreview({ data }: EventPreviewProps) {
  return (
    <Card className="h-full overflow-hidden">
      <div className="bg-muted aspect-video w-full overflow-hidden">
        <div className="text-muted-foreground flex h-full items-center justify-center">
          <span>Event Image Placeholder</span>
        </div>
      </div>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">{data.title || 'Event Title'}</CardTitle>
        <div className="text-muted-foreground flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <CalendarDays className="size-4" />
            <span>{data.date ? formatDate(data.date) : 'Event Date'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4" />
            <span>{data.time ? formatTime(data.time) : 'Event Time'}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription>
          {data.description || 'Event description will appear here...'}
        </CardDescription>
        {data.note && (
          <div className="mt-4">
            <h4 className="mb-2 text-sm font-medium">Note:</h4>
            <p className="text-muted-foreground text-sm">{data.note}</p>
          </div>
        )}
        {data.importantInstructions && (
          <div className="mt-4">
            <h4 className="mb-2 text-sm font-medium">
              Important Instructions:
            </h4>
            <p className="text-muted-foreground text-sm">
              {data.importantInstructions}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

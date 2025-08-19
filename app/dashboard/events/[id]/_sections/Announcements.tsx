import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Announcement, AnnouncementFormData } from '@/lib/types';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Megaphone } from 'lucide-react';

interface RecentAnnouncementsProps {
  announcements: Announcement[];
  handleAnnouncementSubmit: (e: React.FormEvent) => void;
  announcementForm: AnnouncementFormData;
  setAnnouncementForm: React.Dispatch<
    React.SetStateAction<AnnouncementFormData>
  >;
}

export default function RecentAnnouncements({
  announcements,
  handleAnnouncementSubmit,
  announcementForm,
  setAnnouncementForm,
}: RecentAnnouncementsProps) {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Post New Announcement</CardTitle>
          <CardDescription>
            Share important updates with all participants
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleAnnouncementSubmit}
            className="space-y-4 *:space-y-2"
          >
            <div>
              <Label htmlFor="announcement-title">Title</Label>
              <Input
                id="announcement-title"
                placeholder="Announcement title"
                value={announcementForm.title}
                onChange={(e) =>
                  setAnnouncementForm((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <Label htmlFor="announcement-message">Message</Label>
              <Textarea
                id="announcement-message"
                placeholder="Your announcement message..."
                className="min-h-[100px]"
                value={announcementForm.message}
                onChange={(e) =>
                  setAnnouncementForm((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
              />
            </div>
            <Button type="submit" className="w-full">
              <Megaphone className="mr-2 size-4" />
              Post Announcement
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Recent Announcements</h3>
        {announcements.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">No announcements yet</p>
            </CardContent>
          </Card>
        ) : (
          announcements.map((announcement) => (
            <RecentAnnouncementCard
              key={announcement.id}
              announcement={announcement}
            />
          ))
        )}
      </div>
    </section>
  );
}

const RecentAnnouncementCard = ({
  announcement,
}: {
  announcement: Announcement;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{announcement.title}</CardTitle>
        <CardDescription>
          {new Date(announcement.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{announcement.message}</p>
      </CardContent>
    </Card>
  );
};

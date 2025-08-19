import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'lucide-react';

export default function EventDoesNotExisit() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle>Event Not Found</CardTitle>
          <CardDescription>
            The event you are looking for does not exist or has been removed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/">
            <Button>Back to Dashboard</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

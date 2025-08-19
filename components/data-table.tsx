'use client';

import { useState } from 'react';
import { Participant, ParticipantStatus } from '@/lib/types';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Download } from 'lucide-react';

interface DataTableProps {
  participants: Participant[];
}

export function DataTable({ participants }: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<ParticipantStatus>('all');

  const filteredParticipants = participants.filter((participant) => {
    const matchesSearch =
      participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.college.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'all' || participant.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'default';
      case 'registered':
        return 'secondary';
      case 'cancelled':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const exportToCSV = () => {
    const headers = [
      'Name',
      'Email',
      'College',
      'Phone',
      'Status',
      'Registered At',
    ];
    const csvContent = [
      headers.join(','),
      ...filteredParticipants.map((p) =>
        [
          p.name,
          p.email,
          p.college,
          p.phone,
          p.status,
          new Date(p.registeredAt).toLocaleDateString(),
        ].join(','),
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'participants.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
          <Input
            placeholder="Search participants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 sm:w-80"
          />
        </div>
        <div className="flex gap-2">
          <Select
            value={statusFilter}
            onValueChange={(value: ParticipantStatus) => setStatusFilter(value)}
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="registered">Registered</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={exportToCSV} variant="outline" size="sm">
            <Download className="mr-2 size-4" />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50 border-b">
                <th className="text-muted-foreground h-12 px-4 text-left align-middle font-medium">
                  Name
                </th>
                <th className="text-muted-foreground h-12 px-4 text-left align-middle font-medium">
                  Email
                </th>
                <th className="text-muted-foreground h-12 px-4 text-left align-middle font-medium">
                  College
                </th>
                <th className="text-muted-foreground h-12 px-4 text-left align-middle font-medium">
                  Phone
                </th>
                <th className="text-muted-foreground h-12 px-4 text-left align-middle font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredParticipants.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-muted-foreground h-24 text-center"
                  >
                    No participants found.
                  </td>
                </tr>
              ) : (
                filteredParticipants.map((participant) => (
                  <tr
                    key={participant.id}
                    className="hover:bg-muted/50 border-b transition-colors"
                  >
                    <td className="p-4 align-middle font-medium">
                      {participant.name}
                    </td>
                    <td className="text-muted-foreground p-4 align-middle">
                      {participant.email}
                    </td>
                    <td className="p-4 align-middle">{participant.college}</td>
                    <td className="p-4 align-middle">{participant.phone}</td>
                    <td className="p-4 align-middle">
                      <Badge variant={getStatusVariant(participant.status)}>
                        {participant.status.charAt(0).toUpperCase() +
                          participant.status.slice(1)}
                      </Badge>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {filteredParticipants.length > 0 && (
        <div className="text-muted-foreground text-sm">
          Showing {filteredParticipants.length} of {participants.length}{' '}
          participants
        </div>
      )}
    </div>
  );
}

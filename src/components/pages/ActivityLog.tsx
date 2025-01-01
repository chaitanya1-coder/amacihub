import React from 'react';
import { Search } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { activities } from '@/data/activities';
import ActivityTable from '@/components/tables/ActivityTable';

const ActivityLog = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Log</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Input placeholder="Search activities..." />
            <Button variant="outline">
              <Search className="w-4 h-4" />
            </Button>
          </div>
          <ActivityTable activities={activities} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityLog;
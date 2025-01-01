import React from 'react';
import { Activity } from '@/types';

interface ActivityTableProps {
  activities: Activity[];
}

const ActivityTable: React.FC<ActivityTableProps> = ({ activities }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Date</th>
            <th className="text-left p-2">Action</th>
            <th className="text-left p-2">Keypair</th>
            <th className="text-left p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{activity.date}</td>
              <td className="p-2">{activity.action}</td>
              <td className="p-2">{activity.keypair}</td>
              <td className="p-2">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  activity.status === 'success' 
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {activity.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { Activity } from '../types';

interface ActivityListProps {
  activities: Activity[];
}

export function ActivityList({ activities }: ActivityListProps) {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-semibold text-gray-800">{activity.name}</h4>
          <div className="mt-2 space-y-2">
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">{activity.date} at {activity.time}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{activity.location}</span>
            </div>
            {activity.notes && (
              <p className="text-sm text-gray-600 mt-2">{activity.notes}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
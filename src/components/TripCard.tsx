import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Trip } from '../types';

interface TripCardProps {
  trip: Trip;
  onSelect: (trip: Trip) => void;
}

export function TripCard({ trip, onSelect }: TripCardProps) {
  return (
    <div 
      onClick={() => onSelect(trip)}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
    >
      <img 
        src={trip.image} 
        alt={trip.destination} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{trip.destination}</h3>
        <div className="mt-2 flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">
            {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
          </span>
        </div>
        <div className="mt-2 flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{trip.activities.length} activities planned</span>
        </div>
      </div>
    </div>
  );
}
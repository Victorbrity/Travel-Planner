import React, { useState } from 'react';
import { PlusCircle, Plane } from 'lucide-react';
import { Trip } from './types';
import { TripCard } from './components/TripCard';
import { ActivityList } from './components/ActivityList';
import { AddTripForm } from './components/AddTripForm';

const initialTrips: Trip[] = [
  {
    id: '1',
    destination: 'Paris, France',
    startDate: '2024-06-15',
    endDate: '2024-06-22',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80',
    activities: [
      {
        id: '1',
        name: 'Visit Eiffel Tower',
        date: '2024-06-15',
        time: '10:00',
        location: 'Champ de Mars, 5 Avenue Anatole France',
        notes: 'Book skip-the-line tickets in advance'
      },
      {
        id: '2',
        name: 'Louvre Museum Tour',
        date: '2024-06-16',
        time: '09:00',
        location: 'Rue de Rivoli, 75001',
        notes: 'Get audio guide'
      }
    ]
  }
];

function App() {
  const [trips, setTrips] = useState<Trip[]>(initialTrips);
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddTrip = (newTrip: Omit<Trip, 'id' | 'activities'>) => {
    const trip: Trip = {
      ...newTrip,
      id: Date.now().toString(),
      activities: []
    };
    setTrips([...trips, trip]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Plane className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Travel Planner</h1>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              Add Trip
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {showAddForm && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h2 className="text-xl font-semibold mb-4">Add New Trip</h2>
              <AddTripForm onAdd={handleAddTrip} onClose={() => setShowAddForm(false)} />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <TripCard
              key={trip.id}
              trip={trip}
              onSelect={setSelectedTrip}
            />
          ))}
        </div>

        {selectedTrip && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{selectedTrip.destination}</h2>
                <button
                  onClick={() => setSelectedTrip(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              <ActivityList activities={selectedTrip.activities} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
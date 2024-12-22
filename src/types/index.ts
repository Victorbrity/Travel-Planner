export interface Trip {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  activities: Activity[];
  image: string;
}

export interface Activity {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  notes?: string;
}
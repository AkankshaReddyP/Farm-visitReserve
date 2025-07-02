import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ReservationList() {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const res = await axios.get('/api/reservations');
      setList(res.data);
    } catch (err) {
      console.error('Error fetching reservations:', err);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  if (!list.length) {
    return (
      <div className="text-center text-gray-500">
        No upcoming visits yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {list.map(r => (
        <div
          key={r._id}
          className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm p-4 rounded-lg shadow hover:shadow-md transition"
        >
          <p className="text-green-800 font-semibold">
            {new Date(r.date).toLocaleDateString()} &ndash; {r.timeslot}
          </p>
          <p className="text-gray-700">Visitor: {r.customer.name}</p>
          <p className="mt-2 text-gray-600 text-sm">
            Picking: {r.itemsPicked.join(', ')}
          </p>
        </div>
      ))}
    </div>
  );
}

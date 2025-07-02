import { useState } from 'react';
import axios from 'axios';

export default function ReservationForm({ onSuccess }) {
  const [form, setForm] = useState({
    date: '',
    timeslot: '',
    name: '',
    phone: '',
    itemsPicked: []
  });

  const options = [
    'Ridge gourd', 'Bottle gourd', 'Tomatoes', 'Okra', 'Bell pepper'
  ];

  const handleChange = e => {
    const { name, value, checked } = e.target;
    if (name === 'itemsPicked') {
      setForm(f => ({
        ...f,
        itemsPicked: checked
          ? [...f.itemsPicked, value]
          : f.itemsPicked.filter(i => i !== value)
      }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('/api/reservations', {
      date: form.date,
      timeslot: form.timeslot,
      customer: { name: form.name, phone: form.phone },
      itemsPicked: form.itemsPicked
    });
    onSuccess();
    setForm({ date: '', timeslot: '', name: '', phone: '', itemsPicked: [] });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="reservation-form space-y-6"
    >
      {/* Date Field */}
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Date
        </label>
        <input
          id="date"
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm
            px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        />
      </div>

      {/* Time Slot */}
      <div>
        <label htmlFor="timeslot" className="block text-sm font-medium text-gray-700">
          Time Slot
        </label>
        <select
          id="timeslot"
          name="timeslot"
          value={form.timeslot}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm
            px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        >
          <option value="">Select...</option>
          <option>09:00-11:00</option>
          <option>11:00-13:00</option>
          <option>14:00-16:00</option>
        </select>
      </div>

      {/* Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm
              px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm
              px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Pick Options */}
      <fieldset className="border-t pt-4 space-y-2">
        <legend className="text-sm font-medium text-gray-700">
          What to pick:
        </legend>
        <div className="space-y-2">
          {options.map(opt => (
            <label key={opt} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="itemsPicked"
                value={opt}
                checked={form.itemsPicked.includes(opt)}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent
          shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Book Visit
      </button>
    </form>
  );
}
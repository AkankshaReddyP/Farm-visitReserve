import React, { useState } from 'react';
import ReservationForm from './ReservationForm';
import ReservationList from './ReservationList';

export default function App() {
  const [reload, setReload] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white font-body">
      {/* Inline form element styling */}
      <style>{`
        /* Textual inputs, selects, textareas */
        .reservation-form input:not([type="checkbox"]),
        .reservation-form select,
        .reservation-form textarea {
          width: 100%;
          padding: 0.5rem;
          margin-top: 0.25rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          background: #fff;
        }
        /* Checkbox styling */
        .reservation-form input[type="checkbox"] {
          width: auto;
          margin: 0 0.5rem 0 0;
          vertical-align: middle;
        }
        /* Focus states */
        .reservation-form input:focus,
        .reservation-form select:focus,
        .reservation-form textarea:focus {
          outline: none;
          border-color: #22c55e;
          box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.3);
        }
      `}</style>

      {/* Navbar */}
      <nav className="bg-green-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Green Acres Farm</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative">
        <img
          src="/farm-hero.jpg"
          alt="Farm fields"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4">
          <h2 className="text-4xl font-extrabold drop-shadow-lg text-center">
            Pick & Chill at the Farm
          </h2>
          <p className="mt-2 text-lg drop-shadow-md text-center">
            Book your visit, gather fresh veggies, and unwind!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 space-y-12">
        {/* Reservation Form */}
        <section className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-md p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Reserve Your Spot
          </h3>
          <div className="reservation-form">
            <ReservationForm onSuccess={() => setReload(r => !r)} />
          </div>
        </section>

        {/* Upcoming Reservations */}
        <section>
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Upcoming Visits
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ReservationList key={reload} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-800">
        <div className="container mx-auto px-6 py-4 text-center text-sm text-green-200">
          © 2025 Green Acres Farm
        </div>
      </footer>
    </div>
  );
}

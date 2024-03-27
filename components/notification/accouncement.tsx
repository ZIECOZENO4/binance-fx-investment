// pages/index.tsx or components/AnnouncementList.tsx
import React from 'react';

const announcements = [
  { id: 1, title: 'Notice on New Trading Pairs & Trading Bots Services on Binance Spot', date: '2024-03-26 11:13:10' },
  // ... other announcements
];

const AnnouncementList = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="text-lg font-semibold mb-2">Announcement</div>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement.id} className="border-b border-gray-700 py-2">
            <a href="#" className="hover:underline">
              <h3 className="text-sm font-medium">{announcement.title}</h3>
              <p className="text-xs">{announcement.date}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnnouncementList;

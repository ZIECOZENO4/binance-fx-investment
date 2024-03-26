"use client"
import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../utils/sanity/client';

const Teams = () => {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async (): Promise<void> => {
      const query = `*[_type == "team"]`;
      const data = await client.fetch(query);
      setTeamMembers(data);
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="w-full bg-gray-800">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-indigo-600">
            We are the best Crypto Investment platform because we have the best team
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            Check our awesome team
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((team) => (
            <div key={team._id} className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
              <div className="mb-8">
                <img className="object-center object-cover rounded-full h-36 w-36" src={urlFor(team.image).url()} alt={team.name} />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">{team.name}</p>
                <p className="text-base text-gray-400 font-normal">{team.work}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Teams;

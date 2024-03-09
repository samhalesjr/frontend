// src/TeamCard.tsx
import React from 'react';
import { Team } from './types';

const TeamCard: React.FC<{ team: Team }> = ({ team }) => {
  return (
    <div className="team-card">
      <h2>{team.school} {team.name}</h2>
      <p>Location: {team.city}, {team.state}</p>
    </div>
  );
};

export default TeamCard;

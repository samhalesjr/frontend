// src/TeamsList.tsx
import React from 'react';
import TeamCard from './TeamCard';
import { Team } from './types';
import teamsData from './CollegeBasketballTeams.json';

const TeamsList: React.FC = () => {
  const teams: Team[] = teamsData.teams;

  return (
    <div>
      {teams.map((team) => (
        <TeamCard key={team.tid} team={team} />
      ))}
    </div>
  );
};

export default TeamsList;

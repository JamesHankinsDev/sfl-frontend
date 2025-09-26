export type Tribe = 'Hina' | 'Uli' | 'Kele';

export type Castaway = {
  name: string;
  tribe: Tribe;
  image: string; // /public path or remote
  stats?: {
    totalPoints?: number;
    immunitiesWon?: number;
    votesReceived?: number;
  };
};

export const castaways: Castaway[] = [
  {
    name: 'Kimberly "Annie" Davis',
    tribe: 'Kele',
    image: '/cast/annie-davis.jpg',
  },
  { name: 'Nicole Mazullo', tribe: 'Kele', image: '/cast/nicole-mazullo.jpg' },
  {
    name: 'Sage Ahrens-Nichols',
    tribe: 'Uli',
    image: '/cast/sage-ahrens-nichols.jpg',
  },
  // ...add the rest when you have the images handy
];

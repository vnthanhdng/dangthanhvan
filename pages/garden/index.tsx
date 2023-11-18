// pages/garden/index.tsx
import React from "react";
import Link from "next/link";
import { getEssays } from "../../services/firebaseServices"; // Adjust path as needed
import EssayCard from "../../components/cards/EssayCard";
import {Essay} from "../../types/Essay";

interface GardenProps {
  essays: Essay[]; // Replace 'Essay' with the actual type you defined for essays
}

export const getStaticProps = async () => {
  const essays = await getEssays(); // Fetch essays from Firebase or other sources
  return {
    props: {
      essays,
    },
    revalidate: 10, // ISR - Optionally revalidate at most once every 10 seconds
  };
};

const GardenPage: React.FC<GardenProps> = ({ essays }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Digital Garden</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {essays.map((essay) => (
          <Link key={essay.id} href={`/garden/${essay.id}`}>
            <div>
              <EssayCard essay={essay} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GardenPage;

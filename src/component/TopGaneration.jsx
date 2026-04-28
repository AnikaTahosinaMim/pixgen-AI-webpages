import React from "react";
import PhotosCard from "./PhotosCard";

const TopGaneration = async () => {
  const res = await fetch("https://pixgen-ai-webpages.vercel.app/data.json");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 8);
  return (
    <div>
      <h2 className="text-2xl font-bold mt-6">Top Genaration</h2>
      <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4 mt-8">
        {topPhotos.map((photo) => (
          <PhotosCard key={photo.id} photo={photo}></PhotosCard>
        ))}
      </div>
    </div>
  );
};

export default TopGaneration;

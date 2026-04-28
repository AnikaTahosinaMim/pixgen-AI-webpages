import PhotosCard from "@/component/PhotosCard";
import React from "react";

const AllPhotos = async () => {
  const res = await fetch("https://pixgen-ai-webpages.vercel.app/data.json");
  const photos = await res.json();
  return (
    <div>
      <h2 className="text-lg font-bold my-6">All Photos</h2>
      <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4">
        {photos.map((photo) => (
          <PhotosCard key={photo.id} photo={photo}></PhotosCard>
        ))}
      </div>
    </div>
  );
};

export default AllPhotos;

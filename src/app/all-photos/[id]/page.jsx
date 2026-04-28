import Image from "next/image";
import React from "react";

const PhotosDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://pixgen-ai-webpages.vercel.app/data.json");
  const photos = await res.json();
  const photo = photos.find((p) => p.id == id);
  console.log(photo.imageUrl);
  return (
    <div>
      <div className="border flex items-center gap-6 p-6 rounded-lg">
        <div className="w-1/2 text-center space-y-3">
          <h2 className="text-xl font-bold">{photo.title}</h2>
          <p className="font-bold">{photo.prompt}</p>
          <p>{photo.resolution}</p>
          <p className="font-bold">createAt: {new Date().toLocaleString("en-US")}</p>
        </div>

        <div className="w-1/2 aspect-square">
          {photo?.imageUrl && (
            <Image
              src={photo.imageUrl}
              width={200}
              height={200}
              alt="photo"
              className="object-cover rounded-sm w-full h-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotosDetails;

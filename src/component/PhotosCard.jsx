import { Button, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const PhotosCard = ({ photo }) => {
  console.log(photo);
  return (
    <div className="border p-4 rounded-lg space-y-3">
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          fill
          alt="photo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-sm"
        ></Image>
        <Chip size="sm" className="absolute top-2 right-2 ">{photo.category}</Chip>
      </div>

      <h2>{photo.title}</h2>
      <div className="flex items-center gap-5">
        <span className="flex items-center gap-1">
          <FaHeart />
          <p>{photo.likes}</p>
        </span>
        <Separator orientation="vertical"></Separator>
        <span className="flex items-center gap-1">
          <AiOutlineDownload />
          <p>{photo.downloads}</p>
        </span>
      </div>
      <Button variant="outline" className={"w-full"}>view details</Button>
    </div>
  );
};

export default PhotosCard;

"use client";
import Image from "next/image";
import React, { use } from "react";
import logoImg from "@/app/assets/logo (1).png";
import Link from "next/link";
import { authClient, useSession } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  
  const handleSingout=async()=>{
    await authClient.signOut();
  }
  return (
    <div>
      <div className="flex justify-between items-center container mx-auto my-3">
        <div className="flex items-center gap-2">
          <Image src={logoImg} alt="logoImg" width={60} height={60}></Image>
          <h2>pixgen.</h2>
        </div>
        <div>
          <ul className="flex items-center gap-2">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/all-photos"}>All photos</Link>
            </li>
            <li>
              <Link href={"/pricing"}>Pricing</Link>
            </li>
            <li>
              <Link href={"/profile"}>Profile</Link>
            </li>
          </ul>
        </div>
        {!user && (
          <ul>
            <div>
              <ul className="flex items-center gap-2">
                <li>
                  <Link href={"/singin"}>SingIn</Link>
                </li>
                <li>
                  <Link href={"/singup"}>SingUp</Link>
                </li>
              </ul>
            </div>
          </ul>
        )}
        {user && (
          <div className="flex gap-2">
            {" "}
            <Avatar>
              <Avatar.Image
                alt="John Doe"
                src={user?.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>{user?.name.charAt}</Avatar.Fallback>
            </Avatar>
            <Button onClick={handleSingout} variant="danger"> SingOut</Button>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Navbar;

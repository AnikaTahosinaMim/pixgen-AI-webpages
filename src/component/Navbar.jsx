import Image from "next/image";
import React from "react";
import logoImg from "@/app/assets/logo (1).png";
import Link from "next/link";

const Navbar = () => {
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
      </div>
      <hr />
    </div>
  );
};

export default Navbar;

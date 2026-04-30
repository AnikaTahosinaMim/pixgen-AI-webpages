"use client";
import UpdateUser from "@/component/UpdateUser";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import React from "react";

const Profilepages = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
//   console.log(user);
  return (
    <div>
      <Card className="flex items-center max-w-96 mx-auto">
        <Avatar className="h-23 w-23">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </Card>
      <UpdateUser></UpdateUser>
    </div>
  );
};

export default Profilepages;

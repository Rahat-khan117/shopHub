"use client";

import {  signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AuthButtons() {
  const { data: session } = useSession();
  console.log(session?.user);
  if (session) {
    return (
      <div className="sm:flex gap-3 items-center">
        <p className="text-xl font-bold"> {session.user.name}</p>
        <button className="btn bg-blue-900 text-white rounded-sm mt-2" onClick={() => signOut()}>Logout</button>
      </div>
    );
  }

  return <Link href={"/login"}><button className="btn bg-blue-900 text-white rounded-sm">Login</button></Link>;
}

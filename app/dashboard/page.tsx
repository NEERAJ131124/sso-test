"use client";
import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) return <p>Not logged in</p>;

  return (
    <div>
      <p>Welcome {session.user?.name}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>

  );
}

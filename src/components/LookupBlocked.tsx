// src/components/LookupBlocked.tsx
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import BlockedUsersList from "@/components/BlockedUsersList";
import { twitterClient } from "@/utils/twitterClient";

interface BlockedUser {
  id: string;
  name: string;
  username: string;
}

interface TwitterBlocksLookupProps {
  userId: string;
}

export default function TwitterBlocksLookup({ userId }: TwitterBlocksLookupProps) {
  const [blockedUsers, setBlockedUsers] = useState<BlockedUser[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Get the blocked users
      const response = await twitterClient.v2.getUsersBlocked(userId);
      setBlockedUsers(response.data.map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
      })));
    } catch (e) {
      console.error('Error:', e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Button
          type="submit"
          variant="outline"
          className={buttonVariants({ variant: "outline", className: "hover:bg-gray-100 dark:hover:bg-gray-800" })}
        >
          Get Blocked Users
        </Button>
      </form>

      <BlockedUsersList blockedUsers={blockedUsers} />
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { fetchTwitterUser } from './twitter.js';
import { TwitterUser } from './types';

export default function TwitterUserSearchInput() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<TwitterUser | null>(null);

  const fetchUser = async () => {
    if (username.trim() !== '') {
      const userData = await fetchTwitterUser(username);
      setUser(userData);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [username]);

  return (
    <div>
      <div className="flex items-center">
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && fetchUser()}
          placeholder="Search for a Twitter user"
          className="mr-2 flex-1"
        />
        <Button onClick={fetchUser}>Search</Button>
      </div>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.description || 'No description available'}</p>
          <p>Followers: {user.followersCount}</p>
          <p>Following: {user.followingCount}</p>
        </div>
      )}
    </div>
  );
}
// src/app/page.tsx
import TwitterBlocksLookup  from '@/components/LookupBlocked';

export default function Page() {
  const userId = process.env.USER_ID;

  return (
    <div>
      <h1>Twitter Blocks Lookup</h1>
      {userId ? (
        <TwitterBlocksLookup userId={userId} />
      ) : (
        <p>Please set the USER_ID environment variable.</p>
      )}
    </div>
  );
}
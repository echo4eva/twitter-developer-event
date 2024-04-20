// BlockedUsersList.tsx
import { BlockedUser } from "@/utils/TwitterBlocksLookup";

interface BlockedUsersListProps {
  blockedUsers: BlockedUser[];
}

export default function BlockedUsersList({ blockedUsers }: BlockedUsersListProps) {
  // Log the number of blocked users to the server console
  console.log(`Blocked users: ${blockedUsers.length}`);

  return (
    <div>
      {blockedUsers.length > 0 && (
        <div>
          <h2>Blocked Users:</h2>
          <ul>
            {blockedUsers.map((user) => {
              // Log each blocked user to the server console
              console.log(`Blocked user: ${user.name} (@${user.username})`);
              return (
                <li key={user.id}>
                  {user.name} (@{user.username})
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
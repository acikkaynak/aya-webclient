import { useSupabaseServer } from "@/shared/hooks/use-supabase-server.ts";
import { type UserListResult } from "types/src/user-list-result.ts";

const UserList = async () => {
  const { supabase } = useSupabaseServer();

  const userListResponse = await supabase.functions.invoke<UserListResult>(
    "users-list",
  );

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {userListResponse.data?.payload.map((user) => (
          <li key={user.id}>
            {user.email} {user.fullname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { UserList };
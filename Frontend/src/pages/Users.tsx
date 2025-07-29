import { useGetUsers } from "@/hooks/useGetUsers";

export default function Users() {
  const users = useGetUsers();

  return (
    <>
      {users.map((user) => (
        <div key={user.email} className="p-4 border-b">
          <h2 className="text-lg font-semibold">{user.email}</h2>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      ))}
    </>
  );
}
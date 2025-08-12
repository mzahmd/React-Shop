import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { useUserContext } from "@/hooks/useUserContext";

export default function Profile() {
  const { user } = useUserContext()

  if (!user) {
    return <span>Loading...</span>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>My Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Email: {user?.email}
            </p>
            <p>
              Rolle: {user?.role}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
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
    <div className="flex-grow flex items-center justify-center mb-10 mt-20">
      <Card>
        <CardHeader className="text-center text-xl">
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <span className="font-bold"> Email: </span>
            {user?.email}
          </p>
          <p>
            <span className="font-bold"> Rolle: </span>
            {user?.role}
          </p>
        </CardContent>
        <CardFooter>
          <Button variant={"destructive"} className="w-full">
            Profil Löschen
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
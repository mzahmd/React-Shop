import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useUserContext } from "@/hooks/useUserContext";

export default function Profile() {
  const { user, deleteUser } = useUserContext()

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

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive" className="cursor-pointer">Delete Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Delete Profile</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete your profile? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button variant="destructive" className="cursor-pointer mx-auto" onClick={deleteUser}>
                    Delete Profile
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  )
}
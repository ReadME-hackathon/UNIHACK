import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface NewGroupPopupProps {
  onClose: () => void;
  onSubmit: () => void;
}

export default function NewGroupPopup({ onClose, onSubmit }: NewGroupPopupProps) {
  return (
    <Card className="absolute left-[56%] top-1/2 w-[450px] -translate-x-1/2 -translate-y-1/2 rounded bg-white">
      <CardHeader>
        <CardTitle className="font-bold">Create a Group</CardTitle>
        <CardDescription>Fill in the details below to create a new group.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name of your project"
                className="border-none bg-indigo-100"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                placeholder="A short sentence of your goals, values, etc."
                className="border-none bg-indigo-100"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="rounded" onClick={() => onClose()}>
          Cancel
        </Button>
        <Button
          className="rounded bg-indigo-500 text-white hover:bg-indigo-500"
          onClick={() => onSubmit()}
        >
          Create
        </Button>
      </CardFooter>
    </Card>
  );
}

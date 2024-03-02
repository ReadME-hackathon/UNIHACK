import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProfileAboutProps {
  color: string;
}

export default function ProfileAbout({ color }: ProfileAboutProps) {
  return (
    <div>
      <h1 className="mb-5 text-4xl font-bold">About You</h1>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 bg-slate-100 rounded">
          <TabsTrigger value="account" className="rounded">Account</TabsTrigger>
          <TabsTrigger value="availability" className="rounded">Availability</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="rounded">
          <Card>
            <CardHeader>
              <CardDescription className="text-slate-500">
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="" className="rounded border-slate-300" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="subjects">Subjects</Label>
                <Input id="subjects" defaultValue="" className="rounded border-slate-300" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className={`${color} hover:${color} rounded text-white`}>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="availability">
          <Card>
            <CardHeader>
              <CardDescription className="text-slate-500">
                Change your availability here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current availability</Label>
                <Input id="current" type="availability" className="rounded border-slate-300" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New availability</Label>
                <Input id="new" type="availability" className="rounded border-slate-300" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className={`${color} hover:${color} rounded text-white`}>Save availability</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

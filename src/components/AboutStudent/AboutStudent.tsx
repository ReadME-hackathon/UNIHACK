import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "../ui/select";
import { useState } from "react";

interface ProfileAboutProps {
  color: string;
}

export default function ProfileAbout({ color }: ProfileAboutProps) {
  const [grade, setGrade] = useState("H1"); // Edit this to take props from user info
  // Also need to add user's name automatically as default value

  return (
    <div>
      <h1 className="mb-5 text-4xl font-bold">About You</h1>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 rounded bg-slate-100">
          <TabsTrigger value="account" className="rounded">
            Account
          </TabsTrigger>
          <TabsTrigger value="availability" className="rounded">
            Availability
          </TabsTrigger>
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
                <Label>Goal</Label>
                <Select
                  onValueChange={(value) => {
                    setGrade(value);
                  }}
                  defaultValue={grade}
                >
                  <SelectTrigger className="rounded border-slate-300">
                    <SelectValue className="text-sm" placeholder="Select a goal." />
                  </SelectTrigger>
                  <SelectContent className="z-10 bg-white">
                    <SelectItem className="hover:cursor-pointer" value="H1">
                      H1
                    </SelectItem>
                    <SelectItem className="hover:cursor-pointer" value="H2">
                      H2
                    </SelectItem>
                    <SelectItem className="hover:cursor-pointer" value="H3">
                      H3
                    </SelectItem>
                    <SelectItem className="hover:cursor-pointer" value="Pass">
                      Pass
                    </SelectItem>
                  </SelectContent>
                </Select>
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

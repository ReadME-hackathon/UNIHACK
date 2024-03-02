import AboutStudent from "@/components/AboutStudent/AboutStudent";
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StudentProfile = () => {
  const TraitsCard = () => {
    return (
      <div>
        <h1 className="mb-5 text-4xl font-bold">Optional Details</h1>
        <Tabs defaultValue="strengths" className="w-[400px]">
          <TabsList className="grid w-1/2 grid-cols-2 rounded bg-slate-100">
            <TabsTrigger value="strengths" className="rounded">
              Strengths
            </TabsTrigger>
            <TabsTrigger value="weaknesses" className="rounded">
              Weaknesses
            </TabsTrigger>
          </TabsList>
          <TabsContent value="strengths" className="mt-5 rounded">
            <CardDescription className="mb-2 text-slate-500">
              List your personal strengths to let others know more about your
              workstyle.
            </CardDescription>
            <div className="flex gap-5">
              <Input id="name" defaultValue="" className="rounded border-slate-300" />
              <Button className="rounded bg-indigo-600 text-white">Save</Button>
            </div>
          </TabsContent>
          <TabsContent value="weaknesses" className="mt-5 rounded">
            <CardDescription className="mb-2 text-slate-500">
              List your personal weaknesses to let others know more about your
              workstyle.
            </CardDescription>
            <div className="flex gap-5">
              <Input id="name" defaultValue="" className="rounded border-slate-300" />
              <Button className="rounded bg-indigo-600 text-white">Save</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  };
  return (
    <div className="w-full flex h-[90vh] justify-start ml-48">
      <div className="mt-10 flex h-4/5 w-6/12 flex-col justify-center gap-10">
        <div className="flex flex-col gap-10">
          <h1 className="text-6xl font-bold">Profile</h1>
          <div className="h-24 w-24 rounded-full bg-gray-300"></div>
        </div>
        <div className="flex gap-16">
            <AboutStudent color={"bg-indigo-600"} />
          <TraitsCard />
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;

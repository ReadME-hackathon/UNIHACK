import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

interface SwitchFeatures {
    id: string,
    name: string,
}

interface SwitchComponentProps {
    switches: SwitchFeatures[];
}

function CreateSpace() {
    /*
    const defaultFeatures = {
        "Music":{
            "genres":"",
            "instruments":"",
            "availability":"",
        },
        "Gaming":{
            "games":"",
            "console":"",
            "availability":"",
        },
        "Educational":{
            "hobbies":"",
            "workPreference":"",
            "availability":"",
        },
        "Fitness":{
            "sports":"", 
            "hobbies":"",
            "availability":"",
        }
    }*/
    // If "Purpose" was selected, get default values from defaultFeatures

    const SwitchComponent = ({ switches }: SwitchComponentProps) => {
        return (
            <ScrollArea className="flex-col h-1/3 w-10/12 ounded-md border p-4 overflow-y-auto">
                {switches.map((curSwitch: SwitchFeatures) => (
                    <div className="flex items-center mt-4">
                        <Switch id={curSwitch.id} className="bg-black mr-5"/>
                        <Label htmlFor={curSwitch.id}>{curSwitch.name}</Label>
                    </div>
                ))}
                <Button className="bg-orange-100 hover:bg-orange-100 mt-6 w-5/6">Create new criteria</Button>
            </ScrollArea>
        );
    }

  return (
    <div className="w-full flex h-screen items-start justify-center">
        <div className="flex h-5/6 w-1/2 flex-col justify-center gap-10">
          <h2 className="text-6xl font-bold leading-snug">Allow matching<br/>by features</h2>
          <SwitchComponent switches={[{id:"test",name:"test"},{id:"test",name:"test"},{id:"test",name:"test"}]}/>
          <div className="flex gap-5">
            <Button className="rounded bg-zinc-300 hover:bg-zinc-300 text-white">Back</Button>
            <Button className="rounded bg-orange-500 hover:bg-orange-500 text-white">Continue</Button>
          </div>
        </div>
      </div>
  );
}

export default CreateSpace;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

function CreateSpace() {
  const FormComponent = () => {

    const formSchema = z.object({
      roomName: z.string().min(2, {
        message: "Please enter a valid name.",
      }),
      teamSize: z.string().min(2, {
        message: "Please enter a valid goal",
      }),
      purpose: z.string().min(0, {
        message: "Please enter a valid goal",
      }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        roomName: "",
        teamSize: "",
        purpose: "",
      },
    });

    // Submit handler
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <FormField
            control={form.control}
            name="roomName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GroupSpace name</FormLabel>
                <FormControl>
                  <Input className="w-1/2 border-none bg-orange-100" placeholder="" {...field} />
                </FormControl>
                <FormMessage className="absolute" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="teamSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Size</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-1/2 border-none bg-orange-100">
                      <SelectValue className="text-sm" placeholder="Select a goal." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="z-10 bg-white">
                    <SelectItem className="hover:cursor-pointer" value="H1">2</SelectItem>
                    <SelectItem className="hover:cursor-pointer" value="H2">3</SelectItem>
                    <SelectItem className="hover:cursor-pointer" value="H3">4</SelectItem>
                    <SelectItem className="hover:cursor-pointer" value="Pass">Pass</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="absolute"/>
              </FormItem>
            )}
          />
        <FormField
            control={form.control}
            name="purpose"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Purpose (Optional)</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-1/2 border-none bg-orange-100">
                      <SelectValue className="text-sm" placeholder="Select a goal." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="z-10 bg-white">
                    <SelectItem className="hover:cursor-pointer" value="Educational">Educational</SelectItem>
                    <SelectItem className="hover:cursor-pointer" value="Fitness">Fitness</SelectItem>
                    <SelectItem className="hover:cursor-pointer" value="Gaming">Gaming</SelectItem>
                    <SelectItem className="hover:cursor-pointer" value="Music">Music</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="absolute"/>
              </FormItem>
            )}
          />
          <Button
            className="w-fit rounded bg-orange-500 text-white hover:bg-orange-500"
            type="submit"
          >
            Continue
          </Button>
        </form>    
      </Form>
    );
  };

  return (
    <div className="flex w-full h-screen items-start justify-center">
      <div className="flex h-5/6 w-1/2 flex-col justify-center gap-10">
        <h2 className="text-6xl font-bold leading-snug">Create a GroupSpace <br/> to help others find  <br/> teammates</h2>
        <FormComponent />
      </div>
    </div>
  );
}

export default CreateSpace;

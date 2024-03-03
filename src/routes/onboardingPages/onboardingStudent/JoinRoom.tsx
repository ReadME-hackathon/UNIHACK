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
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import highfive2 from "@/assets/images/highfive2.png";

function JoinRoom() {
  const FormComponent = () => {
    const formSchema = z.object({
      roomCode: z.string().min(4, {
        message: "Invalid room code number",
      }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        roomCode: "",
      },
    });

    const navigate = useNavigate();

    // SUBMIT HANDLER
    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
      // Handle room number authentication before navigating
      navigate("edit_profile", { state: { roomCode: values.roomCode } });
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FormField
            control={form.control}
            name="roomCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Room code</FormLabel>
                <FormControl>
                  <Input className="w-5/6 border-none bg-indigo-100" placeholder="" {...field} />
                </FormControl>
                <FormMessage className="absolute" />
              </FormItem>
            )}
          />
          <Button
            className="mt-16 rounded bg-indigo-500 text-white hover:bg-indigo-500"
            type="submit"
          >
            Continue
          </Button>
        </form>
      </Form>
    );
  };

  return (
    <div className="ml-24 flex h-screen w-full items-start justify-start">
      <div className="flex h-5/6 w-1/3 flex-col justify-center gap-10">
        <img className="h-64 w-64" src={highfive2}></img>
        <h2 className="text-6xl font-bold leading-snug">
          Join a team
          <br />
          finding a space
        </h2>
        <FormComponent />
      </div>
    </div>
  );
}

export default JoinRoom;

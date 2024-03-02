import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useNavigate } from 'react-router-dom';

function JoinRoom() {

  const FormComponent = () =>{

    const formSchema = z.object({
      roomCode: z.string().min(4, {
        message: "Invalid room code number",
      }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        roomCode: "",
      },
    })
    const navigate = useNavigate();
    // SUBMIT HANDLER
    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
      navigate("/profileSetup")
      // Handle room number authentication

    }

    return(
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <FormField
          control={form.control}
          name="roomCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Room code</FormLabel>
              <FormControl>
                <Input className="bg-gray-200 border-none w-5/6" placeholder="" {...field} />
              </FormControl>
              <FormMessage className="absolute" />
            </FormItem>
          )}
        />
        <Button className="mt-16 rounded text-white bg-indigo-500 hover:bg-indigo-500" type="submit">Continue</Button>
      </form>
    </Form>
    )
  }

  return (
    <div className="max-w-screen-lg h-screen flex justify-between items-center m-auto">
      <div className="h-4/6 w-2/5 bg-gray-200"></div>
      <div className="h-4/6 w-3/6 font-bold text-6xl flex flex-col justify-center leading-snug">
          <h2>Join a team<br/>finding a space</h2>
          <FormComponent />
      </div>
    </div>
  );
}

export default JoinRoom;
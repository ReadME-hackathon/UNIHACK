import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
function CreateSpace() {
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
    }
    // If "Purpose" was selected, get default values from defaultFeatures

    const TableComponent = () => { 
        return (
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
        )
    }
  return (
    <div className="mx-auto flex h-screen items-center justify-center">
        <div className="flex h-4/6 w-1/2 flex-col justify-center gap-10">
          <h2 className="text-6xl font-bold leading-snug">Allow matching<br/>by features</h2>
          <TableComponent />
        </div>
      </div>
  );
}

export default CreateSpace;

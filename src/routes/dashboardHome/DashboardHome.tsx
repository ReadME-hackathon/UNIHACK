import { useEffect, useState } from "react";
import { getUserSpaces } from "@/services/spacesServices";
import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DashboardHome = () => {
  const [ownedSpaces, setOwnedSpaces] = useState<any>();
  const [memberSpaces, setMemberSpaces] = useState<any>();

  useEffect(() => {
    try {
      getUserSpaces().then((result) => {
        setOwnedSpaces((result as { ownedSpaces: any }).ownedSpaces);
        setMemberSpaces((result as { memberSpaces: any }).memberSpaces);
      });
    } catch (error) {
      console.error("Error fetching user spaces:", error);
    }
  }, []);

  return (
    <div className="flex max-w-screen-lg flex-col gap-8 px-16 pt-16">
      <h1 className="text-6xl font-bold">My GroupSpaces</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Spaces I own</AccordionTrigger>
          <AccordionContent>
            <div className="3xl:grid-cols-4 grid grid-flow-row grid-cols-2 gap-4 2xl:grid-cols-3 ">
              {ownedSpaces
                ? ownedSpaces.map((item: any, key: any) => {
                    return (
                      <SpaceCard
                        id={item.space_id}
                        title={item.name}
                        members="32 Members"
                        key={key}
                      />
                    );
                  })
                : ""}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Spaces I am part of</AccordionTrigger>
          <AccordionContent>
            <div className="3xl:grid-cols-4 grid grid-flow-row grid-cols-2 gap-4 2xl:grid-cols-3 ">
              {memberSpaces
                ? memberSpaces.map((item: any, key: any) => {
                    return (
                      <SpaceCard
                        id={item.space_id}
                        title={item.name}
                        members="32 Members"
                        key={key}
                      />
                    );
                  })
                : ""}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

interface SpaceCardProps {
  title: string;
  id: string;
  members: string;
}

const SpaceCard = ({ id, title, members }: SpaceCardProps) => {
  return (
    <Link to={`${id}`}>
      <div className="flex h-56 w-full flex-col rounded-[6px] bg-orange-100 p-8">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{members}</p>
      </div>
    </Link>
  );
};

export default DashboardHome;

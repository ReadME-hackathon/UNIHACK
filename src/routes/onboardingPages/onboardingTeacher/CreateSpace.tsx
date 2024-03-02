import { createNewSpace } from "@/services/spacesServices";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateSpace() {
  return (
    <div className="ml-24 flex h-screen w-full items-start justify-start">
      <div className="flex h-5/6 w-3/4 flex-col justify-center gap-10 xl:w-1/2">
        <h2 className="text-6xl font-bold leading-snug">
          Create a GroupSpace to help others find teammates
        </h2>
        <RoomForm />
      </div>
    </div>
  );
}

const RoomForm = () => {
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState("");
  const [minTeamSize, setMinTeamSize] = useState<number>(1);
  const [maxTeamSize, setMaxTeamSize] = useState<number>(1);

  const defaultFeatures = [
    {
      name: "academic year",
      type: "SELECT",
      options: ["First Year", "Second Year", "Third Year", "Fourth Year"],
      optional: false,
    },
    {
      name: "target score",
      type: "SELECT",
      options: ["H1", "H2", "H3", "H4"],
      optional: false,
    },
    {
      name: "schedule",
      type: "AVAILABILITY",
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();

    createNewSpace({
      roomName: roomName,
      minSize: minTeamSize,
      maxSize: maxTeamSize,
      features: defaultFeatures,
    }).then((result) => {
      const link = (result.data as { space_id: string }).space_id;
      if (result) {
        navigate(`/app/${link}`);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-md">
      <div className="mb-4">
        <label htmlFor="roomName" className="block text-gray-700">
          Room Name:
        </label>
        <input
          type="text"
          id="roomName"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          required
          className="w-full rounded bg-orange-100 px-4 py-2 focus:border focus:border-orange-500 focus:outline-none"
        />
      </div>
      <div className="flex flex-row gap-4">
        <div className="mb-4 w-1/2">
          <label htmlFor="minTeamSize" className="block text-gray-700">
            Min Team Size:
          </label>
          <input
            type="number"
            id="minTeamSize"
            value={minTeamSize}
            onChange={(e) => setMinTeamSize(parseInt(e.target.value))}
            required
            className="w-full rounded bg-orange-100 px-4 py-2 focus:border focus:border-orange-500 focus:outline-none"
          />
        </div>
        <div className="mb-4 w-1/2">
          <label htmlFor="maxTeamSize" className="block text-gray-700">
            Max Team Size:
          </label>
          <input
            type="number"
            id="maxTeamSize"
            value={maxTeamSize}
            onChange={(e) => setMaxTeamSize(parseInt(e.target.value))}
            required
            className="w-full rounded bg-orange-100 px-4 py-2 focus:border focus:border-orange-500 focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded bg-orange-500 px-4 py-2 text-white transition duration-200 hover:bg-orange-600"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateSpace;

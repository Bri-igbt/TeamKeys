"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import MatchesTable from "./MatchesTable";

const Layouts = () => {
  const [layout, setLayout] = React.useState<"grid" | "split">("grid");
  const [selectedRound, setSelectedRound] = React.useState("Round 1");
  const [open, setOpen] = React.useState<string | undefined>(undefined);

  const rounds = ["Round 1", "Round 2", "Round 3", "Round 4"];

  const handleSelectRound = (round: string) => {
    setSelectedRound(round);
    setOpen(undefined);
  };

  return (
    <div className="border-b">
      <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
        <Accordion
          type="single"
          collapsible
          value={open}
          onValueChange={(val) => setOpen(val === open ? undefined : val)}
          className="relative w-fit overflow-visible"
        >
          <AccordionItem value="round" className="relative w-fit border-none">
            <AccordionTrigger
              onClick={() => setOpen(open === "round" ? undefined : "round")}
              className="px-2 flex w-full gap-24 py-1 text-[16px] rounded-md hover:text-blue-600"
            >
              {selectedRound}
            </AccordionTrigger>

            <AccordionContent
              forceMount
              className={`
                absolute left-0 mt-1 w-36 bg-white border rounded-md shadow-lg z-50 p-1
                ${open === "round" ? "block" : "hidden"}
              `}
            >
              <div className="flex flex-col text-sm">
                {rounds.map((round) => (
                  <button
                    key={round}
                    type="button"
                    onClick={() => handleSelectRound(round)}
                    className={`px-3 py-2 text-left rounded hover:bg-gray-100 ${
                      selectedRound === round ? "bg-blue-100 font-medium" : ""
                    }`}
                  >
                    {round}
                  </button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Layout switcher */}
        <div className="flex gap-3">
          <Image
            src="/assets/gridview.svg"
            alt="grid view"
            width={35}
            height={35}
            onClick={() => setLayout("grid")}
            className={`cursor-pointer p-1 rounded-lg ${
              layout === "grid" ? "bg-blue-100 border border-blue-500" : ""
            }`}
          />
          <Image
            src="/assets/splitview.svg"
            alt="split view"
            width={35}
            height={35}
            onClick={() => setLayout("split")}
            className={`cursor-pointer p-1 rounded-lg ${
              layout === "split" ? "bg-blue-100 border border-blue-500" : ""
            }`}
          />
        </div>
      </div>
      <MatchesTable layout={layout} />
    </div>
  );
};

export default Layouts;

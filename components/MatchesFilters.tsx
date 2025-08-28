import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const MatchesFilters = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <section>
        <div className="p-6 bg-white rounded-lg shadow-l">
                <h1 className="text-lg font-semibold mb-4">Matches</h1>
        
                <div className="flex justify-between items-start">
                  <Accordion type="multiple" className="flex gap-10">
                    {/* League */}
                    <AccordionItem
                      value="league"
                      className="relative rounded-lg w-full border-none"
                    >
                      <AccordionTrigger className="px-2 flex gap-7 py-1 rounded-md hover:text-blue-600">
                        League
                      </AccordionTrigger>
                      {/* ✅ Absolute dropdown so it doesn’t break alignment */}
                      <AccordionContent className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg p-3 z-50">
                        League options here...
                      </AccordionContent>
                    </AccordionItem>
        
                    {/* Season */}
                    <AccordionItem
                      value="season"
                      className="relative rounded-lg w-full border-none"
                    >
                      <AccordionTrigger className="px-2 gap-7 py-1 rounded-md hover:text-blue-600">
                        Season
                      </AccordionTrigger>
                      <AccordionContent className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg p-3 z-50">
                        Season options here...
                      </AccordionContent>
                    </AccordionItem>
        
                    {/* Phase */}
                    <AccordionItem
                      value="phase"
                      className="relative rounded-lg w-full border-none"
                    >
                      <AccordionTrigger className="px-2 gap-7 py-1 rounded-md hover:text-blue-600">
                        Phase
                      </AccordionTrigger>
                      <AccordionContent className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg p-3 z-50">
                        Phase options here...
                      </AccordionContent>
                    </AccordionItem>
        
                    {/* ✅ Datepicker with icon */}
                    <div className="flex items-center gap-3">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="MM/DD/YYYY"
                        className="w-56 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 
                                    shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        calendarClassName="rounded-lg border border-gray-200 shadow-lg p-2 bg-white"
                        dayClassName={() =>
                          "w-10 h-10 flex items-center justify-center rounded-md hover:bg-indigo-100 transition-colors"
                        }
                      />
                      <Image
                        src="/assets/datepicker.svg"
                        alt="date"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                      />
                    </div>
        
                    {/* Team */}
                    <AccordionItem
                      value="team"
                      className="relative rounded-lg w-full border-none"
                    >
                      <AccordionTrigger className="px-2 gap-7 py-1 rounded-md hover:text-blue-600">
                        Team
                      </AccordionTrigger>
                      <AccordionContent className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg p-3 z-50">
                        Team options here...
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
        
                  {/* Reset Filters */}
                  <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-4.586L3.293 6.707A1 1 0 013 6V4z"
                      />
                    </svg>
                    <span className="font-medium">Reset Filters</span>
                  </div>
                </div>
              </div>
    </section>
  )
}

export default MatchesFilters
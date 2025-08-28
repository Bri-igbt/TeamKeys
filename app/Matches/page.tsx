"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import MatchesFilters from "@/components/MatchesFilters";
import Layouts from "@/components/Layouts";
import MatchesTable from "@/components/MatchesTable";

const Matches = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div>
      <Navbar />
      <MatchesFilters />
      <div className="bg-gray-50 h-10 w-full border shadow-sm"></div>
      <Layouts />
      <MatchesTable />


    </div>
  );
};

export default Matches;

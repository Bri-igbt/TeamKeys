import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { TeamsStatsProps } from "@/types";
import { Teams } from "@/constants";

const MatchesTable = () => {
  const [teams, setTeams] = useState<TeamsStatsProps[]>(Teams);

  // 🔹 Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(teams.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = teams.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="p-4">
      <Table>
        <TableCaption>NBA Team Statistics</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Pos</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>P</TableHead>
            <TableHead>W</TableHead>
            <TableHead>L</TableHead>
            <TableHead>Scored</TableHead>
            <TableHead>Conceded</TableHead>
            <TableHead>Diff</TableHead>
            <TableHead>%</TableHead>
            <TableHead>Home W</TableHead>
            <TableHead>Home L</TableHead>
            <TableHead>Home %</TableHead>
            <TableHead>Away W</TableHead>
            <TableHead>Away L</TableHead>
            <TableHead>Away %</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentRows.map((team, index) => (
            <TableRow key={team.id} className="border-b border-gray-300">
              {/* Position */}
              <TableCell>{team.id}</TableCell>

              {/* Team Column */}
              <TableCell className="font-medium">
                <div className="flex gap-2 items-center">
                  <Image
                    src={team.Img ?? "/fallback.png"}
                    alt={team.title}
                    width={25}
                    height={25}
                  />
                  <span>{team.title}</span>
                </div>
              </TableCell>

              {/* Matches */}
              <TableCell>{team.matches.played}</TableCell>
              <TableCell>{team.matches.win}</TableCell>
              <TableCell>{team.matches.lose}</TableCell>

              {/* Total */}
              <TableCell>{team.total.medium.scored}</TableCell>
              <TableCell>{team.total.medium.conceded}</TableCell>
              <TableCell>{team.total.medium.diff}</TableCell>
              <TableCell>{team.total.medium.pct}%</TableCell>

              {/* Home */}
              <TableCell>{team.internal.record.win}</TableCell>
              <TableCell>{team.internal.record.lose}</TableCell>
              <TableCell>{team.internal.medium.pct}%</TableCell>

              {/* Away */}
              <TableCell>{team.external.record.win}</TableCell>
              <TableCell>{team.external.record.lose}</TableCell>
              <TableCell>{team.external.medium.pct}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* 🔹 Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MatchesTable;

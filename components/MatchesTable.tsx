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

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
    <div className="flex flex-col m-0">
      <div className="flex h-10 py-4 mb-5 justify-end gap-x-72 mr-56 font-medium text-sm">
        <h1>Total</h1>
        <h1>Internal</h1>
        <h1>External</h1>
      </div>

      <div className="flex justify-end gap-20 mr-8 font-medium text-sm">
        <h1>Matches</h1>
        <h1>Points</h1>
        <h1>Medium</h1>
        <h1>Matches</h1>
        <h1>Points</h1>
        <h1>Medium</h1>
        <h1>Matches</h1>
        <h1>Points</h1>
        <h1>Medium</h1>
      </div>
      <Table>
        <TableCaption>NBA Team Statistics</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">Pos</TableHead>
            <TableHead className="w-4/5">Team</TableHead>
            <TableHead className="w-16">Pts</TableHead>
            <TableHead className="w-12">P</TableHead>
            <TableHead className="w-12">W</TableHead>
            <TableHead className="w-12">L</TableHead>
            <TableHead className="w-12">S</TableHead>
            <TableHead className="w-12">C</TableHead>
            <TableHead className="w-12">D</TableHead>
            <TableHead className="w-12">S</TableHead>
            <TableHead className="w-12">C</TableHead>
            <TableHead className="w-12">P</TableHead>
            <TableHead className="w-12">W</TableHead>
            <TableHead className="w-12">L</TableHead>
            <TableHead className="w-12">S</TableHead>
            <TableHead className="w-12">C</TableHead>
            <TableHead className="w-12">D</TableHead>
            <TableHead className="w-12">S</TableHead>
            <TableHead className="w-12">C</TableHead>
            <TableHead className="w-12">P</TableHead>
            <TableHead className="w-12">W</TableHead>
            <TableHead className="w-12">L</TableHead>
            <TableHead className="w-12">S</TableHead>
            <TableHead className="w-12">C</TableHead>
            <TableHead className="w-12">D</TableHead>
            <TableHead className="w-12">S</TableHead>
            <TableHead className="w-12">C</TableHead>
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
                    width={20}
                    height={20}
                  />
                  <span className="text-xs">{team.title}</span>
                </div>
              </TableCell>

              {/* Matches */}
              <TableCell>{team.pts}</TableCell>
              <TableCell>{team.matches.played}</TableCell>
              <TableCell>{team.matches.win}</TableCell>
              <TableCell>{team.matches.lose}</TableCell>

              {/* Total */}
              <TableCell>{team.total.medium.scored}</TableCell>
              <TableCell>{team.total.medium.conceded}</TableCell>
              <TableCell>{team.total.medium.diff}</TableCell>
              <TableCell>{team.total.medium.pct}</TableCell>

              {/* Home */}
              <TableCell>{team.internal.record.win}</TableCell>
              <TableCell>{team.internal.record.lose}</TableCell>
              <TableCell>{team.internal.medium.pct}</TableCell>

              {/* Away */}
              <TableCell>{team.external.record.win}</TableCell>
              <TableCell>{team.external.record.lose}</TableCell>
              <TableCell>{team.external.medium.pct}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* 🔹 Pagination Controls */}
      <Pagination className="mb-10 pb-20">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((prev) => Math.max(prev - 1, 1));
              }}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={currentPage === i + 1}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(i + 1);
                }}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {totalPages > 5 && <PaginationEllipsis />}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default MatchesTable;

"use client";
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

type MatchesTableProps = {
  layout: "grid" | "split";
};

const MatchesTable = ({ layout }: MatchesTableProps) => {
  const [teams] = useState<TeamsStatsProps[]>(
    [...Teams].sort((a, b) => b.pts - a.pts)
  );

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(teams.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = teams.slice(indexOfFirstRow, indexOfLastRow);

  if (layout === "grid") {
    return (
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4">
          {currentRows.map((team, index) => (
            <div
              key={team.id}
              className="p-4 bg-white shadow rounded-lg flex flex-col items-center"
            >
              <Image
                src={team.Img ?? "/fallback.png"}
                alt={team.title}
                width={40}
                height={40}
              />
              <h2 className="text-sm font-medium mt-2">{team.title}</h2>
              <p className="text-xs text-gray-500">
                Pos {indexOfFirstRow + index + 1}
              </p>
              <p className="text-base font-semibold mt-2">{team.pts} pts</p>
              <div className="flex gap-4 mt-2 text-xs text-gray-600">
                <span>W: {team.matches.win}</span>
                <span>L: {team.matches.lose}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination for grid view */}
        <Pagination className="mt-6">
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
  }

  // 🔹 Split Layout (table view)
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
            {" "}
            <TableHead>Pos</TableHead>{" "}
            <TableHead className="w-96">Team</TableHead>{" "}
            <TableHead>Pts</TableHead> <TableHead>P</TableHead>{" "}
            <TableHead>W</TableHead> <TableHead>L</TableHead>{" "}
            <TableHead>S</TableHead> <TableHead>C</TableHead>{" "}
            <TableHead>D</TableHead> <TableHead>S</TableHead>{" "}
            <TableHead>C</TableHead> <TableHead>P</TableHead>{" "}
            <TableHead>W</TableHead> <TableHead>L</TableHead>{" "}
            <TableHead>S</TableHead> <TableHead>C</TableHead>{" "}
            <TableHead>D</TableHead> <TableHead>S</TableHead>{" "}
            <TableHead>C</TableHead> <TableHead>P</TableHead>{" "}
            <TableHead>W</TableHead> <TableHead>L</TableHead>{" "}
            <TableHead>S</TableHead> <TableHead>C</TableHead>{" "}
            <TableHead>D</TableHead>{" "}
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentRows.map((team, index) => (
            <TableRow key={team.id} className="border-b border-gray-300">
              <TableCell>{indexOfFirstRow + index + 1}</TableCell>
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
              <TableCell>{team.pts}</TableCell>
              <TableCell>{team.matches.played}</TableCell>
              <TableCell>{team.matches.win}</TableCell>
              <TableCell>{team.matches.lose}</TableCell>
              <TableCell>{team.total.medium.scored}</TableCell>
              <TableCell>{team.total.medium.scored}</TableCell>
              <TableCell>{team.total.medium.conceded}</TableCell>
              <TableCell>{team.total.medium.conceded}</TableCell>
              <TableCell>{team.total.medium.diff}</TableCell>
              <TableCell>{team.total.medium.diff}</TableCell>
              <TableCell>{team.total.medium.pct}</TableCell>
              <TableCell>{team.total.medium.pct}</TableCell>
              <TableCell>{team.internal.record.win}</TableCell>
              <TableCell>{team.internal.record.win}</TableCell>
              <TableCell>{team.internal.record.lose}</TableCell>
              <TableCell>{team.internal.record.lose}</TableCell>
              <TableCell>{team.internal.medium.pct}</TableCell>
              <TableCell>{team.internal.medium.pct}</TableCell>
              <TableCell>{team.external.record.win}</TableCell>
              <TableCell>{team.external.record.win}</TableCell>
              <TableCell>{team.external.record.lose}</TableCell>
              <TableCell>{team.external.record.lose}</TableCell>
              <TableCell>{team.external.medium.pct}</TableCell>
              {/* ... keep your row cells */}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination for table view */}
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

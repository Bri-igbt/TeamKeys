"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Progress } from "@/components/ui/progress";
import { Teams } from "@/constants";
import Image from "next/image";
import DropDownMenu from "./DropDownMenu";
import type { TeamsStatsProps } from "@/types";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Leagues from "./Leagues";

const DataTable = () => {
  const [teams, setTeams] = useState<TeamsStatsProps[]>(Teams);

  // 🔹 Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(teams.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = teams.slice(indexOfFirstRow, indexOfLastRow);

  const handleDelete = (id: string | number) => {
    setTeams((prev) => prev.filter((team) => team.id !== id));
  };

  const handleSave = (index: number, updatedTeam: TeamsStatsProps) => {
    setTeams((prev) =>
      prev.map((t, i) => (i === index ? { ...t, ...updatedTeam } : t))
    );
  };

  return (
    <div className="space-y-6">
      {/* Filter the teams by division */}
      <div className="m-5 bg-white/70 w-full">
        <h1 className="text-2xl font-extrabold p-5">Teams</h1>

        <div className="flex gap-10 px-8">
          <div className="flex gap-6">
            <Image
              src="/assets/splitview.svg"
              alt="split_view"
              width={25}
              height={25}
            />

            <Image
              src="/assets/gridview.svg"
              alt="grid_view"
              width={25}
              height={25}
            />
          </div>

          <div>
            <Leagues
              onSelectTeams={(selectedTeams) => {
                setTeams(selectedTeams);
                setCurrentPage(1); // reset pagination
              }}
            />
          </div>
        </div>
      </div>
      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100 ">
            <TableHead className="w-[400px] h-20">Teams</TableHead>
            <TableHead className="w-[100px]">Win%</TableHead>
            <TableHead className="w-[250px]">Offense Rating</TableHead>
            <TableHead className="w-[250px]">Defense Rating</TableHead>
            <TableHead className="w-[100px]">3PT%</TableHead>
            <TableHead className="w-[100px]">AST</TableHead>
            <TableHead className="w-[100px]">REB</TableHead>
            <TableHead className="w-[100px]">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentRows.map((team, index) => (
            <TableRow key={team.id} className="border-b border-gray-300">
              {/* Team Column */}
              <TableCell className="font-medium">
                <div className="flex gap-4 items-center p-2">
                  <Image
                    src={team.icon ?? "/fallback.png"}
                    alt="star"
                    width={20}
                    height={20}
                  />
                  <Image
                    src={team.Img ?? "/fallback.png"}
                    alt="team"
                    width={40}
                    height={40}
                  />

                  <div>
                    <h1 className="text-sm font-semibold">{team.title}</h1>
                    <div className="flex gap-2 text-xs text-gray-500">
                      <p>{team.conference}</p>
                      <p>• {team.division}</p>
                    </div>
                  </div>
                </div>
              </TableCell>

              {/* Win % */}
              <TableCell>
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      team.win >= 80
                        ? "bg-green-500"
                        : team.win >= 70
                        ? "bg-green-300"
                        : "bg-yellow-500"
                    }`}
                  />
                  <span>{team.win}</span>
                </div>
              </TableCell>

              {/* Offense */}
              <TableCell>
                <div className="flex gap-2">
                  <Progress value={team.offense} />
                  {team.offense}
                </div>
              </TableCell>

              {/* Defense */}
              <TableCell>
                <div className="flex gap-2">
                  <Progress value={team.defence} />
                  <span>{team.defence}</span>
                </div>
              </TableCell>

              {/* 3PT */}
              <TableCell>
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      team.pt >= 80
                        ? "bg-green-500"
                        : team.pt >= 70
                        ? "bg-green-300"
                        : "bg-yellow-500"
                    }`}
                  />
                  <span>{team.pt}</span>
                </div>
              </TableCell>

              {/* AST */}
              <TableCell>
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      team.ast >= 80
                        ? "bg-green-500"
                        : team.ast >= 70
                        ? "bg-green-300"
                        : "bg-yellow-500"
                    }`}
                  />
                  {team.ast}
                </div>
              </TableCell>

              {/* REB */}
              <TableCell>
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      team.reb >= 80
                        ? "bg-green-500"
                        : team.reb >= 70
                        ? "bg-green-300"
                        : "bg-yellow-500"
                    }`}
                  />
                  {team.reb}
                </div>
              </TableCell>

              {/* ACTION */}
              <TableCell>
                <DropDownMenu
                  team={team}
                  index={index}
                  onSave={handleSave}
                  onDelete={handleDelete}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* 🔹 Pagination */}
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

export default DataTable;

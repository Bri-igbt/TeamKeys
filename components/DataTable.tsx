import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Teams } from "@/constants";
import Image from "next/image";

const DataTable = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Teams</TableHead>
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
          {Teams.map((team, index) => (
            <TableRow key={index} className="border-b border-gray-300">
              {/* Team Column */}
              <TableCell className="font-medium">
                <div className="flex gap-4 items-center p-2">
                  <Image src={team.icon} alt="star" width={20} height={20} />
                  <Image
                    src={team.Img}
                    alt={team.title}
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

              {/* Win % Column */}
              <TableCell className="align-middle">
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
                  <span className="font-semibold">{team.win}</span>
                </div>
              </TableCell>

              {/* Offense Column */}
              <TableCell>
                <div className="flex gap-2">
                  <Progress value={team.offense} />
                  {team.offense}
                </div>
              </TableCell>

              {/* Defense Column */}
              <TableCell>
                <div className="flex gap-2">
                  <Progress value={team.offense} />
                  <span>{team.defence}</span>
                </div>
              </TableCell>

              <TableCell className="align-middle">
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
              <TableCell className="align-middle">
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
              <TableCell className="">
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;

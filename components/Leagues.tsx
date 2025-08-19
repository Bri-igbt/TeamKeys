"use client";

import React, { useMemo, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Teams } from "@/constants";

type Team = (typeof Teams)[number];
type Grouped = Record<string, Record<string, Team[]>>;

interface LeaguesProps {
  onSelectTeams: (teams: Team[]) => void;
}

export default function Leagues({ onSelectTeams }: LeaguesProps) {
  const [selectedConference, setSelectedConference] = useState<string | null>(
    null
  );
  const [selectedDivision, setSelectedDivision] = useState<string | null>(null);
  const [allLeague, setAllLeague] = useState<boolean>(false);

  // { [conference]: { [division]: Team[] } }
  const grouped = useMemo<Grouped>(() => {
    const acc: Grouped = {};
    for (const t of Teams) {
      (acc[t.conference] ??= {})[t.division] ??= [];
      acc[t.conference][t.division].push(t);
    }
    return acc;
  }, []);

  return (
    <div className="w-72">
      <Menu>
        <MenuButton className="px-4 py-2 bg-gray-300 text-black rounded-md">
          {allLeague
            ? "All League"
            : selectedDivision
            ? `Division: ${selectedDivision}`
            : selectedConference
            ? `Conference: ${selectedConference}`
            : "Leagues 🏀"}
        </MenuButton>

        <MenuItems
          anchor="bottom"
          className="mt-2 w-72 rounded-xl border bg-blue-200 shadow-lg p-2"
        >
          {/* All League */}
          {!selectedConference && !selectedDivision && !allLeague && (
            <MenuItem as="div">
              {({ focus, close }) => (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setAllLeague(true);
                    onSelectTeams(Teams);
                    close(); // ✅ closes the menu
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md ${
                    focus ? "bg-gray-400" : ""
                  }`}
                >
                  All Leagues
                </button>
              )}
            </MenuItem>
          )}

          {/* Conferences */}
          {!selectedConference &&
            !allLeague &&
            Object.keys(grouped).map((conf) => (
              <MenuItem key={conf} as="div">
                {({ focus }) => (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedConference(conf);
                      setSelectedDivision(null);
                     
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md ${
                      focus ? "bg-gray-400" : ""
                    }`}
                  >
                    {conf} Conference
                  </button>
                )}
              </MenuItem>
            ))}

          {/* Divisions */}
          {selectedConference &&
            !selectedDivision &&
            Object.keys(grouped[selectedConference]).map((div) => (
              <MenuItem key={div} as="div">
                {({ focus, close }) => (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedDivision(div);
                      onSelectTeams(grouped[selectedConference][div]);
                      close(); // ✅ close menu after selecting division
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md ${
                      focus ? "bg-gray-400" : ""
                    }`}
                  >
                    {div} Division
                  </button>
                )}
              </MenuItem>
            ))}

          {/* Back controls */}
          {(selectedConference || selectedDivision || allLeague) && (
            <div className="mt-2 border-t pt-2 flex gap-2 flex-wrap">
              {selectedDivision && (
                <button
                  onClick={() => setSelectedDivision(null)}
                  className="flex-1 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  ← Back to Divisions
                </button>
              )}
              {selectedConference && !selectedDivision && (
                <button
                  onClick={() => setSelectedConference(null)}
                  className="flex-1 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  ← Back to Conferences
                </button>
              )}
              {allLeague && (
                <button
                  onClick={() => setAllLeague(false)}
                  className="flex-1 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  ← Back to Menu
                </button>
              )}
            </div>
          )}
        </MenuItems>
      </Menu>
    </div>
  );
}


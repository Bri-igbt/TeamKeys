"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React, { useState } from "react";
import EditableForm from "./EditableForm";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";

interface DropDownMenuProps {
  team: any; // Replace 'any' with the actual type if available
  index: number;
  onSave: (index: number, updated: any) => void;
  onDelete: (id: string | number) => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  team,
  index,
  onSave,
  onDelete,
}) => {
  const [editing, setEditing] = useState(false);

  return (
    <div className="relative">
      {/* Action Menu */}
      <Menu as="div" className="flex flex-col text-left">
        <MenuButton>
          <Image
            src='/assets/dropdown.svg'
            alt= 'menu'
            width={25}
            height={25}
            className="rotate-90"
          />
        </MenuButton>

        <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right rounded-xl border border-gray-200 bg-white shadow-lg focus:outline-none z-10">
          <MenuItem>
            {({ active }) => (
              <button
                onClick={() => setEditing(true)} // 👈 Open modal
                className={`${
                  active ? "bg-gray-100" : ""
                } group flex w-full items-center px-3 py-2 text-sm`}
              >
                Edit
              </button>
            )}
          </MenuItem>

          <MenuItem>
            {({ active }) => (
              <button
                onClick={() => onDelete(team.id)}
                className={`${
                  active ? "bg-gray-100" : ""
                } group flex w-full items-center px-3 py-2 text-sm text-red-600`}
              >
                Delete
              </button>
            )}
          </MenuItem>
        </MenuItems>
      </Menu>

      {/* ✅ Edit Modal */}
      <Dialog open={editing} onOpenChange={setEditing}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Team</DialogTitle>
            <DialogDescription>  
              <EditableForm
                team={team}
                index={index}
                onSave={(idx, updated) => {
                  onSave(idx, updated);
                  setEditing(false); // Close modal after saving
                }}
              />
              <Button
                variant="outline"
                size="sm"
                className="mt-3 w-full"
                onClick={() => setEditing(false)}
              >
                Cancel
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DropDownMenu;


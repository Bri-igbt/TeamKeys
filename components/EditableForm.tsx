"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Team = {
  id: number;
  conference: string;
  division: string;
  title: string;
  win: number;
  offense: number;
  defence: number;
  pt: number;
  ast: number;
  reb: number;
  icon: string;
  Img: string;
};

type EditableFormProps = {
  team: Team;
  index: number;
  onSave: (index: number, form: Team) => void;
};

const EditableForm: React.FC<EditableFormProps> = ({ team, index, onSave }) => {
  const [form, setForm] = useState<Team>(team);

  const handleChange = (field: keyof Team, value: string | number) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    onSave(index, form);
  };

  return (
    <div className="flex flex-col gap-2 p-2 border rounded-md bg-gray-50">
      <Input
        value={form.title}
        onChange={(e) => handleChange("title", e.target.value)}
        placeholder="Team Name"
      />
      <Input
        type="number"
        value={form.win}
        onChange={(e) => handleChange("win", parseFloat(e.target.value))}
        placeholder="Win %"
      />
      <Input
        type="number"
        value={form.offense}
        onChange={(e) => handleChange("offense", parseFloat(e.target.value))}
        placeholder="Offense Rating"
      />
      <Input
        type="number"
        value={form.defence}
        onChange={(e) => handleChange("defence", parseFloat(e.target.value))}
        placeholder="Defense Rating"
      />
      <Input
        type="number"
        value={form.pt}
        onChange={(e) => handleChange("pt", parseFloat(e.target.value))}
        placeholder="3PT%"
      />
      <Input
        type="number"
        value={form.ast}
        onChange={(e) => handleChange("ast", parseFloat(e.target.value))}
        placeholder="AST"
      />
      <Input
        type="number"
        value={form.reb}
        onChange={(e) => handleChange("reb", parseFloat(e.target.value))}
        placeholder="REB"
      />

      <Button size="sm" className="mt-2" onClick={handleSubmit}>
        Save Changes
      </Button>
    </div>
  );
};

export default EditableForm;

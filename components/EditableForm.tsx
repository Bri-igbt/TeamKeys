"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { TeamsStatsProps } from "@/types";



type EditableFormProps = {
  team: TeamsStatsProps;
  index: number;
  onSave: (index: number, form: TeamsStatsProps) => void;
};

const EditableForm: React.FC<EditableFormProps> = ({ team, index, onSave }) => {
  const [form, setForm] = useState<TeamsStatsProps>(team);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (
    field: keyof TeamsStatsProps,
    value: string | number
  ) => {
    let error = "";

    if (typeof value === "string" && value.trim() === "") {
      error = `${field} is required`;
    }

    if (typeof value === "number" && (isNaN(value) || value < 0)) {
      error = `${field} must be a valid non-negative number`;
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
    return error === "";
  };

  const handleChange = (field: keyof TeamsStatsProps, value: string | number) => {
    setForm({ ...form, [field]: value });
    validateField(field, value);
  };

  const handleSubmit = () => {
    // validate all fields before save
    let valid = true;
    Object.entries(form).forEach(([key, value]) => {
      const isValid = validateField(
        key as keyof TeamsStatsProps,
        value as string | number
      );
      if (!isValid) valid = false;
    });

    if (!valid) return; // stop save if invalid

    onSave(index, form);
  };

  const isFormValid = Object.values(errors).every((err) => err === "");

  return (
    <div className="flex flex-col gap-2 p-2 border rounded-md bg-gray-50">
      <div>
        <Input
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Team Name"
        />
        {errors.title && <p className="text-xs text-red-500">{errors.title}</p>}
      </div>

      <div>
        <Input
          type="number"
          value={form.win}
          onChange={(e) => handleChange("win", parseFloat(e.target.value))}
          placeholder="Win %"
        />
        {errors.win && <p className="text-xs text-red-500">{errors.win}</p>}
      </div>

      <div>
        <Input
          type="number"
          value={form.offense}
          onChange={(e) => handleChange("offense", parseFloat(e.target.value))}
          placeholder="Offense Rating"
        />
        {errors.offense && (
          <p className="text-xs text-red-500">{errors.offense}</p>
        )}
      </div>

      <div>
        <Input
          type="number"
          value={form.defence}
          onChange={(e) => handleChange("defence", parseFloat(e.target.value))}
          placeholder="Defense Rating"
        />
        {errors.defence && (
          <p className="text-xs text-red-500">{errors.defence}</p>
        )}
      </div>

      <div>
        <Input
          type="number"
          value={form.pt}
          onChange={(e) => handleChange("pt", parseFloat(e.target.value))}
          placeholder="3PT%"
        />
        {errors.pt && <p className="text-xs text-red-500">{errors.pt}</p>}
      </div>

      <div>
        <Input
          type="number"
          value={form.ast}
          onChange={(e) => handleChange("ast", parseFloat(e.target.value))}
          placeholder="AST"
        />
        {errors.ast && <p className="text-xs text-red-500">{errors.ast}</p>}
      </div>

      <div>
        <Input
          type="number"
          value={form.reb}
          onChange={(e) => handleChange("reb", parseFloat(e.target.value))}
          placeholder="REB"
        />
        {errors.reb && <p className="text-xs text-red-500">{errors.reb}</p>}
      </div>

      <Button
        size="sm"
        className="mt-2"
        onClick={handleSubmit}
        disabled={!isFormValid}
      >
        Save Changes
      </Button>
    </div>
  );
};

export default EditableForm;


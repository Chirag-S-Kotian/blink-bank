import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Control } from "react-hook-form";
import { z } from "zod";
import { authformSchema } from "@/lib/utils";

interface CustomInput {
  control: Control<z.infer<typeof authformSchema>>;
  name: string;
  placeholder: string;
  label: string;
}

const CustomInput = ({ control, name, placeholder, label }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">Email</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2"></FormMessage>
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;

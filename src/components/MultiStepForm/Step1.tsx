"use client";
import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { IFormInput } from "./MultiStepForm";

interface Step1Props {
  register: UseFormRegister<IFormInput>;
  errors: FieldErrors<IFormInput>;
}

const Step1: FC<Step1Props> = ({ register, errors }) => {
  return (
    <div>
      <label htmlFor="step1Field" className="block text-sm font-medium text-gray-700">
        Step 1 Field
      </label>
      <input
        {...register("step1Field", { required: "This field is required" })}
        id="step1Field"
        className="mt-2 p-2 border border-gray-300 rounded w-full"
      />
      {errors.step1Field && <p className="text-red-500 text-sm">{errors.step1Field.message}</p>}
    </div>
  );
};

export default Step1;

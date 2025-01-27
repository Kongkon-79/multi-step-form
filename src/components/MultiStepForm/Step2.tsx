"use client";
import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { IFormInput } from "./MultiStepForm";

interface Step2Props {
  register: UseFormRegister<IFormInput>;
  errors: FieldErrors<IFormInput>;
}

const Step2: FC<Step2Props> = ({ register, errors }) => {
  return (
    <div>
      <label htmlFor="step2Field" className="block text-sm font-medium text-gray-700">
        Step 2 Field
      </label>
      <input
        {...register("step2Field", { required: "This field is required" })}
        id="step2Field"
        className="mt-2 p-2 border border-gray-300 rounded w-full"
      />
      {errors.step2Field && <p className="text-red-500 text-sm">{errors.step2Field.message}</p>}
    </div>
  );
};

export default Step2;

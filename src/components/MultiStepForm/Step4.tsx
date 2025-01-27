"use client";
import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { IFormInput } from "./MultiStepForm";

interface Step4Props {
  register: UseFormRegister<IFormInput>;
  errors: FieldErrors<IFormInput>;
}

const Step4: FC<Step4Props> = ({ register, errors }) => {
  return (
    <div>
      <label htmlFor="step4Field" className="block text-sm font-medium text-gray-700">
        Step 4 Field
      </label>
      <input
        {...register("step4Field", { required: "This field is required" })}
        id="step4Field"
        className="mt-2 p-2 border border-gray-300 rounded w-full"
      />
      {errors.step4Field && <p className="text-red-500 text-sm">{errors.step4Field.message}</p>}
    </div>
  );
};

export default Step4;

"use client";
import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { IFormInput } from "./MultiStepForm";

interface Step5Props {
  register: UseFormRegister<IFormInput>;
  errors: FieldErrors<IFormInput>;
}

const Step5: FC<Step5Props> = ({ register, errors }) => {
  return (
    <div>
      <label htmlFor="step5Field" className="block text-sm font-medium text-gray-700">
        Step 5 Field
      </label>
      <input
        {...register("step5Field", { required: "This field is required" })}
        id="step5Field"
        className="mt-2 p-2 border border-gray-300 rounded w-full"
      />
      {errors.step5Field && <p className="text-red-500 text-sm">{errors.step5Field.message}</p>}
    </div>
  );
};

export default Step5;

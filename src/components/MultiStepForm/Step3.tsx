// "use client";
// import { FC } from "react";
// import { UseFormRegister, FieldErrors } from "react-hook-form";
// import { IFormInput } from "./MultiStepForm";

// interface Step3Props {
//   register: UseFormRegister<IFormInput>;
//   errors: FieldErrors<IFormInput>;
// }

// const Step3: FC<Step3Props> = ({ register, errors }) => {
//   return (
//     <div>
//       <label htmlFor="step3Field" className="block text-sm font-medium text-gray-700">
//         Step 3 Field
//       </label>
//       <input
//         {...register("step3Field", { required: "This field is required" })}
//         id="step3Field"
//         className="mt-2 p-2 border border-gray-300 rounded w-full"
//       />
//       {errors.step3Field && <p className="text-red-500 text-sm">{errors.step3Field.message}</p>}
//     </div>
//   );
// };

// export default Step3;


"use client";
import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { IFormInput } from "./MultiStepForm";

interface Step3Props {
  register: UseFormRegister<IFormInput>;
  errors: FieldErrors<IFormInput>;
}

const Step3: FC<Step3Props> = ({ register, errors }) => {
  return (
    <div>
      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
        City
      </label>
      <input
        {...register("city", { required: "City is required" })}
        id="city"
        className="mt-2 p-2 border border-gray-300 rounded w-full"
      />
      {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}

      <label htmlFor="image" className="block text-sm font-medium text-gray-700 mt-4">
        Image
      </label>
      <input
        type="file"
        {...register("image", { required: "Image is required" })}
        id="image"
        className="mt-2 p-2 border border-gray-300 rounded w-full"
      />
      {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
    </div>
  );
};

export default Step3;

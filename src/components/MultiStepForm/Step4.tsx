// "use client";
// import { FC } from "react";
// import { UseFormRegister, FieldErrors } from "react-hook-form";
// import { IFormInput } from "./MultiStepForm";

// interface Step4Props {
//   register: UseFormRegister<IFormInput>;
//   errors: FieldErrors<IFormInput>;
// }

// const Step4: FC<Step4Props> = ({ register, errors }) => {
//   return (
//     <div>
//       <label htmlFor="step4Field" className="block text-sm font-medium text-gray-700">
//         Step 4 Field
//       </label>
//       <input
//         {...register("step4Field", { required: "This field is required" })}
//         id="step4Field"
//         className="mt-2 p-2 border border-gray-300 rounded w-full"
//       />
//       {errors.step4Field && <p className="text-red-500 text-sm">{errors.step4Field.message}</p>}
//     </div>
//   );
// };

// export default Step4;


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
      <label htmlFor="color" className="block text-sm font-medium text-gray-700">
        Favorite Color
      </label>
      <input
        {...register("color", { required: "Color is required" })}
        id="color"
        className="mt-2 p-2 border border-gray-300 rounded w-full"
      />
      {errors.color && <p className="text-red-500 text-sm">{errors.color.message}</p>}

      <label htmlFor="file" className="block text-sm font-medium text-gray-700 mt-4">
        Upload File
      </label>
      <input
        type="file"
        {...register("file", { required: "File is required" })}
        id="file"
        className="mt-2 p-2 border border-gray-300 rounded w-full"
      />
      {errors.file && <p className="text-red-500 text-sm">{errors.file.message}</p>}

      <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700 mt-4">
        Profile Picture
      </label>
      <input
        type="file"
        {...register("profilePicture", { required: "Profile picture is required" })}
        id="profilePicture"
        className="mt-2 p-2 border border-gray-300 rounded w-full"
      />
      {errors.profilePicture && <p className="text-red-500 text-sm">{errors.profilePicture.message}</p>}
    </div>
  );
};

export default Step4;

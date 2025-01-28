// "use client";
// import { FC } from "react";
// import { UseFormRegister, FieldErrors } from "react-hook-form";
// import { IFormInput } from "./MultiStepForm";

// interface Step5Props {
//   register: UseFormRegister<IFormInput>;
//   errors: FieldErrors<IFormInput>;
// }

// const Step5: FC<Step5Props> = ({ register, errors }) => {
//   return (
//     <div>
//       <label htmlFor="step5Field" className="block text-sm font-medium text-gray-700">
//         Step 5 Field
//       </label>
//       <input
//         {...register("step5Field", { required: "This field is required" })}
//         id="step5Field"
//         className="mt-2 p-2 border border-gray-300 rounded w-full"
//       />
//       {errors.step5Field && <p className="text-red-500 text-sm">{errors.step5Field.message}</p>}
//     </div>
//   );
// };

// export default Step5;


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
      <label htmlFor="image" className="block text-sm font-medium text-gray-700">
        Image
      </label>
      <input
        type="file"
        {...register("step5Image", { required: "Image is required" })}
        id="step5Image"
        className="mt-2 p-2 border border-gray-300 rounded w-full"
      />
      {errors.step5Image && <p className="text-red-500 text-sm">{errors.step5Image.message}</p>}

      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mt-4">
        Subject
      </label>
      <input
        {...register("subject", { required: "Subject is required" })}
        id="subject"
        className="mt-2 p-2 border border-gray-300 rounded w-full"
      />
      {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
    </div>
  );
};

export default Step5;
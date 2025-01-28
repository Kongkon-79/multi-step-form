// "use client";
// import { FC } from "react";
// import { UseFormRegister, FieldErrors } from "react-hook-form";
// import { IFormInput } from "./MultiStepForm";

// interface Step2Props {
//   register: UseFormRegister<IFormInput>;
//   errors: FieldErrors<IFormInput>;
// }

// const Step2: FC<Step2Props> = ({ register, errors }) => {
//   return (
//     <div>
//       <label htmlFor="step2Field" className="block text-sm font-medium text-gray-700">
//         Step 2 Field
//       </label>
//       <input
//         {...register("step2Field", { required: "This field is required" })}
//         id="step2Field"
//         className="mt-2 p-2 border border-gray-300 rounded w-full"
//       />
//       {errors.step2Field && <p className="text-red-500 text-sm">{errors.step2Field.message}</p>}
//     </div>
//   );
// };

// export default Step2;



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
      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
        Phone Number
      </label>
      <input
        {...register("phoneNumber", { required: "Phone number is required" })}
        id="phoneNumber"
        className="mt-2 p-2 border border-gray-300 rounded w-full"
      />
      {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}

      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mt-4">
        Address
      </label>
      <input
        {...register("address", { required: "Address is required" })}
        id="address"
        className="mt-2 p-2 border border-gray-300 rounded w-full"
      />
      {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
    </div>
  );
};

export default Step2;

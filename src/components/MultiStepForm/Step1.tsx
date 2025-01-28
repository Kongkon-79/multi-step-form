// "use client";
// import { FC } from "react";
// import { UseFormRegister, FieldErrors } from "react-hook-form";
// import { IFormInput } from "./MultiStepForm";

// interface Step1Props {
//   register: UseFormRegister<IFormInput>;
//   errors: FieldErrors<IFormInput>;
// }

// const Step1: FC<Step1Props> = ({ register, errors }) => {
//   return (
//     <div>
//       <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//         First Name
//       </label>
//       <input
//         {...register("step1Field", { required: "This field is required" })}
//         id="step1Field"
//         className="mt-2 p-2 border border-gray-300 rounded w-full"
//       />
//       {errors.step1Field && <p className="text-red-500 text-sm">{errors.step1Field.message}</p>}
//     </div>
//   );
// };

// export default Step1;



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
      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
        First Name
      </label>
      <input
        {...register("firstName", { required: "First name is required" })}
        id="firstName"
        className="mt-2 p-2 border border-gray-300 rounded w-full"
      />
      {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}

      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mt-4">
        Last Name
      </label>
      <input
        {...register("lastName", { required: "Last name is required" })}
        id="lastName"
        className="mt-2 p-2 border border-gray-300 rounded w-full"
      />
      {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}

      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">
        Email
      </label>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        })}
        id="email"
        className="mt-2 p-2 border border-gray-300 rounded w-full"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
    </div>
  );
};

export default Step1;

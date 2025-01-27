"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

export interface IFormInput {
  step1Field: string;
  step2Field: string;
  step3Field: string;
  step4Field: string;
  step5Field: string;
}

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    // trigger,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    alert("Form submitted!");
    reset()
  };


    const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));


  // const nextStep = async () => {
  //   const isValid = await trigger(`step${step}Field` as keyof IFormInput); // Explicitly cast to keyof IFormInput
  //   if (isValid) {
  //     setStep((prev) => Math.min(prev + 1, 5));
  //   }
  // };

  // const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="w-1/3 mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center mb-6">Multi-Step Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && <Step1 register={register} errors={errors} />}
        {step === 2 && <Step2 register={register} errors={errors} />}
        {step === 3 && <Step3 register={register} errors={errors} />}
        {step === 4 && <Step4 register={register} errors={errors} />}
        {step === 5 && <Step5 register={register} errors={errors} />}

        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-300 text-black rounded"
            >
              Previous
            </button>
          )}
          {step < 5 && (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          )}
          {step === 5 && (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;


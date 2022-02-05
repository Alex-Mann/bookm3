import React from "react";
import { useForm } from "react-hook-form";

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("data", data);
  console.log("errors", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="floating_first_name"
          id="floating_first_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Name"
          {...register("Name", { required: true, maxLength: 80 })}
        />
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Email address"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <textarea
          type="text"
          name="textarea"
          id="textarea"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Please share anything that will help prepare for our meeting."
          {...register("Notes", {})}
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}

import React from "react";
import { useForm } from "react-hook-form";

export const AddRecipeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data", data);
    alert("Recipe Added Successfully");
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-green-600 rounded-lg shadow-md">
        <h1 className="text-white text-center mb-6 font-bold text-3xl"> Add a new Recipe</h1>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div >

        <label htmlFor="title"  className="text-white text-center mb-6 font-bold text-xl" > Recipe Title</label>
       
        <input id = "title" {...register("title", { required: "Title is Required" })} />

        {errors.title && <p className="text-white-500 text-sm mt-1">{errors.title.message}</p>}

        </div>
    
        <input type="submit" />
      </form>
    </div>
  );
};

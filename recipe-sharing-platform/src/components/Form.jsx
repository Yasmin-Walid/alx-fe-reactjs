import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErros] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <div className="">
      <h1 className="text-center mt-6 text-green-800 font-bold text-3xl	">
        Add a new recipe
      </h1>

      <form className=" mt-6 ml-">

        <div className="mt-3  flex flex-col  w-full gap-2">
        <lable className="mr-3">Title:</lable>
        <input
          className="border-2 border-green-500 "
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        </div>

        <div className="mt-3 flex flex-col  w-full gap-2">

        <lable className="mr-3 ">Ingredients:</lable>
        <input
          className="border-2 border-green-500 "
          type="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleInputChange}
        />
        </div>

        <div className="mt-3 flex flex-col  w-full gap-2">
        <lable className="mr-3">Steps:</lable>
        <input
          className="border-2 border-green-500 "
          type="steps"
          name="steps"
          value={formData.steps}
          onChange={handleInputChange}
        />
        </div>

      <div className="mt-6 text-center justify-center">
      <button className="py-2 px-5 text-white bg-green-800" >Add the Recipe</button>
      </div>
      </form>
    </div>
  );
};

export default Form;

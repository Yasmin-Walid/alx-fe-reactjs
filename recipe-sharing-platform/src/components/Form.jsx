import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.ingredients) newErrors.ingredients = "Ingredients are required";
    if (!formData.steps) newErrors.steps = "Steps are requires";
    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
       if (validateForm()){
        setFormData ({title: "",ingredients: "", steps: ""})
       }
    
  };

  return (
    <div className="">
      <h1 className="text-center mt-6 text-green-800 font-bold text-3xl	">
        Add a new recipe
      </h1>

      <form className=" mt-6 ml-" onSubmit = {handleSubmit} >

        <div className="mt-3  flex flex-col  w-full gap-2">
        <lable className="mr-3">Title:</lable>
        <input
          className="border-2 border-green-500 "
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <p className="text-red-500">{errors.title}</p>
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
        <p className="text-red-500" >{errors.ingredients}</p>

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
        <p className="text-red-500">{errors.steps}</p>

        </div>

      <div className="mt-6 text-center justify-center">
      <button className="py-2 px-5 text-white bg-green-800" >Add the Recipe</button>
      </div>
      </form>
    </div>
  );
};

export default Form;

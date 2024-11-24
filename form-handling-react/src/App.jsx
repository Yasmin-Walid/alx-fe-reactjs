import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

const App = () => {
    const [useFormik, setUseFormik] = useState(false);

    return (
        <div>
            <h1>User Registration</h1>
            <button onClick={() => setUseFormik(!useFormik)}>
                Switch to {useFormik ? "Controlled Components" : "Formik"}
            </button>
            {useFormik ? <FormikForm /> : <RegistrationForm />}
        </div>
    );
};

export default App;

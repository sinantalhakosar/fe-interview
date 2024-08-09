import "./App.css";
import { Form } from "react-final-form";
import { ValidationErrors } from "final-form";

interface FormData {
  rating: "good" | "bad" | "neutral";
}

function App() {
  const validate = (values: FormData) => {
    const errors: ValidationErrors = {};

    if (!values.rating) {
      errors.rating = "Required";
    }

    return errors;
  };

  const handleFormSubmit = (values: FormData) => {
    alert(`Form submitted: ${values.rating}`);
  };

  return (
    <>
      <h1>Bayzat Frontend assessment</h1>
      <h3>Rating system</h3>

      <Form<FormData>
        onSubmit={handleFormSubmit}
        validate={validate}
        render={() => <></>}
      />
    </>
  );
}

export default App;

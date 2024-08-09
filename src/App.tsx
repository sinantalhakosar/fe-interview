import "./App.css";
import { Field, Form } from "react-final-form";
import { ValidationErrors } from "final-form";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

interface FormData {
  comments: string;
}

function App() {
  const validate = (values: FormData) => {
    const errors: ValidationErrors = {};

    if (!values.comments) {
      errors.comments = "Required";
    }

    return errors;
  };

  const handleFormSubmit = (values: FormData) => {
    alert(`Form submitted: ${values.comments}`);
  };

  return (
    <>
      <h1>Bayzat Frontend assessment</h1>
      <h3>Rating system</h3>

      <Form<FormData>
        onSubmit={handleFormSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <div className="form">
            <FormControl fullWidth>
              <Field
                name="comments"
                render={({ input, meta }) => (
                  <>
                    <TextField
                      {...input}
                      multiline
                      rows={5}
                      placeholder="Comments"
                      error={meta.error && meta.touched}
                    />

                    {meta.error && meta.touched && (
                      <FormHelperText error={true}>{meta.error}</FormHelperText>
                    )}
                  </>
                )}
              />
            </FormControl>

            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        )}
      />
    </>
  );
}

export default App;

import "./App.css";
import { Field, Form } from "react-final-form";
import { ValidationErrors } from "final-form";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";

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
        render={({ handleSubmit }) => (
          <div className="form">
            <FormControl fullWidth>
              <InputLabel id="rating-select-label">Rating</InputLabel>
              <Field
                name="rating"
                render={({ input, meta }) => (
                  <>
                    <Select
                      {...input}
                      labelId="rating-select-label"
                      label="Rating"
                      error={meta.error && meta.touched}
                      renderValue={(value) => (
                        <div className="select-renderValue">{value}</div>
                      )}
                    >
                      <MenuItem value="Good">Good</MenuItem>
                      <MenuItem value="Neutral">Neutral</MenuItem>
                      <MenuItem value="Bad">Bad</MenuItem>
                    </Select>

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

import {
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import {
  DateField,
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
const LabelForInput = styled(FormLabel)(({ theme }) => ({
  color: "black",
  fontSize: "1.2rem",
  "& .MuiFormLabel-asterisk": {
    color: "red",
  },
}));
function InputFields({
  name,
  value,
  type,
  placeholder,
  label,
  required,
  rows,
  onBlur,
  error,
  helperText,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  console.log();
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid container rowGap={1}>
      <Grid item xs={12}>
        <LabelForInput
          color="error"
          required={required ? true : false}
          className="emailInputLabel"
        >
          {label}
        </LabelForInput>
      </Grid>
      {type === "firstName" && (
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            type="text"
            name={name}
            placeholder={placeholder}
            onChange={onChange}
          />
        </Grid>
      )}
      {type === "text" && (
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            type="text"
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
          />
        </Grid>
      )}
      {type === "lastName" && (
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="text"
            variant="outlined"
            name={name}
            placeholder={placeholder}
            onChange={onChange}
          />
        </Grid>
      )}

      {type === "textbox" && (
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={rows}
            variant="outlined"
            value={value}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
          />
        </Grid>
      )}
      {type === "email" && (
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            name={name}
            // type={type}
            value={value}
            type="email"
            required
            placeholder={placeholder}
            onChange={onChange}
          />
        </Grid>
      )}
      {type === "phone" && (
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            id={type}
            type={"text"}
            fullWidth
            name={name}
            placeholder={"03030000000"}
            defaultCountry={"pk"}
            onlyCountries={["pk"]}
            value={value}
            onChange={onChange}
          />
          {}
        </Grid>
      )}
      {type === "password" && (
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            variant="outlined"
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
      )}
      {type === "confirmpassword" && (
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            variant="outlined"
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
      )}
      {type === "focusarea" && (
        <TextField
          fullWidth
          required
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          variant="outlined"
          id="outlined-adornment-password"
          type={""}
        />
      )}
      {type === "date" && (
        // <DateField
        //   fullWidth
        //   required
        //   format="MM-DD-YYYY"
        //   onChange={(e, i) => {
        //     console.log(e);
        //   }}
        //   placeholder="End Date"
        //   name="registrationDate"
        // />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            name="registrationDate"
            value={value}
            onChange={(val) => {
              console.log(val);
            }}
            label="readOnly"
          />
        </LocalizationProvider>
      )}
    </Grid>
  );
}

export default InputFields;

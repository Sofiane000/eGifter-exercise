import { TextField, FormControl, FormLabel } from "@material-ui/core";
import { useFormEleStyles } from "../../styles";
export default function Input(props) {

  const classes = useFormEleStyles();
  const { id, name, label, placeholder, value, error = null, onChange, onBlur, ...other } = props;
  return (

    <FormControl variant="outlined" {...(error && { error: true })}>
      <FormLabel classes={{ root: classes.labelRoot }} name={name} htmlFor={id} id={id}>{label}</FormLabel>

      <TextField
        variant="outlined"
        // InputProps={{
        //   classes: {
        //     input: classes.root
        //   }
        // }}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...other}
        {...(error && { error: true, helperText: error })}
      />

    </FormControl>
  );
}
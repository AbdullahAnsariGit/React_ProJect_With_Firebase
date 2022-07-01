import TextField from "@mui/material/TextField";

function SMInput(props) {
  const { label, type } = props;
  return (
    <>
      <TextField
        id="outlined-basic"
        type={type}
        label={label}
        variant="outlined"
      />
    </>
  );
}
export default SMInput;

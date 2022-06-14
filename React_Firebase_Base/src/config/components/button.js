import Button from "@mui/material/Button";

function SMButton(props) {
  const { label, onClick } = props;
  return (
    <>
      <Button onClick={onClick} variant="contained">
        {label}
      </Button>
    </>
  );
}
export default SMButton;

import { Card } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useHeaderSectionStyles } from "../../styles";
export default function HeaderSection({ data = { status: "info", text: "Please fill the form completely." } }) {

  const classes=useHeaderSectionStyles();

  if (data.status === "") return <> </>;
  return (
    <div className={classes.headerSection}>
      <Card variant="outlined" id="header-info">
        <Alert severity={data.status}>{data.text}</Alert>
      </Card>
    </div>
  );
}
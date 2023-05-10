import Table from "../components/Table";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./TableView.styles.css";

export default function TableView() {
  const navigate = useNavigate();
  const onClick = () => {
    console.log("Navigate!");
    navigate("/cards");
  };

  return (
    <div className="TableView">
      <AppBar position="static" style={{ background: "#00ccff" }}>
        <Toolbar>
          <Button color="inherit" onClick={() => onClick()}>
            Card View
          </Button>
        </Toolbar>
      </AppBar>
      <Table />
    </div>
  );
}

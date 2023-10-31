import { Outlet, Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./layout.css";
import { useEffect } from "react";

const Layout = () => {
  const username = localStorage.getItem("username");

  const navigate = useNavigate();

  useEffect(() => {}, [username]);

  return (
    <div className="Layout">
      <nav>
        <ul>
          <Button className="grow">
            <Link to="/">Home</Link>
          </Button>
          <Button className="grow">
            <Link to="/products">All products</Link>
          </Button>
          <div className="center">
            {username ? (
              <Accordion sx={{ width: "220px" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography margin={"auto"}>
                    Welcome: <b>{username}</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Button
                    onClick={() => {
                      localStorage.clear();
                      navigate("/");
                      location.reload();
                    }}
                  >
                    Logout
                  </Button>
                </AccordionDetails>
              </Accordion>
            ) : <></>}
          </div>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;

import { Button } from "@mui/material";
import "./homePage.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();


  return (
    <>
      {!localStorage.getItem("username") ?
      <div className="card">
        <Button id="login" style={{background: "white"}} onClick={() => navigate("/login")}>
          Login
        </Button>
        <Button id="reg" style={{background: "white"}} onClick={() => navigate("/register")}>
          Register
        </Button>
        </div>
      : <></>
    }
    </>
  );
}

export default HomePage;

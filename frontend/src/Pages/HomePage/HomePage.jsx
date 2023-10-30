import { Button } from "@mui/material";
import "./homePage.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();


  return (
    <>
      <div>Welcome to the front page</div>
      {!localStorage.getItem("user_name") ?
      <div className="card">
        <Button onClick={() => navigate("/login")}>
          Login
        </Button>
        </div>
      : <></>
    }
    </>
  );
}

export default HomePage;

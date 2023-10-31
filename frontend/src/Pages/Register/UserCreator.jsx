import Register from "./Register";
import { useNavigate } from "react-router-dom";

const UserCreator = () => {

    const navigate = useNavigate();


    const createUser = async (user) => {
        const res = await fetch("/api/appusers/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        if (res.ok) {
            navigate("/");
            return await res.text();
        } 
        else {
            return res.status();
        }
    }


    return (
        <Register
            onCancel={() => navigate("/")}
            onSave={createUser}
        />
    );
}

export default UserCreator;
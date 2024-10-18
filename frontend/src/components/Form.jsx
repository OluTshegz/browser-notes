import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";


function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const name = method === "login" ? "Login" : "Register";

    return (
        <form onSubmit={ handleSubmit } className="form-container">
            <h1>{ name }</h1>
            <input className="form-input" type="text" value={username}
                onChange={ handleUsernameChange } placeholder="Username"
            />
            <input className="form-input" type="password" value={password}
                onChange={ handlePasswordChange } placeholder="Password"
            />
            <button className="form-button" type="submit">{ name }</button>
        </form>
    );
}

export default Form
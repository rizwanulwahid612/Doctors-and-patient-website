import React from 'react';
import './account.css'
import {Link} from "react-router-dom";
import {useAuth} from "../../Context/AuthContext";

const Account = () => {

    const {user,LogOut}=useAuth();
    return (
        <div className="account">
            {user ? (
                <>
          <span className="material-icons-outlined color" title="Account">
            account_circle
          </span>
                    <span className="color">{user.displayName}</span>
                    <span
                        className="material-icons-outlined color"
                        title="Logout" onClick={LogOut}
                    >
            {" "}
                        logout{" "}
          </span>
                </>
            ) : (
                <>
                    <Link to="/signup" className="button">Signup</Link>
                    <Link to="/login" className="buttonLog">Login</Link>
                </>)
            }
        </div>
    );
};

export default Account;
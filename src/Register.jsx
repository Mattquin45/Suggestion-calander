import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "./Firebase/Auth";


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("");
    const [fullName, setFullname] = useState("");
    const [ReType, setReType] = useState("");

    const navigate = useNavigate();



    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== ReType) {
            setError("Passwords do not match, try again!");
            return;
        }try {
             doCreateUserWithEmailAndPassword(email, password, fullName);
            navigate("/sign-in");
        }catch (err) {
            setError("Account has already been made, try logging in with it!");
            console.error(err)
        }

    };
    return (
        <>
      <div id="intro-page" className="body">
        <header className="woop">
          <h1> Welcome to your very own calendar</h1>
        </header>
        <p className="introduction"> Get started in making an account to help organize and path</p>
        <p className="introduction">your suggestion calendar</p>
        <input value={ fullName }type="Name" className="text-box" placeholder="Full name" onChange={(e) => setFullname(e.target.value)}/>
        <input value={email} type="text" className="text-box" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input value={ password }type="password" className="text-box" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <input value={ ReType }type="Retype-password" className="text-box" placeholder="ReType Password" onChange={(e) => setReType(e.target.value)}/>
        <button type="submit" class="button no-style" onClick={handleRegister}>Register an account</button>
        <hr className="divider"></hr>
        <p className="or">Or you can use</p>
        <hr className="divider"></hr>
      </div>
      <div className="centered-buttons" id="buttons">
        <button class="icons"><img class="pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/c/c1/20170301123009%21Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" alt="google button"></img></button>
        <button class="icons"><img class="pic" src="https://www.omnicoreagency.com/wp-content/uploads/2015/10/Twitter-Logo.png" alt="google button"></img></button>
        <button class="icons"><img class="pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/320px-GitHub_Invertocat_Logo.svg.png" alt="google button"></img></button>
      </div>


      <p className="what">Have an account? <Link to="/"><a className="sign-up">Log in here</a></Link></p>
      {error && <p className="error">{error}</p>} {/* show error if exists */}





      
    </>
    );
};
export default Register;

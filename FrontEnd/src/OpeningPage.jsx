import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "./Firebase/Auth";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";


const OpeningPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [error, setError] = useState(""); 


  const {userLoggedIn} = useAuth()
  const navigate = useNavigate();
  
  const onSubmit = async (e) => {
  e.preventDefault();
  setError(""); 

  if (isSigningIn) return; 
  setIsSigningIn(true);

  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,  
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Login success:", data);

      localStorage.setItem("token", data.token);

      navigate("/sign-in"); 
    } else if (response.status === 401) {
      setError("Invalid email or password. Please try again.");
    } else if (response.status === 404) {
      setError("User not found. Please register first.");
    } else {
      setError("Something went wrong. Please try again later.");
    }
  } catch (err) {
    console.error("Login error:", err);
    setError("Unable to reach the server. Is it running?");
  } finally {
    setIsSigningIn(false);
  }

  }
  
  
  return (
    <>
      <div id="intro-page" className="body">
        <header className="woop">
          <h1> Welcome to your very own calendar</h1>
        </header>
        <p className="introduction"> why struggle making time options when we can do it for you!</p>
        <p className="introduction">This is your suggestion calendar</p>
        <input value={ email } type="text" className="text-box" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <input value={ password }type="password" className="text-box" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" class="button no-style" onClick={onSubmit}>sign in</button>
        <hr className="divider"></hr>
        <p className="or">Or you can use</p>
        <hr className="divider"></hr>
      </div>
      <div className="centered-buttons" id="buttons">
        <button class="icons"><img class="pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/c/c1/20170301123009%21Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" alt="google button"></img></button>
        <button class="icons"><img class="pic" src="https://www.omnicoreagency.com/wp-content/uploads/2015/10/Twitter-Logo.png" alt="google button"></img></button>
        <button class="icons"><img class="pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/320px-GitHub_Invertocat_Logo.svg.png" alt="google button"></img></button>
      </div>


      <p className="what">Don't have an account? <Link to="/Register"><a className="sign-up">Sign up here!</a></Link></p>
      {error && <p className="error">{error}</p>} {/* show error if exists */}





      
    </>
    
  );
    
};
export default OpeningPage;

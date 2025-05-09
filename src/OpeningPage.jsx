import React from "react";
import { useNavigate } from "react-router-dom";

const OpeningPage = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/sign-in');
  };



  return (
    <>
      <div id="intro-page">
        <header className="woop">
          <h1> Welcome to your very own calendar</h1>
        </header>
        <p className="introduction"> why struggle making time options when we can do it for you!</p>
        <p className="introduction">This is your suggestion calendar</p>
        <input type="text" className="text-box" placeholder="Email" />
        <input type="text" className="text-box" placeholder="Password" />
        <button class="button no-style" onClick={handleClick}>sign in</button>
        <hr className="divider"></hr>
        <p className="or">Or you can use</p>
        <hr className="divider"></hr>
      </div>
      <div className="centered-buttons" id="buttons">
        <button class="icons"><img class="pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/c/c1/20170301123009%21Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" alt="google button"></img></button>
        <button class="icons"><img class="pic" src="https://www.omnicoreagency.com/wp-content/uploads/2015/10/Twitter-Logo.png" alt="google button"></img></button>
        <button class="icons"><img class="pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/320px-GitHub_Invertocat_Logo.svg.png" alt="google button"></img></button>
      </div>
      <p className="what">Don't have an account? <a href="" className="no-style">Sign up here!</a></p>




      
    </>
    
  );
    
};
export default OpeningPage;

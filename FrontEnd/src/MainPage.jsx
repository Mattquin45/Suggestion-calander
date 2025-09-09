import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    
    return (
        <>
            <body className="body">
            <header>
                <h1 className="woop">Let us help you with organizing or suggestion your current calendar</h1>
                <hr className="long-divider"></hr>
            </header>
            <h3 className="text-pads"> We understand that throughout the day, it can be difficult to make time to add new activities to your current schedule </h3>
            <h3 className="text">This website provides users with two options that can grant you help in your calendar. </h3>
            <h3 className="text">Our current options are Re-Organize schedule and suggest a schedule </h3>
            <h1 className="text-pads">Find your schedule</h1>
            <hr className="divider"></hr>
            <div className="centered-buttons">
                <Link to="/re-organizer" ><button className="choices">Re-organizer</button></Link>
                <button class="choices">Suggestion calendar</button>
                </div>
                </body>

        </>
    );
};
export default MainPage

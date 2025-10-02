 import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DownloadCalendar from './pdf/downloadcalender';
import { useNavigate } from "react-router-dom";
import { auth, db } from "./Firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { doSignOut } from "./Firebase/Auth";
import axios from "axios";



const ReOrganizer = () => {
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
    const [weekData, setWeekData] = useState({
  Monday: { title: "", hour: null, minute: null, time: null, description: "" },
  Tuesday: { title: "", hour: null, minute: null, time: null, description: "" },
  Wednesday: { title: "", hour: null, minute: null, time: null, description: "" },
  Thursday: { title: "", hour: null, minute: null, time: null, description: "" },
  Friday: { title: "", hour: null, minute: null, time: null, description: "" },
  Saturday: { title: "", hour: null, minute: null, time: null, description: "" },
  Sunday: { title: "", hour: null, minute: null, time: null, description: "" },
    });
  const saveWeekDataToFireStore = async () => { 
    setMsg("");
    const user = auth.currentUser;
    if (!user) { 
      setMsg("You need to be logged in to save your calendar!")
      return;
      }
      try { 
        setSaving(true);
        await setDoc(
          doc(db, "users", user.uid),
          { weekData },
          { merge: true }
        );
        setMsg("Calendar saved successfully!");
      } catch (err) {
        console.error(err);
        setMsg("Calendar could not be saved");
      } finally {
        setSaving(false);
      }
    
  }
   const handleSignout = async (e) => {
          e.preventDefault();
  
          try {
            await doSignOut();
              navigate("/");
          }catch (err) {
              setError(" Could not sign out, try again later");
              console.error(err)
          }
  
   };
   
  const sendMail = () => {
    const user = auth.currentUser;
    axios.post("https://suggestion-calander-backend.onrender.com/send-email", {
      email: user.email,
      weekData
  })
      .then(() => { 
         setMsg("Email Reminders have been set!");
        console.log("Email sent successfully")
      })
  }

    
    return (
      <>
        <button class="signout" onClick={handleSignout}><img class="signoutPic" src="https://previews.123rf.com/images/tmricons/tmricons1707/tmricons170700613/81207214-logout-sign-icon-sign-out-button.jpg" alt="google button"></img></button>

    <div className='text'>
          <h2> Explore the creation of your calendar</h2>

        <hr className='long-divider'></hr>
          <h3 className='text-pads'> Our tools and technology provide clients for an easy to use UI experience to create your own calendar</h3>
          <h3> With the tools below you can create your own calendar and have either option of downloading it or </h3>
          <h3>having it sent to your email.</h3>
          <hr className='divider'></hr>
      </div>
            <div className='flex scroll-container' id='download'>
                {/*Monday*/}
                <div className='box'>
                    <h4 className='text'> Monday </h4>
                    <hr className='tinyDivider'></hr>
                    <h5 className='calentitles'>Title</h5>
                    <input type="text" className="title" id="title" value={weekData.Monday.title} onChange={(e) => setWeekData((prev) => ({ ...prev, Monday: { ...prev.Monday, title: e.target.value } }))} maxLength={20}/>
                    <h5 className='calentitles'>Time</h5>
                    <div className='timePadding'>
                    <select className="timeOptions" id="hour" value={weekData.Monday.hour} onChange={(e) => setWeekData((prev) => ({ ...prev, Monday: { ...prev.Monday, hour: Number(e.target.value )} }))}>
                    <option value="" >Select an option</option>   
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                              {(i + 1).toString().padStart(2, '0')}
                        </option>
                      ))}
                        </select>
                        <span>:</span>
                        <select className="timeOptions" id="minute" value={weekData.Monday.minute} onChange={(e) => setWeekData((prev) => ({ ...prev, Monday: { ...prev.Monday, minute: Number(e.target.value )} }))}>
                        <option value="">Select an option</option>
                            {[...Array(60)].map((_, i) => (
                        <option key={i} value={i}>
                              {i.toString().padStart(2, '0')}
                        </option>
                      ))}
                        </select>
                        <span>:</span>
                        <select className="timeOptions" id="time" value={weekData.Monday.time} onChange={(e) => setWeekData((prev) => ({ ...prev, Monday: { ...prev.Monday, time: e.target.value} }))}>
                            <option value="">Select an option</option> 
                            <option value='AM'>AM</option>
                            <option value='PM'>PM</option>   
                        </select>
                    </div>
                    <h5 className='calentitles'>Description</h5>
                    <div className='description'>
                    <textarea type="text" className="topLeftAlignment" placeholder='tell us more about this specific day!' id="description" value={weekData.Monday.description} onChange={(e) => setWeekData((prev) => ({ ...prev, Monday: { ...prev.Monday, description: e.target.value } }))} maxLength={50} />
                    </div>
                </div>

                {/*Tuesday*/}
                <div className='box'>
                    <h4 className='text'> Tuesday </h4>
                    <hr className='tinyDivider'></hr>
                    <h5 className='calentitles'>Title</h5>
                    <input type="text" className="title" id="title" value={weekData.Tuesday.title} onChange={(e) => setWeekData((prev) => ({ ...prev, Tuesday: { ...prev.Tuesday, title: e.target.value } }))} maxLength={20} />
                    <h5 className='calentitles'>Time</h5>
                    <div className='timePadding'>
                    <select className="timeOptions" id="hour" value={weekData.Tuesday.hour} onChange={(e) => setWeekData((prev) => ({ ...prev, Tuesday: { ...prev.Tuesday, hour: Number(e.target.value )} }))}>
                    <option value="">Select an option</option>   
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                              {i + 1}
                        </option>
                      ))}
                        </select>
                        <span>:</span>
                        <select className="timeOptions" id="minute" value={weekData.Tuesday.minute} onChange={(e) => setWeekData((prev) => ({ ...prev, Tuesday: { ...prev.Tuesday, minute: Number(e.target.value )} }))}>
                        <option value="">Select an option</option>
                        {[...Array(60)].map((_, i) => (
                        <option key={i} value={i}>
                              {i.toString().padStart(2, '0')}
                        </option>
                      ))}
                        </select>
                        <span>:</span>
                        <select className="timeOptions" id="time" value={weekData.Tuesday.time} onChange={(e) => setWeekData((prev) => ({ ...prev, Tuesday: { ...prev.Tuesday, time: e.target.value} }))}>
                            <option value="">Select an option</option> 
                            <option value='AM'>AM</option>
                            <option value='PM'>PM</option>   
                        </select>
                    </div>
                    <h5 className='calentitles'>Description</h5>
                    <div className='description'>
                    <textarea type="text" className="topLeftAlignment" placeholder='tell us more about this specific day!' id="description" value={weekData.Tuesday.description} onChange={(e) => setWeekData((prev) => ({ ...prev, Tuesday: { ...prev.Tuesday, description: e.target.value } }))} maxLength={50} />
                    </div>
                </div>

                {/*Wednesday*/}
                <div className='box'>
                    <h4 className='text'> Wednesday </h4>
                    <hr className='tinyDivider'></hr>
                    <h5 className='calentitles'>Title</h5>
                    <input type="text" className="title" id="title" value={weekData.Wednesday.title} onChange={(e) => setWeekData((prev) => ({ ...prev, Wednesday: { ...prev.Wednesday, title: e.target.value } }))} maxLength={20} />
                    <h5 className='calentitles'>Time</h5>
                    <div className='timePadding'>
                    <select className="timeOptions" id="hour" value={weekData.Wednesday.hour} onChange={(e) => setWeekData((prev) => ({ ...prev, Wednesday: { ...prev.Wednesday, hour: Number(e.target.value )} }))}>
                    <option value="">Select an option</option>   
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                              {i + 1}
                        </option>
                      ))}
                        </select>
                        <span>:</span>
                        <select className="timeOptions" id="minute" value={weekData.Wednesday.minute} onChange={(e) => setWeekData((prev) => ({ ...prev, Wednesday: { ...prev.Wednesday, minute: Number(e.target.value )} }))}>
                        <option value="">Select an option</option>
                        {[...Array(60)].map((_, i) => (
                        <option key={i} value={i}>
                              {i.toString().padStart(2, '0')}
                        </option>
                      ))}
                        </select>
                        <span>:</span>
                        <select className="timeOptions" id="time" value={weekData.Wednesday.time} onChange={(e) => setWeekData((prev) => ({ ...prev, Wednesday: { ...prev.Wednesday, time: e.target.value} }))}>
                            <option value="">Select an option</option> 
                            <option value='AM'>AM</option>
                            <option value='PM'>PM</option>   
                        </select>
                    </div>
                    <h5 className='calentitles'>Description</h5>
                    <div className='description'>
                    <textarea type="text" className="topLeftAlignment" placeholder='tell us more about this specific day!' id="description" value={weekData.Wednesday.description} onChange={(e) => setWeekData((prev) => ({ ...prev, Wednesday: { ...prev.Wednesday    , description: e.target.value } }))} maxLength={50} />
                    </div>
                </div> 

                {/*Thursday*/}
                <div className='box'>
                    <h4 className='text'> Thursday </h4>
                    <hr className='tinyDivider'></hr>
                    <h5 className='calentitles'>Title</h5>
                    <input type="text" className="title" id="title" value={weekData.Thursday.title} onChange={(e) => setWeekData((prev) => ({ ...prev, Thursday: { ...prev.Thursday, title: e.target.value } }))} maxLength={20} />
                    <h5 className='calentitles'>Time</h5>
                    <div className='timePadding'>
                    <select className="timeOptions" id="hour" value={weekData.Thursday.hour} onChange={(e) => setWeekData((prev) => ({ ...prev, Thursday: { ...prev.Thursday, hour: Number(e.target.value )} }))}>
                    <option value="">Select an option</option>   
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                              {i + 1}
                        </option>
                      ))}
                        </select>
                        <span>:</span>
                        <select className="timeOptions" id="minute" value={weekData.Thursday.minute} onChange={(e) => setWeekData((prev) => ({ ...prev, Thursday: { ...prev.Thursday, minute: Number(e.target.value )} }))}>
                        <option value="">Select an option</option>
                        {[...Array(60)].map((_, i) => (
                        <option key={i} value={i}>
                              {i.toString().padStart(2, '0')}
                        </option>
                      ))}
                        </select>
                        <span>:</span>
                        <select className="timeOptions" id="time" value={weekData.Thursday.time} onChange={(e) => setWeekData((prev) => ({ ...prev, Thursday: { ...prev.Thursday, time: e.target.value} }))}>
                            <option value="">Select an option</option> 
                            <option value='AM'>AM</option>
                            <option value='PM'>PM</option>   
                        </select>
                    </div>
                    <h5 className='calentitles'>Description</h5>
                    <div className='description'>
                    <textarea type="text" className="topLeftAlignment" placeholder='tell us more about this specific day!' id="description" value={weekData.Thursday.description} onChange={(e) => setWeekData((prev) => ({ ...prev, Thursday: { ...prev.Thursday, description: e.target.value } }))} maxLength={50}/>
                    </div>
                </div>
            </div>


            <div className='nopadflex scroll-container' id='download'>

                    {/*Friday*/}
                    <div className='box'>
                    <h4 className='text'> Friday </h4>
                    <hr className='tinyDivider'></hr>
                    <h5 className='calentitles'>Title</h5>
                    <input type="text" className="title" id="title" value={weekData.Friday.title} onChange={(e) => setWeekData((prev) => ({ ...prev, Friday: { ...prev.Friday, title: e.target.value } }))} maxLength={20}/>
                    <h5 className='calentitles'>Time</h5>
                    <div className='timePadding'>
                    <select className="timeOptions" id="hour" value={weekData.Friday.hour} onChange={(e) => setWeekData((prev) => ({ ...prev, Friday: { ...prev.Friday, hour: Number(e.target.value )} }))}>
                    <option value="">Select an option</option>   
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                              {i + 1}
                        </option>
                      ))}
                        </select>
                        <span>:</span>
                        <select className="timeOptions" id="minute" value={weekData.Friday.minute} onChange={(e) => setWeekData((prev) => ({ ...prev, Friday: { ...prev.Friday, minute: Number(e.target.value )} }))}>
                        <option value="">Select an option</option>
                        {[...Array(60)].map((_, i) => (
                        <option key={i} value={i}>
                              {i.toString().padStart(2, '0')}
                        </option>
                      ))}
                        </select>
                        <span>:</span>
                        <select className="timeOptions" id="time" value={weekData.Friday.time} onChange={(e) => setWeekData((prev) => ({ ...prev, Friday: { ...prev.Friday, time: e.target.value} }))}>
                            <option value="">Select an option</option> 
                            <option value='AM'>AM</option>
                            <option value='PM'>PM</option>   
                        </select>
                    </div>
                    <h5 className='calentitles'>Description</h5>
                    <div className='description'>
                    <textarea type="text" className="topLeftAlignment" placeholder='tell us more about this specific day!' id="description" value={weekData.Friday.description} onChange={(e) => setWeekData((prev) => ({ ...prev, Friday: { ...prev.Friday, description: e.target.value } }))} maxLength={50} />
                    </div>
                </div>  

                      {/*Saturday*/}
                    <div className='box'>
                    <h4 className='text'> Saturday </h4>
                    <hr className='tinyDivider'></hr>
                    <h5 className='calentitles'>Title</h5>
                    <input type="text" className="title" id="title" value={weekData.Saturday.title} onChange={(e) => setWeekData((prev) => ({ ...prev, Saturday: { ...prev.Saturday, title: e.target.value } }))} maxLength={20}/>
                    <h5 className='calentitles'>Time</h5>
                    <div className='timePadding'>
                    <select className="timeOptions" id="hour" value={weekData.Saturday.hour} onChange={(e) => setWeekData((prev) => ({ ...prev, Saturday: { ...prev.Saturday, hour: Number(e.target.value )} }))}>
                    <option value="">Select an option</option>   
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                              {i + 1}
                        </option>
                      ))}
                        </select>
                        <span>:</span>
                        <select className="timeOptions" id="minute" value={weekData.Saturday.minute} onChange={(e) => setWeekData((prev) => ({ ...prev, Saturday: { ...prev.Saturday, minute: Number(e.target.value )} }))}>
                        <option value="">Select an option</option>
                        {[...Array(60)].map((_, i) => (
                        <option key={i} value={i}>
                              {i.toString().padStart(2, '0')}
                        </option>
                      ))}
                        </select>
                        <span>:</span>
                        <select className="timeOptions" id="time" value={weekData.Saturday.time} onChange={(e) => setWeekData((prev) => ({ ...prev, Saturday: { ...prev.Saturday, time: e.target.value} }))}>
                            <option value="">Select an option</option> 
                            <option value='AM'>AM</option>
                            <option value='PM'>PM</option>   
                        </select>
                    </div>
                    <h5 className='calentitles'>Description</h5>
                    <div className='description'>
                    <textarea type="text" className="topLeftAlignment" placeholder='tell us more about this specific day!' id="description" value={weekData.Saturday.description} onChange={(e) => setWeekData((prev) => ({ ...prev, Saturday: { ...prev.Saturday, description: e.target.value } }))}maxLength={50} />
                    </div>
                </div>

                {/*Sunday*/}
                <div className='box'>
                    <h4 className='text'> Sunday </h4>
                    <hr className='tinyDivider'></hr>
                    <h5 className='calentitles'>Title</h5>
                    <input type="text" className="title" id="title" value={weekData.Sunday.title} onChange={(e) => setWeekData((prev) => ({ ...prev, Sunday: { ...prev.Sunday, title: e.target.value } }))} maxLength={20}/>
                    <h5 className='calentitles'>Time</h5>
                    <div className='timePadding'>
                    <select className="timeOptions" id="hour" value={weekData.Sunday.hour} onChange={(e) => setWeekData((prev) => ({ ...prev, Sunday: { ...prev.Sunday, hour: Number(e.target.value )} }))}>
                    <option value="">Select an option</option>   
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                              {i + 1}
                        </option>
                      ))}
                        </select>
                        <span>:</span>
                        <select className="timeOptions" id="minute" value={weekData.Sunday.minute} onChange={(e) => setWeekData((prev) => ({ ...prev, Sunday: { ...prev.Sunday, minute: Number(e.target.value )} }))}>
                        <option value="">Select an option</option>
                        {[...Array(60)].map((_, i) => (
                        <option key={i} value={i}>
                              {i.toString().padStart(2, '0')}
                        </option>
                      ))}
                        </select>
                        <span>:</span>
                        <select className="timeOptions" id="time" value={weekData.Sunday.time} onChange={(e) => setWeekData((prev) => ({ ...prev, Sunday: { ...prev.Sunday, time: e.target.value} }))}>
                            <option value="">Select an option</option> 
                            <option value='AM'>AM</option>
                            <option value='PM'>PM</option>   
                        </select>
                    </div>
                    <h5 className='calentitles'>Description</h5>
                    <div className='description'>
              <textarea type="text" className="topLeftAlignment" placeholder='tell us more about this specific day!' id="description" value={weekData.Sunday.description} onChange={(e) => setWeekData((prev) => ({ ...prev, Sunday: { ...prev.Sunday, description: e.target.value } }))} maxLength={50}  />
                    </div>
                </div>
            </div>
        
        
            <div className="centered-buttons">
                <h4 className='text'> Now you have the option of </h4>
          <div div className='flex'>
            
                    <PDFDownloadLink
                     document={<DownloadCalendar weekData={weekData} />}
                      fileName="calendar.pdf"
                       style={{ textDecoration: 'none' }}>
                       <button className="downloadEmailButtons">Download</button>
                      </PDFDownloadLink>
                    <p className='text'>or</p> 
            <button class="downloadEmailButtons" onClick={ sendMail}>Get emailed your schedule + Reminders</button>
                    <p className='text'>or</p> 
            <button class="downloadEmailButtons" onClick={saveWeekDataToFireStore} disabled={saving}>{saving ? "Saving..." : "Save Your Calendar!"}</button>

            </div>
        </div>
        {msg && <p className="error">{msg}</p>}
        {error && <p className="error">{error}</p>} {/* show error if exists */}


            </>
  );
};

export default ReOrganizer;

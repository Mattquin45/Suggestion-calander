import MainPage from './MainPage.jsx';
import OpeningPage from './OpeningPage.jsx'
import ReOrganizer from './ReOrganizer'
import DownloadCalendar from './pdf/downloadcalender.jsx';
import './style.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function main() { 
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={ <OpeningPage/>} />  
                <Route exact path="/sign-in" element={<MainPage />} /> 
                <Route exact path="/re-organizer" element={<ReOrganizer />} />
            </Routes>
\        </Router>
        
        
    );
}
export default main
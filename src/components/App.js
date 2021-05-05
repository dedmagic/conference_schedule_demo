import { Link, Route, BrowserRouter } from 'react-router-dom';
import '../css/App.css';

import TopMenu from "./TopMenu.jsx";
import AboutConference from './AboutConference';
import Speakears from './Speakers.jsx';

function App() {
    return (
        <div class="container">
            <div class="row">
                <TopMenu />
            </div>
            <div class="row">
                <BrowserRouter>
                    <Link to="/"></Link>
                    <Route exact path="/" component={AboutConference}></Route>

                    <Link to="/speakers"></Link>
                    <Route exact path="/speakers" component={Speakears}></Route>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;

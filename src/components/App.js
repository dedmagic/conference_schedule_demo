import '../css/App.css';
import AboutConference from './AboutConference';
import Speakears from './Speakers';
import TopMenu from "./TopMenu";
import { Link, Route, BrowserRouter } from 'react-router-dom';

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

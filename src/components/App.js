import '../css/App.css';
import AboutConference from './AboutConference';
import Speakears from './Speakers';
import TopMenu from './TopMenu';

function App() {
  return (
    <div class="container">
        <div class="row">
            <TopMenu />
        </div>
        <div class="row">
            {/* <AboutConference /> */}
            <Speakears />
        </div>
    </div>    
  );
}

export default App;

import React from 'react';

// import SpeakerStore from '../store/Speakers';
import { speakers } from '../store/Speakers';

class Speakers extends React.Component {
    render() {
        return (
            <div>
                <h2>Спикеры:</h2>
                {speakers.map(spk => spk.name)}
            </div>
        );
    }
}

export default Speakers;
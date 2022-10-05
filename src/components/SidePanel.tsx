import React, { useState } from 'react';
import settings from '../store/Settings';

interface SidePanelProps {
    handleInstr: (i: number) => void;
    instrument: number;
}

const SidePanel: React.FC<SidePanelProps> = ({handleInstr, instrument}) => {

    const [choise, setChoise] = useState(false);

    function generateMelody() {
        settings.stave.updateGenerator(settings.generator);
        settings.stave.generateFullMelody();
        settings.setMelody(settings.stave.getFullMelody());
    }

    function handleChangeInstrument(i: number) {
        setChoise(false);
        handleInstr(i);
    }

    return (
        <>
            <div className={`side-button ${choise ? 'shadow-white' : ''}`} onClick={() => setChoise(!choise)}>
                {
                    instrument === 0 ? <svg className="instrument-icon" width="40" height="40" viewBox="0 0 27 27"><path d="M7 10v7H3c-3 0-3-7 0-7zm1 0h.7c1-1.75 3-1.75 3-1.75a1.7 1.7 0 1 1 2.3 0h1.6a1.7 1.7 0 1 1 2.3 0h1.6a1.7 1.7 0 1 1 2.3 0h1.6c2 0 2 10.5 0 10.5h-1.6a1.7 1.7 0 1 1-2.3 0h-1.6a1.7 1.7 0 1 1-2.3 0H14a1.7 1.7 0 1 1-2.3 0s-2 0-3-1.75H8zm3.9 1.25a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3.9 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3.9 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-7.8 4.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3.9 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3.9 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0" transform="translate(-5 14)rotate(-45)" className="wc27x"></path></svg> 
                    : ''
                }
                {
                    instrument === 1 ? <svg className="instrument-icon" width="27" height="27" viewBox="0 0 27 27"><path d="M3 24v-7h2.5v4h1.5v-4h1.5v4h1.5v-4h5v4h1.5v-4h1.5v4h1.5v-4h1.5v4h1.5v-4h2.5v7zM3 9c0-4 2-6 6-6 8 0 4 8 16 8v5H3z"></path></svg>
                    : ''
                }
                {
                    instrument === 2 ? <svg className="instrument-icon" width="27" height="27" viewBox="0 0 27 27"><path d="M7 10v7H3c-3 0-3-7 0-7zm1 0c1.94-.05 1.08-1.86 3.33-1.54a1.3 1.3 0 1 1 1.4.32l1.4.32a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32l1.4.33a1.3 1.3 0 1 1 1.4.32s2.69.04 2.69 3.59c0 1.53-.75 4.62-3.65 4.62-1.23 0-2.18-1.59-3.5-1.59-2.8 0-3.88 2.8-7.22 2.8-1.87 0-2.04-3.77-4.25-3.77zm2.84.8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m2.8.65a1 1 0 1 0 2 0 1 1 0 1 0-2 0m2.8.65a1 1 0 1 0 2 0 1 1 0 1 0-2 0m2.8.65a1 1 0 1 0 2 0 1 1 0 1 0-2 0m2.8.65a1 1 0 1 0 2 0 1 1 0 1 0-2 0" transform="translate(-5 14)rotate(-45)"></path></svg>
                    : ''
                }
            </div>
            { choise ?
                <div className="instrument-choise">
                    <div onClick={() => handleChangeInstrument(0)} className="instrument-choise-item">Гитара акустическая</div>
                    <div onClick={() => handleChangeInstrument(1)} className="instrument-choise-item">Пианино</div>
                    <div onClick={() => handleChangeInstrument(2)} className="instrument-choise-item">Дисторшн гитара</div>
                </div> : ''
            }
            <div className="side-button" onClick={generateMelody}>
                <svg width="40" height="40" viewBox="0 0 90 90">
                    <path fill='white' d="M 23.7,87.9 C 18.1,82.8 21.2,74.7 30.4,69.9 C 33.5,68.4 35.8,67.7 39.8,67.8 C 42.3,67.9 45.1,69.3 45.1,69.3 C 45.1,51.2 45.0,17.0 45.0,0.2 C 46.0,0.2 46.7,0.1 48.1,0.1 C 48.1,1.1 48.1,1.9 48.1,2.7 C 48.1,3.6 48.1,4.1 48.2,4.7 C 49.2,11.0 50.6,13.5 57.6,21.2 C 66.5,31.1 69.1,37.0 69.1,44.9 C 69.0,52.3 62.5,68.1 61.1,67.5 C 63.1,61.9 65.9,55.9 66.6,50.9 C 67.5,44.8 65.0,36.2 61.0,31.7 C 57.8,27.9 50.2,24.6 48.1,24.6 C 48.1,24.6 48.0,61.0 48.0,74.8 C 48.0,77.1 45.9,81.2 44.7,82.6 C 39.2,89.2 28.5,92.2 23.7,87.9 z"/>
                </svg>
            </div>
        </>
    );
}

export default SidePanel;
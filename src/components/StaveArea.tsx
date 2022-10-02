import React, { useEffect, useState } from 'react';
import Stave from './Stave';
import Buttons from './Buttons';
import '../style/s.scss';
import store from '../store/Settings';
import { observer } from 'mobx-react-lite';
import Settings from '../store/Settings';
import SidePanel from './SidePanel';

const StaveArea = observer(() => {

    const [tempo, setTempo] = useState(120);
    const [inter, setInter] = useState<NodeJS.Timer>();
    const [isPlaying, setIsPlaying] = useState(false);
    const [repeat, setRepeat] = useState(false);
    const [instrument, setInstrument] = useState(0);

    useEffect(() => {
        if (store.currentVertical === store.melody.length){
            store.setCurrentVertical(0);
            setTimeout(stop, 10);
            if (repeat)
                setTimeout(play, 15);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stop, repeat]);

    function play() {
        let eightTime = 60_000 / (tempo * 2);
        if (store.melody[0] === undefined) { 
            stop();
            return;
        }
            
        setIsPlaying(true);
        let iter = store.currentVertical + 1;

        store.melody[iter - 1]?.forEach(note => {
            note.getSound().play();
        })

        setInter(setInterval(() => {
            store.melody[iter]?.forEach(note => {
                note.getSound().pause();
                note.getSound().currentTime = 0;
                note.getSound().play();
            })
            store.setCurrentVertical(iter);
            iter++;
        }, eightTime));
    }

    function changeTempo(temp: number) {
        setTempo(temp);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function stop() {
        setIsPlaying(false)
        clearInterval(inter);
        store.melody.forEach(el => {
            el?.forEach(elem => {
                elem.getSound().pause();
                elem.getSound().currentTime = 0;
            })
        });
    }

    function handleInstr(i: number) {
        setInstrument(i);
        Settings.generator.setList(i);
        store.melody.forEach(el => {
            el?.forEach(elem => {
                elem.updateSound(i);
            })
        });
    }

    return (
        <div className='stave-area'>
            <div className='aside'>
                <SidePanel instrument={instrument} handleInstr={handleInstr}/>
            </div>
            <Stave stave={store.stave} generator={store.generator} iteration={store.currentVertical} tempo={tempo}/>
            <Buttons repeat={repeat} tempo={tempo} changeTempo={changeTempo} play={play} stop={stop} isPlaying={isPlaying} repeatHandler={() => setRepeat(!repeat)} />
        </div>
    );
})

export default StaveArea;
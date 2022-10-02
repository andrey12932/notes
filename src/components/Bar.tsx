import React, { useEffect, useState } from 'react';
import '../style/bar.css';
import BarClass from '../logic/Bar';
import Note from '../logic/Note';
import Vertical from './Vertical';
import settings from '../store/Settings';

interface BarProps {
    bar: BarClass;
    melody: Array<Array<Note> | undefined >;
    pointer?: number;
}

const Bar: React.FC<BarProps> = ({bar, melody, pointer}) => {

    const [barMelody, setBarMelody] = useState(Array<Array<Note> | undefined>);

    useEffect(() => {
        let startIdx = bar.getBarIndex() * 8;
        setBarMelody(settings.melody.slice(startIdx, startIdx + 8 ));
    }, [bar, melody]);

    function handleClick(e: React.MouseEvent, idx: number) {
        if (settings.melody[0])
            settings.setCurrentVertical(bar.getBarIndex() * 8 + idx);
        else 
            settings.setCurrentVertical(0);
    }

    function setNewNote(note: string, verticalIdx?: number) {
        if (verticalIdx) {
            let index = bar.getBarIndex() * 8 + verticalIdx;
            let bufferArr = melody;
            if (bufferArr[index])
            bufferArr[index]?.push(new Note(settings.generator.getList().getByName(note), 1));
            else
            bufferArr[index] = [new Note(settings.generator.getList().getByName(note), 1)];
            settings.setMelody(bufferArr);
            console.log(melody)
        }
    }

    return (
        <div className='bar-notes'>
            {barMelody.map((el, idx) => {
                return(
                    <div className='vertical' onClick={e => handleClick(e, idx)}>
                        <Vertical setNote={setNewNote} idx={idx} notes={el} key={idx} pointer={pointer === idx} />
                    </div>
                )
            })}
            <div className="vertical-line"></div>
        </div>
    );
}

export default Bar;
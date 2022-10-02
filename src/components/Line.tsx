import React, { useEffect, useRef, useState } from 'react';
import Note from '../logic/Note';
import NoteComponent from './Note';
/*
interface LineProps {
    note: string;
    melody: Array<Note | undefined>;
    high?: boolean;
    sharps?: number;
}

const Line: React.FC<LineProps> = ({note, melody, high, sharps}) => {
    const [lineNotes, setLineNotes] = useState(Array(8).fill(false));
    const [leftArr, setLeftArr] = useState(Array<number>);
    const sharpsNames = ['fa', 'do', 'sol', 're', 'la', 'mi'];
    let sharpNum = useRef(-1);

    useEffect(() => {
        let bufferArr: boolean[] = Array(8).fill(false);
        let bufLeftArr = Array(8).fill(0);
        melody.forEach((el, idx) => {
            if(/*el?.getName() === note //check(el?.getName()) && !high) {
                bufferArr[idx] = true;
            }
        });

        let j = -1;

        for(let i = 0; i < 8; i++) {
            bufferArr[i] ? 
                bufLeftArr[i] = ++j
                : bufLeftArr[i] = 0
        }

        setLineNotes(bufferArr);
        setLeftArr(bufLeftArr);

        sharpNum.current = -1;

        if ( sharps && sharpsNames.indexOf(note) < sharps ) {
            sharpNum.current = sharpsNames.indexOf(note) + 1;
            console.log(note + ' ' + sharpsNames.indexOf(note))
        }
    }, [melody, note]);

    function check(test: string | undefined): boolean | undefined {
        if(test)
            return (RegExp(note).test(test));
    }

    return (
        <>
            {sharpNum.current > -1 ? 
                <img src={require('../assets/img/sharp.png')} alt="" style={{ display: 'inherit', height: 24, width: 9, position: 'relative', top: "50%" , transform: 'translate(0px, -50%)', left: 5 + (sharpNum.current - 1) * 11}} />
                : ''}
            {lineNotes.map((el, idx) => {
                if (el) {
                    return <NoteComponent key={idx} duration={melody[idx]?.getDuration()} left={ 440 / 8 * idx - 32 * leftArr[idx] } />
                }
                return '';
            })}
        </>
    );
}

export default Line;
*/
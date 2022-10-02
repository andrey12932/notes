import React from "react";
import Note from "../logic/Note";
import Horizontal from "./Horizontal";

interface VerticalProps {
    notes?: Array<Note>;
    sharpName?: string;
    flatName?: string;
    keySign?: boolean;
    pointer?: boolean;
    setNote?: (note: string, verticalIdx?: number) => void;
    idx?: number;
}

const notesLines = [ 'la', 'sol', 'fa', 'mi', 're', 'do', 'si', 'la', 'sol', 'fa', 'mi', 're', 'do']

const Vertical: React.FC<VerticalProps> = ({notes, sharpName, flatName, keySign, pointer, idx, setNote}) => {
    function isNote(note: string) {
        let i = 0;
        while( notes && i < notes.length ) {
            if (new RegExp(note).test(notes[i].getName())) {
                return notes[i];
            }
            i++;
        }
        return undefined;
    }

    function getClickedNote(note: string) {
        /*console.log(note);
        if(setNote)
            setNote(note, idx);*/
    }

    return (
        <>
            <div className={`vertical ${flatName || sharpName ? 'seminote': ''}`}>
                {!keySign && !flatName && !sharpName && pointer ? <div className="pointer"></div> : ''}
                    {
                        notesLines.map((el, idx) => {
                            return <Horizontal click={getClickedNote} key={idx} noteIdx={idx} note={el} flatNote={flatName} sharpNote={sharpName} low={idx > 10} noteInfo={isNote(el)} high={idx < 4} white={idx % 2 === 1} hidden={idx < 1 || idx > 10}/>
                        })
                    }
                    {
                        keySign ?
                        <div className="key-sign">
                            <img alt="Скрипичный ключ" src={require('../assets/img/key.png')} style={{height: 150, position: 'absolute', top: -27, left: -20}}/>
                        </div>  : ''
                    }
            </div>
        </>
    );
}

export default Vertical;
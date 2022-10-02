import React from 'react';
import Note from './Note';
import NoteClass from '../logic/Note';

interface HorizontalProps {
    note: string;
    high?: boolean;
    white?: boolean;
    low?: boolean;
    hidden?: boolean;
    noteInfo?: NoteClass;
    sharp?: number;
    flat?: number;
    sharpNote?: string;
    flatNote?: string;
    noteIdx: number;
    click: (note: string) => void;
}

const Horizontal: React.FC<HorizontalProps> = ({note, high, white, hidden, noteInfo, low, sharpNote, flatNote, noteIdx, click}) => {
    return (
        <div className="bar-line" onClick={() => click(note)}>
            <div style={{position: 'relative'}} className={`line-${white? 'white' : 'black'} ${note}${high ? "High": ''} ${hidden? 'hidden' : ''}`}>
                {noteInfo && !high && !low ? <Note duration={noteInfo.getDuration()} /> : ''}
                {sharpNote === note && noteIdx < 8 ? <img src={require('../assets/img/sharp.png')} style={{height: 20, width: 7,position: 'absolute', top: '50%', transform: 'translate(0, -50%)'}} alt='Диез' /> : ''}
                {flatNote === note && noteIdx < 8 ? <img src={require('../assets/img/flat.png')} style={{height: 20, width: 7,position: 'absolute', top: '50%', transform: 'translate(0, -70%)'}} alt='Диез' /> : ''}
            </div>
        </div>
    );
}

export default Horizontal;
import mi1o from '../assets/clear_notes/mi.mp3';
import fa1o from '../assets/clear_notes/fa.mp3';
import faD1o from '../assets/clear_notes/faD.mp3';
import sol1o from '../assets/clear_notes/sol.mp3';
import la1o from '../assets/clear_notes/la.mp3';
import solD1o from '../assets/clear_notes/solD.mp3';
import laD1o from '../assets/clear_notes/laD.mp3';
import si1o from '../assets/clear_notes/si.mp3';
import do1o from '../assets/clear_notes/do.mp3';
import doD1o from '../assets/clear_notes/doD.mp3';
import re1o from '../assets/clear_notes/re.mp3';
import reD1o from '../assets/clear_notes/reD.mp3';
import pmi1o from '../assets/piano_notes/mi.mp3';
import pfa1o from '../assets/piano_notes/fa.mp3';
import pfaD1o from '../assets/piano_notes/faD.mp3';
import psol1o from '../assets/piano_notes/sol.mp3';
import pla1o from '../assets/piano_notes/la.mp3';
import psolD1o from '../assets/piano_notes/solD.mp3';
import plaD1o from '../assets/piano_notes/laD.mp3';
import psi1o from '../assets/piano_notes/si.mp3';
import pdo1o from '../assets/piano_notes/do.mp3';
import pdoD1o from '../assets/piano_notes/doD.mp3';
import pre1o from '../assets/piano_notes/re.mp3';
import preD1o from '../assets/piano_notes/reD.mp3';

export enum NotesNames {
    'do', 
    'doD', 
    're', 
    'reD',
    'mi', 
    'fa', 
    'faD', 
    'sol', 
    'solD', 
    'la', 
    'laD', 
    'si',
}

export const namesArray: string[] = ['do', 'doD', 're', 'reD', 'mi', 'fa', 'faD', 'sol', 'solD', 'la', 'laD', 'si'];


const Notes = {
    'mi': {
        firstOctave: [
            new Audio(mi1o),
            new Audio(pmi1o)
        ]
    },
    'fa': {
        firstOctave: [
            new Audio(fa1o),
            new Audio(pfa1o)
        ]
    },
    'faD': {
        firstOctave: [
            new Audio(faD1o),
            new Audio(pfaD1o)
        ]
    },
    'sol': {
        firstOctave: [
            new Audio(sol1o),
            new Audio(psol1o)
        ]
    },
    'solD': {
        firstOctave: [
            new Audio(solD1o),
            new Audio(psolD1o)
        ]
    },
    'la': {
        firstOctave: [
            new Audio(la1o),
            new Audio(pla1o)
        ]
    },
    'laD': {
        firstOctave: [
            new Audio(laD1o),
            new Audio(plaD1o)
        ]
    },
    'si': {
        firstOctave: [
            new Audio(si1o),
            new Audio(psi1o)
        ]
    },
    'do': {
        firstOctave: [
            new Audio(do1o),
            new Audio(pdo1o)
        ]
    },
    'doD': {
        firstOctave: [
            new Audio(doD1o),
            new Audio(pdoD1o)
        ]
    },
    're': {
        firstOctave: [
            new Audio(re1o),
            new Audio(pre1o)
        ]
    },
    'reD': {
        firstOctave: [
            new Audio(reD1o),
            new Audio(preD1o)
        ]
    }
} as const

export type Names = keyof typeof Notes;

export function getNotes(name: Names) {
    return Notes[name];
}

export default Notes;
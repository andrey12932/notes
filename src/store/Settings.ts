import { makeAutoObservable } from "mobx";
import Generator from "../logic/Generator";
import Note from "../logic/Note";
import Stave from "../logic/Stave";

class store {
    generator = new Generator(0, 0);
    melody: Array<Array<Note> | undefined> = Array(16).fill(undefined);
    stave: Stave = new Stave(2);
    currentVertical: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setGenerator = (root: number, scale: number) => {
        this.generator = new Generator(root, scale);
    }

    setMelody = (melody: Array<Array<Note> | undefined>) => {
        this.melody = melody;
    }

    setStave = (barNumber: number) => {
        this.stave = new Stave(barNumber);
    }

    setCurrentVertical = (num: number) => {
        this.currentVertical = num;
    }
}

export default new store();
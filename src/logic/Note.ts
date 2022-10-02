import { NotesNode } from "./NotesLinkedList";
import {getNotes, Names} from "./Notes";

class Note {
    private noteInfo: NotesNode;
    private duration: number;
    private sound: HTMLAudioElement = Audio.prototype;
    private name: Names;

    constructor(note: NotesNode, duration: number) {
        this.noteInfo = note;
        this.duration = duration;
        this.sound = note.getSound();
        this.name = note.getName();
    }

    updateSound(instrument: number) {
        this.sound = getNotes(this.name).firstOctave[instrument];
    }

    getDuration(): number {
        return this.duration;
    }

    getInfo() {
        return this.noteInfo;
    }

    getSound() {
        return this.sound;
    }

    getName() {
        return this.name;
    }
}

export default Note;
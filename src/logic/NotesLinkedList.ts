import {getNotes, Names} from "./Notes";

const namesArray: Names[] = ['do', 'doD', 're', 'reD', 'mi', 'fa', 'faD', 'sol', 'solD', 'la', 'laD', 'si'];

class NotesLinkedList {
    private first: NotesNode;
    private current: NotesNode;

    constructor(instrument: number) {
        this.first = new NotesNode(0, instrument);
        this.current = this.first;
        let p: NotesNode | undefined;
        for (let i = 1; i < 12; i++) {
            p = new NotesNode(i, instrument);
            this.current.setLink(p);
            this.current = p;
        }
        p?.setLink(this.first);
    }

    print(): void {
        this.current = this.first;
        do {
            console.log(this.current?.name);
            this.current = this.current.next();
        } while (this.current !== this.first)
    }

    getById(id: number) {
        this.current = this.first;
        do {
            if (this.current?.id === id)
                return this.current;
            this.current = this.current?.next();
        } while(this.current !== this.first)
        return this.first;
    }

    getByName(name: string) {
        this.current = this.first;
        do {
            if (new RegExp(name).test(this.current?.name))
                return this.current;
            this.current = this.current?.next();
        } while(this.current !== this.first)
        return this.first;
    }
}

export class NotesNode {
    public id: number = 0;
    private link: NotesNode;
    public name: Names = namesArray[0];
    private sound: HTMLAudioElement = Audio.prototype;

    constructor(id: number, instrument: number) {
            this.id = id;
            this.name = namesArray[id];
            this.sound = getNotes(this.name).firstOctave[instrument];
            this.link = NotesNode.prototype;
    }

    setLink(link: NotesNode) {
        this.link = link;
    }

    changeInstrument(instrument: number) {
        this.sound = getNotes(this.name).firstOctave[instrument];
    }

    next() {
        return this.link;
    }

    getAfterTheNext() {
        return this.link?.link;
    }

    getSound() {
        return this.sound;
    }
    
    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }
}

export default NotesLinkedList;
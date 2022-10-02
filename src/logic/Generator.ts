import notesList, { NotesNode } from "./NotesLinkedList";

const intervals: number[] = [2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2];

class Generator {
    private keyNotes: NotesNode[] = Array(7).fill(NotesNode.prototype);
    private root: number;
    private scale: number;
    private sharpNotes = ['fa', 'do', 'sol', 're', 'la', 'mi'];
    private flatNotes = ['si', 'mi', 'la', 're', 'sol'];
    private flatKeys = [5, 10, 3, 8, 1];
    private list: notesList = new notesList(0);

    constructor(root: number, scale: number) {
        this.root = root;
        this.scale = scale;
        this.setKeyNotes();
    }

    setKeyNotes() {
        this.keyNotes[0] = this.list.getById(this.root);
        for(let i = 0; i < 6; i++) {
            if (intervals[this.scale + i] === 1)
                this.keyNotes[i + 1] = this.keyNotes[i]?.next();
            else
                this.keyNotes[i + 1] = this.keyNotes[i]?.getAfterTheNext();
        }
    }

    setList(instrument: number) {
        this.list = new notesList(instrument);
        this.setKeyNotes();
    }

    getKeyNotes() {
        return this.keyNotes;
    }

    getRoot() {
        return this.root;
    }

    getScale() {
        return this.scale;
    }

    getSharpsNumber() {
        if (this.root === 6 && this.scale === 0)
            return 6;
        let num = 0;
        this.getKeyNotes().forEach( (el) => {
            if (/D/.test(el.getName()))
                num++;
        });

        return num;
    }
    
    getSharpNotes() {
        return this.sharpNotes.slice(0, this.getSharpsNumber());
    }

    getFlatNotes() {
        return this.flatNotes.slice(0, this.getSharpsNumber());
    }

    isSharp() {
        let res = true;
        this.flatKeys.forEach(el => {
            if (el === this.root)
                res = false;
        });
        return res;
    }

    getList() {
        return this.list;
    }
}

export default Generator;
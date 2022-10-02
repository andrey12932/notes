import Note from "./Note";
import Generator from "./Generator";

class Bar {
    private barNumber: number;
    private notesDurations: number[] = [1, 2, 4];
    private generator: Generator = new Generator(0, 0);
    private melody: Array<Array<Note> | undefined> = this.generateMelody();
    private generationMode: number = 0;     // 0. любая длительность
                                            // 1. 1 и 2
                                            // 2. только 2
                                            // 3. только 1

    constructor(num: number) {
        this.barNumber = num;
        this.generateMelody();
    }

    setGenerator(generator: Generator) {
        this.generator = generator;
    }

    setGenerationMode(mode: number) {
        this.generationMode = mode;
        switch (mode) {
            case 0: this.notesDurations = [1, 2, 3]; break;
            case 1: this.notesDurations = [1, 2]; break;
            case 2: this.notesDurations = [2]; break;
            case 3: this.notesDurations = [1]; break;
        }
    }

    getGenerationMode(): number {
        return this.generationMode;
    }

    getSharpNumber() {
        let Dnum = 0;
        this.generator.getKeyNotes().forEach(note => {
            if(/D/.test(note.getName()))
                Dnum++;
        });
        return Dnum;
    }

    generateMelody() {
        let melody: Array<Array<Note> | undefined> = Array<Array<Note> | undefined>(8).fill(undefined);

        let i = 0;
        while (i < 8) {
            let randNote;
            if (i === 0 && this.barNumber % 2 === 0 )
                randNote = this.generator?.getKeyNotes()[0];
            else
                randNote = this.generator?.getKeyNotes()[this.generator.getKeyNotes().length * Math.random() << 0];
            
            let time = this.notesDurations.length * Math.random() << 0;
            
            if (this.generationMode === 1) {
                if (i % 2 === 1 && time === 1)
                    time = 0;
            }

            if (time === 2 && Math.random() < 0.9) {
                time = 1;
            }
            let randomTime = this.notesDurations[time];
            melody[i] = [];
            melody[i]?.push(new Note(randNote, randomTime));
            if ( i + randomTime < 9 )
                i += randomTime;
        }

        this.melody = melody;
        return melody;
    }

    getMelody() {
        return this.melody;
    }

    getBarIndex() {
        return this.barNumber;
    }
}

export default Bar;
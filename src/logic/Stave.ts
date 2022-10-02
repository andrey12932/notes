import Bar from "./Bar";
import Generator from "./Generator";
import Note from "./Note";

class Stave {
    private bars: Bar[];

    constructor(barsNumber: number) {
        this.bars = Array.from(Array(barsNumber), (_el, idx) => new Bar(idx));
    }

    updateGenerator(generator: Generator) {
        this.bars.forEach(el => {
            el.setGenerator(generator);
            el.generateMelody();
        })
    }

    getBars(): Bar[] {
        return this.bars;
    }

    getFullMelody() {
        let full: any[] = [];
        this.bars.forEach(bar => {
            full = full.concat(bar.getMelody());
        });
        return full;
    }

    generateFullMelody() {
        this.bars.forEach(bar => {
            bar.generateMelody();
        });
    }

    setGenerationMode(mode: number) {
        this.bars.forEach(bar => {
            bar.setGenerationMode(mode);
        });
    }

    getGenerationMode(): number {
        return this.bars[0].getGenerationMode();
    }

    getBarNumber() {
        return this.bars.length;
    }

    getMelodyPart = function* getS(melody: Array<Array<Note> | undefined>){
        for (let i = 0; i < melody.length; i++) {
            let el = melody[i];
            let arr: Array<HTMLAudioElement> = [];
            el?.forEach(elem => {
                arr.push(elem.getSound());
            })
            console.log(i)
            yield arr;
        }
        return undefined;
    }
}

export default Stave;
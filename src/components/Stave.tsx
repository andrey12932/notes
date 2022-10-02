import React, { useEffect, useState } from 'react';
import BarClass from '../logic/Bar';
import Bar from './Bar';
import StaveClass from '../logic/Stave';
import { observer } from 'mobx-react-lite';
import SettingStore from '../store/Settings';
import Vertical from './Vertical';
import Generator from '../logic/Generator';

interface StaveProps {
    stave: StaveClass;
    generator: Generator;
    tempo: number;
    iteration: number;
}

const Stave: React.FC<StaveProps> = observer(({ stave, generator, tempo, iteration }) => {

    const [sharpNotes, setSharpNotes] = useState<Array<string>>();

    useEffect(() => {
        if (generator.isSharp()) {   
            setSharpNotes(generator.getSharpNotes());
        } else {
            setSharpNotes(generator.getFlatNotes());
        }
    }, [generator]);

    return (
        <div className="stave">
            <div className="key">
                <Vertical keySign={true} />
                {
                    sharpNotes?.map((el, idx) => {
                        if (generator.isSharp())
                        {
                            return (
                                <Vertical key={idx * 0.156} sharpName={el}  />
                            );
                        }
                        else
                            return (
                                <Vertical key={idx * 0.156} flatName={el} />
                            );
                    })
                }
            </div>
            {
                stave.getBars().map((el: BarClass, idx) => {
                    return <Bar pointer={Math.floor(iteration / 8) === idx ? iteration % 8: undefined} melody={SettingStore.melody} bar={el} key={idx}/>
                })
            }
        </div>
    );
})

export default Stave;
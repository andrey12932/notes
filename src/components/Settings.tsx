import React, { useState, useRef } from 'react';
import SettingsStore from '../store/Settings';

interface SettingsProps {
    generate: () => void;
    tempo: number;
    changeTempo: (temp: number) => void;
}

const Settings: React.FC<SettingsProps> = ({generate, tempo, changeTempo}: SettingsProps) => {
    const note = useRef<HTMLSelectElement>(HTMLSelectElement.prototype);
    const scaleSelection = useRef<HTMLSelectElement>(HTMLSelectElement.prototype);
    const modeSelection = useRef<HTMLSelectElement>(HTMLSelectElement.prototype);

    const [root, setRoot] = useState(0);
    const [scale, setScale] = useState(0);
    const [barNum, setBarNum] = useState(SettingsStore.stave.getBarNumber());

    function handleRootChange() {
        setRoot(parseInt(note.current.value.toString()));
        SettingsStore.setGenerator(parseInt(note.current.value), scale);
        generate();
    }

    function handleScaleChange() {
        setScale(parseInt(scaleSelection.current.value.toString()));
        SettingsStore.setGenerator(root, parseInt(scaleSelection.current.value));
        generate();
    }

    
    function handleMode() {
        setScale(parseInt(modeSelection.current.value.toString()));
        SettingsStore.stave.setGenerationMode(parseInt(modeSelection.current.value.toString()));
        generate();
    }

    function handleTempoChange(e: React.ChangeEvent<HTMLInputElement>) {
        changeTempo(parseInt(e.target.value));
    }

    function handleBarNumChange() {
        SettingsStore.setStave(barNum);
        generate();
    }

    return (
        <div className='settings'>
            <span className="settings-item__name">Темп</span>
            <input onChange={handleTempoChange} value={tempo} required min={70} max={220} type={'number'}  />
            <input onChange={handleTempoChange} value={tempo} type={'range'} min={70} max={220} />

            <span className="settings-item__name">Тональность</span>
            <select value={SettingsStore.generator.getRoot()} ref={note} onChange={handleRootChange} name="root-note" id="root-note">
                <option value={'0'}>До</option>
                <option value={'1'}>До#</option>
                <option value={'2'}>Рe</option>
                <option value={'3'}>Рe#</option>
                <option value={'4'}>Ми</option>
                <option value={'5'}>Фа</option>
                <option value={'6'}>Фа#</option>
                <option value={'7'}>Соль</option>
                <option value={'8'}>Соль#</option>
                <option value={'9'}>Ля</option>
                <option  value={'10'}>Ля#</option>
                <option  value={'11'}>Си</option>
            </select>
            <select value={SettingsStore.generator.getScale()} ref={scaleSelection} onChange={handleScaleChange} name="scale" id="scale">
                <option value={0}>Мажор</option>
                <option value={1}>Дорийский</option>
                <option value={2}>Фригийский</option>
                <option value={3}>Лидийский</option>
                <option value={4}>Миксолидийский</option>
                <option value={5}>Минор</option>
                <option value={6}>Локрийский</option>
            </select>
            
            <span className="settings-item__name">Количество тактов</span>
            <input type="number" value={barNum} onChange={e => setBarNum(parseInt(e.target.value))}/>
            <button onClick={handleBarNumChange}>Готово</button>

            <span className="settings-item__name">Длительности нот</span>
            <select value={SettingsStore.stave.getGenerationMode()} ref={modeSelection} onChange={handleMode} name="scale" id="scale">
                <option value={0}>Любая</option>
                <option value={1}>1/4 и 1/8</option>
                <option value={2}>1/4</option>
                <option value={3}>1/8</option>
            </select>

        </div>

    );
}

export default Settings;
import React, { useState, useEffect, useRef } from 'react';

const MainScreen = () => {
    const [active, setActive] = useState(true);

    const rootEl = useRef<HTMLDivElement>(HTMLDivElement.prototype);
    const onClick = (e: any) => rootEl.current.contains(e.target) || hanldeHide();

    useEffect(() => {
      document.addEventListener('click', onClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    function hanldeHide() {
        rootEl.current.classList.add('hidden');
        setTimeout(() => setActive(false), 300);
        document.removeEventListener('click', onClick);
    }

    return (
        <>
            {active && <div className="main-screen" ref={rootEl}>
                <h2>Генератор случайных мелодий</h2>
                <span className='quote'>"Эта штука, понятное дело, что выдает в основном какую-то ахинею, но в этом есть толчок определенной формы, 
                    когда ты не знаешь что дальше написать, здесь тебе сразу же выдают море хлама и ты входишь в режим уже не человека, который сидит тупит перед чистым листом и не знает просто что дальше делать,
                    а которому дали что-то плохое и он такой 'не-не-не, не так'. А когда ты начинаешь исправлять и говорить что не так, ты в каком-то смысле начинаешьт приходить к тому, что было бы так"</span>
                <a target={'_blank'} href="https://youtu.be/Pa1CIz1CbWw?t=257" rel="noreferrer">Зилков ае</a>
            </div>}
        </>
        
    );
}

export default MainScreen;
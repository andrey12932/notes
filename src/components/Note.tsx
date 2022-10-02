import React, { useEffect, useRef, useState } from 'react';

interface NoteProps {
    duration: number | undefined;
}

const Note: React.FC<NoteProps> = ({duration}) => {
    const canvas: React.LegacyRef<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
    const canvas2 = useRef<HTMLCanvasElement>(null);
    const [wtf, setWtf] = useState<number>(-1);

    useEffect(() => {
        if (duration)
            setWtf(duration);
        if (canvas.current !== null) {
            let ctx = canvas.current.getContext('2d');
            if (ctx) {
                ctx.beginPath();
                ctx.lineWidth = 3;
                (wtf === 4 ? ctx.strokeStyle = 'black': ctx.fillStyle = 'black');
                //ctx.ellipse(16, 10, 13, 7, 0, 0, 2* Math.PI, false);
                //ctx.ellipse(16, 10, 11, 7, 0, 0, 2* Math.PI, false);
                //ctx.ellipse(16, 10, 10, 7, 0, 0, 2* Math.PI, false);
                //ctx.ellipse(16, 10, 8, 7, 0, 0, 2* Math.PI, false);
                if (wtf !== 4) {
                    ctx.ellipse(15, 8, 9, 6, -Math.PI/12, 0, 2*Math.PI, false);
                    ctx.fill();
                }
                else {
                    ctx.stroke()
                }
            }
        }
        if (canvas2.current !== null) {
            let ctx2 = canvas2.current.getContext('2d');
            if (ctx2) {
                ctx2.beginPath();
                ctx2.fillStyle = 'black';
                ctx2.fillRect(0, 0, 2, 60);

                if (wtf === 1) {
                    ctx2.lineWidth = 1;
                    ctx2.beginPath();
                    ctx2.moveTo(2, 0);
                    ctx2.lineTo(10, 20);
                    ctx2.moveTo(0, 0);
                    ctx2.lineTo(10, 20);
                    ctx2.moveTo(0, 2);
                    ctx2.lineTo(10, 20);
                    ctx2.stroke();
                }
            }
        }
    }, [duration, wtf]);

    return (
        <div className='note' style={{display: 'inline-block', position: 'relative', top: '50%', transform: 'translate(0, -50%)', height: 20, width: 34}}>
            <canvas style={{display: 'inline'}} ref={canvas} height={20} width={28}>
            </canvas>
            <canvas style={{display: 'inline', position: 'relative', top: -65, left: 22}} ref={canvas2} width={20} height={50}></canvas>
        </div>
    );
}

export default Note;
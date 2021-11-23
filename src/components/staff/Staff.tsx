import React, { ReactElement, useEffect, useRef } from "react";
import "./Staff.css";

function Staff(): ReactElement {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const HEIGHT = canvasRef.current.height;
            const WIDTH = canvasRef.current.width;
            const LINE_THICKNESS = 3;

            canvasCtxRef.current = canvasRef.current.getContext("2d");
            const ctx = canvasCtxRef.current;
            ctx!.fillRect(0, 0, WIDTH, LINE_THICKNESS);
            ctx!.fillRect(
                0,
                HEIGHT / 2 - LINE_THICKNESS / 2,
                WIDTH,
                LINE_THICKNESS,
            );
            ctx!.fillRect(0, HEIGHT - LINE_THICKNESS, WIDTH, LINE_THICKNESS);
        }
    }, []);

    return (
        <div id="Staff">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}

export default Staff;

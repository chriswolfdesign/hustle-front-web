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

            drawStaffLines(ctx, HEIGHT, WIDTH, LINE_THICKNESS);
        }
    }, []);

    return (
        <div id="Staff">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}

function drawStaffLines(
    ctx: CanvasRenderingContext2D | null,
    height: number,
    width: number,
    line_thickness: number,
) {
    // top line
    ctx!.fillRect(0, 0, width, line_thickness);

    // second line from top
    ctx!.fillRect(0, height * 0.25 - line_thickness / 2, width, line_thickness);

    // middle line
    ctx!.fillRect(0, height / 2 - line_thickness / 2, width, line_thickness);

    // second line from bottom
    ctx!.fillRect(0, height * 0.75 - line_thickness / 2, width, line_thickness);

    // bottom line
    ctx!.fillRect(0, height - line_thickness, width, line_thickness);
}

export default Staff;

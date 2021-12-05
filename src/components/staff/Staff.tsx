import React, { ReactElement, useEffect, useRef } from "react";
import "./Staff.css";

function Staff(): ReactElement {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const HEIGHT = 100;
            const WIDTH = window.innerWidth - 300;
            const LINE_THICKNESS = 2;

            canvasRef.current.height = HEIGHT;
            canvasRef.current.width = WIDTH;

            canvasCtxRef.current = canvasRef.current.getContext("2d");

            if (canvasCtxRef.current !== null) {
                const ctx = canvasCtxRef.current;

                drawStaffLines(ctx, HEIGHT, WIDTH, LINE_THICKNESS);
            }
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
    drawTopStaffLine(ctx, width, line_thickness);
    drawSecondFromTopStaffLine(ctx, height, width, line_thickness);
    drawMiddleStaffLine(ctx, height, width, line_thickness);
    drawSecondFromBottomStaffLine(ctx, height, width, line_thickness);
    drawBottomStaffLine(ctx, height, width, line_thickness);
}

function drawTopStaffLine(
    ctx: CanvasRenderingContext2D | null,
    width: number,
    line_thickness: number,
) {
    if (ctx !== null) {
        ctx.fillRect(0, 0, width, line_thickness);
    }
}

function drawSecondFromTopStaffLine(
    ctx: CanvasRenderingContext2D | null,
    height: number,
    width: number,
    line_thickness: number,
) {
    if (ctx !== null) {
        ctx.fillRect(
            0,
            height * 0.25 - line_thickness / 2,
            width,
            line_thickness,
        );
    }
}

function drawMiddleStaffLine(
    ctx: CanvasRenderingContext2D | null,
    height: number,
    width: number,
    line_thickness: number,
) {
    if (ctx !== null) {
        ctx.fillRect(0, height / 2 - line_thickness / 2, width, line_thickness);
    }
}

function drawSecondFromBottomStaffLine(
    ctx: CanvasRenderingContext2D | null,
    height: number,
    width: number,
    line_thickness: number,
) {
    if (ctx !== null) {
        ctx.fillRect(
            0,
            height * 0.75 - line_thickness / 2,
            width,
            line_thickness,
        );
    }
}

function drawBottomStaffLine(
    ctx: CanvasRenderingContext2D | null,
    height: number,
    width: number,
    line_thickness: number,
) {
    if (ctx !== null) {
        ctx.fillRect(0, height - line_thickness, width, line_thickness);
    }
}

export default Staff;

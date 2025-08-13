import React, { useEffect, useRef } from 'react';
import './DepartureBoard.css';

interface Metric {
    label: string;
    value: string;
}

interface DepartureBoardProps {
    metrics: Metric[];
    startAnimation: boolean;
}

const LETTERS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.$+";

const DepartureBoard: React.FC<DepartureBoardProps> = ({ metrics, startAnimation }) => {
    const boardRef = useRef<HTMLDivElement>(null);
    const boardInstanceRef = useRef<FlipBoard | null>(null);

    const splitLabel = (label: string): [string, string?] => {
        const parts = label.split(' ');
        if (parts.length <= 2) return [label];
        const mid = Math.ceil(parts.length / 2);
        return [parts.slice(0, mid).join(' '), parts.slice(mid).join(' ')];
    };

    useEffect(() => {
        if (boardRef.current && startAnimation && !boardInstanceRef.current) {
            // Calculate the maximum width needed for any row
            const maxWidth = Math.max(...metrics.map(metric => 
                metric.label.length + metric.value.length + 2 // +2 for padding between label and value
            ));
            
            // Only create the board if it doesn't exist
            boardInstanceRef.current = new FlipBoard(boardRef.current, { 
                rowCount: metrics.length,
                letterCount: maxWidth
            });
            
            // Expose the board instance on the DOM element for external access
            (boardRef.current as any).__boardInstance = boardInstanceRef.current;
            
            const displayValues = metrics.map(metric => {
                const label = metric.label;
                const padding = ' '.repeat(Math.max(0, maxWidth - label.length - metric.value.length - 1));
                return `${label} ${padding}${metric.value}`;
            });
            
            boardInstanceRef.current.setValue(displayValues);
        }

        // Cleanup function
        return () => {
            if (boardInstanceRef.current) {
                // Clear any existing content
                if (boardRef.current) {
                    boardRef.current.innerHTML = '';
                    delete (boardRef.current as any).__boardInstance;
                }
                boardInstanceRef.current = null;
            }
        };
    }, [metrics, startAnimation]);

    return (
        <div className="departure-board" ref={boardRef} />
    );
};

class FlipBoard {
    private element: HTMLElement;
    private letters: Letter[][];
    private rowCount: number;
    private letterCount: number;

    constructor(element: HTMLElement, options: { rowCount?: number; letterCount?: number } = {}) {
        this.element = element;
        this.letters = [];
        this.rowCount = options.rowCount || 1;
        this.letterCount = options.letterCount || 25;

        // Clear any existing content
        this.element.innerHTML = '';

        for (let r = 0; r < this.rowCount; r++) {
            this.letters.push([]);
            const rowElement = document.createElement('div');
            rowElement.className = 'row';
            this.element.appendChild(rowElement);

            for (let l = 0; l < this.letterCount; l++) {
                const letter = new Letter();
                this.letters[r].push(letter);
                rowElement.appendChild(letter.getElement());
            }
        }
    }

    spin(): void {
        this.letters.forEach((row, i) => {
            setTimeout(() => {
                row.forEach(letter => letter.spin());
            }, 20 * i + Math.random() * 400);
        });
    }

    setValue(value: string | string[]): void {
        if (!Array.isArray(value)) value = [value];

        this.letters.forEach((row, r) => {
            const rowValue = value[r] ? value[r].toUpperCase() : '';
            row.forEach((letter, i) => {
                setTimeout(() => {
                    const letterValue = rowValue.charAt(i) || ' ';
                    letter.setValue(letterValue);
                }, 1000 * r + 12.5 * i + Math.random() * 200);
            });
        });
    }
}

class Letter {
    private element: HTMLElement;
    private bottom: HTMLElement;
    private bottomText: HTMLElement;
    private top: HTMLElement;
    private topText: HTMLElement;
    private fold: HTMLElement;
    private falling: HTMLElement;
    private fallingText: HTMLElement;
    private index: number;
    private interval: number | null;
    private stopAt: number | null;

    static DROP_TIME = 50;

    constructor() {
        this.element = document.createElement('span');
        this.element.className = 'letter';

        this.bottom = document.createElement('span');
        this.bottom.className = 'flap bottom';
        this.element.appendChild(this.bottom);

        this.bottomText = document.createElement('span');
        this.bottomText.className = 'text';
        this.bottom.appendChild(this.bottomText);

        this.top = document.createElement('span');
        this.top.className = 'flap top';
        this.element.appendChild(this.top);

        this.topText = document.createElement('span');
        this.topText.className = 'text';
        this.top.appendChild(this.topText);

        this.fold = document.createElement('span');
        this.fold.className = 'fold';
        this.element.appendChild(this.fold);

        this.falling = document.createElement('span');
        this.falling.className = 'flap falling';
        this.fold.appendChild(this.falling);

        this.fallingText = document.createElement('span');
        this.fallingText.className = 'text';
        this.fallingText.style.transitionDuration = `${Letter.DROP_TIME * 0.5}ms`;
        this.falling.appendChild(this.fallingText);

        this.index = 0;
        this.interval = null;
        this.stopAt = null;
    }

    getElement(): HTMLElement {
        return this.element;
    }

    spin(clear: boolean = true): void {
        if (clear !== false) this.stopAt = null;
        this.interval = window.setInterval(() => this.tick(), Letter.DROP_TIME * 1.1);
    }

    setValue(value: string): void {
        this.stopAt = LETTERS.indexOf(value);
        if (this.stopAt < 0) this.stopAt = 0;
        if (!this.interval && this.index !== this.stopAt) this.spin(false);
    }

    private tick(): void {
        const oldValue = LETTERS.charAt(this.index);
        const fallingStyle = this.falling.style;
        const fallingTextStyle = this.fallingText.style;

        this.index = (this.index + 1) % LETTERS.length;
        const newValue = LETTERS.charAt(this.index);

        this.fallingText.innerHTML = oldValue;
        fallingStyle.display = 'block';
        this.topText.innerHTML = newValue;

        setTimeout(() => {
            fallingTextStyle.transitionTimingFunction = 'ease-in';
            fallingTextStyle.transform = 'scaleY(0)';
        }, 1);

        setTimeout(() => {
            this.fallingText.innerHTML = newValue;
            fallingStyle.top = '-.03em';
            fallingStyle.bottom = 'auto';
            fallingTextStyle.top = '-.65em';
            fallingTextStyle.transitionTimingFunction = 'ease-out';
            fallingTextStyle.transform = 'scaleY(1)';
        }, Letter.DROP_TIME / 2);

        setTimeout(() => {
            this.bottomText.innerHTML = newValue;
            fallingStyle.display = 'none';
            fallingStyle.top = 'auto';
            fallingStyle.bottom = '0';
            fallingTextStyle.top = '0';
        }, Letter.DROP_TIME);

        if (this.index === this.stopAt) {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
    }
}

export default DepartureBoard; 
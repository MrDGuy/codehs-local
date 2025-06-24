// cs.d.ts - IntelliSense support for Canvas Shapes library

class Arc {
    constructor(radius: number, startAngle: number, endAngle: number, angleUnit: number);
}

class Circle {
    constructor(radius: number);
}

declare class Color {
    static red: string;
    static green: string;
    static blue: string;
    static createFromRGB(r: number, g: number, b: number): string;
}

declare class Console {
    println(message: any): void;
    print(message: any): void;
    readLine(prompt: string): string;
}

declare class Grid {
    constructor(rows: number, cols: number);
    get(row: number, col: number): any;
    set(row: number, col: number, value: any): void;
}

declare class Line {
    constructor(x1: number, y1: number, x2: number, y2: number);
}

declare class Oval {
    constructor(width: number, height: number);
}

declare class Polygon {
    constructor();
    addPoint(x: number, y: number): void;
}

declare class Rectangle {
    constructor(width: number, height: number);
}

declare class WebImage {
    constructor(filename: string);
    loaded(callback: () => void): void;
    setImage(filename: string): void;
    checkDimensions(): void;
    draw(context: CanvasRenderingContext2D): void;
    loadPixelData(): ImageData;
    getWidth(): number;
    getHeight(): number;
    setSize(width: number, height: number): void;
    getPixel(x: number, y: number): number[];
    getRed(x: number, y: number): number;
    getGreen(x: number, y: number): number;
    getBlue(x: number, y: number): number;
    getAlpha(x: number, y: number): number;
    setPixel(x: number, y: number, component: number, val: number): void;
    setRed(x: number, y: number, val: number): void;
    setGreen(x: number, y: number, val: number): void;
    setBlue(x: number, y: number, val: number): void;
    setAlpha(x: number, y: number, val: number): void;
    setImageData(imageData: ImageData): void;
    updateHiddenCanvas(): void;
}

declare class WebVideo {
    constructor(filename: string);
    draw(context: CanvasRenderingContext2D): void;
    getWidth(): number;
    getHeight(): number;
    setSize(width: number, height: number): void;
    setAutoplay(autoplay: boolean): void;
    setLoop(loop: boolean): void;
    setMuted(muted: boolean): void;
    play(): void;
    pause(): void;
    stop(): void;
    isPlaying(): boolean;
    isMuted(): boolean;
    onReadyToPlay(fn: () => void): void;
}

declare class Audio {
    constructor(url: string);
}

declare class Sound {
    constructor(frequency: number | string, oscillatorType?: string);
    setFrequency(frequency: number | string): void;
    setVolume(volume: number): void;
    getFrequency(): number | string;
    getVolume(): number;
    setOscillatorType(oscillatorType: string): void;
    getOscillatorType(): string;
    play(): void;
    playFor(duration: string | number): void;
    stop(): void;
    disconnect(): void;
    setEffect(effectName: string, effectValue: number): void;
}
// types/codehs-lib.d.ts
// Minimal, classroom-friendly typings for your local CodeHS-like JS library.
// This file is for EDITOR HELP ONLY (IntelliSense & squiggles). It does not change runtime behavior.

// Minimal runtime globals (since we removed the DOM lib)
declare function setTimeout(handler: (...args: any[]) => void, ms?: number, ...args: any[]): number;
declare function clearTimeout(id?: number): void;
declare const console: { log: (...args: any[]) => void };

//////////////////////////////
// Global console-style I/O //
//////////////////////////////

declare function print(...args: any[]): void;
declare function println(...args: any[]): void;
declare function readLine(prompt?: string): string;
declare function readInt(prompt?: string): number;
declare function readFloat(prompt?: string): number;
declare function readBoolean(prompt?: string):boolean;

/////////////////////////
// Timing & Animation  //
/////////////////////////

declare function setTimer(callback: () => void, milliseconds: number): number;
declare function stopTimer(timerId: number): void;
declare function setTimeout(callback: () => void, milliseconds: number): number; // alias for familiarity

/////////////////////////
// Canvas & Scene API  //
/////////////////////////

declare function getWidth(): number;
declare function getHeight(): number;
declare function add(obj: Graphic): void;
declare function remove(obj: Graphic): void;
declare function removeAll(): void;
declare function setBackground(color: string): void;

/////////////////////////
// Events (Keyboard/Mouse)
/////////////////////////

interface KeyEvent {
  key: string;       // e.g. "a", "ArrowLeft", "Enter"
  keyCode: number;   // legacy keyCode
}

interface MouseEvent2D {
  x: number;
  y: number;
}

declare function keyDownMethod(handler: (e: KeyEvent) => void): void;
declare function keyUpMethod(handler: (e: KeyEvent) => void): void;
declare function mouseDownMethod(handler: (e: MouseEvent2D) => void): void;
declare function mouseUpMethod(handler: (e: MouseEvent2D) => void): void;
declare function mouseMoveMethod(handler: (e: MouseEvent2D) => void): void;

/////////////////////////
// Base Graphic object //
/////////////////////////

interface Graphic {
  // Position & motion
  setPosition(x: number, y: number): void;
  move(dx: number, dy: number): void;
  getX(): number;
  getY(): number;

  // Appearance
  setColor(color: string): void;
  getColor(): string;
  setLineColor(color: string): void;
  setLineWidth(px: number): void;
  setRotation(degrees: number): void;
  getRotation(): number;

  // Sizing (if supported by the shape)
  getWidth?(): number;
  getHeight?(): number;

  // Visibility
  setVisible(visible: boolean): void;
  isVisible(): boolean;
}

/////////////////////////
// Shapes (rectangle.js, circle.js, oval.js, line.js, arc.js, polygon.js, text.js)
/////////////////////////

declare class Rectangle implements Graphic {
  constructor(width: number, height: number);
  // Graphic:
  setPosition(x: number, y: number): void;
  move(dx: number, dy: number): void;
  getX(): number;
  getY(): number;
  setColor(color: string): void;
  getColor(): string;
  setLineColor(color: string): void;
  setLineWidth(px: number): void;
  setRotation(degrees: number): void;
  getRotation(): number;
  setVisible(visible: boolean): void;
  isVisible(): boolean;
  // Specific:
  getWidth(): number;
  getHeight(): number;
}

declare class Circle implements Graphic {
  constructor(radius: number);
  setPosition(x: number, y: number): void;
  move(dx: number, dy: number): void;
  getX(): number;
  getY(): number;
  setColor(color: string): void;
  getColor(): string;
  setLineColor(color: string): void;
  setLineWidth(px: number): void;
  setRotation(degrees: number): void;
  getRotation(): number;
  setVisible(visible: boolean): void;
  isVisible(): boolean;
  getRadius(): number;
  setRadius(r: number): void;
  getWidth(): number;   // diameter
  getHeight(): number;  // diameter
}

declare class Oval implements Graphic {
  constructor(width: number, height: number);
  setPosition(x: number, y: number): void;
  move(dx: number, dy: number): void;
  getX(): number;
  getY(): number;
  setColor(color: string): void;
  getColor(): string;
  setLineColor(color: string): void;
  setLineWidth(px: number): void;
  setRotation(degrees: number): void;
  getRotation(): number;
  setVisible(visible: boolean): void;
  isVisible(): boolean;
  getWidth(): number;
  getHeight(): number;
}

declare class Line implements Graphic {
  constructor(x1: number, y1: number, x2: number, y2: number);
  setPosition(x: number, y: number): void; // sets start point to (x,y), preserves dx/dy
  move(dx: number, dy: number): void;
  getX(): number;      // start x
  getY(): number;      // start y
  setColor(color: string): void;
  getColor(): string;
  setLineColor(color: string): void;
  setLineWidth(px: number): void;
  setRotation(degrees: number): void;
  getRotation(): number;
  setVisible(visible: boolean): void;
  isVisible(): boolean;

  setPoint1(x: number, y: number): void;
  setPoint2(x: number, y: number): void;
  getPoint1(): { x: number; y: number };
  getPoint2(): { x: number; y: number };
  getWidth(): number;   // length
  getHeight(): number;  // 0 (for compatibility)
}

declare class Arc implements Graphic {
  // Many CodeHS arcs are defined by width/height + start/sweep (degrees)
  constructor(width: number, height: number, startAngle: number, sweepAngle: number);
  setPosition(x: number, y: number): void;
  move(dx: number, dy: number): void;
  getX(): number;
  getY(): number;
  setColor(color: string): void;
  getColor(): string;
  setLineColor(color: string): void;
  setLineWidth(px: number): void;
  setRotation(degrees: number): void;
  getRotation(): number;
  setVisible(visible: boolean): void;
  isVisible(): boolean;
  getWidth(): number;
  getHeight(): number;
  setStartAngle(degrees: number): void;
  setSweepAngle(degrees: number): void;
  getStartAngle(): number;
  getSweepAngle(): number;
}

declare class Polygon implements Graphic {
  constructor();
  setPosition(x: number, y: number): void;
  move(dx: number, dy: number): void;
  getX(): number;
  getY(): number;
  setColor(color: string): void;
  getColor(): string;
  setLineColor(color: string): void;
  setLineWidth(px: number): void;
  setRotation(degrees: number): void;
  getRotation(): number;
  setVisible(visible: boolean): void;
  isVisible(): boolean;

  addPoint(x: number, y: number): void;
  getPoints(): Array<{ x: number; y: number }>;
  getWidth(): number;
  getHeight(): number;
}

declare class Text implements Graphic {
  constructor(text: string, font?: string);
  setText(s: string): void;
  getText(): string;
  setFont(cssFont: string): void; // e.g., "20px Arial"
  getFont(): string;
  setPosition(x: number, y: number): void;
  move(dx: number, dy: number): void;
  getX(): number;
  getY(): number;
  setColor(color: string): void;
  getColor(): string;
  setLineColor(color: string): void;
  setLineWidth(px: number): void;
  setRotation(degrees: number): void;
  getRotation(): number;
  setVisible(visible: boolean): void;
  isVisible(): boolean;
  getWidth(): number;
  getHeight(): number;
}

/////////////////////////
// Images & Video (webimage.js, webvideo.js)
/////////////////////////

declare class WebImage implements Graphic {
  constructor(url: string);
  setPosition(x: number, y: number): void;
  move(dx: number, dy: number): void;
  getX(): number;
  getY(): number;
  setColor(color: string): void;        // tint or ignored
  getColor(): string;
  setLineColor(color: string): void;
  setLineWidth(px: number): void;
  setRotation(degrees: number): void;
  getRotation(): number;
  setVisible(visible: boolean): void;
  isVisible(): boolean;

  setSize(width: number, height: number): void;
  getWidth(): number;
  getHeight(): number;
  setURL(url: string): void;
}

declare class WebVideo implements Graphic {
  constructor(url: string, autoplay?: boolean);
  setPosition(x: number, y: number): void;
  move(dx: number, dy: number): void;
  getX(): number;
  getY(): number;
  setColor(color: string): void;
  getColor(): string;
  setLineColor(color: string): void;
  setLineWidth(px: number): void;
  setRotation(degrees: number): void;
  getRotation(): number;
  setVisible(visible: boolean): void;
  isVisible(): boolean;

  setSize(width: number, height: number): void;
  getWidth(): number;
  getHeight(): number;

  play(): void;
  pause(): void;
  stop(): void;
  isPlaying(): boolean;
  setLoop(loop: boolean): void;
}

/////////////////////////
// Audio (audio.js, sound.js)
/////////////////////////

// Simple file-based audio clip
declare class Audio {
  constructor(pathOrUrl: string);
  play(): void;
  pause(): void;
  stop(): void;
  setVolume(volume0to1: number): void;
  isPlaying(): boolean;
}

// Simple synth-style sound (note names or frequency)
declare class Sound {
  constructor(noteOrHz: string | number, wave?: "sine" | "square" | "triangle" | "sawtooth");
  play(): void;
  playFor(seconds: number): void;
  stop(): void;
  setVolume(volume0to1: number): void;
}

/////////////////////////
// Keyboard helpers (keyboard.js)
/////////////////////////

declare namespace Keyboard {
  function letter(ch: string): number; // returns keyCode for a-z
  const ENTER: number;
  const SPACE: number;
  const LEFT: number;
  const RIGHT: number;
  const UP: number;
  const DOWN: number;
}

/////////////////////////
// Color helpers (color.js)
/////////////////////////

declare namespace Color {
  // Named colors students commonly use
  const red: string;
  const blue: string;
  const green: string;
  const yellow: string;
  const black: string;
  const white: string;
  const gray: string;
  const orange: string;
  const purple: string;
  const pink: string;
  const cyan: string;
  const magenta: string;

  function rgb(r: number, g: number, b: number): string;              // "rgb(r,g,b)"
  function rgba(r: number, g: number, b: number, a: number): string; // "rgba(r,g,b,a)"
  function randomColor(): string;
}

/////////////////////////
// Randomizer (randomizer.js)
/////////////////////////

declare namespace Randomizer {
  function nextInt(minInclusive: number, maxInclusive: number): number;
  function nextFloat(minInclusive: number, maxExclusive: number): number;
  function nextBoolean(): boolean;
  function nextColor(): string;
  function choose<T>(...items: T[]): T;
}

/////////////////////////
// Manager / misc (manager.js, codehs-library.js)
// Keep this thin: most student work won't touch it directly.
/////////////////////////

declare namespace Program {
  function pause(): void;
  function resume(): void;
  function isPaused(): boolean;
  // Optionally expose a frame tick for advanced classes
  function onTick(handler: () => void): void;
}

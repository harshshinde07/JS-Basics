class Stopwatch {
    constructor() {
        this.start;
        this.stop;
        this.running = false;
        this.duration = 0;
    }

    start = function startCounting() {
        if (this.running) {
            throw new Error('Stopwatch already running.')
        } else {
            this.running = true;
            this.start = new Date();
        }
    }

    stop = function stopCounting() {
        if (!this.running) {
            throw new Error('Stopwatch is not running.')
        } else {
            this.stop = new Date();
            this.running = false;
            const seconds = (this.stop.getTime() - this.start.getTime()) / 1000;
            this.duration += seconds;
            console.log(this.duration);
        }
    }

    reset = function resetDuration() {
        this.duration = 0;
        this.start = null;
        this.end = null;
        this.running = false;
    }
}
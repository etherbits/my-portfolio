export class FunctionQueue {
  queue: Function[];

  constructor() {
    this.queue = [];
  }

  async enqueue(f: Function) {
    this.queue.push(f);
    if (this.isOnlyHead()) {
      this.runHead();
    }
  }

  async runHead() {
    if (this.isEmpty()) return;
    await this.queue[0]();
    this.queue.shift();
    this.runHead();
  }

  isOnlyHead() {
    return this.queue.length === 1;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

export class AnimationOrchestrator {
  currentDelay: number;

  constructor() {
    this.currentDelay = 0;
  }

  orchestrate(duration: number) {
    this.currentDelay += duration;
    return { duration, delay: this.currentDelay };
  }
}

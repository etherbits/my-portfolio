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
  orchestrationDelay: number;

  constructor(currentDelay = 0, orchestrationDelay = 0) {
    this.currentDelay = currentDelay;
    this.orchestrationDelay = orchestrationDelay;
  }

  orchestrate(duration: number) {
    const transition = { duration, delay: this.currentDelay };
    this.currentDelay += duration;
    return transition;
  }

  getCurrentDelay() {
    return this.currentDelay;
  }
}

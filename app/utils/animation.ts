export class FuncQueue {
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

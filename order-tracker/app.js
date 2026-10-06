console.log("Welcome to the Order Tracker App!");

class OrderHistoryStack {
  constructor() {
    this.items = [];
  }

  push(order) {
    this.items.push(order);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    const index = this.items.length - 1;
    console.log(" index:", index);
    return this.items[index];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class OrderQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(order) {
    this.queue.push(order);
  }

  dequeue() {
    return this.queue.shift();
  }

  front() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  isFull() {
    return this.queue.length >= 10;
  }
}

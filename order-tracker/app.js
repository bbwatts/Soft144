console.log("Welcome to the Order Tracker App!");

class OrderHistoryStack {
  constructor() {
    this.items = [];
  }

  add(order) {
    this.items.push(order);
  }

  remove() {
    return this.items.pop();
  }

  look() {
    const index = this.items.length - 1;
    console.log(" index:", index);
    return this.items[index];
  }

  count() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class OrderQueue {
  constructor(capacity) {
    //precondition
    if (capacity <= 0 || !Number.isInteger(capacity)) {
      throw new Error("Capacity must be a positive integer");
    }
    //postcondition
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }

  isFull() {
    return this.count === this.capacity;
  }

  isEmpty() {
    return this.count === 0;
  }

  add(order) {
    //precondition
    if (this.isFull()) {
      throw new Error("Queue is full");
    }

    //postcondition
    this.items[this.tail] = order;
    //update tail and count
    const nextTail = (this.tail + 1) % this.capacity;
    console.log("nextTail:", nextTail);
    this.tail = nextTail;
    this.count++;
  }

  remove() {
    //precondition
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    //postcondition
    const order = this.items[this.head];
    this.items[this.head] = undefined;
    const nextHead = (this.head + 1) % this.capacity;
    console.log("nextHead:", nextHead);
    this.head = nextHead;
    this.count--;
    return order;
  }
}

const orderHistory = new OrderHistoryStack();
console.log("Order history stack created:", orderHistory);
const orderQueue = new OrderQueue(5);
console.log("Order queue created with capacity 5:", orderQueue);
console.log("size of order queue:", orderQueue.count);
console.log("is order queue empty?", orderQueue.isEmpty());
console.log("is order queue full?", orderQueue.isFull());
console.log("size of order history stack:", orderHistory.count());
console.log("is order history stack empty?", orderHistory.isEmpty());

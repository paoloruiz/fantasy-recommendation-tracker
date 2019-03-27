export default class {
  constructor(size = 10) {
    this.RING_SIZE = size;
    this.RING_BUFFER = Array(this.RING_SIZE).fill(null);
    this.currentIndex = 0;
  }

  push(item) {
    this.RING_BUFFER[this.currentIndex] = item;
    this.currentIndex = (this.currentIndex + 1) % this.RING_SIZE;
  }

  pop() {
    this.currentIndex =
      (this.currentIndex + (this.RING_SIZE - 1)) % this.RING_SIZE;
    const item = this.RING_BUFFER[this.currentIndex];
    this.RING_BUFFER[this.currentIndex] = null;
    return item;
  }
}

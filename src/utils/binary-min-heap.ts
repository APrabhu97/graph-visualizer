export class BinaryMinHeap<T> {
  private heap: (T | null)[] = [null];
  private idIdxMap = new Map<any, number>();
  private key: keyof T;
  private id: keyof T;

  constructor(key: keyof T, id: keyof T, values: T[]) {
    this.key = key;
    this.id = id;
    values.forEach((value) => this.insert(value));
  }

  length(): number {
    return this.heap.length - 1;
  }

  getMin(): T | null {
    return this.heap.length > 1 ? this.heap[1] : this.heap[0];
  }

  insert(node: T): void {
    this.heap.push(node);
    this.heapifyUp(node);
  }

  delete(node: T): void {
   const e = this.heap.splice(this.idIdxMap.get(node[this.id])!, 1);
  }

  private heapifyUp(node: T) {
    if (this.heap.length > 2) {
      let currentIdx = this.heap.length - 1;
      let parentIdx = Math.floor(currentIdx / 2);
      while (
        currentIdx > 1 &&
        this.heap[parentIdx]![this.key] > this.heap[currentIdx]![this.key]
      ) {
        // this.swap(heap[parentIdx], heap[currentIdx]);
        [this.heap[parentIdx], this.heap[currentIdx]] = [
          this.heap[currentIdx],
          this.heap[parentIdx],
        ];
        currentIdx = parentIdx;
        parentIdx = Math.floor(currentIdx / 2);
      }
      this.idIdxMap.set(node[this.id], currentIdx);
    }
  }

  popMin(): T | null {
    const min = this.getMin();
    this.heap = this.heapifyDown(this.heap);
    return min;
  }

  private heapifyDown(heap: (T | null)[]): (T | null)[] {
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length === 3) {
        if (heap[1]![this.key] > heap[2]![this.key]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return heap;
      }
      let currentIdx = 1;
      let leftChildIdx = currentIdx * 2;
      let rightChildIdx = currentIdx * 2 + 1;
      while (
        (heap[leftChildIdx] &&
          heap[currentIdx]![this.key] > heap[leftChildIdx]![this.key]) ||
        (heap[rightChildIdx] &&
          heap[currentIdx]![this.key] > heap[rightChildIdx]![this.key])
      ) {
        if (
          heap[leftChildIdx] &&
          heap[currentIdx]![this.key] > heap[leftChildIdx]![this.key]
        ) {
          [heap[currentIdx], heap[leftChildIdx]] = [
            heap[leftChildIdx],
            heap[currentIdx],
          ];
          currentIdx = leftChildIdx;
        } else {
          [heap[currentIdx], heap[rightChildIdx]] = [
            heap[rightChildIdx],
            heap[currentIdx],
          ];
          currentIdx = rightChildIdx;
        }
        leftChildIdx = currentIdx * 2;
        rightChildIdx = currentIdx * 2 + 1;
      }
    }
    return heap;
  }
}

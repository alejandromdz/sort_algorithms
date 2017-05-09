class MinHeap {
    public heap: Array<number> = [];
    private swap(a, b) {
        var temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }
    private bubbleUp(pos) {
        if (pos <= 0) {
            return;
        }
        let parent = Math.floor((pos - 1) / 2);
        if (this.heap[pos] < this.heap[parent]) {
            this.swap(pos, parent);
            this.bubbleUp(parent);
        }
    }
    private bubbleDown(pos) {
        
        let left = 2 * pos + 1;
        let right = left + 1;
        let shortest = pos;
        
        if (left < this.heap.length && this.heap[left] < this.heap[shortest]) {
            shortest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[shortest]) {
            shortest = right;
        }
        if (shortest !== pos) {
            this.swap(shortest, pos);
            this.bubbleDown(shortest);
        }
    }
    public pop() {
        if (this.heap.length === 0) return null;

        let lastIndex = this.heap.length - 1;
        this.swap(lastIndex, 0);
        let value = this.heap.pop();
        if (lastIndex > 0)
            this.bubbleDown(0)
        return value;
    }
    public push(value: number) {
        this.heap.push(value);
        let lastIndex = this.heap.length - 1;
        this.bubbleUp(lastIndex);
    }
    public getLength(){
        return this.heap.length;
    }
}

let minHeap = new MinHeap();
let testArray=[4,2,5,7,3,2,6,9,4,3,0,6,5,8];
testArray.forEach(elem=>minHeap.push(elem))


let res3=[];

while(minHeap.getLength()>0){
    res3.push(minHeap.pop());
}
console.log(res3);
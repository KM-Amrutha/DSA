class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(vertex, distance) {
        this.heap.push({ vertex, distance });
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex].distance <= this.heap[index].distance) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify(0);
        return min;
    }

    heapify(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;

        if (left < this.heap.length && this.heap[left].distance < this.heap[smallest].distance) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right].distance < this.heap[smallest].distance) {
            smallest = right;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapify(smallest);
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight }); // Undirected Graph
    }

    dijkstra(start, end) {
        let distances = {};
        let previous = {};
        let minHeap = new MinHeap();

        // Initialize distances and previous nodes
        for (let vertex in this.adjacencyList) {
            distances[vertex] = Infinity;
            previous[vertex] = null;
        }

        distances[start] = 0;
        minHeap.insert(start, 0);

        while (!minHeap.isEmpty()) {
            let { vertex: current, distance: currentDist } = minHeap.extractMin();

            if (current === end) {
                let path = [];
                while (current) {
                    path.push(current);
                    current = previous[current];
                }
                return path.reverse(); // Return shortest path
            }

            for (let neighbor of this.adjacencyList[current]) {
                let { node, weight } = neighbor;
                let newDist = currentDist + weight;

                if (newDist < distances[node]) {
                    distances[node] = newDist;
                    previous[node] = current;
                    minHeap.insert(node, newDist);
                }
            }
        }

        return "No path found";
    }
}

// Example Usage:
const g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdge("A", "B", 1);
g.addEdge("A", "C", 4);
g.addEdge("B", "D", 2);
g.addEdge("C", "D", 3);

console.log(g.dijkstra("A", "D")); // Output: ['A', 'B', 'D']


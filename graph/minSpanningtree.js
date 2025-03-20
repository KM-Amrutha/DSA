// Prim’s Algorithm (Using Min Heap)
// Step 1: Start from any node, use a Min Heap to always pick the smallest edge.
// Step 2: Grow the tree by adding the minimum-weight edge from the MST-set to the non-MST set.
// Step 3: Stop when all vertices are included.

// Kruskal’s Algorithm – Greedy approach, sorts edges by weight.
// Prim’s Algorithm – Uses a priority queue (Min Heap), works like Dijkstra.


class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this.heap.sort((a, b) => a.weight - b.weight);
    }

    extractMin() {
        return this.heap.shift();
    }

    size() {
        return this.heap.length;
    }
}

class PrimGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    primMST(start) {
        let minHeap = new MinHeap();
        let visited = new Set();
        let mst = [];
        let totalWeight = 0;

        minHeap.insert({ node: start, weight: 0, parent: null });

        while (minHeap.size()) {
            let { node, weight, parent } = minHeap.extractMin();

            if (visited.has(node)) continue;
            visited.add(node);
            if (parent !== null) {
                mst.push({ from: parent, to: node, weight });
                totalWeight += weight;
            }

            for (let neighbor of this.adjacencyList[node]) {
                if (!visited.has(neighbor.node)) {
                    minHeap.insert({ node: neighbor.node, weight: neighbor.weight, parent: node });
                }
            }
        }

        return { mst, totalWeight };
    }
}

// Example Usage:
const graph2 = new PrimGraph();
graph2.addEdge("A", "B", 4);
graph2.addEdge("A", "C", 2);
graph2.addEdge("B", "C", 5);
graph2.addEdge("B", "D", 10);
graph2.addEdge("C", "D", 3);
graph2.addEdge("C", "E", 7);
graph2.addEdge("D", "E", 8);

const result2 = graph2.primMST("A");
console.log("MST Edges:", result2.mst);
console.log("Total Weight:", result2.totalWeight);

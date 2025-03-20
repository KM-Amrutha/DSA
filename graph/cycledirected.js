class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        this.adjacencyList[vertex1].add(vertex2); // Directed edge
    }

    hasCycleDirected() {
        let visited = new Set();
        let recStack = new Set();

        const dfs = (node) => {
            if (!visited.has(node)) {
                visited.add(node);
                recStack.add(node);

                for (let neighbor of this.adjacencyList[node]) {
                    if (!visited.has(neighbor) && dfs(neighbor)) return true;
                    else if (recStack.has(neighbor)) return true; // Cycle detected
                }
            }
            recStack.delete(node);
            return false;
        };

        for (let vertex in this.adjacencyList) {
            if (!visited.has(vertex)) {
                if (dfs(vertex)) return true;
            }
        }
        return false;
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'A'); // Cycle

console.log(graph.hasCycleDirected()); // true

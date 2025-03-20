class Graph{
    constructor() {
        this.adjucencylist = {}
    }

    addvertex(vertex){
        if(!this.adjucencylist[vertex]){
            this.adjucencylist[vertex] = new Set()
        }
    }


    addedges(vertex1,vertex2){
        if(!this.adjucencylist[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjucencylist[vertex2]){
            this.addvertex(vertex2)
        }

        this.adjucencylist[vertex1].add(vertex2)
        this.adjucencylist[vertex2].add(vertex1)

    }

    hasedge(vertex1,vertex2){
        return(this.adjucencylist[vertex1].has(vertex2) && 
                this.adjucencylist[vertex2].has(vertex1))
    }

    removeedge(vertex1,vertex2){
        this.adjucencylist[vertex1].delete(vertex2)
        this.adjucencylist[vertex2].delete(vertex1)
    }

    removevertex(vertex){
        if(!this.adjucencylist[vertex]){
            return
        } 
            for(let adjecency of this.adjucencylist[vertex]){
                this.removeedge(vertex,adjecency)
            }
            delete this.adjucencylist[vertex]
        
    }
    bfs(start) {
        if (!this.adjucencylist[start]) {
            return;
        }
    
        let queue = [start];
        let visited = new Set();
        visited.add(start);
    
        while (queue.length) {
            let vertex = queue.shift();
            console.log(vertex);
    
            for (let neighbor of this.adjucencylist[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }


    dfs(start, visited = new Set()) {
        if (!this.adjucencylist[start]) {
            return;
        }
    
        visited.add(start);
        console.log(start);
    
        for (let neighbor of this.adjucencylist[start]) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited);
            }
        }
    }
    
    getDegree(vertex) {
        if (!this.adjucencylist[vertex]) {
            console.log(`${vertex} is not present in the graph`);
            return;
        }
        return this.adjucencylist[vertex].size;
    }
        

    
    
   display(){
    for(let vertex in this.adjucencylist){
        console.log(vertex + "=>" + [...this.adjucencylist[vertex]])
    }
   }


shortestPathBFS(start, end) {
    if (!this.adjucencylist[start] || !this.adjucencylist[end]) {
        return "Start or End vertex not found!";
    }

    let queue = [[start]]; // Stores paths instead of just nodes
    let visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
        let path = queue.shift(); // Remove first path from queue
        let node = path[path.length - 1]; // Last node in the current path

        if (node === end) return path; // Found shortest path

        for (let neighbor of this.adjucencylist[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor]); // Store new path
            }
        }
    }
    return "No path found";
}




}

const graph =new Graph()
graph.addvertex('A')
graph.addvertex('B')
graph.addvertex('C')
graph.addvertex('D')

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.display()

console.log(graph.hasedge('A','B'))

console.log(graph.shortestPathBFS('A','C'))

console.log(graph.dijkstra('A'));



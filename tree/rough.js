// // class Node{
// //     constructor(value){
// //         this.value = value
// //         this.left = null
// //         this.right = null
// //     }
// // }

// // class binarysearhctree{
// //     constructor(){
// //         this.root = null;
// //     }

// //     isempty(){
// //         return this.root == null
// //     }

// //     insertvalue(value){
// //         const newnode = new Node(value)
// //         if(this.isempty()){
// //             this.root = newnode
// //         }
// //         else {
// //             this.insert(this.root,newnode)

// //         }
// //     }
// //            insert(root,newnode){
// //             if(newnode.value < root.value){
// //                 if(root.left == null){
// //                     root.left = newnode
// //                 } else {
// //                     this.insert(root.left,newnode)
// //                 }
// //             } else {
// //                 if(root.right == null){
// //                     root.right = newnode
// //                 } else {
// //                     this.insert(root.right,newnode)
// //                 }
// //             }

// //           }

// //           search(root,value){
// //             if(!root){
// //                 return false
// //             } else {
// //                 if(root.value == value){
// //                     return true
// //                 } else if( value< root.value)  {
// //                     return this.search(root.left,value)

// //                 } else{
// //                     return this.search(root.right,value)
// //                 }
// //             }
// //           }

// //           preorder(root){
// //             if(root){
// //                 console.log(root.value)
// //                 this.preorder(root.left)
// //                 this.preorder(root.right)
// //             }
// //           }

// //           inorder(root){
// //             if(root){
// //                 this.inorder(root.left)
// //                 console.log(root.value)
// //                 this.inorder(root.right)
// //             }
// //           }
// //             postorder(root){
// //                 if(root){
// //                 this.postorder(root.left)
// //                 this.postorder(root.right)
// //                 console.log(root.value)
// //                 }
// //             }



// //           bfs(){
// //             const arr =[]
// //             arr.push(this.root)
// //            while(arr.length){
// //             let curr = arr.shift()
// //             console.log(curr.value)

// //             if(curr.left){
// //                 arr.push(curr.left)
// //             }
// //             if(curr.right){
// //                 arr.push(curr.right)
// //             }
// //           }
// //         }

        
// //         min(root){
// //             if(!root.left){
// //                 return root.value
 
// //             } else {
// //                 return this.min(root.left)
// //             }
// //         }

// //         max(root){
// //             if(!root.right){
// //                 return root.value
// //             } else {
// //                 return this.max(root.right)
// //             }
// //         }







// // }

// // const bts = new binarysearhctree()
// // console.log("if it is empty: ",bts.isempty())
// // bts.insertvalue(10)
// // bts.insertvalue(5)
// // bts.insertvalue(15)
// // bts.insertvalue(3)
// // bts.insertvalue(7)

// // // console.log(bts.search(bts.root,30))
// // // console.log(bts.search(bts.root,15))

// // // bts.preorder(bts.root)
// // // bts.inorder(bts.root)
// // // bts.postorder(bts.root)
// // // bts.bfs(bts.root)
// // // console.log(bts.min(bts.root))
// // // console.log(bts.max(bts.root))


// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class binarysearchtree{
//     constructor(){
//         this.root = null
//     }

//     isempty(){
//         return this.root == null
//     }

//     insertvalue(value){
//         const newnode = new Node(value)
//         if(this.isempty()){
//             this.root = newnode

//         } else {
//             this.insert(this.root,newnode)
//         }
//     }

//     insert(root,newnode){
//         if(newnode.value< root.value){
//             if(root.left == null){
//                 root.left = newnode
//             } else {
//                 this.insert(root.left,newnode)
//             }

//         } else{
//             if(root.right == null){
//                 root.right = newnode
//             } else {
//                 this.insert(root.right,newnode)
//             }
//         }

//     }

//     search(root,value){
//         if(!root){
//             return false
//         } else {
//             if(root.value == value){
//                 return true
//             } else if(value < root.value){
//                  return this.search(root.left,value)
//             } else {
//                return  this.search(root.right,value)
//             }
//         }
//     }

//     preorder(root){
//        if(root){
//         console.log(root.value)
//         this.preorder(root.left)
//         this.preorder(root.right)
//        }
//     }
// inorder(root){
//     if(root){
//         this.inorder(root.left)
//         console.log(root.value)
//         this.inorder(root.right)
//     }
// }
// postorder(root){
//     if(root){
//         this.postorder(root.left)
//         this.postorder(root.right)
//         console.log(root.value)
//     }
// }

// min(root){
//     if(!root.left){
//         return  root.value
//     } else {
//         return  this.min(root.left)
//     }
// }
//     max(root){
//         if(!root.right){
//             return root.value
//         } else {
//           return  this.max(root.right)
//         }
//     }

// bfs(){
//     const arr=[]
//     arr.push(this.root)
//     while(arr.length){
//         let curr = arr.shift()
//         console.log(curr.value)
    
//     if(curr.left){
//         arr.push(curr.left)
//     }
//     if(curr.right){
//         arr.push(curr.right)
//     }
// }
// }



// delele(value){
//     this.root = this.deleltenode(this.root,value)
// }

// deleltenode(root,value){
//     if(root.value == null){
//         return root
//     }
//     if(value< root.value){
//         root.left = this.deleltenode(root.left,value)
//     } else if(value > root.value){
//         root.right = this.deleltenode(root.right,value)
//     }

//     else{
//         if(!root.right && !root.left){
//             return null
//         }
//        if(!root.left){
//         return root.right
//        }
//        else if(!root.right){
//         return root.left
//        }
       
//         root.value = this.min(root.right)
//         root.right = this.deleltenode(root.right,root.value)
//     }
// return root

// }

// }

// const bst = new binarysearchtree()
// bst.insertvalue(20)
// bst.insertvalue(12)
// bst.insertvalue(25)
// bst.insertvalue(30)

// console.log(bst.search(bst.root,25))

class graph{
    constructor(){
        this.adjecencylist = {}
    }

    addvertex(vertex){
        if(!this.adjecencylist[vertex]){
            this.adjecencylist[vertex] = new Set()
        }
    }
addedges (vertex1,vertex2){
    if(!this.adjecencylist[vertex1]){
        this.adjecencylist[vertex1]
    }

    if(!this.adjecencylist[vertex2]){
        this.adjecencylist[vertex2]
    }

    this.adjecencylist[vertex1].add(vertex2)
    this.adjecencylist[vertex2].add(vertex1)
}

hasedge(vertex1,vertex2){
return (this.adjecencylist(vertex1).has(vertex2) &&
this.adjecencylist(vertex2).has(vertex1))

}

bfs(start){
    if(this.adjecencylist[start]){
        return 
    }
    let que = [start]
    let visited = new Set()
    visited.add(start)
    while(que.length){
        let vertex = que.shift()

        console.log(vertex)
for(let neighbour of this.adjecencylist[vertex]){
    if(!visited.has(neighbour)){
        visited.add(neighbour)
        que.push(neighbour)
    }
}

    }
}


dfs(start,visited = new Set()){
    if(!this.adjecencylist[start]){
        return
    }

    visited.add(start)
    console.log(start)

    for(let neighbor in this.adjecencylist[start]){
       if(!visited.has(neighbor)){
       this.dfs(neighbor,visited)
       }
    }

}



display(){
    for(let vertex in this.adjecencylist){
        console.log(vertex + "=>"+[...this.adjecencylist[vertex]])
    }
}

}

const graph = new Graph()
graph.addvertex('A')
graph.addvertex('B')
graph.addvertex('C')

graph.addedges('A','B')
graph.addedges('B','C')

graph.display()
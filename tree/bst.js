class Node{
    constructor(value){
        this.value= value
        this.left = null
        this.right = null
    }
}

class binarysearchtree{
    constructor(){
        this.root= null
    }

    isempty(){
        return this.root == null
    }

    insertvalue(value){
        const newnode = new Node(value)
        if(this.isempty()){
            this.root = newnode
        }else {
            this.insert(this.root,newnode)
        }
    }

       insert(root,newnode){
        if(newnode.value< root.value){
            if(root.left == null){
                root.left = newnode
            } else {
                this.insert(root.left,newnode)
            }
        } else {
            if(root.right == null){
                root.right= newnode
            } else {
                this.insert(root.right,newnode)
            }
        }
       }

       search(root,value){
        if(!root){
            return false
        } 
        else {
            if(root.value == value){
                return true
            } else if(value< root.value){
                return this.search(root.left,value)

            } else {
                return this.search(root.right,value)
            }
        }
    }

    preorder(root){
        if(root){
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
      }

      inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
      }
        postorder(root){
            if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value)
            }
        }

        min(root){
            if(!root.left){
                return  root.value
            } else {
                return  this.min(root.left)
            }
        }
            max(root){
                if(!root.right){
                    return root.value
                } else {
                  return  this.max(root.right)
                }
            }
        



        bfs(){
            const arr = []
            arr.push(this.root)
            while(arr.length){
                let curr = arr.shift()
                console.log(curr.value)
                if(curr.left){
                    arr.push(curr.left)
                }
                if(curr.right){
                    arr.push(curr.right)

                }
            }
        }



delete(value){
    this.root = this.deletenode(this.root,value)

}
deletenode(root,value){
    if(root.value == null){
        return root
    } 
    if(value < root.value){
        root.left = this.deletenode(root.left,value)
    } 
     else if(value > root.value){
        root.right= this.deletenode(root.right,value)
    } else {
        
        if(!root.left && !root.right){
            return null
        } 
         if(!root.left) {
            return root.right

        } else if(!root.right){
            return root.left
        } 
        root.value = this.min(root.right)
       root.right = this.deletenode(root.right,root.value)
        }
        return root
    }

    displayLeaf(root) {
        if (root) {
          if (!root.left && !root.right) {
            console.log(root.value);
          }
          this.displayLeaf(root.left);
          this.displayLeaf(root.right);
        }
      }
      
 findlargest(root){
    if(!root){
        console.log('no root')
        return 
    } 
    while(root.right){
        root = root.right
    }
    console.log('largest value is:', root.value)
  }


    findSecondLargest(root) {
        if (!root || (!root.left && !root.right)) {
            throw new Error("Tree must have at least two nodes.");
        }
    
        let parent = null;
        let current = root;
    
        // Find the largest node (rightmost node)
        while (current.right) {
            parent = current; // Store the second largest candidate
            current = current.right;
        }
    
        // Case 1: If the largest node has a left subtree,
        // the second largest is the rightmost node of that subtree.
        if (current.left) {
            current = current.left;
            while (current.right) {
                current = current.right;
            }
            return current.value;
        }
    
        // Case 2: If the largest node has no left subtree,
        // the second largest is simply its parent.
        return parent.value;
    }


getheight(root){
        if(!root){
            return 0;
        }
       let left = this.getheight(root.left)
       let right= this.getheight(root.right)

      return Math.max(left,right)+1
    }

    isBalanced(root = this.root) {
        if (!root) return true; // An empty tree is balanced

        let leftHeight = this.getheight(root.left);
        let rightHeight = this.getheight(root.right);

        if (Math.abs(leftHeight - rightHeight) > 1) return false; // If the difference is more than 1, it's unbalanced

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }


    
    findHeight(root, value) {
        if (!root) return -1; // Node not found
    
        if (root.value === value) {
            return this.getheight(root);
        }
    
        return value < root.value
            ? this.findHeight(root.left, value)
            : this.findHeight(root.right, value);
    }
    
    
    // in order aanu order maatttam, adhyam left aanel smallset, right anel largset
getNthElement(root, pos, arr = []) {
    if (!root) return; 
    this.getNthElement(root.left, pos, arr);
    arr.push(root.value);
    this.getNthElement(root.right, pos, arr);
  
    return arr[pos - 1]; 
  }

  //2 bsts  are same

  areSameBSTs(root1, root2) {
        
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    if (root1.value !== root2.value) return false;
  
   
    return (
      this.areSameBSTs(root1.left, root2.left) &&
      this.areSameBSTs(root1.right, root2.right)
    );
  }

      
isvalid(root, min= -Infinity,max = Infinity){
        if(!root){  
          return true
        }
        if((root.value < min) || (root.value >max)){
          return false 
      
        }
        return ((this.isvalid(root.left,min,root.value))&&
        (root.right,root.value,max))
      }
      


kthSmallest(root, k, count = { value: 0 }) {
    if (!root) return null;
    let left = this.kthSmallest(root.left, k, count);
    if (left !== null) return left;
    count.value++; 
    if (count.value === k) return root.value; 

    return this.kthSmallest(root.right, k, count);
}


getkthlargest(root, k, count = { value: 0 }) {
    if (!root) return null;

    let right = this.getkthlargest(root.right, k, count);
    if (right !== null) return right;

    count.value++;
    if (count.value === k) return root.value;

    return this.getkthlargest(root.left, k, count);
}

lowestcommonancestor(root, p, q) {
    while (root) {
        if (p < root.value && q < root.value) {
            root = root.left;
        } else if (p > root.value && q > root.value) {
            root = root.right;
        } else {
            return root.value; // Found LCA
        }
    }
    return null;
}

getdegree(root, value) {
    let node = this.search(root, value);
    if (!node) return -1;


    let degree = 0;
    if (node.left) degree++; 
    if (node.right) degree++; 

    return degree;
}

countSingleChild(root) {
    if (!root) return 0;

    let count = 0;

    // Check if the node has exactly one child
    if ((root.left && !root.right) || (!root.left && root.right)) {
        count = 1;
    }

    // Recursively count in left and right subtrees
    return count + this.countSingleChild(root.left) + this.countSingleChild(root.right);
}

sortedArrayToBST(arr, start = 0, end = arr.length - 1) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let node = new Node(arr[mid]);

    // Recursively construct left and right subtrees
    node.left = this.sortedArrayToBST(arr, start, mid - 1);
    node.right = this.sortedArrayToBST(arr, mid + 1, end);

    return node;
}   
}


function findDepthBSTIterative(root, target) {
    let depth = 0;
    while (root) {
        if (root.value === target) return depth;

        if (target < root.value) {
            root = root.left;
        } else {
            root = root.right;
        }
        depth++;
    }
    return -1; // Node not found
}

console.log(findDepthBSTIterative(root, 7)); // Output: 2
console.log(findDepthBSTIterative(root, 12)); // Output: 2
console.log(findDepthBSTIterative(root, 10)); // Output: 0
console.log(findDepthBSTIterative(root, 30)); // Output: -1

const bts = new binarysearchtree()
console.log("if it is empty: ",bts.isempty())
bts.insertvalue(10)
bts.insertvalue(5)
bts.insertvalue(15)
bts.insertvalue(3)
// bts.insertvalue(7)

// console.log(bts.search(bts.root,30))
// console.log(bts.search(bts.root,15))

// bts.preorder(bts.root)
// bts.inorder(bts.root)
// bts.postorder(bts.root)
// bts.bfs(bts.root)

// bts.bfs()

// bts.delete(15)
// bts.delete(5)
bts.bfs()
console.log(bts.findSecondLargest(bts.root))




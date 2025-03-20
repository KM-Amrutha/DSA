const arr = [1, 7, 5, 6, 9];
const temp = [];

function pop(arr) {
    if (arr.length > 0) {
        temp.push(arr.pop());
    }
    return arr;
}

function undo(arr) {
    if (temp.length > 0) {
        arr.push(temp.pop());  
    }
    return arr;
}

function redo(arr) {
    if (temp.length > 0) {
        arr.push(temp.pop()); 
    }
    return arr;

}


console.log(pop(arr));  // Removes last element (9) → arr = [1, 7, 5, 6]
console.log(pop(arr));  // Removes last element (6) → arr = [1, 7, 5]
console.log(undo(arr)); // Restores 6 back → arr = [1, 7, 5, 6]
console.log(redo(arr)); // Restores 9 back → arr = [1, 7, 5]

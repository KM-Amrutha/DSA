class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }
isempty(){
    return this.size == 0
}
 getvalue(){
    return this.size
 }

 prepend(value){
    const node = new Node(value);
    if(this.isempty()){
        this.head = node

    } else{
          node.next = this.head
        this.head = node
}
    this.size++

 }

 append(value){
    const node = new Node(value)
    if(this.isempty()){
        this.head = node
    } 
    else {
    let curr = this.head
    while(curr.next){
        curr = curr.next;
    }
    curr.next = node
 }
 this.size++
 }

 print(){
    if(this.isempty()){
        return null
    } else {
    let curr = this.head
    let value = '';
    while(curr){
        value += `${curr.value} `
        curr = curr.next
    }
    console.log('value is : ', value)
 }
}
}




function palindrome(pal){
    const list1= new linkedlist
    const list2 = new linkedlist

    for(let i=0;i<pal.length;i++){
        list1.prepend(pal[i])
        list2.append(pal[i])
        
    }

let curr1 = list1.head
let curr2 = list2.head

while(curr1 && curr2){
    if(curr1.value !== curr2.value){

        list1.print()
        list2.print()
        return false
        
    } 
        curr1 = curr1.next
        curr2 = curr2.next
}
    
    return true
}

console.log(palindrome("malayalam"))

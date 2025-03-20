class Node{
    constructor(value){
    this.value = value
    this.next = null
    // this.tail = null
}
}

class linkedlist{
    cosntructor(){
        this.head = null
        this.size =0
    }

    isempty(){
        return this.size == 0
    }
     getvalue(){
        return this.size
     }

append(value){
    const node = new Node(value)
    if(this.isempty()){
        this.head = node
     } else {
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = node


     }
this.size++
}

prepend(value){
    const node = new Node(value)
    if(this.isempty()){

this.head = node
    } else {
        node.next = this.head
        this.head = node 

    }
    this.size++

}


print(){
    if(this.isempty()){
        console.log('its an empty aray')
        return  null
    }
    else {
           
           let curr = this.head
           let value = '';
           while(curr){
            value += `${curr.value} `
            curr = curr.next
        

           }
           console.log('values are: ',value)

    }
}
}
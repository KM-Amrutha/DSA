class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linked {
    constructor(){
        this.head = null
        this.tail = null
        this.size =0
    }
    isempty(){
        return this.size ==0
    }
    getvalue(){
        return this.size
    }

    print(){
        if(this.isempty()){
            console.log('its empty')
            return null
        }
const curr = this.head
let value =''
while(curr){
    value += `${curr.value} `
    curr = curr.next
}

console.log('value is: ', value)

    }


 prepend(value){
    const node = new Node(value)
    if(this.isempty()){
        this.head = node
        this.tail = node
    } else {

        node.next = this.head
        this.head = node
    }
    this.size++
    }

append(value){
    const node = new Node(value)
    if(this.isempty()){
        this.head = node
        this.tail = node
    }

    else {

        this.tail.next = node
        this.tail = node

    }
    this.size++

}

removefront(){
    if(this.isempty()){
        this.head = null
    } else {
        let value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

}

removeback(){
    if(this.isempty()){
        return null
    }
    if(this.size == 1){
        this.head = null
        this.tail= null
    }
    else {
        let prev = this.head
        while(prev.next != tail){
            prev = prev.next
        }
        prev.next = null
        this.tail = prev

        
    }
    this.size--
    return value

}
}


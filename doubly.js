class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.tail = null
        this.size =0;
    }

    isempty(){
        return this.size ==0
    }

    getvalue(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
if(this.isempty){
    this.head = node
    this.tail= node
} else {
   node.next = this.head
   this.head.prev = node
    this.head = node

}
 this.size++


    }

    append(value){
        const node = new Node(value)
        if(this.isempty()){
            this.head = node
            this.tail = node
        } else {

this.tail.next = node
node.prev = this.tail
this.tail = node
        }
        this.size++
    }


reverse (){
    let curr = this.head
    let prev = null
  while(curr){
    let next = curr.next
    curr.next = prev
    curr.prev = next
    prev = curr
    curr = next
  }
this.tail = this.head
this.head = prev

}




    print(){
        if(this.isempty()){
            console.log('its empty')
            return null
        } else {
            let curr = this.head
            let value = '';
            while(curr.next){
value += `${curr.value} `
curr = curr.next

            }
            console.log('values are: ', value)


        }
    }





}
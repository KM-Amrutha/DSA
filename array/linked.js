class Node{
    constructor(value){
        this.value =value;
        this.next = null

    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.size = 0;
    }

    isempty(){
        return this.value == 0
    }

    getvalue(){
        return this.value
    }

    prepend(value){
    const node = new Node(value)
    if(this.isempty()){
        this.head = node
    }
      else {
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
    else{

        let curr = this.head;
        while(curr.next){
            curr = curr.next
        }
        curr.next = node
    }
    this.size++
}
insert(value,index){
    if(index < 0 || index > this.size){
        return null
    } if(index == 1){
    let curr = this.head
    curr.prepend(value)
    } else {
        let node = new Node(value)
        let curr = this.head
        for(let i=0;i<index-1;i++){
            curr = curr.next
        }
        node.next = curr.next
        curr.next = node

    }
    this.size++

}

remove(index){
    if(index < 0 || index > this.size){
        console.log('no index found')
        return null
    } let rem;
     if(index == 1) {
        rem = this.head
        this.head = this.head.next
        return rem
    } else {
         let curr = this.head
        for(let i=0;i<index-1;i++){
            curr = curr.next
        }

        rem = curr.next
        curr.next = rem.next

    }
    this.size--
    return rem.value
}

remove(value){
   if(this.isempty()){
    return null
   }
   if(this.head.value == value){
    this.head = this.head.next
    this.size--
    return value
   } else {
    let curr = this.head
while(curr.next && curr.next.value !== value){
    curr = curr.next
}
if(curr.next){
    let rem
 rem = curr.next
 curr.next = rem.next
 this.size--
 return value
}
   }
   return null    
}

search(value){
    if(this.isempty()){
        return -1
    }
    let curr = this.head
    let i=0;
    while(curr){
        if(curr.value == value){
            return i;
        }
        curr = curr.next;
        i++

    }
    return -1;
}
duplicate(){
    if(this.isempty()){
        return null
    } 
        let curr = this.head
        while(curr && curr.next){
            if(curr.value == curr.next.value ){
                curr.next = curr.next.next
            } else {
                curr = curr.next
            }
            
        }
}
reverse (){
    let curr = this.head
    let prev = null
         
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    this.head = prev

}

reverse (){
    let curr = this.head
    let prev = curr.next
    while(curr){
        curr.next = prev
        
    }
}





print(){
    if(this.isempty()){
        console.log('its empty')
        return null
    } else {
        let curr = this.head
        let value=''
        while(curr){
            value += `${curr.value} `
            curr = curr.next
        }
        console.log('values are: ', value);
    }
}






}
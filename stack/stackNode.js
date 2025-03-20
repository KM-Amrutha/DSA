const linkedlist = require('./stackbyNode')

class linkedliststack{
    constructor(){
        this.list = new linkedlist()
    }

push(value){
    return this.list.prepend(value)

}
pop(){
    return  this.list.removefront()

}

peek(){
    return this.list.head.value

}

isempty(){
    return this.list.isempty()

}
getsize(){
 return this.list.getvalue()
}

print(){

    this.list.print()

}

}

const sta = new linkedliststack()
sta.isempty()

console.log(sta.push(10))
console.log(sta.push())

sta.print()
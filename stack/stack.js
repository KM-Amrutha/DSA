
class stack{
    constructor() {
        this.array = []
        
    }

push(value){
  return  this.array.push(value)
}
pop(){
   return  this.array.pop()
}
peek(){
   return this.array[this.array.length-1]
}
isempty(){
    return this.array.length == 0
}
print(){
    console.log(this.array.toString())
}

removemiddle(){
    
}

}
const sta = new stack()
sta.push(10)
sta.push(20)
sta.push(30)
sta.print()


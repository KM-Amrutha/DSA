
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
getsize(){
    return this.array.length
}
reverse(str){
    const sta = new stack()
    for(let i=0;i<str.length;i++){
        sta.push(str[i])

    }
let rev =''
while(!sta.isempty()){
    rev += sta.pop()
}
return rev

}
print(){
    console.log(this.array.toString())
}
}

const s = new stack()
// s.push(10)
// s.push(20)
// s.push(30)
// s.print()
console.log( s.reverse('amrutha'))




var mouse=requeri('./mouse');
function Cat(name,age){
this.name=name;
this.age=age;
this.stomach=[];
}
Cat.prototype.eat=function(animal){
    if(animal instanceof mouse){
        this.stomach.push(mouse);
    }else{
        throw new Error('Cat can only eat mouse');
        
    }
}
module.exports=Cat;
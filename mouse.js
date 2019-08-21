function Mouse(name){
    this.name=name;
    this.isDead=false;
}
Mouse.prototype.die=function(){
    this.isDead=true;
}
Mouse.prototype.run=function(){
    console.log('runinggggggg....');
}
module.exports=Mouse;
Mouse.prototype.sleep=function(){
    console.log('sleeping..... test');
}

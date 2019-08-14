function Mouse(name){
    this.name=name;
    this.dead=false;
}
this.prototype.die=function(){
    this.dead=true;
}
module.exports=Mouse;
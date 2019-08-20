var cat=require('./cat');
var mouse=require('./mouse');
var cat =new Cat();
var mouse=new Mouse('Mickey');
cat.eat(mouse);
var dog=new Dog();
try {
    cat.eat(dog);
} catch (error) {
    console.log('Err cat only eat mouse');
}

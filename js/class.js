class Animal{
    eat=()=>console.log("I am eating")
}
class Dog extends Animal{
    weight=30;
    age=8;
    bark=()=>console.log("bark bark")
}
pudul=new Dog()
pudul.bark()
pudul.eat()


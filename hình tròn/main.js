// function Ancoi(first,last,age,eye){
//     this.firstName = first; 
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// var dung1 =  new Ancoi("AnCoi"," Nguyễn", 18, "black");
// var dung2 = new Ancoi("tan","dat",19,"blue");

// console.log(dung1);



function Circle(radius, color){
    this.radius = radius;
    this.color = color;

    this.getRadius = function(){
        return this.radius;
    };
    this.getColor = function(){
        return this.color;
    }

    this.getArea = function(){
        return this.radius * this.radius * Math.PI;
    }


}
var cir1 = new Circle(12,"red");
console.log(cir1.getRadius());
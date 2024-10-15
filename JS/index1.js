


function hello() {
    console.log("hello");
}

const result = function sum(x,y,z) {
    return (x + y + z);
}

const add = () => {
    console.log("hii"); 
}
const person = {
    name: "harshita",
    age:20

}
const obj = { city:"agra" ,...person, name:"siya"};
const emp = [
    "def", 45, 1020230.50
];

const obj1=[...emp,"anu"]
console.log(emp);
console.log(obj);
console.log(obj1);
console.log(person);
hello();
add();
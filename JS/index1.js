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

const student = {
    name: "harshita",
    age: 20,
    rollno: 20020211,
    branch: "CS",
    section: "B",
}

function loginUser(username, password) {
    console.log(`${username} is login`)
    console.log(`Password is ${password}`)
    // console.log(username);
    // console.log(password);
    
}

loginUser("harshita", "125364");


const { name, age, rollno, branch, section } = student
console.log(name)
console.log(section)
console.log(student.name);
const obj1=[...emp,"anu"]
console.log(emp);
console.log(obj);
console.log(obj1);
console.log(person);
hello();
add();
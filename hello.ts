function sayHello(name: string) {
    console.log(`Hello, ${name}!`);
}

const myName: string = "Your Name";
const myAge: number = 1000;
const favoriteColor: string = "blue";
const isHuman: boolean = true;
const hobbies: string[] = ["reading", "coding", "traveling"];
const address: { street: string, city: string, state: string, zip: number } = {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: 12345
};

function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

const result: number = addNumbers(10, 20);

sayHello(myName);

console.log(`I am ${myAge} years old.`);
console.log(`My favorite color is ${favoriteColor}.`);

if (isHuman) {
    console.log("I am a Human.");
} else {
    console.log("I am not a Human.");
}

console.log("My hobbies include:");
for (const hobby of hobbies) {
    console.log("- " + hobby);
}

console.log(`My address is ${address.street}, ${address.city}, ${address.state} ${address.zip}.`);

console.log(`The sum of 10 and 20 is ${result}.`);

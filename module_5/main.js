// ---------------
// Object Literal 
// ---------------
let myDog = {
    name: "Scooby-Doo",
    show: "Scooby-Doo",
    breed: "Great Dane",
    role: "Mystery solving companion in a cartoon about a group of teenagers uncovering supernatural hoaxes",
    mySound: "I am not scary",

    // Method to describe the dog
    describe: function() {
        return `Hello, my name is ${this.name}. 
        I starred in the TV show ${this.show}.
        My character was a ${this.breed}. 
        I was ${this.role}. 
        When I bark, ${this.mySound}`;
    }
};

document.getElementById("dog-literal").innerText = myDog.describe();

// ---------------------
// Constructor Function
// ---------------------
function Dog(name, show, breed, role, mySound, canTalk) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.role = role;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Object method
    this.myGreeting = function() {
        return `Hello, my name is ${this.name}. 
        I starred in the TV show ${this.show}. 
        My character was a ${this.breed}. 
        I was the ${this.role}. 
        When I bark, ${this.mySound}. 
        Can I talk? ${this.canTalk}`;
    };
}

let myDogConst = new Dog("Scooby-Doo",
    "Scooby-Doo",
    "Great Dane",
    "Mystery solving companion in a cartoon about a group of teenagers uncovering supernatural hoaxes",
    "I am not scary",
    true
);

document.getElementById("dog-constructor").innerText = myDogConst.myGreeting();

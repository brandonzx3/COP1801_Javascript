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
        ${this.canTalk ? "I can talk" : "I Can't talk."}`;
    };
}

let scooby = new Dog("Scooby-Doo",
    "Scooby-Doo",
    "Great Dane",
    "Mystery solving companion in a cartoon about a group of teenagers uncovering supernatural hoaxes",
    "I am not scary",
    true
);

let brian = new Dog(
    "Brian Griffin",
    "Family Guy",
    "White Labrador Retriever",
    "Talking pet dog who often acts like a human",
    "I am not scary",
    true
);

let dogs = [scooby, brian];

dogs.forEach(dog => {
    for (let prop in dog) {
        if (typeof dog[prop] !== "function") {
            console.log(`${prop}: ${dog[prop]}`);
        }
    }
});

let userChoice = prompt("Type the name of a dog (Scooby-Doo or Brian Griffin):");
let foundDog = dogs.find(d => d.name.toLowerCase() === userChoice?.toLowerCase().trim());

console.log(foundDog);

if (foundDog) {
    // Show greeting in HTML div
    document.getElementById("dog-constructor").innerText = foundDog.myGreeting();
} else {
    // Error message if not found
    document.getElementById("dog-constructor").innerText = "Error: That dog does not exist in our list.";
}
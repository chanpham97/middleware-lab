// INSTRUCTIONS: Write the code that does the following:
// - Set up the server correctly
// - console logs the method and URL for every request
// - sends back "Welcome to the Animal Shelter Network" as an h1 when the client goes to /
// - sends back the cat object when the client goes to /api/cat
// - sends back the shelters object when the client goes to /api/shelters
// - sends back "Go to /api/cat to see cats for adoption and /api/shelters to see shelters in the area" when the client goes to /docs
// - sends back "A cat you can adopt is " with the name of the first cat when the client goes to /adopt/cat
// - sends back a 404 page for all other paths

const animalShelterData = {
    cats: [
        { name: "Whiskers", age: 2, shelter: "Happy Tails Shelter" },
        { name: "Mittens", age: 3, shelter: "Cozy Paws Sanctuary" },
        { name: "Shadow", age: 1, shelter: "Happy Tails Shelter" }
    ],
    shelters: [
        { name: "Happy Tails Shelter", location: "123 Main Street, Cityville" },
        { name: "Cozy Paws Sanctuary", location: "456 Oak Avenue, Townsburg" }
    ]
};

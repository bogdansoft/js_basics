console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
console.log("Hello friend! Thank you for visiting the carnival!");
console.log("Here's the list of gifts:\n");

let array = [
    {
        name: "Teddy Bear",
        price: 10
    },
    {
        name: "Big Red Ball",
        price: 5
    },
    {
        name: "Huge Bear",
        price: 50
    },
    {
        name: "Candy",
        price: 8
    },
    {
        name: "Stuffed Tiger",
        price: 15
    },
    {
        name: "Stuffed Dragon",
        price: 30
    },
    {
        name: "Skateboard",
        price: 100
    },
    {
        name: "Toy Car",
        price: 25
    },
    {
        name: "Basketball",
        price: 20
    },
    {
        name: "Scary Mask",
        price: 75
    }
];
for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1}- ${array[i].name}, Cost: ${array[i].price} tickets`);
}

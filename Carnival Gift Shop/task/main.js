const input = require('sync-input');

console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
console.log("Hello friend! Thank you for visiting the carnival!");
console.log("Here's the list of gifts:\n");

let array = [
    {
        id: 1,
        name: "Teddy Bear",
        price: 10
    },
    {
        id: 2,
        name: "Big Red Ball",
        price: 5
    },
    {
        id: 3,
        name: "Huge Bear",
        price: 50
    },
    {
        id: 4,
        name: "Candy",
        price: 8
    },
    {
        id: 5,
        name: "Stuffed Tiger",
        price: 15
    },
    {
        id: 6,
        name: "Stuffed Dragon",
        price: 30
    },
    {
        id: 7,
        name: "Skateboard",
        price: 100
    },
    {
        id: 8,
        name: "Toy Car",
        price: 25
    },
    {
        id: 9,
        name: "Basketball",
        price: 20
    },
    {
        id: 10,
        name: "Scary Mask",
        price: 75
    }
];

function printAllGifts() {
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].id}- ${array[i].name}, Cost: ${array[i].price} tickets`);
    }
}

printAllGifts();

let ticketsAmount = 0;

let exit = true;

while (exit) {
    let value = (input(`\nWhat do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n`));
    switch (value) {
        case ("1"):
            if (array.length === 0) {
                console.log("Wow! There are no gifts to buy.");
            }
            let val = (input("Enter the number of the gift you want to get: "));
            if (Number.isNaN(Number(val))) {
                console.log("Please enter a valid number!");
            } else if (!array.find(e => e.id === Number(val))) {
                console.log("There is no gift with that number!");
            } else if (ticketsAmount < array.find(e => e.id === Number(val)).price) {
                console.log("You don't have enough tickets to buy this gift.");
                console.log("Total tickets: " + ticketsAmount);
            } else {
                ticketsAmount = ticketsAmount - array.find(e => e.id === Number(val)).price;
                console.log(`Here you go, one ${array.find(e => e.id === Number(val)).name}!\nTotal tickets: ${ticketsAmount}`);
                array.splice(array.indexOf(array.find(e => e.id === Number(val))), 1);
            }
            break;
        case("2"):
            let v = Number(input("Enter the ticket amount: "));
            if (Number.isNaN(v)) {
                console.log("Please enter a valid number between 0 and 1000.");
            } else if (v < 0 || v > 1000) {
                console.log("Please enter a valid number between 0 and 1000.");
            } else {
                ticketsAmount = ticketsAmount + v;
                console.log(`Total tickets: ${ticketsAmount}`);
            }
            break;
        case("3"):
            console.log(`Total tickets: ${ticketsAmount}`);
            break;
        case("4"):
            console.log("Here's the list of gifts:\n");
            if (array.length > 0) {
                printAllGifts();
            } else {
                console.log("Wow! There are no gifts to buy.");
            }
            break;
        case("5"):
            console.log("Have a nice day!");
            exit = false;
        default:
            console.log("Please enter a valid number!");
            break;
    }
}

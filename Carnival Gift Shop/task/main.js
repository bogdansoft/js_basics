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

function printAllGifts() {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1}- ${array[i].name}, Cost: ${array[i].price} tickets`);
    }
}

printAllGifts();

let ticketsAmount = 100;

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`\nWhat do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts \n`, function (value) {
    switch (value) {
        case ("1"):
            rl.question("Enter the number of the gift you want to get: ", function (val) {
                console.log(`Here you go, one ${array[Number(val - 1)].name}!\nTotal tickets: ${ticketsAmount - array[Number(val - 1)].price}\nHave a nice day!`);
                rl.close();
            });
            break;
        case("2"):
            rl.question("Enter the ticket amount: ", function (v) {
                console.log(`Total tickets: ${ticketsAmount + Number(v)}\nHave a nice day!`);
                rl.close();
            });
            break;
        case("3"):
            console.log(`Total tickets: ${ticketsAmount}\nHave a nice day!`);
            rl.close();
            break;
        case("4"):
            console.log("Here's the list of gifts:\n");
            printAllGifts();
            console.log("Have a nice day!");
            rl.close();
            break;
    }
});
rl.on("close", function () {
    process.exit(0);
});

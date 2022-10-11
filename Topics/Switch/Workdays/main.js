function checkTheDate(value) {
    switch (value > 0 && value < 6) {
        // write your code here
        case (true):
            console.log("Yes, you should go to work");
            break;
        default:
            console.log("No, this is your well-deserved weekend!");
            break;
    }
}

//checkTheDate(1);
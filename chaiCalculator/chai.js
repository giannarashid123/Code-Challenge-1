function calculateChaiIngredients() {
    // Prompt the user to enter the number of cups
    let numberOfCups = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    
    // Convert the input to a number
    numberOfCups = Number(numberOfCups);
    
    // Check if the input is a valid number
    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        console.log("Please enter a valid positive number for the number of cups.");
        return;
    }

    // Define the ingredients per cup
    const waterPerCup = 200;  // ml
    const milkPerCup = 50;    // ml
    const teaLeavesPerCup = 1; // tablespoon
    const sugarPerCup = 2;    // teaspoons

    // Calculate the ingredients needed for the given number of cups
    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;

    // Output the results
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
    
    console.log("\nEnjoy your Chai Bora!");
}

// Call the function
calculateChaiIngredients();

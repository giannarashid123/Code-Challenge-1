function calculateBodaFare(distanceInKm) {
    const baseFare = 50;         // KES
    const chargePerKm = 15;      // KES per km

    // Calculate total fare
    const totalFare = baseFare + (distanceInKm * chargePerKm);

    // Display the fare breakdown and total
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Panda Pikipiki! 🛵");
}

// Prompt the user
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = parseFloat(input);

// Validate input and call the function
if (!isNaN(distanceInKm) && distanceInKm > 0) {
    calculateBodaFare(distanceInKm);
} else {
    console.log("Tafadhali ingiza nambari halali ya kilomita.");
}

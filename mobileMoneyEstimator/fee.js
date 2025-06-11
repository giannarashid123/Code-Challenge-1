function estimateTransactionFee(amountToSend) {
    const feePercentage = 0.015;  // 1.5% fee
    const minFee = 10;            // Minimum fee
    const maxFee = 70;            // Maximum fee

    // Calculate the fee based on the percentage
    let transactionFee = amountToSend * feePercentage;

    // Apply the minimum and maximum fee limits
    if (transactionFee < minFee) {
        transactionFee = minFee;
    } else if (transactionFee > maxFee) {
        transactionFee = maxFee;
    }

    // Calculate total amount to be debited (amount + fee)
    const totalAmount = amountToSend + transactionFee;

    // Print the results
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}\n`);
    console.log("Send Money Securely! 📱");
}

// Prompt the user
const input = prompt("Unatuma Ngapi? (KES):");
const amountToSend = parseFloat(input);

// Validate input and call the function
if (!isNaN(amountToSend) && amountToSend > 0) {
    estimateTransactionFee(amountToSend);
} else {
    console.log("Tafadhali ingiza kiasi halali cha pesa.");
}


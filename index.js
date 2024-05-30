// // qus 1

// function calculateBill(fruit, quantity) {
//     let pricePerUnit;
//     switch (fruit.toLowerCase()) {
//         case 'apple':
//             pricePerUnit = 2;
//             break;
//         case 'banana':
//             pricePerUnit = 1;
//             break;
//         case 'orange':
//             pricePerUnit = 1.5; 
//             break;
//         case 'grape':
//             pricePerUnit = 3; 
//             break;
//         case 'mango':
//             pricePerUnit = 2.5; 
//             break;
//         default:
//             console.log('Fruit not available');
//             return 0;
//     }
//     let total = pricePerUnit * quantity;
//     return total;
// }

// let fruit = prompt('Enter the fruit name:');
// let quantity = parseInt(prompt('Enter the quantity:'));

// let bill = calculateBill(fruit, quantity);
// if (bill > 0) {
//     console.log`(The total bill for ${quantity} ${fruit}(s) is $${bill})`;
// }







// // qus 2

// let units = 200;

// let totalBill = 0;

// if (units <= 50) {
//   totalBill = units * 0.5;
// } else if (units <= 150) {
//   totalBill = 50 * 0.5 + (units - 50) * 0.75;
// } else if (units <= 250) {
//   totalBill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.2;
// } else {
//   totalBill = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (units - 250) * 1.5;
// }


// let surcharge = totalBill * 0.2;
// let finalBill = totalBill + surcharge;

// console.log(`Total electricity bill: Rs. ${finalBill.toFixed(2)}`);







// // qus 3


// let marksObtained = 85;

// let grade;

// if (marksObtained >= 90) {
//   grade = 'A+';
// } else if (marksObtained >= 80) {
//   grade = 'A';
// } else if (marksObtained >= 70) {
//   grade = 'B';
// } else if (marksObtained >= 60) {
//   grade = 'C';
// } else if (marksObtained >= 50) {
//   grade = 'D';
// } else {
//   grade = 'F';
// }

// console.log(`Student grade: ${grade}`);
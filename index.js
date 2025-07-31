document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('startBtn').addEventListener('click', function() {
    // ✅ All prompts and logic must go here
    const username = prompt("Enter your username (admin/user):");
    const password = prompt("Enter your password:");

    if ((username === "admin" || username === "user") && password === "1234") {
      const role = username === "admin" ? "high" : "low";
      alert(`Welcome, ${username}! Role: ${role}`);

      const name = prompt("What's your name?");
      const age = parseInt(prompt("Your age?"), 10);
      if (isNaN(age) || age <= 0) {
        alert("Invalid age entered. Exiting.");
        return;
      }

      const coffeeType = prompt("Choose your coffee type (espresso/latte/cappuccino):").toLowerCase();
      const quantity = parseInt(prompt("How many cups?"), 10);
      if (isNaN(quantity) || quantity <= 0) {
        alert("Invalid quantity entered. Exiting.");
        return;
      }

      let pricePerCup;
      if (coffeeType === "espresso") {
        pricePerCup = 2.5;
      } else if (coffeeType === "latte") {
        pricePerCup = 3.5;
      } else if (coffeeType === "cappuccino") {
        pricePerCup = 4.0;
      } else {
        alert("Invalid coffee type selected. Exiting.");
        return;
      }

      const originalTotal = pricePerCup * quantity;
      const discount = (age < 18 || age > 60) ? originalTotal * 0.10 : 0;
      const finalTotal = originalTotal - discount;

      alert(`Hello ${name}!\nYou ordered ${quantity} ${coffeeType}(s).\nOriginal total: $${originalTotal.toFixed(2)}\nDiscount: $${discount.toFixed(2)}\nFinal total: $${finalTotal.toFixed(2)}`);

      let peopleCount = parseInt(prompt("How many people are splitting the bill? (1/2/3):"), 10);
      if (![1, 2, 3].includes(peopleCount)) {
        alert("Invalid number of people. Defaulting to 1.");
        peopleCount = 1;
      }

      const tipOptions = [0, 5, 10, 15];
      let tipPercentage = parseInt(prompt("Tip percentage? (0/5/10/15):"), 10);
      if (!tipOptions.includes(tipPercentage)) {
        alert("Invalid tip percentage. Defaulting to 0%.");
        tipPercentage = 0;
      }

      const tipAmount = (finalTotal * tipPercentage) / 100;
      const totalWithTip = finalTotal + tipAmount;
      const amountPerPerson = totalWithTip / peopleCount;

      alert(`Tip: $${tipAmount.toFixed(2)}\nTotal with Tip: $${totalWithTip.toFixed(2)}\nSplit between ${peopleCount} person(s): $${amountPerPerson.toFixed(2)} each`);
    } else {
      alert("Invalid credentials. Access denied.");
    }
  });
});

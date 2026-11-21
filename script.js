// =========================================
// 1. Confirm Script Connection
// =========================================
console.log("SpendWise JavaScript engine loaded successfully!");

// =========================================
// 2. Store Application Data (Variables & Data Types)
// =========================================
const appName = "SpendWise";
const currencySymbol = "$";
let userName = "Wany";
let monthlyBudget = 0;

// Expense category variables
let rentExpense = 0;
let foodExpense = 0;
let transportExpense = 0;
let utilitiesExpense = 0;
let entertainmentExpense = 0;
let savingsGoal = 0;

// =========================================
// 3. Reusable Functions for Budget Logic
// =========================================

/**
 * Prompts the user for a numeric value and converts the string input to a Number.
 * Defaults to 0 if the user cancels or enters a non-numeric value.
 */
function getNumericInput(promptMessage) {
  const rawInput = prompt(promptMessage);
  const parsedValue = Number(rawInput);

  if (isNaN(parsedValue) || rawInput === null || rawInput.trim() === "") {
    return 0;
  }
  return parsedValue;
}

/**
 * Calculates total spending across all expense categories.
 */
function calculateTotalExpenses(rent, food, transport, utilities, entertainment, savings) {
  return rent + food + transport + utilities + entertainment + savings;
}

/**
 * Calculates the remaining balance after subtracting total expenses from the budget.
 */
function calculateRemainingBalance(budget, totalExpenses) {
  return budget - totalExpenses;
}

/**
 * Calculates what percentage of the total budget has been used.
 */
function calculateBudgetUsagePercentage(budget, totalExpenses) {
  if (budget <= 0) {
    return 0;
  }
  return ((totalExpenses / budget) * 100).toFixed(1);
}

/**
 * Displays a clearly labeled financial summary in the browser console.
 */
function displayBudgetSummary(name, budget, totalExpenses, remainingBalance, usagePercent) {
  console.log("==========================================");
  console.log(`${appName} — Monthly Financial Summary for ${name}`);
  console.log("==========================================");
  console.log(`Total Monthly Budget : ${currencySymbol}${budget.toFixed(2)}`);
  console.log(`------------------------------------------`);
  console.log(`Rent & Housing       : ${currencySymbol}${rentExpense.toFixed(2)}`);
  console.log(`Food & Groceries     : ${currencySymbol}${foodExpense.toFixed(2)}`);
  console.log(`Transport            : ${currencySymbol}${transportExpense.toFixed(2)}`);
  console.log(`Utilities & Internet : ${currencySymbol}${utilitiesExpense.toFixed(2)}`);
  console.log(`Entertainment        : ${currencySymbol}${entertainmentExpense.toFixed(2)}`);
  console.log(`Emergency Savings    : ${currencySymbol}${savingsGoal.toFixed(2)}`);
  console.log(`------------------------------------------`);
  console.log(`Total Expenses       : ${currencySymbol}${totalExpenses.toFixed(2)}`);
  console.log(`Budget Used          : ${usagePercent}%`);
  console.log(`Remaining Balance    : ${currencySymbol}${remainingBalance.toFixed(2)}`);

  if (remainingBalance < 0) {
    console.log("Status               : Over budget! Consider reducing discretionary expenses.");
  } else {
    console.log("Status               : Within budget. Great job managing your finances!");
  }
  console.log("==========================================");
}

// =========================================
// 4. Collect User Input & Run Application
// =========================================
function runSpendWise() {
  const enteredName = prompt("Welcome to SpendWise! What is your name?");
  if (enteredName && enteredName.trim() !== "") {
    userName = enteredName.trim();
  }

  monthlyBudget = getNumericInput(`Hi ${userName}! Enter your total monthly budget (${currencySymbol}):`);
  rentExpense = getNumericInput(`Enter your monthly Rent & Housing expense (${currencySymbol}):`);
  foodExpense = getNumericInput(`Enter your monthly Food & Groceries expense (${currencySymbol}):`);
  transportExpense = getNumericInput(`Enter your monthly Transport expense (${currencySymbol}):`);
  utilitiesExpense = getNumericInput(`Enter your monthly Utilities & Internet expense (${currencySymbol}):`);
  entertainmentExpense = getNumericInput(`Enter your monthly Entertainment expense (${currencySymbol}):`);
  savingsGoal = getNumericInput(`Enter your monthly Savings allocation (${currencySymbol}):`);

  // Perform calculations using reusable functions
  const totalExpenses = calculateTotalExpenses(
    rentExpense,
    foodExpense,
    transportExpense,
    utilitiesExpense,
    entertainmentExpense,
    savingsGoal
  );

  const remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);
  const usagePercentage = calculateBudgetUsagePercentage(monthlyBudget, totalExpenses);

  // Display results in the console
  displayBudgetSummary(userName, monthlyBudget, totalExpenses, remainingBalance, usagePercentage);
}

// Start the SpendWise prompt workflow when the page loads
runSpendWise();

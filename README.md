# SpendWise — Personal Finance Dashboard & JavaScript Foundation

SpendWise is a responsive personal finance tracking application that helps users monitor their monthly income, allocate funds across core expense categories (Rent, Food, Transport, Utilities, Entertainment, and Savings), and calculate their remaining balance in real time.

## Project Structure

- `index.html` — Semantic dashboard layout structure.
- `style.css` — Responsive CSS Grid & Flexbox styling with light/dark theme variables.
- `script.js` — Core JavaScript logic for data storage, user input, budget calculations, and console reporting.
- `README.md` — Project documentation.

## JavaScript Concepts Implemented

### 1. Variables & Data Types
- **`const`** is used for fixed application metadata and computed results that should not be reassigned (`appName`, `currencySymbol`, `totalExpenses`, `remainingBalance`).
- **`let`** is used for user-specific values that update once input is collected (`userName`, `monthlyBudget`, and each category expense variable).
- **Data Types**: Strings are used for labels and names, Numbers are used for financial values and percentages, and Booleans are evaluated inside conditional checks (`remainingBalance < 0`).

### 2. Collecting User Input
- The `getNumericInput()` helper uses JavaScript's built-in `prompt()` dialog to collect the user's name, total monthly budget, and spending amounts across all six SpendWise categories.
- Because `prompt()` returns text (`string`), `Number()` is used to convert entries into numeric values, with fallback handling (`0`) if an input is left blank or non-numeric.

### 3. Performing Budget Calculations
- Arithmetic operators (`+`, `-`, `/`, `*`) calculate:
  - **Total Expenses**: The sum of all six category amounts.
  - **Remaining Balance**: `monthlyBudget - totalExpenses`.
  - **Budget Usage Percentage**: `(totalExpenses / monthlyBudget) * 100`.

### 4. Organizing Logic with Reusable Functions
Instead of writing one long script, the logic is divided into single-purpose functions:
- `getNumericInput(promptMessage)` — Handles prompting and safe number conversion.
- `calculateTotalExpenses(...)` — Sums all category expenses.
- `calculateRemainingBalance(budget, totalExpenses)` — Computes leftover funds.
- `calculateBudgetUsagePercentage(budget, totalExpenses)` — Computes the percentage of budget spent.
- `displayBudgetSummary(...)` — Formats and prints a clean, labeled breakdown to the browser console using `console.log()`.
- `runSpendWise()` — Coordinates the input, calculation, and output steps when the page loads.

## How to Test

1. Open `index.html` in a web browser.
2. Complete the browser prompts for your name, monthly budget, and category expenses.
3. Open **Developer Tools** (`F12` or `Right-Click -> Inspect`) and switch to the **Console** tab to view the formatted financial summary.

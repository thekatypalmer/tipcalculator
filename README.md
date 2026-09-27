# Tip Calculator — Beginner Troubleshooting Practice

This small site intentionally contains **three bugs**: one associated with HTML, one with CSS, and one with JavaScript.

## Your goal

Get the calculator working correctly without rebuilding it.

### Expected behavior

- Enter a bill amount.
- Select a tip percentage.
- Click **Calculate Tip**.
- The page should show the correct tip and total.
- Hovering over the Calculate Tip button should visibly change its background.

### Test case

For a **$100 bill** with a **20% tip**:

- Tip should be **$20.00**
- Total should be **$120.00**

## Suggested troubleshooting order

1. Open the page and test what works and what does not.
2. Inspect `index.html` and check that external files are connected correctly.
3. Inspect `styles.css` and compare selectors with the HTML.
4. Inspect `script.js` and follow the calculation one variable at a time.
5. Use your browser's Developer Tools Console when the page does not behave as expected.

The source comments identify the *general location* of each intentional issue, so this is beginner-friendly. Try fixing each one before asking for the answer.

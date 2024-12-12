# Next.js router.push() Asynchronous Behavior

This repository demonstrates a common issue encountered when using the `router.push()` method in Next.js.  The problem arises from the asynchronous nature of the navigation process.  `router.push()` doesn't block execution; subsequent code runs immediately, even before the navigation is complete.

## The Problem

The provided `bug.js` demonstrates the problem. After clicking the button, the console will log 'Navigation initiated' *before* the navigation to '/another-page' is finished. This can lead to race conditions or unexpected side effects if the subsequent code depends on the navigation being completed.

## The Solution

`bugSolution.js` presents a solution using the `router.events` to listen for the navigation's completion.  This ensures the subsequent code only executes once the navigation is successfully finished.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`
3. Run `npm run dev`
4. Click the button. Observe the console log.

This example highlights the importance of understanding the asynchronous nature of client-side routing and how to handle it properly in Next.js.
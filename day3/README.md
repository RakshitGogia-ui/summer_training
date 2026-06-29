# JavaScript Advanced Concepts

## 1. JSON & Local Storage
- Learned how to work with JSON (JavaScript Object Notation) for storing and exchanging structured data.
- Used `JSON.stringify()` to convert JavaScript objects into JSON strings.
- Used `JSON.parse()` to convert JSON strings back into JavaScript objects.
- Explored `localStorage.setItem()` and `localStorage.getItem()` to store and retrieve data from the browser's local storage.
- Understood how local storage preserves data even after refreshing or reopening the browser.

## 2. Asynchronous JavaScript & Promises
- Learned how JavaScript executes code using the Call Stack.
- Understood JavaScript's single-threaded nature and how the Web APIs handle asynchronous operations.
- Explored the Event Loop and Callback Queue.
- Learned Promise states:
  - Pending
  - Fulfilled
  - Rejected
- Used `.then()`, `.catch()`, and `.finally()` for handling asynchronous operations.

## 3. Fetch API & Async/Await
- Learned how to send HTTP GET requests using the Fetch API.
- Worked with external REST APIs to retrieve data.
- Used `async` and `await` for cleaner asynchronous code.
- Converted API responses into JavaScript objects using `response.json()`.
- Dynamically displayed fetched data in the DOM.

## 4. Error Handling
- Implemented `try...catch` blocks to handle runtime and API errors.
- Displayed user-friendly error messages instead of breaking the application.
- Managed loading states using spinners while waiting for API responses.
- Added graceful fallback UI when data could not be loaded.

## 5. Additional Concepts Covered
- Single-threaded JavaScript execution.
- Call Stack, Web APIs, Event Loop, and Callback Queue.
- DOM manipulation with asynchronously fetched data.
- Browser data persistence using Local Storage.
- Integration of API data, Local Storage, and responsive UI to build interactive web applications.
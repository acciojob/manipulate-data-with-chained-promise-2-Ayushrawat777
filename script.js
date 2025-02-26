//your JS code here. If required.
function manipulateArray() {
    // Initial promise that resolves with the array after 3 seconds
    new Promise((resolve) => {
        setTimeout(() => resolve([1, 2, 3, 4]), 3000);
    })
    .then(numbers => {
        // First Transformation: Filter out odd numbers
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = numbers.filter(num => num % 2 === 0);
                document.getElementById("output").innerText = evenNumbers.join(",");
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then(evenNumbers => {
        // Second Transformation: Multiply even numbers by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map(num => num * 2);
                document.getElementById("output").innerText = multipliedNumbers.join(",");
                resolve(multipliedNumbers);
            }, 2000);
        });
    });
}

// Call the function when the page loads
window.onload = manipulateArray;

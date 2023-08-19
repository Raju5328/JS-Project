const fetchButton = document.getElementById('fetchButton');
const outputElement = document.getElementById('output');

// Event listener for the button click


// // Function to fetch data from the API
// function fetchData() {
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then(response => response.json())
//         .then(data => {
//             outputElement.textContent = `Title: ${data.title}\nBody: ${data.body}`;
//         })
//         .catch(error => {
//             outputElement.textContent = 'An error occurred while fetching data.';
//         });
// }
var fetchData = async()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await response.json();
        console.log(data);
        outputElement.textContent = `Title: ${data.title}\nBody: ${data.body}`;
    }
    catch(error){
        console.log(error);
    }
}

fetchButton.addEventListener('click', fetchData);
// myPromise();
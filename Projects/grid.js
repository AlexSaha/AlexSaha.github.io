// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/40.052270,-83.021150', true)

request.onload = function () {
    // Begin accessing JSON data here
}

// Send request
request.send()
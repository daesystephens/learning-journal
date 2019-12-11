// Given that a user does not enter a valid location in the input
// When the user clicks the "Explore!" button
// Then the user will receive an error message on the page and the data will not be rendered properly
// Endpoints:
// /location, /weather
// Example Response:
// {
//   status: 500,
//   responseText: "Sorry, something went wrong",
//   ...
// }
// [ ] Create a function to handle errors from any API call.
// [ ] Send a status of 500 and an error message to the client.
// [ ] Deploy your updated sever code to Heroku.
// [ ] Confirm that your route is responding as expected by entering your deployed backend URL on the City Explorer app's welcome page. Then search for an invalid location. The network inspector panel should show a 500 for the response to the AJAX query.

function handlelingError (request, response){
  console.log("Sorry, something went wrong")
}

app.get('/', (request, response) => {
  if (request === 500){
    console.log("Sorry, something went wrong")
  }
}).catch( (err) => {
  console.error(err);
})

app.get('/', response => {
  console.log("Sorry, something went wrong")
  }
)
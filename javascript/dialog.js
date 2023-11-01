window.alert('This is an alert message.');

const result = window.confirm('Do you want to proceed?');
if (result) {
  console.log("OK");
} else {
  // User clicked Cancel
  console.log("Cancel");

}

const userInput = window.prompt('Enter something:');
if (userInput !== null) {
  // User entered a value
  console.log(userInput);

} else {
  // User clicked Cancel
  console.log("Cancel");

}

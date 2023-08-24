// Pet Info
//Handling of other type of pet selection (create "Which one?" input)
// Variables 
const petSelector = document.getElementById("pet-list"); //select the selector
const otherPet = document.createElement("input"); //define the element to be created
const jsOther = document.getElementById("js-other"); //select the parent (to append later)

//Error Handling
if (!petSelector || !jsOther) {
  // Handle the case of missing elements
  console.error("Required elements not found.");
} else {
  // Handle the case of elements existing
  otherPet.setAttribute('type', "text");
  otherPet.setAttribute('placeholder', "Which one?");
}

//Activation of function to create the "Which one?" input
petSelector.addEventListener('change', function other() {
  if (petSelector.value === "otr") { //check the values
    jsOther.appendChild(otherPet);
  } //create the "Which one?" input
  else {
    jsOther.removeChild(otherPet);
  } //delete the "Which one?" input
});


// Handling of specie/breed input
//Variables
const breed = document.createElement("input");
const jsBreed = document.getElementById("js-breed")

//Error Handling
if (!petSelector || !jsBreed) {
  // Handle the case of missing elements
  console.error("Required elements not found.");
} else {
  // Handle the case of elements existing
  breed.setAttribute('type', "text")
};

//Activation of function to create the new breed/species input
petSelector.addEventListener('change', function species() {
  if (petSelector.value !== "pt") { //check the values
    jsBreed.appendChild(breed); //create the breed/specie input
  } else {
    jsBreed.removeChild(breed);
  } //delete the breed/specie input
});

//Activation of function to name the placeholder of the new breed/species input
petSelector.addEventListener('change', function placeholders() {
  if (petSelector.value === "dg" || petSelector.value === "ct") { //check the values
    breed.setAttribute('placeholder', "Breed"); //set the placeholder attribute "Breed"
  } else {
    breed.removeAttribute('placeholder', "Breed"); //remove placeholder attribute "Breed"
    breed.setAttribute('placeholder', "Specie");
  } //set the placeholder attribute "Specie"
});

//Handling the format breed/specie + which one? inputs
if (petSelector.value === "otr") {
  breed.style.marginRight = "10px"; // Move breed input to the right
} else {
  breed.style.marginLeft = "0"; // Reset breed input margin-left
}


//Handling of Chipnumber Input
//Variables
const yesCheckbox = document.getElementById("yes-checkbox");
const noCheckbox = document.getElementById("no-checkbox");
const jsChipnumber = document.getElementById("js-chipnumber");
const chipnumber = document.createElement("input");

//Error Handling
if (!yesCheckbox || !jsChipnumber || !noCheckbox) {//Handle the case of missing elements
  console.error("Required elements not found.")
} else { //Handle the case of existing elements                                         
  chipnumber.setAttribute('type', "number");
  chipnumber.setAttribute('placeholder', "Chipnumber");
}

//Activation of function to create chipnumber input
yesCheckbox.addEventListener('change', function chipnumberCreateInput() {
  if (yesCheckbox.checked === true) { //check if yesCheckbox is checked
    jsChipnumber.appendChild(chipnumber); //show the chipnumber input
  } else {
    jsChipnumber.removeChild(chipnumber); //hide the chipnumber input
  }
})

//Activation of function to delete chipnumber input
noCheckbox.addEventListener('change', function chipnumberDeleteInput() {
  if (noCheckbox.checked === true) { //check if noCheckbox is checked
    jsChipnumber.removeChild(chipnumber);
  } //hide the chipnumber input
})


//Function for Add pet button
//Variables
const createAddPet = document.getElementById("create-add-pet"); //select the elements to be cloned
const addPetBtn = document.getElementById("add-pet"); //select the 'add pet' button 
const parentAddPet = document.getElementById("parent-add-pet"); //select the parent

// Function to clone elements
function createFormExpansion() {
  return createAddPet.cloneNode(true);
}

//Error handling 
if (!createAddPet || !addPetBtn || !parentAddPet) {
  //Handle the case of missing elements
  console.error("Required elements not found.");
}

//Function to add registration for one more pet
function createMorePets() {
  const formExpansion = createFormExpansion(); //create a new formExpansion element
  parentAddPet.insertBefore(formExpansion, addPetBtn); //insert clone
}

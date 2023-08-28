
//HANDLE DISPLAY OF PET NAME
   //Variables
     const petNameDisplay = document.getElementById("display-pet-name"); //select the place to display
     const petNameInput = document.getElementById("pet-name"); //select the name input field

   //Error Handling
     if (!petNameDisplay || !petNameInput) {
      //Handle the case of missing elements
       console.error("Elements Missing - Display Name.");
     }

    //Display the name
     petNameInput.addEventListener("input", function displayPet () {
      const petName = petNameInput.value; //select the pet name
      petNameDisplay.textContent = "Pet: " + petName; //display the pet name
      })

//HANDLE PET SELECTION
   //Variables
     const petSelector = document.getElementById("pet-list"); //select pet selector
     const whichPetDiv = document.getElementById("div-which-pet"); //select div to append which-pet
     const breedSpecieDiv = document.getElementById("div-breed-specie"); //select div to append breed-specie
     const whichPet = document.createElement("input"); //create which-pet input
     const breedSpecie = document.createElement("input"); //create breed-specie input

     whichPet.setAttribute('placeholder', "Which Pet?"); //set placeholder for which-pet

   //Error Handling
     if (!petSelector || !whichPetDiv || !breedSpecieDiv) {
      console.error("Elements Missing - Pet Selection");
     }

   //Functions to display created inputs
     function displayWhichPet (){
      if (petSelector.value === "otr"){
        whichPetDiv.appendChild(whichPet); //append which-pet
      } else {
        if (whichPetDiv.contains(whichPet)) {
          whichPetDiv.removeChild(whichPet); //remove which-pet
        }
      }
     }
     
     function displayBreedSpecie (){
      if (petSelector.value !== "pt"){
        breedSpecieDiv.appendChild(breedSpecie); //append breed-specie
      } else {
        if (breedSpecieDiv.contains(breedSpecie)){
          breedSpecieDiv.removeChild(breedSpecie); //remove breed-specie
        }
      }
      if (petSelector.value === "dg" || petSelector.value === "ct") {
        breedSpecie.setAttribute('placeholder', "Breed"); //set placeholder to breed
      } else {
        breedSpecie.setAttribute('placeholder', "Specie"); //set placeholder to specie
      }
     }

     function checkPetSelectorValue() { //call the displaying functions
      displayWhichPet ();
      displayBreedSpecie ();
     }
   
   //Display or don't display Created Inputs
    petSelector.addEventListener('change', checkPetSelectorValue) //call the checking function and display inputs

//HANDLE CHIPNUMBER INPUT
   //Variables 
     const yesCheckbox = document.getElementById("yes-checkbox"); //select the yes radio button
     const noCheckbox = document.getElementById("no-checkbox"); //select the no radio button
     const chipnumberDiv = document.getElementById("chipnumber-div"); //selet the div to append the input to
     const chipnumberInput = document.createElement("input"); //create the chipnumber input

     chipnumberInput.setAttribute("placeholder","Chipnumber"); //set the placeholder for the chipnumber input

   //Error Handling
     if (!yesCheckbox || !noCheckbox || !chipnumberDiv) {
      //handle the case of missing elements
       console.error("Elements Missing - Chipnumber.");
     }  

    //Functions to display and not display chipnumber input
      function checkYescheckbox (){
        if (yesCheckbox.checked){
          chipnumberDiv.appendChild(chipnumberInput); //append the input
        }
      }

      function checkNoCheckbox (){  
        if (noCheckbox.checked) {
          if (chipnumberDiv.contains(chipnumberInput)){
            chipnumberDiv.removeChild(chipnumberInput); //remove the input
          }
        }
      }
  
    //Display or don't display the chipnumber input    
      yesCheckbox.addEventListener('change', checkYescheckbox); //display the input
      noCheckbox.addEventListener('change', checkNoCheckbox) //hide the input

//HANDLE ADD PET BUTTON
   //Variables
     const createAddPet = document.getElementById("create-add-pet"); //select the elements to be cloned
     const addPetBtn = document.getElementById("add-pet"); //select the 'add pet' button 
     const parentAddPet = document.getElementById("parent-add-pet"); //select the parent

   //Function to clone elements
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

//HANDLE SUBMISSION OF REGISTRATION
   //Variables
     const createPassword = document.getElementById("create-password"); //select the create password input
     const confirmPassword = document.getElementById("confirm-password"); //select the confirm password input
     const passwordAlert = document.getElementById("password-alert"); //select the place to display the password alert
     const form = document.getElementById("form"); //select form
   
   //Error Handling 
     if (!createPassword || !confirmPassword || !passwordAlert || !form) {
       //handle the case of missing elements
        console.error("Missing Elements.");
     } 

   //Function to validate submission 
     function validateForm (){
       if (createPassword.value !== confirmPassword.value){
         passwordAlert.textContent = "The passwords don't match. Please, make sure you write the same password on both fields."; //prepare alert
         return false; //block form submission
       } else {
         return true; //submit form
       }
     }
   
   //Call the funcion
     form.onsubmit = function validateSubmission () {
       return validateForm (); //check if form meets requirements
     }
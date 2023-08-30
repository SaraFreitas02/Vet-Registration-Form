
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
      //owner info validation
       const ownerFirstName = document.getElementById("owner-first-name"); //select first name input
       const ownerLastName = document.getElementById("owner-last-name"); //select last name input
       const ownerStreet = document.getElementById("owner-street"); //select street input
       const ownerHouseNum = document.getElementById("owner-house-num"); //select house num input
       const ownerZipCode = document.getElementById("owner-zip-code"); //select zip code input
       const ownerCity = document.getElementById("owner-city"); //select city input
       const ownerPhoneNum = document.getElementById("owner-phone-num"); //select phone number input
       const ownerEmail = document.getElementById("owner-email"); //select email input

       const ownerInfoFields = [
        ownerFirstName,
        ownerLastName,
        ownerStreet,
        ownerHouseNum,
        ownerZipCode,
        ownerCity,
        ownerPhoneNum,
        ownerEmail
       ]

       const ownerInfoFilledAlert = document.getElementById("owner-info-filled-alert"); //select alert place

      //password validation  
       const createPassword = document.getElementById("create-password"); //select the create password input
       const confirmPassword = document.getElementById("confirm-password"); //select the confirm password input
       const passwordAlert = document.getElementById("password-alert"); //select the place to display the password alert
     
      //validate form 
       const form = document.getElementById("form"); //select form
   
   //Error Handling 
     if (!ownerFirstName || !ownerLastName || !ownerStreet || !ownerHouseNum || !ownerCity || !ownerPhoneNum || !ownerEmail || !ownerInfoFilledAlert) { //owner info validation errors
       //handle the case of missing elements 
         console.error("Missing Elements - Owner Info Validation");
      } 

     if (!createPassword || !confirmPassword || !passwordAlert) { //password validation errors
       //handle the case of missing elements
        console.error("Missing Elements - Password Validation");
     } 

   //Functions
      //owner info validation
       function checkOwnerInfoFilled () {
        for (let i = 0; i < ownerInfoFields.length; i++) {
          if (ownerInfoFields[i].value.length === 0) {
            ownerInfoFields[i].style.borderColor = "red";
          } else {
            ownerInfoFields[i].style.borderColor = "";
          }
        } 

        if (ownerFirstName.value.length === 0 || ownerLastName.value.length === 0|| ownerStreet.value.length === 0  || ownerHouseNum.value.length ===0 || ownerCity.value.length ===0 || ownerPhoneNum.value.length === 0 || ownerEmail.value.length === 0 || ownerInfoFilledAlert.value.length === 0) {
          ownerInfoFilledAlert.textContent = "Please, make sure to fill all the fields out."
          return false;
        } else {
          return true;
        }
      }

      //password validation
       function validatePasswords (){  //validate passwords
        if (createPassword.value !== confirmPassword.value){
           passwordAlert.textContent = "The passwords don't match. Please, make sure you write the same password on both fields."; //prepare alert
           return false; //block form submission
        } else {
           return true; //submit form
        }
       }
      
      //form validation
      function validateForm (){
        if (checkOwnerInfoFilled === true && validatePasswords === true) {
          return true;
        } else if (checkOwnerInfoFilled === false || validatePasswords === false) {
          return false;
        }
      }
   
   //Call the funcion
     form.onsubmit = function validateSubmission () {
       return validateForm ();
     }
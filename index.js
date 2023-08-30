
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
      } else {
        whichPetDiv.appendChild(whichPet); //append which-pet
        if (whichPetDiv.contains(whichPet)) {
          whichPetDiv.removeChild(whichPet); //remove which-pet
        }
      }
     }
     
     function displayBreedSpecie (){
      if (petSelector.value !== "pt"){
      } else {
        breedSpecieDiv.appendChild(breedSpecie); //append breed-specie
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
        }
        chipnumberDiv.appendChild(chipnumberInput); //append the input
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

//HANDLE PASSWORD REQUIREMENTS
    //Variables
     const createPassword = document.getElementById("create-password"); //select the create password input
     const passwordRequirements = document.getElementById("password-requirements"); //select place for requirements
     
    //Create icons 
     const crossIcon = document.createElement("i");
       crossIcon.classList.add("fa", "fa-times-circle-o");
       crossIcon.setAttribute("aria-hidden", "true");
     const checkIcon = document.createElement("i");
       checkIcon.classList.add("fa", "fa-check-circle-o");
       checkIcon.setAttribute("aria-hidden", "true");
     
    //Create p elements 
    const digitsRequirement = document.createElement("p");
    digitsRequirement.textContent = "6 characters minimum";
    digitsRequirement.appendChild(crossIcon);
       digitsRequirement.style.color = "red";
     const specialCharacterRequirement = document.createElement("p");
     specialCharacterRequirement.textContent = "1 special character minimum ";
     specialCharacterRequirement.appendChild(crossIcon);
       specialCharacterRequirement.style.color = "red";
     const uppercaseRequirement = document.createElement("p");
     uppercaseRequirement.textContent = "1 uppercase letter minimum ";
     uppercaseRequirement.appendChild(crossIcon);
       uppercaseRequirement.style.color = "red";
     const lowercaseRequirement = document.createElement("p");
     lowercaseRequirement.textContent = "1 lowercase letter minimum ";
     lowercaseRequirement.appendChild(crossIcon);
       lowercaseRequirement.style.color = "red";
     const numberRequirement = document.createElement("p");
     numberRequirement.textContent = "1 number minimum ";
     numberRequirement.appendChild(crossIcon);
       numberRequirement.style.color = "red";
     const notOwnerNameRequirement = document.createElement("p");
     notOwnerNameRequirement.textContent = "Cannot match owner name ";
     notOwnerNameRequirement.appendChild(crossIcon);
       notOwnerNameRequirement.style.color = "red";
     const notPetNameRequirement = document.createElement("p");
     notPetNameRequirement.textContent = "Cannot match pet name ";
     notPetNameRequirement.appendChild(crossIcon);
       notPetNameRequirement.style.color = "red";
     const notPhoneNumberRequirement = document.createElement("p");
     notPhoneNumberRequirement.textContent = "Cannot match phone number ";
     notPhoneNumberRequirement.appendChild(crossIcon);
       notPhoneNumberRequirement.style.color = "red";

    //Error Handling
     if (!createPassword) {
      //handle case of missing elements
       console.error("Missing Element - create password")
     }
     
    //functions
      function createPasswordRequirements () {
        passwordRequirements.appendChild(specialCharacterRequirement);
        passwordRequirements.appendChild(digitsRequirement);
       passwordRequirements.appendChild(uppercaseRequirement);
       passwordRequirements.appendChild(lowercaseRequirement);
       passwordRequirements.appendChild(numberRequirement);
       passwordRequirements.appendChild(notOwnerNameRequirement);
       passwordRequirements.appendChild(notPetNameRequirement);
       passwordRequirements.appendChild(notPhoneNumberRequirement);
      }

    //Call functions
     createPassword.addEventListener('input', createPasswordRequirements) 
//HANDLE SUBMISSION OF REGISTRATION
   //Handle empty fields
      //variables
       const ownerFirstName = document.getElementById("owner-first-name"); //select first name input
       const ownerLastName = document.getElementById("owner-last-name"); //select last name input
       const ownerStreet = document.getElementById("owner-street"); //select street input
       const ownerHouseNum = document.getElementById("owner-house-num"); //select house num input
       const ownerZipCode = document.getElementById("owner-zip-code"); //select zip code input
       const ownerCity = document.getElementById("owner-city"); //select city input
       const ownerPhoneNum = document.getElementById("owner-phone-num"); //select phone number input
       const ownerEmail = document.getElementById("owner-email"); //select email input
       const petDateOfBirth = document.getElementById("pet-date-of-birth"); //select date of birth input

       const infoFields = [ //group variables 
        ownerFirstName,
        ownerLastName,
        ownerStreet,
        ownerHouseNum,
        ownerZipCode,
        ownerCity,
        ownerPhoneNum,
        ownerEmail,
        petNameInput, //selected on line 5
        petDateOfBirth,
       ]

       const InfoFilledAlert = document.getElementById("info-filled-alert"); //select non filled alert place
      
      //error handling
      if (
        !ownerFirstName || !ownerLastName 
        || !ownerStreet || !ownerHouseNum 
        || !ownerCity || !ownerPhoneNum 
        || !ownerEmail || !InfoFilledAlert
        || !petDateOfBirth
        ) { //owner info validation errors
         //handle the case of missing elements 
           console.error("Missing Elements - Empty Fields Check");
        }
      
      //functions 
       function checkInfoFilled () {
         for (let i = 0; i < infoFields.length; i++) {
           if (infoFields[i].value.length === 0) {
             infoFields[i].style.borderColor = "red";
           } else {
             infoFields[i].style.borderColor = "";
           }
         } 

        if (
          ownerFirstName.value.length === 0 || ownerLastName.value.length === 0
          || ownerStreet.value.length === 0  || ownerHouseNum.value.length ===0 
          || ownerCity.value.length === 0 || ownerPhoneNum.value.length === 0 
          || ownerEmail.value.length === 0 || InfoFilledAlert.value.length === 0
          || petNameInput.value.length === 0 || petDateOfBirth.value.length === 0
          ) {
          InfoFilledAlert.textContent = "Please, make sure to fill all the red highlighted fields out.";
          return false;
        } else {
          InfoFilledAlert.textContent = "";
          return true;
        }
      }
    
    //Validate pet selection
      //variables
       const petSelectorAlert = document.getElementById("pet-selector-alert");
      
      //error handling
       if (!petSelectorAlert) {
        //handle case of missing elements
         console.error("Missing Element - petSelectorAlert")
       }

      //function
       function validatePetSelection () {
        if (petSelector.value === "pt"){ //petSelector variable selection in line 21
          petSelector.style.borderColor = "red";
          petSelectorAlert.textContent = "Please, select a pet type.";
          return false;
        } else {
          petSelector.style.borderColor = "";
          petSelectorAlert.textContent = "";
          return true;
        }
       }  

    //Radio Buttons and Chipnumber Validation
      //variables
       const radioButtonsAlert = document.getElementById("radio-buttons-alert");
      
      //error handling
       if (!radioButtonsAlert) {
        //handle the case of missing elements
         console.error("Missing element - radio button alert");
       }
      
      //function
       function validateRadioButtons () {
         if (!(yesCheckbox.checked) && !(noCheckbox.checked)) {
          radioButtonsAlert.textContent = "Please, choose if yes or no.";
          return false;
         } else if (yesCheckbox.checked && chipnumberInput.value.length === 0) {
          chipnumberInput.style.borderColor = "red";
          radioButtonsAlert.textContent = "Please, write the chip number or choose no.";
          return false;
         } else {
          chipnumberInput.style.borderColor = "";
          radioButtonsAlert.textContent = "";
          return true;
         }
       }

    //Password validation  
      //variables    
        const passwordAlert = document.getElementById("password-alert"); //select the place to display the password alert
        const confirmPassword = document.getElementById("confirm-password"); //select the confirm password input

      //error handling
        if ( !passwordAlert || !confirmPassword ) { 
            //handle the case of missing elements
             console.error("Missing Elements - Password Validation");
        } 
      
      //functions
       function validatePasswords (){  //validate passwords
         if (createPassword.value.length === 0 || confirmPassword.value.length === 0){
           createPassword.style.borderColor = "red";
           confirmPassword.style.borderColor = "red";
           passwordAlert.textContent = "Don't forget the password."; //prepare alert
           return false; //block form submission
         } else if (createPassword.value !== confirmPassword.value){
           createPassword.style.borderColor = "red";
           confirmPassword.style.borderColor = "red";
           passwordAlert.textContent = "The passwords don't match. Please, make sure you write the same password on both fields."; //prepare alert
          return false; //block form submission
         } else {
           createPassword.style.borderColor = "";
           confirmPassword.style.borderColor = "";
           passwordAlert.textContent = "";
           return true; //submit form
         }    
        }
        
      
    //Validate form 
      //variables
       const petForm = document.getElementById("form"); //select form
   
      //error handling 
       if (!petForm){
         //handle case of missing elements
          console.error("Form missing");
       }
     
      //function
      function validateSelections (){
        return validatePetSelection () && validateRadioButtons(); 
      }

      function validateFields (){
        return validatePasswords() && checkInfoFilled();
      }

      function validateForm (){
       return validateSelections() && validateFields();
      }
      
      //call function validateForm
       document.addEventListener("DOMContentLoaded", function callValidatingFunction() {
        petForm.onsubmit = function validateSubmission () {
          return validateForm();
         } 
      })
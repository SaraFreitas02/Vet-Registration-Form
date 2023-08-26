// *PET INFO*

  //FUNCTION FOR ADD PET BUTTONS
    //*Variables
     const createAddPet = document.getElementById("create-add-pet"); //select the elements to be cloned
     const addPetBtn = document.getElementById("add-pet"); //select the 'add pet' button 
     const parentAddPet = document.getElementById("parent-add-pet"); //select the parent

    //*Function to clone elements
     function createFormExpansion() {
       return createAddPet.cloneNode(true);
     }

    //*Error handling 
     if (!createAddPet || !addPetBtn || !parentAddPet) {
      //Handle the case of missing elements
       console.error("Required elements not found.");
     }

    //*Function to add registration for one more pet
     function createMorePets() {
      const formExpansion = createFormExpansion(); //create a new formExpansion element
      parentAddPet.insertBefore(formExpansion, addPetBtn); //insert clone
    }


  //HANDLE "WHICH ONE?", BREED-SPECIE AND CHIPNUMBER INPUT
    //*Initial Variables 
     const elements = Array.from(document.querySelectorAll('.random-id')); //select desired elements
     let whichOne = document.createElement("input"); //create "Which One?" input
     let breed = document.createElement("input"); //create breed-specie input
     let chipnumber = document.createElement("input"); //create chipnumber input

    //*Separation in classes + declaration of  variable
      //Selectors
       for (let i = 0; i < elements.length; i++) {
        if (i % 6 === 0) {
         elements[i].classList.add('selection'); //create classes for selectors
        }
       }

       const selectors = document.querySelectorAll('.selection'); //select the selectors

        //handle missing selectors
         if (!selectors){
           console.error("Missing Selectors.");
         }

      //"Which one?" place   
       for (let i = 0; i < elements.length; i++) {
        if (i % 6 === 1) {
         elements[i].classList.add('whichOnePlace'); //create classes for the places for "Which one?"" elements
        }
       }

       const whichOnePlace = document.querySelectorAll('.whichOnePlace'); //select the places for "Which one?"" elements

        //handle missing places for "Which One?" input
         if (!whichOnePlace){
           console.error("No place for 'Which One?' input");
         }

      //Breed-Specie place
       for (let i = 0; i < elements.length; i++) {
        if (i % 6 === 2) {
         elements[i].classList.add('breedPlace'); //create classes fors for breed-specie input
        }
       }

       const breedPlace = document.querySelectorAll('.breedPlace'); //select the place for breed-specie input

        //handle missing place for breed-specie input
         if (!breedPlace) {
           console.error("No place for breed-specie input.")
         }

      //"Yes" Radio Buttons
       for (let i = 0; i < elements.length; i++) {
        if (i % 6 === 3) {
         elements[i].classList.add('yesCheckbox'); //create classes for 'yes' radio buttons
        }
       }

       const yesCheckbox = document.querySelectorAll('.yesCheckbox'); //select 'yes' radio buttons

        //handle missing "yes" checkbox
         if (!yesCheckbox) {
           console.error("Missing 'yes' checkbox.");
         }

      //"No" Radio Buttons
       for (let i = 0; i < elements.length; i++) {
        if (i % 6 === 2) {
         elements[i].classList.add('noCheckbox'); //create classes for 'no' radio buttons
        }
       }

       const noCheckbox = document.querySelectorAll('.noCheckbox'); //select 'no' radio buttons

         //handle missing "no" checkbox
          if (!noCheckbox) {
           console.error("Missing 'no' checkbox.");
          }


      //Chipnumber Place 
       for (let i = 0; i < elements.length; i++) {
        if (i % 6 === 5) {
         elements[i].classList.add('chipnumberPlace'); //create classes for chipnumber input
        }
      }

      const chipnumberPlace = document.querySelectorAll('.chipnumberPlace'); //selct the place for chipnumber input
     
       //handle missing place for chipnumber input
        if (!yesCheckbox) {
         console.error("No place for chipnumber input.");
        }

    //Handle "Which one?" + breed-specie input
      //initial functions
       function appendWhichOne(){
         whichOnePlace.appendChild(whichOne); //function to append "which one"
       }

       function removeWhichOne(){
         whichOnePlace.removeChild(whichOne); //function to remove"which one"
      }

       function appendBreed() {
         breedPlace.appendChild(breed); //function to append breed-specie
       }

       function removeBreed() {
         breedPlace.removeChild(breed); //function to removebreed-specie
      }

       function setPlaceholderBreedSpecie(){
         if (selectors.value === "dg" || selectors.value === "ct"){
           breed.setAttribute("placeholder","Breed"); //set the placeholder to Breed
         }  else {
             breed.setAttribute("placeholder","Specie"); //set the placeholder to Specie
           }
       }
      
      //looping functions
       function otrValue (){
        if (selectors.values === "otr"){
          whichOnePlace.forEach(function checkWOP(loopingWOP){
            appendWhichOne(loopingWOP);
          })
        } if (breedPlace.contains(breed)) {
          Array.from(breedPlace).forEach(function checkingBreed(loopBS){
            removeBreed(loopBS);
          })
        }
       }

       function otrValueNo (){
        if (selectors.values !== "otr"){
          breedPlace.forEach(function checkBreed(loopingBS){
           appendBreed(loopingBS);
           setPlaceholderBreedSpecie(loopingBS);
          });
          if (whichOnePlace.contains(whichOne)){
            Array.from(whichOnePlace).forEach(function checkingWOP(loopWop){
              removeWhichOne(loopWop);
            });
          };
        }
       }
      
      //Event Listener
       selectors.forEach(function checkSelectors (loopingSelectors){
        loopingSelectors.addEventListener('change', function checkSelection(){
          otrValue();
          otrValueNo();
       })
      })
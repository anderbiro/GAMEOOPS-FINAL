

//create a class that takes a phrase as a parameter

class Phrase {

    constructor(phrase)
   
    {
       
        this.phrase = phrase.toLowerCase();
          
    
    }

    //create a method that will display the active phrase on the back end. 
    // the phrase has to be made of letters/ spaces

     addPhraseToDisplay() {

        
        let phraseletters = this.phrase.split("")
        let sentence = document.getElementById("phrase").firstElementChild;
        
        
        for(let i=0; i < phraseletters.length; i++) {
        
    
            if (phraseletters[i]=== " ") {

            let space = document.createElement("li");
            space.classList.add("space")
            space.textContent = " "
            sentence.appendChild(space);
            

            }

            else {

            let letter = document.createElement("li");    
            letter.classList.add("hide");
            letter.classList.add("letter");
            letter.classList.add(phraseletters[i]);
            letter.textContent = phraseletters[i];
            sentence.appendChild(letter);



            }


        }
     }


        //create a method that will check if a letter is included on the active phrase

     checkLetter(letter){

        let sentence = document.getElementById("phrase").firstElementChild;
        let letters = sentence.querySelectorAll("li");
        
        let flag = false;
        
        letters.forEach(item =>  {

            if(item.textContent === letter ) {

                flag = true;

            }

        })
        
        return flag;



        /* create a method that displays the matched letter between
        the key and active phrase */
    }

     showMatchedLetter(letter){

        let sentence = document.getElementById("phrase").firstElementChild;
        let letters = sentence.querySelectorAll("li");
        let shownLetters = [];
    
            letters.forEach(item => {
                if(letter===item.textContent && !shownLetters.includes(letter)){

                    
                    item.className = "show letter " + letter;
            
                    shownLetters.push(letter);

                 }

            })   

               return shownLetters;

     

    }      

}














/* Create a game class that will intialize 
the game missed countdown number, phrases and th active phrase */


class Game {

    constructor() {

        this.missed = 0;
        
        
        this.phrases = [

            new Phrase("you win"),
            new Phrase("love wins"),
            new Phrase("hive job"),
            new Phrase("magic world"),
            new Phrase("dog life")

        ]

        this.activePhrase = null;
    


    }


        // create a method that will generate the random phrase to be displayed on the screen

        getRandomPhrase(){

        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
        
        


        }


        /* Create a method that will start the game.
        this means that it will reset the game once it is over.
        Also, it means it will display the active phrase on the back end. 
        */
      
        startGame(){
      

        //reset game

            let keyboard = document.getElementById("qwerty");
            let keys = keyboard.querySelectorAll("button")
            let scoreboard = document.getElementById("scoreboard").firstElementChild;
            let image_pics = scoreboard.querySelectorAll("img");
            let sentence = document.getElementById("phrase").firstElementChild
            const li = sentence.querySelectorAll('li');

            if(this.checkforwin() || this.missed === 5 ){

            this.missed = 0;
            
            
            
            for(let i = 0; i < li.length; i++) {

                li[i].remove();


            }        

        

            for(let i = 0; i < image_pics.length; i++) {

                image_pics[i].src = "images/liveHeart.png";


            }


            for ( let i = 0; i < keys.length; i++) {
                
                keys[i].disabled = false; 
                keys[i].classList.remove("wrong");
                keys[i].classList.remove("chosen");

            }

            

        }

            // display active phrase on the back end.

            let overlay =  document.getElementById("overlay");
            overlay.style.display = "none";
            this.activePhrase = this.getRandomPhrase();
            this.activePhrase.addPhraseToDisplay();

            
            
            

    
    }

        /* create a method that will remove heart lives when the
        wrong letter is guessed. Also, this method will call the gameover()
        method once the game is completed successfully. 

        */


        handleInteraction(event){

        let button = event.target;
        


            button.disabled = true; 

            if(!this.activePhrase.phrase.includes(button.textContent)) {

            button.classList.add("wrong");
            
            // call here the remove life here

            this.removeLife();
            
    
            }

            else {

            button.classList.add("chosen");
            this.activePhrase.showMatchedLetter(button.textContent);

            //call the gameover method 

            if(this.checkforwin()) {
            this.gameOver();

            }


            }

        }

        /*create a method that will replaced the live heart by the empty heart
        once a letter is guessed incorrectly. Also, this method will call the 
        gameover() method once there are 5 missed times.
        */ 

        removeLife() {

            
            
            let scoreboard = document.getElementById("scoreboard").firstElementChild;
            let image_pics = scoreboard.querySelectorAll("img");
            let sentence = document.getElementById("phrase").firstElementChild
        
            

                if(image_pics[this.missed].src = "images/liveHeart.png") {
                image_pics[this.missed].src = "images/lostHeart.png";
                this.missed += 1;

                }

                if(this.missed === 5) {

                    
                    this.gameOver();
                    
                }
                
    
            

            /*
            Create a method that will check if you have won the game. 
            if you have won it it will return true. Otherwise, if you lost,
            it will return false.

            */

        }
            
            checkforwin(){

            let hidden_letters = document.querySelectorAll(".hide").length;
            let shown_letters = document.querySelectorAll(".show").length;
            let sentence = document.getElementById("phrase").firstElementChild
            let sentence_length = sentence.querySelectorAll('li').length;
            let space = document.querySelectorAll(".space").length;
            

            if(hidden_letters === 0){
                
                return true}


            else if (this.missed === 5) {
                return false}


            }

            
            /*

            Create a method that will display the overlay window with the
            "win message" if you won. But if you lost it will display the 
            same window with the message "you lost"


            */

            gameOver(){

             let overlay = document.getElementById("overlay");
             let overlay_title = document.getElementById("game-over-message");

             if(this.checkforwin()) {
                
                overlay.style.display = "block"
                overlay_title.textContent = "YOU WIN";
                overlay.classList.add("win");
                overlay.classList.remove("loose");
                


             }


             else {

                
                overlay_title.textContent = "YOU LOOSE";
                overlay.classList.add("loose");
                overlay.classList.remove("win");
                overlay.style.display = "block";
                


             }



            }



}



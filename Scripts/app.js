/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
(function () {
    "use strict"


    function DisplayText(){
        let paragraphMe = document.getElementById("textInMainPage");
        let myTextAboutMe = "I am Dey. I don't want to write my full name here to make it harder for someone serching the web to link this page to me. Right now my mission is to make this webpage.";
        paragraphMe.textContent=myTextAboutMe;

        
        let titleMe= document.getElementById("meInMainPage");
        let titleMeText = "me";
        titleMe.textContent=titleMeText;
    

    }
    window.addEventListener("load", DisplayText);

})();
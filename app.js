let buttons = document.querySelectorAll(".btn");

let buttons_array = Array.from(buttons);

buttons_array.forEach(ele => ele.addEventListener("click", function() {
    let button_selected = Array.from(this.classList[2]);
    if (button_selected.length == 3) {
        button_selected[1] = button_selected[1] + button_selected[2]
    }

    makesounds(button_selected);
    playanimation(this);

}));

function makesounds(sent) {
    
    switch(sent[1]) {
        case '1':
            let s1 = new Audio("sounds/bono.mp3");
            s1.play();
            break;
            
        case '2':
            let s2 = new Audio("sounds/hes on my arse.mp3");
            s2.play();
            break;

        case '3':
            let s3 = new Audio("sounds/how old are my tyres.mp3");
            s3.play();
            break;

        case '4':
            let s4 = new Audio("sounds/i can't go any faster man.mp3");
            s4.play();
            break;

        case '5':
            let s5 = new Audio("sounds/i cant keep the car behind.mp3");
            s5.play();
            break;

        case '6':
            let s6 = new Audio("sounds/i have got not time left in these tyres.mp3");
            s6.play();
            break;

        case '7':
            let s7 = new Audio("sounds/i'm basically out of the race.mp3");
            s7.play();
            break;

        case '8':
            let s8 = new Audio("sounds/I'm out of the race now.mp3");
            s8.play();
            break;

        case '9':
            let s9 = new Audio("sounds/left front is dead.mp3");
            s9.play();
            break;

        case '10':
            let s10 = new Audio("sounds/lewis its james.mp3");
            s10.play();
            break;

        case '11':
            let s11 = new Audio("sounds/safety car needs to speed man.mp3");
            s11.play();
            break;

        case '12':
            let s12 = new Audio("sounds/struggling to keep temp in these tyres man.mp3");
            s12.play();
            break;

        case '13':
            let s13 = new Audio("sounds/these tyres are fucked.mp3");
            s13.play();
            break;

        case '14':
            let s14 = new Audio("sounds/they're dead.mp3");
            s14.play();
            break;

        case '15':
            let s15 = new Audio("sounds/tyres.mp3");
            s15.play();
            break;

        case '16':
            let s16 = new Audio("sounds/we need to hope for a mircale.mp3");
            s16.play();
            break;

        case '17':
            let s17 = new Audio("sounds/what tyres has he gone to.mp3");
            s17.play();
            break;

        case '18':
            let s18 = new Audio("sounds/im not going to be able to pass these guys.mp3");
            s18.play();
            break;

    }
}

function playanimation(pressed) {
    pressed.classList.add("pressed");
    setTimeout(function() {
        pressed.classList.remove("pressed");
      }, 100);
}
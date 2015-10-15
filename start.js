var yesNo = confirm("Are you ready to play a game?");
if (!yesNo) {
    confirm("Wow okay rude");
    window.location.assign("gameover.htm");
}

else {
    var age = prompt("Today is your birthday. How old are you?");
    
    if (age < 13) {
        confirm("Sorry, this game is PG-13. Come back when you're older.");
        window.location.assign("gameover.htm");
    }
    else if (age > 99) {
        confirm("Wow, you're old.");
    }
    
    if (age > 13) {
        confirm("Oh, you have a name already.");
    }
    else {
        confirm("Oh, you're 13 now! Wonderful. You finally get a name today, good for you.");
        var username = prompt("What is your name?");
        confirm(username +"? That's hard to remember. I'll just call you Captain Cruch.");
    }
    
    var name = "Captain Crunch";
    confirm("Hello, " + name + ".");

    confirm("Lots of important things are happening today.");
    var choice = prompt("Do you want to (1) go to your birthday party or (2) stay in bed?");
    while (choice != 1 && choice != 2) {
        confirm ("Error! Invalid choice.");
        choice = prompt("Do you want to (1) go to your birthday party or (2) stay in bed?");
    }
    
    if (choice === "2") {
        confirm("You die in your sleep a few hours later.");
        confirm("You suck at adventure games.");
        window.location.assign("gameover.htm");
    }
    
    else {
        confirm("Excellent choice. Parties have dessert and presents.");
        window.location.assign("party.htm");
    }
}
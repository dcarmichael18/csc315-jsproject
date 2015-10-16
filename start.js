var yesNo = confirm("Are you ready to play a game?");
if (!yesNo) {
    confirm("Wow okay rude");
    window.location.assign("gameover.htm");
}

else {
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
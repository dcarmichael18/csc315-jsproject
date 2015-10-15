confirm("The party is pretty cool. You eat your fill of cake, and your friend Bob gives you a neatly wrapped present.");
confirm("Presents aren't supposed to be until later on, but he seems pretty insistent that you open it now.");
var choice = prompt("Do you (1) open the present now or (2) wait until the party is over?");
while (choice != 1 && choice != 2) {
    confirm ("Error! Invalid choice.");
    choice = prompt("Do you (1) open the present now or (2) wait until the party is over?");
}
if (choice === "1") {
	confirm("You figure that if he's this worked up about it, you should do as he says.");
	window.location.assign("box.htm");
}
else {
	confirm("You tell Bob that his present can wait with all the others.");
	confirm("You go over to play a game with your friend Sue.");
	var game = prompt("Do you suggest (1) Twister, (2) Monopoly, or (3) Strip Poker?");
	while (!(game === "1" || game === "2" || game === "3")) {
        confirm ("Error! Invalid choice.");
        game = prompt("Do you suggest (1) Twister, (2) Monopoly, or (3) Strip Poker?");
    }
    switch(game) {
		case "1":
			confirm("Sue is furious. You should have remembered the Twister incident a few years back.");
			confirm("You slouch over to the presents, good mood forgotten.");
			break;
		case "2":
			confirm("Sue is so glad that you remembered how much she loves Monopoly.");
			confirm("Many hours later, she has robbed everyone blind with capitalism, and you move on to presents.");
			break;
		case "3":
			confirm("You're usually really good at poker, but the cards aren't in your favor this time.");
			confirm("Sue allows you to retain your underwear, but not your dignity.");
			confirm("You move on to the presents, hoping that maybe one of them has clothes.");
			break;
		default:
			confirm("Sue has never heard of that game, but she's willing to try it.");
			confirm("You have fun, and after a good long game you move on to opening presents.");
			break;
	}
	confirm("You open Bob's first, because he had been so insistent about it.");
	window.location.assign("box.htm");
}
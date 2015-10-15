confirm("The box contains a swirling black vortex. You can feel it pulling you in.");
var choice = prompt("Do you (1) let yourself be pulled in or (2) run away as fast as you can?");
while (choice != "1" && choice != "2") {
	confirm ("Error! Invalid choice.");
    choice = prompt("Do you (1) let yourself be pulled in or (2) run away as fast as you can?");
}

if (choice === "2") {
	confirm("You are not about the 'getting sucked into mysterious portals' life. You run away.");
	confirm("The vortex pulls the entire building in, and you have Bob arrested for attempted murder.");
	confirm("While filling out paperwork, the planet explodes.");
	window.location.assign.("gameover.htm");
}
else {
	confirm("You can't resist it. You let yourself be pulled into the vortex.");
}
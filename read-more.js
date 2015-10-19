function showHide(shID) {
   if (document.getElementById(shID)) {
      //what to do when clicking to show
      if (document.getElementById(shID+'-show').style.display != 'none') {
         document.getElementById(shID).style.display = 'block';
      }
      //what to do when clicking to hide
      else {
         document.getElementById(shID+'-show').style.display = 'inline';
         document.getElementById(shID).style.display = 'none';
      }
   }
}
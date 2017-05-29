$(document).ready(function(){
  // Initial Page Load
  menu('home');
  // Event Handler for Menu Bar
  $('.menu').click(function(){
    menu(this.id);
  });
});

// Dynamically Load Content
function menu(link){
  $('.w3-content').load('pages/' + link + '.html');
}

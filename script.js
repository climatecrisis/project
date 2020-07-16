//Page d'accueil - animation
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);








// QUIZZ
$(document).ready(function(){

//Question 1
  $('.button1').attr("disabled","disabled");
  $("#carre").click(
    function(){
      $("#carre").css({'border' : '3px solid rgb(48, 181, 100, 0.6)'});
      $(".button1").addClass("white");
      $('.button1').attr("disabled","");
  });

  $("#carre2").click(
    function(){
      $("#carre2").css({'border' : '3px solid rgb(255, 107, 19, 0.6)'});
  });

  $("#carre3").click(
    function(){
      $("#carre3").css({'border' : '3px solid rgb(255, 107, 19, 0.6)'});
  });

  $(".button1").click(
    function(){
      $(".question1").addClass("none");
      $("#carre").css({'border' : 'none'});
      $("#carre2").css({'border' : 'none'});
      $("#carre3").css({'border' : 'none'});
      $(".question2").addClass("yes");
  });




// Question 2
  $('.button2').attr("disabled","disabled");
  $("#carree").click(
    function(){
      $("#carree").css({'border' : '3px solid rgb(48, 181, 100, 0.6)'});
      $(".button2").addClass("white");
      $('.button2').attr("disabled","");
  });

  $("#carree2").click(
    function(){
      $("#carree2").css({'border' : '3px solid rgb(255, 107, 19, 0.6)'});
  });

  $("#carree3").click(
    function(){
      $("#carree3").css({'border' : '3px solid rgb(255, 107, 19, 0.6)'});
  });


  $(".button2").click(
    function(){
      $(".question2").removeClass("yes");
      $("#carree").css({'border' : 'none'});
      $("#carree2").css({'border' : 'none'});
      $("#carree3").css({'border' : 'none'});
      $(".question3").addClass("yes");
  });





//Question 3
  $('.button3').attr("disabled","disabled");
  $("#care").click(
    function(){
      $("#care").css({'border' : '3px solid rgb(48, 181, 100, 0.6)'});
      $(".button3").addClass("white");
      $('.button3').attr("disabled","");
  });

  $("#care2").click(
    function(){
      $("#care2").css({'border' : '3px solid rgb(255, 107, 19, 0.6)'});
  });

  $("#care3").click(
    function(){
      $("#care3").css({'border' : '3px solid rgb(255, 107, 19, 0.6)'});
  });

  $(".button3").click(
    function(){
      $(".question3").removeClass("yes");
      $("#care").css({'border' : 'none'});
      $("#care2").css({'border' : 'none'});
      $("#care3").css({'border' : 'none'});
      $(".question4").addClass("yes");
  });





//Question 4
  $('.button4').attr("disabled","disabled");
    $("#carre0").click(
      function(){
        $("#carre0").css({'border' : '3px solid rgb(48, 181, 100, 0.6)'});
        $(".button4").addClass("white");
        $('.button4').attr("disabled","");
    });

  $("#carre1").click(
    function(){
      $("#carre1").css({'border' : '3px solid rgb(255, 107, 19, 0.6)'});
  });

  $("#carre4").click(
    function(){
      $("#carre4").css({'border' : '3px solid rgb(255, 107, 19, 0.6)'});
  });


  $(".button4").click(
    function(){
      $(".question4").removeClass("yes");
      $("#carre0").css({'border' : 'none'});
      $("#carre1").css({'border' : 'none'});
      $("#carre4").css({'border' : 'none'});
      $(".question5").addClass("yes");
  });




//Question 5
$('.button5').attr("disabled","disabled");
  $("#carre5").click(
    function(){
      $("#carre5").css({'border' : '3px solid rgb(48, 181, 100, 0.6)'});
      $(".button5").addClass("white");
      $('.button5').attr("disabled","");
  });

  $("#carre6").click(
    function(){
      $("#carre6").css({'border' : '3px solid rgb(255, 107, 19, 0.6)'});
  });

  $("#carre7").click(
    function(){
      $("#carre7").css({'border' : '3px solid rgb(255, 107, 19, 0.6)'});
  });

  $(".button5").click(
    function(){
      $(".question5").removeClass("yes");
      $("#carre5").css({'border' : 'none'});
      $("#carre6").css({'border' : 'none'});
      $("#carre7").css({'border' : 'none'});
      $(".question1").addClass("yes");
  });

  $(".button1").click(
    function(){
      $(".question1").removeClass("yes");
      $(".question2").addClass("yes");
  });

});








// drag & drop
$(document).ready(function() {
  var a = 3;
  $('#box1,#box2,#box3,#box4,#box5,#box6,#box7,#box8,#box9').draggable({
    start: function(event, ui) {
      $(this).css("z-index", a++);
    }
  });
});









// effet de transparence des illustrations
$(document).ready(function() {
    
    $(window).scroll( function(){

        $('.scrollme').each(function(){
            
            var tailleElement = $(this).offset().top + $(this).outerHeight(true);
            var basFenetre = $(window).scrollTop() + $(window).height();

            if( basFenetre > tailleElement ){
                $(this).animate({'opacity':'1'},1000);
            }
        }); 
    });
});





var $head = $('#header');
// console.log($head);

var $li = $('li');
// console.log($li);
$li.addClass("item");

// var $p = $('p');
// $p.hide();
// $p.fadeIn(5000);

// $('li').on("click", function() {
//   console.log(this);
//   $(this).hide().fadeIn(1000);
// });

$('li').on("click mouseenter", function() {
  $(this).animate({
    fontSize: 32
  }, 500, function(){
    $(this).animate({
      fontSize: 16
    }, 500);
  });
});





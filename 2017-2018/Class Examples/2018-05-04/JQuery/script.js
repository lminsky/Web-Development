var $head = $('#header');
console.log($head);

var $li = $('li');
console.log($li);
$li.addClass("item");

// var $p = $('p');
// $p.hide();
// $p.fadeIn(5000);

$('li').on("click", function() {
  // $(this).hide().fadeIn(5000);
  console.log("click", this);
  $(this).animate({
    fontSize: 28
  }, function() {
    $(this).animate({
      fontSize: 16
    });
  });
});
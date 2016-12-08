$(document).ready(function() {
  $('nav div#bs-example-navbar-collapse-1 ul li a').click(function() {
    var page = $(this).attr('href');
    $('#content').load('pages/' + page + ' #' + page + '-container');
    return false;
  });

});

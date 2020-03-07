$(function() {

  let $list = $('ul');
  let $newItemForm = $('#newItemForm');

  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    let text = $('input[type="text"]').val();
    $list.append(`<li class="item"><input type="checkbox">${text}</li>`);
    $('input[type="text"]').val('');
  });

  $list.on('change', 'li', function() {
      let $this = $(this);
      $this.fadeOut();
  });

});
$(function() {
  $('#slider-range').slider({
    range: true,
    min: 0,
    max: 800,
    values: [100, 500],
    slide: function(event, ui) {
      $('#amount').val(ui.values[0] + ' руб. - ' + ui.values[1] + ' руб.');
    }
  });

  $('#amount').val($('#slider-range').slider('values', 0) + ' руб. - ' +
    $('#slider-range').slider('values', 1) + ' руб.');
});
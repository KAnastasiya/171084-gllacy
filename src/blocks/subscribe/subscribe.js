/**
 * Handler for submit button click
 */
let _onSubmitClick = function() {
  const subscribeEmail = $('.subscribe__form').find('[name="email"]');
  if( !subscribeEmail.val() ) {
    event.preventDefault();
    subscribeEmail.addClass('error');
  } else {
    subscribeEmail.removeClass('error');
  }
};

$('.btn--subscribe').click(_onSubmitClick);

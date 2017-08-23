/**
 * Html DOM-element
 * @constant
 * @type {Element}
 */

const page = $('html');

/**
 * Code for Escape
 * @constant
 * @type {Number}
 */
const escapeCode = 27;

/**
 * Delay for modal window hidding
 * @constant
 * @type {Number}
 */
const hideModalDelay = 950;

/**
 * DOM-elements for feedback modal window
 * @constant
 * @type {Object}
 */
const modalFeedback = {
  window: $('#feedback'),
  btnShow: $('.btn--feedback-show'),
  btnClose: $('#feedback .icon--close'),
  fields: $('#feedback input, #feedback textarea'),
  userName: $('#feedback input[name="user"]'),
  userEmail: $('#feedback input[name="email"]'),
  submit: $('.btn--feedback')
};

/**
 * Manage float labels
 * @param  {Element} elem
 */
let _toggleFloatLabel = (elem) => {
  elem.toggleClass('filled', elem.val() !== '');
};

/**
 * Set in forms users data, saved in localStorage
 */
let _setSavedUserInfo = () => {
  let lastUserName = localStorage.getItem('name');
  let lastUserEmail = localStorage.getItem('email');

  if(lastUserName) {
    modalFeedback.userName.val(lastUserName);
    _toggleFloatLabel(modalFeedback.userName);
  }

  if(lastUserEmail) {
    modalFeedback.userEmail.val(lastUserEmail);
    _toggleFloatLabel(modalFeedback.userEmail);
  }
};

/**
 * Set focus in first empty forms field
 */
let _setFocusInFirstEmptyField = () => {
  $.each(modalFeedback.fields, (index, elem) => {
    let element = $(elem);
    if(!element.val()) {
      element.focus();
      return false;
    }
    return true;
  });
};

/**
 * Show modal function
 * @param  {Element} modal
 */
let _showModal = (modal) => {
  let width = $('body').width();
  $('body').width(width);

  page.addClass('lock');
  modal.addClass('modal--active');
  modal
    .find('.modal__container')
    .removeClass('bounceOutRight')
    .addClass('animated bounceInRight');
  _setSavedUserInfo();
  _setFocusInFirstEmptyField();
};

/**
 * Hide modal function
 * @param  {Element} modal
 */
let _hideModal = (modal) => {
  modal
    .find('.modal__container')
    .removeClass('bounceInRight')
    .addClass('bounceOutRight');

  setTimeout(function() {
    $('body').width('');
    modal.removeClass('modal--active');
    page.removeClass('lock');
    modal.find('.modal__dialog').removeClass('animated shake');

    $.each(modalFeedback.fields, (index, elem) => {
      let element = $(elem);
      element.val('');
      element.removeClass('error');
    });
  }, hideModalDelay);
};

/**
 * Handler for clicking on button 'Show modal window'
 * @param  {Element} modal
 * @param  {Object} event
 */
let _onShowClick = (modal) => {
  return function(event) {
    event.preventDefault();
    _showModal(modal);
  };
};

/**
 * Handler for clicking on button 'Hide modal window'
 * @param  {Element} modal
 */
let _onCloseClick = (modal) => {
  return function() {
    _hideModal(modal);
  };
};

/**
 * Handler for clicking on modal window overlay
 * @param  {Element} modal
 * @param  {Object} event
 */
let _onOverlayClick = (modal) => {
  return function(event) {
    if (event.target === event.currentTarget) {
      _hideModal(modal);
    }
  };
};

/**
 * Handler for changing values of fields in feddback form
 */
let _onFieldValueChange = function() {
  _toggleFloatLabel( $(this) );
};

/**
 * Handler for submit button click
 * @param  {Element} modal
 */
let _onSubmitClick = function(modal) {
  return function(event) {
    modal.find('.modal__dialog').removeClass('animated shake');

    $.each(modalFeedback.fields, (index, elem) => {
      let element = $(elem);
      if(!element.val()) {
        event.preventDefault();
        setTimeout(function() {
          modal.find('.modal__dialog').addClass('animated shake');
        }, 4);
        element.addClass('error');
      } else {
        if( element.attr('name') === 'user' ) {
          localStorage.setItem('name', element.val());
        } else if ( element.attr('name') === 'email' ) {
          localStorage.setItem('email', element.val());
        }
        element.removeClass('error');
      }
    });
  };
};

/**
 * Handler for clicking Escape
 */
let _onEscapeDown = () => {
  if (event.keyCode === escapeCode) {
    $('body').width('');
    _hideModal( $('#feedback') );
  }
};

// Set event handlers for feedback window
modalFeedback.btnShow.click(_onShowClick(modalFeedback.window));
modalFeedback.btnClose.click(_onCloseClick(modalFeedback.window));
modalFeedback.window.click(_onOverlayClick(modalFeedback.window));
modalFeedback.submit.click(_onSubmitClick(modalFeedback.window));
modalFeedback.fields.change(_onFieldValueChange);
window.onkeydown = _onEscapeDown;

/**
 * DOM-elements for login form
 * @constant
 * @type {Object}
 */
const login = {
  btnShow: $('.user__item--login'),
  fields: $('.login__form input'),
  login: $('.login__form input[name="login"]'),
  submit: $('.btn--login')
};

/**
 * Set in forms users data, saved in localStorage
 */
let _setSavedUserInfo = () => {
  let lastLogin = localStorage.getItem('login');

  if(lastLogin) {
    login.login.val(lastLogin);
  }
};

/**
 * Set focus in first empty forms field
 */
let _setFocusInFirstEmptyField = () => {
  $.each(login.fields, (index, elem) => {
    let element = $(elem);
    if(!element.val()) {
      element.focus();
      return false;
    }
  });
};

/**
 * Handler for submit button clickfields
 */
let _onSubmitClick = function(event) {
  $.each(login.fields, (index, elem) => {
    let element = $(elem);
    if( !element.val() ) {
      event.preventDefault();
      element.addClass('error');
    } else {
      if( element.attr('name') === 'login' ) {
        localStorage.setItem('login', element.val());
      } else if ( element.attr('name') === 'password' ) {
        localStorage.setItem('password', element.val());
      }
      element.removeClass('error');
    }
  });
};

/**
 * Handler for hover on 'Show login' button
 */
let _onLoginMouseEnter = () => {
  _setSavedUserInfo();
  _setFocusInFirstEmptyField();
};

/**
 * Handler for unhover on 'Show login' button
 */
let _onLoginMouseLeave = () => {
  $.each(login.fields, (index, elem) => {
    let element = $(elem);
    element.val('');
  });
};

// Set event handlers for feedback window
login.btnShow.mouseenter(_onLoginMouseEnter);
login.btnShow.mouseleave(_onLoginMouseLeave);
login.submit.click(_onSubmitClick);

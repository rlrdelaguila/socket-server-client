import { docReady, getData } from './utils';

/* -------------------------------------------------------------------------- */
/*                             Redirection to Demo                            */
/* -------------------------------------------------------------------------- */

const redirectToDocs = (id) => {
  const input = document.getElementById(id);
  input &&
    input.addEventListener('change', (e) => {
      const el = e.currentTarget;
      const isChecked = el.checked;
      const { location } = window;
      isChecked
        ? location.replace(getData(el, 'page-url'))
        : location.replace(getData(el, 'home-url'));
    });
};

const redirectToNavbarDocs = (selector) => {
  const inputs = document.querySelectorAll(selector);
  inputs.forEach((input) => {
    input.addEventListener('change', (e) => {
      window.location.replace(getData(e.currentTarget, 'page-url'));
    });
  });
};

docReady(redirectToDocs('mode-rtl'));
docReady(redirectToDocs('mode-fluid'));
docReady(redirectToNavbarDocs('input[name="navbar"]'));
docReady(redirectToNavbarDocs('input[name="navbarStyle"]'));

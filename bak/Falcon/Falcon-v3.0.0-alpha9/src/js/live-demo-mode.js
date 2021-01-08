import { docReady, setItemToStore } from './utils';
import { isRTL, isFluid } from './live-config';

/* -------------------------------------------------------------------------- */
/*                         Toggle layout for live demo                        */
/* -------------------------------------------------------------------------- */

const toggleLayout = (id, key, value) => {
  const input = document.getElementById(id);

  input &&
    input.addEventListener('change', () => {
      setItemToStore(key, !value);
      window.location.reload();
    });
};

const toggleNavbar = (selector, key) => {
  const checkInputs = document.querySelectorAll(selector);
  checkInputs.forEach((input) => {
    input.addEventListener('change', (e) => {
      const { value } = e.currentTarget;
      setItemToStore(key, value);
      window.location.reload();
    });
  });
};

docReady(toggleLayout('mode-rtl', 'isRTL', isRTL));
docReady(toggleLayout('mode-fluid', 'isFluid', isFluid));
docReady(toggleNavbar("input[name='navbar']", 'navbarPosition'));
docReady(toggleNavbar("input[name='navbarStyle']", 'navbarStyle'));

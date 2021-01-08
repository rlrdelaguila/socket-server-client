/* -------------------------------------------------------------------------- */
/*                                   Popover                                  */
/* -------------------------------------------------------------------------- */

const popoverInit = () => {
  const popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-toggle="popover"]')
  );
  popoverTriggerList.map((popoverTriggerEl) => {
    return new window.bootstrap.Popover(popoverTriggerEl, {
      trigger: 'focus',
    });
  });
};

export default popoverInit;

import utils from './utils';

/* -------------------------------------------------------------------------- */
/*                                   Tinymce                                  */
/* -------------------------------------------------------------------------- */

const tinymceInit = () => {
  if (window.tinymce) {
    const tinymces = document.querySelectorAll('.tinymce');
    if (tinymces.length) {
      window.tinymce.init({
        selector: '.tinymce',
        height: '50vh',
        menubar: false,
        skin: utils.settings.tinymce.theme,
        content_style: `.mce-content-body { color: ${utils.grays.black} }`,
        mobile: {
          theme: 'mobile',
          toolbar: ['undo', 'bold'],
        },
        statusbar: false,
        plugins: 'link,image,lists,table,media',
        toolbar:
          'styleselect | bold italic link bullist numlist image blockquote table media undo redo',
      });
    }
  }
};

export default tinymceInit;

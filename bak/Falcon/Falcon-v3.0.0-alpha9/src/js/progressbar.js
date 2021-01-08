import utils from './utils';

/* -------------------------------------------------------------------------- */
/*                               Progressbar JS                               */
/* -------------------------------------------------------------------------- */

/*
  global ProgressBar
*/
const progressBar = () => {
  const { merge } = window._;

  // progressbar.js@1.0.0 version is used
  // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

  /*-----------------------------------------------
  |   Progress Circle
  -----------------------------------------------*/
  const progresCircle = document.querySelectorAll('.progress-circle');
  if (progresCircle.length) {
    progresCircle.forEach((item) => {
      const userOptions = utils.getData(item, 'options');

      const defaultOptions = {
        strokeWidth: 2,
        trailWidth: 2,
        trailColor: utils.grays['200'],
        easing: 'easeInOut',
        duration: 3000,
        svgStyle: {
          'stroke-linecap': 'round',
          display: 'block',
          width: '100%',
        },
        text: {
          autoStyleContainer: false,
        },
        // Set default step function for all animate calls
        step: (state, circle) => {
          // Change stroke color during progress
          // circle.path.setAttribute('stroke', state.color);

          // Change stroke width during progress
          // circle.path.setAttribute('stroke-width', state.width);

          const percentage = Math.round(circle.value() * 100);
          circle.setText(
            `<span class='value'>${percentage}<b>%</b></span> <span>${
              userOptions.text || ''
            }</span>`
          );
        },
      };

      const options = merge(defaultOptions, userOptions);

      const bar = new ProgressBar.Circle(item, options);

      let linearGradient = `<defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color='#1970e2' />
          <stop offset="100%" stop-color='#4695ff' />
        </linearGradient>
      </defs>`;
      bar.svg.insertAdjacentHTML('beforeEnd', linearGradient);

      let playProgressTriggered = false;
      const progressCircleAnimation = () => {
        if (!playProgressTriggered) {
          if (utils.isScrolledIntoView(item).partial) {
            bar.animate(options.progress / 100);
            playProgressTriggered = true;
          }
        }
        return playProgressTriggered;
      };
      progressCircleAnimation();
      window.addEventListener('scroll', () => {
        progressCircleAnimation();
      });
    });
  }
};

export default progressBar;

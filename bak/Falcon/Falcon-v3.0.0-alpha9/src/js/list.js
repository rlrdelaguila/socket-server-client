import utils from './utils';

/* -------------------------------------------------------------------------- */
/*                                 Data Table                                 */
/* -------------------------------------------------------------------------- */
/* eslint-disable no-param-reassign */
const togglePaginationButtonDisable = (button, disabled) => {
  if (disabled) {
    button.classList.remove('btn-primary');
    button.classList.add('btn-light');
    button.disabled = disabled;
  } else {
    button.classList.remove('btn-light');
    button.classList.add('btn-primary');
    button.disabled = disabled;
  }
};

const listInit = () => {
  if (window.List) {
    const lists = document.querySelectorAll('[data-list]');
    if (lists.length) {
      lists.forEach((el) => {
        const options = utils.getData(el, 'list');
        const paginationButtonNext = el.querySelector(
          '[data-list-pagination="next"]'
        );
        const paginationButtonPrev = el.querySelector(
          '[data-list-pagination="prev"]'
        );
        const viewAll = el.querySelector('[data-list-view="*"]');
        const listInfo = el.querySelector('[data-list-info]');
        const list = new window.List(el, options);
        const totalItem = list.items.length;
        const itemsPerPage = list.page;
        const btnDropdownClose = list.listContainer.querySelector('.btn-close');
        let pageQuantity = Math.ceil(totalItem / itemsPerPage);
        let numberOfcurrentItems = list.visibleItems.length;
        let pageCount = 1;

        btnDropdownClose &&
          btnDropdownClose.addEventListener('search.close', () => {
            list.fuzzySearch('');
          });

        const updateListControls = () => {
          listInfo &&
            (listInfo.innerHTML = `${list.i} to ${numberOfcurrentItems} of ${totalItem}`);
          paginationButtonPrev &&
            togglePaginationButtonDisable(
              paginationButtonPrev,
              pageCount === 1
            );
          paginationButtonNext &&
            togglePaginationButtonDisable(
              paginationButtonNext,
              pageCount === pageQuantity
            );

          if (pageCount > 1 && pageCount < pageQuantity) {
            togglePaginationButtonDisable(paginationButtonNext, false);
            togglePaginationButtonDisable(paginationButtonPrev, false);
          }
        };

        // List info

        updateListControls();

        if (paginationButtonNext) {
          paginationButtonNext.addEventListener('click', (e) => {
            e.preventDefault();
            pageCount = pageCount + 1;

            const nextInitialIndex = list.i + itemsPerPage;
            nextInitialIndex <= list.size() &&
              list.show(nextInitialIndex, itemsPerPage);
            numberOfcurrentItems += list.visibleItems.length;
            updateListControls();
          });
        }

        if (paginationButtonPrev) {
          paginationButtonPrev.addEventListener('click', (e) => {
            e.preventDefault();
            pageCount = pageCount - 1;

            numberOfcurrentItems =
              numberOfcurrentItems - list.visibleItems.length;
            const prevItem = list.i - itemsPerPage;
            prevItem > 0 && list.show(prevItem, itemsPerPage);
            updateListControls();
          });
        }

        if (viewAll) {
          viewAll.addEventListener('click', () => {
            list.show(1, totalItem);
            pageQuantity = 1;
            pageCount = 1;
            numberOfcurrentItems = totalItem;
            updateListControls();
          });
        }
      });
    }
  }
};

export default listInit;

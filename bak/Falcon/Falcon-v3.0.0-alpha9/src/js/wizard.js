const wizardInit = () => {
  const tabEl = document.querySelectorAll('.theme-wizard a[data-toggle="tab"]');
  if (tabEl.length) {
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".previous button");
    const cardFooter = document.querySelector(".theme-wizard .card-footer");
    let count = 0;

    prevButton.classList.add("d-none");

    // on button click tab change
    nextButton.addEventListener("click", () => {
      count = count + 1;
      const tab = new window.bootstrap.Tab(tabEl[count]);
      tab.show();
    });

    prevButton.addEventListener("click", () => {
      count = count - 1;
      const tab = new window.bootstrap.Tab(tabEl[count]);
      tab.show();
    });

    tabEl.forEach((item, index) => {
      item.addEventListener("show.bs.tab", () => {
        count = index;
        // cant go back tab
        if (count === tabEl.length - 1) {
          tabEl.forEach((tab) => {
            tab.setAttribute("data-toggle", "modal");
            tab.setAttribute("data-target", "#error-modal");
          });
        }
        //add done class
        for (let i = 0; i < count; i = i + 1) {
          tabEl[i].classList.add("done");
        }
        //remove done class
        for (let j = count; j < tabEl.length; j = j + 1) {
          tabEl[j].classList.remove("done");
        }
        if (count > tabEl.length - 2) {
          item.classList.add("done");
          cardFooter.classList.add("d-none");
        } else {
          cardFooter.classList.remove("d-none");
        }
        if (count > 0) {
          prevButton.classList.remove("d-none");
        } else {
          prevButton.classList.add("d-none");
        }
      });
    });
  }
};

export default wizardInit;

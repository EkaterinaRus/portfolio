Fancybox.bind("[data-fancybox]", {});

const ticker = document.querySelector('.ticker__list');
const tickerItem = '[data-ticker="item"]';
const itemCount = ticker.querySelectorAll('.ticker__item').length;
let viewportWidth = 0;

const setupViewport = () => {
  ticker.querySelectorAll(tickerItem).forEach(item => {
    const clonedItem = item.cloneNode(true);
    ticker.insertBefore(clonedItem, ticker.lastChild);
  });

  for (let i = 0; i < itemCount; i++) {
    const itemWidth = ticker.querySelectorAll('.ticker__item')[i].offsetWidth;
    console.log(itemWidth)
    viewportWidth += itemWidth;
  }

  console.log(viewportWidth)

  ticker.style.width = `${viewportWidth}px`;
};

const animateTicker = () => {
  ticker.animate([
    { marginLeft: `-${viewportWidth}px` }
  ], {
    duration: 100000,
    easing: "linear",
    iterations: Infinity
  });
};

function initializeTicker() {
  setupViewport();
  animateTicker();
}

initializeTicker();

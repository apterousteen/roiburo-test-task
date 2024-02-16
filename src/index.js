import 'normalize.css';
import './styles/main.scss';
import { initMap } from './js/yandexMap';
import Splide from '@splidejs/splide';
import { Grid } from '@splidejs/splide-extension-grid';
import '@splidejs/splide/dist/css/splide.min.css';

const copyContact = () => {
  const btnsCopy = document.querySelectorAll('.btn-copy');

  btnsCopy.forEach((b) =>
    b.addEventListener('click', function () {
      console.log('click');
      const copyType = this.dataset.copy;
      let copyText;

      if (copyType === 'phone') {
        copyText = document.querySelector('a[data-copy="phone"]').innerText;
      } else if (copyType === 'mail') {
        copyText = document.querySelector('a[data-copy="mail"]').innerText;
      }

      navigator.clipboard.writeText(copyText).then(
        () => {
          alert(`Скопировали: ${copyText}`);
        },
        (err) => {
          alert(`Не вышло скопировать: ${err}`);
        }
      );
    })
  );
};
const mountSliders = () => {
  const splide1 = new Splide('#splide-1', {
    type: 'slide',
    perPage: 3,
    perMove: 1,
    gap: '40px',
    arrows: true,
    pagination: false,
    cover: true,
    fixedHeight: '396px',
    drag: false,
    breakpoints: {
      // small desktop
      1441: {
        gap: '24px',
      },

      // tablet
      1025: {
        drag: true,
        arrows: false,
        gap: '40px',
        perPage: 1,
        fixedWidth: '552px',
      },

      // mobile
      767: {
        drag: true,
        arrows: false,
        gap: '24px',
        perPage: 1,
        fixedWidth: '351px',
        fixedHeight: '252px',
      },
    },
  });

  const bar = splide1.root.querySelector(
    '.splide__footer--custom__progress-bar'
  );

  // Updates the bar width whenever the carousel moves:
  splide1.on('mounted move', function () {
    const end = splide1.Components.Controller.getEnd() + 1;
    const rate = Math.min((splide1.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + '%';
  });

  splide1.mount();

  const splide2 = new Splide('#splide-2', {
    drag: false,
    pagination: false,
    arrows: true,
    grid: {
      rows: 1,
      cols: 4,
      gap: {
        row: '40px',
        col: '40px',
      },
    },
    breakpoints: {
      1441: {
        grid: {
          rows: 1,
          cols: 3,
          gap: {
            row: '24px',
            col: '24px',
          },
        },
      },
      768: {
        drag: true,
        arrows: false,
        grid: {
          rows: 2,
          cols: 2,
        },
      },
      480: {
        drag: true,
        arrows: false,
        grid: {
          rows: 1,
          cols: 1,
        },
      },
    },
  });

  const bar2 = splide2.root.querySelector('.splide-2__progress-bar');

  // Updates the bar width whenever the carousel moves:
  splide2.on('mounted move', function () {
    const end = splide2.Components.Controller.getEnd() + 1;
    const rate = Math.min((splide2.index + 1) / end, 1);
    bar2.style.width = String(100 * rate) + '%';
  });

  splide2.mount({ Grid });
};

document.addEventListener('DOMContentLoaded', mountSliders);
initMap();
copyContact();

import 'normalize.css';
import './styles/main.scss';
import { initMap } from './js/yandexMap';

const copyContact = function () {
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

initMap();
copyContact();

import { footerColorTheme } from './consts';

const intersectionCallback = (entries, onColorChange) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;

    onColorChange(footerColorTheme[e.target.id - 1]);
  });
};

export default intersectionCallback;

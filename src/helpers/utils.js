const intersectionCallback = (entries, onColorChange) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;

    onColorChange(colorsBg[e.target.id - 1]);
  });
};

const colorsBg = ['transparent', 'white', '#293743'];

export default intersectionCallback;

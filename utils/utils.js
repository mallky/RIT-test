const MIN_WIDTH = 100;
const MAX_WIDTH = 700;
const ZOOM_STEP = 20;
const DELAY = 1000;
const CAR_IDS = ['left-front-wing', 'left-front-door'];
const CAR_ITEMS = ['Левое переднее крыло', 'Левая передняя дверь'];
const KEY_CODES = {
  esc: 27
};
const SELECTED_CLASS = 'selected';

const getItemNameById = (id) => {
  const index = CAR_IDS.indexOf(id);

  return index + 1 ? CAR_ITEMS[index] : null;
};

const getIdByName = (name) => {
  const index = CAR_ITEMS.indexOf(name);

  return index + 1 ? CAR_IDS[index] : null;
};

const removeSelection = (name) => {
  const id = getIdByName(name);

  document.getElementById(id).removeAttribute('class');
}

export default {
  MIN_WIDTH,
  MAX_WIDTH,
  ZOOM_STEP,
  KEY_CODES,
  SELECTED_CLASS,
  DELAY,
  getItemNameById,
  removeSelection
}

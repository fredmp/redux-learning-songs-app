import { combineReducers } from 'redux';

const songs = () => {
  return [
    { title: "Amazing", duration: "5:20" },
    { title: "Outono", duration: "2:44" },
    { title: "One Love", duration: "4:08" },
    { title: "Two Hearts", duration: "4:02" },
    { title: "Somebody to Love", duration: "5:22" }
  ];
};

const selectedSong = (selected = null, action) => {
  if (action.type === 'SELECT_SONG') {
    return action.payload;
  }
  return selected;
};

export default combineReducers({
  songs,
  selectedSong
});

import axios from 'axios';

export const getSongs = (songTitle) => axios.get(`https://itunes.apple.com/search?term=${songTitle}`)
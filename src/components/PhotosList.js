import { useFetchPhotosQuery } from '../store';

function PhotosList({ album }) {
  useFetchPhotosQuery(album);

  return 'PhotoList';
}

export default PhotosList;
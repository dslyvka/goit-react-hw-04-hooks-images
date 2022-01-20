export default function fetchImages(value, page) {
  const query = `https://pixabay.com/api/?q=${value}&page=${page}&key=24204810-4c4e56177cf5555097dc8a654&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(query)
    .then(res => res.json())
}

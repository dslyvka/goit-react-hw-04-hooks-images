import { Audio } from 'react-loader-spinner';

function Loader() {
  return <Audio heigth="100" width="100" color="grey" arialLabel="loading" wrapperClass='loader'/>;
}

export default Loader;

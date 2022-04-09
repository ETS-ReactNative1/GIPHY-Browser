import RNFetchBlob from 'rn-fetch-blob';

const fs = RNFetchBlob.fs;
let imagePath = null;

const convertToBase64 = url => {
  const res = RNFetchBlob.config({
    fileCache: true,
  })
    .fetch('GET', url)
    // the image is now dowloaded to device's storage
    .then(resp => {
      // the image path you can use it directly with Image component
      imagePath = resp.path();
      return resp.readFile('base64');
    })
    .then(async base64Data => {
      // here's base64 encoded image
      // remove the file from storage
      await fs.unlink(imagePath);
      return base64Data;
    });
  return res;
};

export default convertToBase64;

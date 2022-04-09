import RNFetchBlob from 'rn-fetch-blob';
import {CameraRoll, Platform} from 'react-native';

let dirs = RNFetchBlob.fs.dirs;

const saveToGallery = (id, url) => {
  const path =
    Platform.OS === 'ios'
      ? dirs.MainBundleDir + '/' + id
      : dirs.PictureDir + '/' + id;

  if (Platform.OS === 'android') {
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'gif',
      indicator: true,
      IOSBackgroundTask: true,
      path: path,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: path,
        description: 'Image',
      },
    })
      .fetch('GET', url)
      .then(res => {
        console.log(res, 'end downloaded');
      });
  } else {
    CameraRoll.saveToCameraRoll(url);
  }
};

export default saveToGallery;

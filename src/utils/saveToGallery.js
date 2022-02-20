import RNFetchBlob from 'rn-fetch-blob';
import {CameraRoll, Platform} from 'react-native';

let imgUrl =
  'https://static.scientificamerican.com/sciam/cache/file/EAF12335-B807-4021-9AC95BBA8BEE7C8D_source.jpg';

let newImgUri = imgUrl.lastIndexOf('/');
let imageName = imgUrl.substring(newImgUri);

let dirs = RNFetchBlob.fs.dirs;
let path =
  Platform.OS === 'ios'
    ? dirs['MainBundleDir'] + imageName
    : dirs.PictureDir + imageName;

const saveToGallery = (id, url) => {
  const path =
    Platform.OS === 'ios'
      ? dirs['MainBundleDir'] + '/' + id
      : dirs.PictureDir + '/' + id;

  if (Platform.OS == 'android') {
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

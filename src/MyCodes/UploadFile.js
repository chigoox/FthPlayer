import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { STORAGE } from "../../Firebase";

export default function upload(fileName, getLink, uploadinfo) {
  console.log(uploadinfo)
  const audio = document.getElementById("FILE").files[0]
  const audioREF = ref(STORAGE, `Music/${fileName? fileName : audio.name}`); // make ref to your firebase storage and select images folder

  const metadata = {

    contentType: audio.type,
  };
  uploadBytesResumable(audioREF, audio, metadata).on('state_changed',
    (snapshot) => {

      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded


      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploadinfo(progress)
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      console.log(error)
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(ref(STORAGE, audioREF)).then((downloadURL) => {
        if (downloadURL)
          getLink((old) => { return { ...old, audioLink: downloadURL } })



      });
    }
  );

};
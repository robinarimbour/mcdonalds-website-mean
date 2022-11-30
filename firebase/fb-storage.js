const { getStorage, ref, getDownloadURL } = require('firebase/storage');
const app = require('./fb-config')

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// Get download url from bucket url
const getImageDownloadUrl = async (bucketUrl) => {
    // Create a storage reference from our storage service
    return await getDownloadURL(ref(storage, bucketUrl))
    .then((url) => {
        return url;
    })
    .catch((error) => {
        return "/404";
    })
}

module.exports = {
    getImageDownloadUrl
}
const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey: "public_mvnJmvr0Hxum45uzaZmvuy0LPbQ=",
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: "https://ik.imagekit.io/zvjz2ustdb"
});

async function UploadFile(buffer) {
    const result = await imagekit.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    });

    return result;
}

module.exports = UploadFile; 
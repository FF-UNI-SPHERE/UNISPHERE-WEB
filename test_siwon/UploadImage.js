//Blob 객체로 변환
function base64ToBlob(base64, mimeType) {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], {type: mimeType});
}

function getPresignedURL(base64Img) {
  let uuid = self.crypto.randomUUID();
  const base64ImgValue = base64Img.replace(/^data:image\/(png|jpg);base64,/, "");
  const blob = base64ToBlob(base64ImgValue, 'image/png');
  console.log(blob);

  const formData = new FormData();
  const fileName = {
    "imageUrl": `logo-images/${uuid}/logo.png`
  }
  formData.append("avatarImage", blob, fileName);

  const url = "http://localhost/api/v1/images/presigned-url";

  axios
    .post(url, fileName, {
      headers: {
        'accept': '*/*',
        "Content-Type": "application/json",
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjIzMTM1ODk1NTcsImlhdCI6MTcwODc4OTU1Nywicm9sZXMiOlsiUk9MRV9VU0VSIl0sIm1lbWJlcklkIjoxfQ.Eh-HoCbCCGEMltKsGX03UqGwUecj2WWkSR-GmtDNKBU'
      },
    })
    .then((res) => {
      const presignedUrl = res.data;
      uploadImageToS3(presignedUrl, blob)
    })
    .catch((err) => {
      console.log(err);
    })
}

async function uploadImageToS3(presignedUrl, data) {
  console.log("presignedURL is ", presignedUrl);
  console.log("data is ", data);
  const response = await axios.put(presignedUrl, data, {
    headers: {
      "Content-Type": "image/png"
    }
  }).then(response => {
    // 처리 성공
    console.log(response);
  })
  .catch(error => {
    // 오류 처리
    console.log(error);
  });
}

export { getPresignedURL };
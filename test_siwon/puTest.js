function sendRequest() {
    //presigned-url 테스트
    const url = 'https://api.uni-sphere.org/api/v1/images/presigned-url';
    // const imgUrl = `logo-images/${uuidv4()}/logo.png`;
    const imgUrl = `logo-images/dsfdfdfgxvnlkn/logo.png`;
  
    const data = {
      "imageUrl": imgUrl
    };
  
    const options = {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  }
  
  // function sendRequest2() {
  //   const url = 'https://api.uni-sphere.org/api/v1/images/presigned-url';
  //   const imgUrl = `avatar_img/avatar-image-4.png`;
  
  // }
  
function requestPut(base64Data) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "image/png");

    // Base64 인코딩된 데이터에서 순수한 Base64 문자열만 추출합니다.
    const base64Content = base64Data.split(',')[1];
    console.log(base64Content);

    // Base64 문자열을 Blob 객체로 변환합니다.
    const blob = fetch(base64Data).then(res => res.blob());

    const url = "https://unisphere-main-image.s3.ap-northeast-2.amazonaws.com/logo-images/sdfsa12423534674/logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240214T122010Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIASUNSJFSIHORSFMOD%2F20240214%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=ad69c56f44990398a77e7ee6dc037bbd6b11926150b60c3d886230e7bca82a0a";

    blob.then(blob => {
        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: blob, // Blob 객체를 요청 본문에 설정합니다.
        redirect: 'follow'
        };

        // Blob 객체를 포함하여 S3에 업로드 요청을 보냅니다.
        fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    });
}

function puTest(file) {
  const uploadFile = file;
  const formData = new FormData();
  formData.append("itemPicture", uploadFile);
  console.log(formData.getAll("itemPicture"));

  axios
    .post(`http://.../items/upload`, formData, {
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
        },
      
    })
}

export { puTest };
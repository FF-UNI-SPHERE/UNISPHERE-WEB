import { getPresignedURL } from './UploadImage.js';

//--------------------------------이미지 그리는 함수들-------------------------------------//

function combineImages(imageObjects, scale) {
    // 이미지 로드를 위한 프로미스 생성
    var loadPromises = imageObjects.map((imgObj) => {
      return new Promise((resolve) => {
        var img = new Image();
        img.onload = function () {
          //이미지 로드된 후에 중심 계산
          var centerX = imgObj.x - (img.width/2)*scale + 100;
          var centerY = imgObj.y - (img.height/2)*scale + 100;
          resolve({ img: img, x: centerX, y: centerY, width: img.width*scale, height: img.height*scale });
        };
        img.src = imgObj.src;
      }); 
    });
  
    // 모든 이미지 로딩 완료 후 그리기
    Promise.all(loadPromises).then((loadedImages) => {
      loadedImages.forEach((loadedImg) => {
        ctx.drawImage(loadedImg.img, loadedImg.x, loadedImg.y, loadedImg.width,
        loadedImg.height);
        console.log(`loadedImg:${loadedImg}, ImgX:${loadedImg.x}, ImgY:${loadedImg.y}`)
      });
    });
}

//각 이미지 타입에 따른 세부 위치 조정 함수
function applyOffsets(baseX, baseY, objects, offsetsMap) {
  return objects.map(obj => {
    const offset = offsetsMap.get(obj.type);
    return {
      src: obj.src,
      x: baseX + (offset ? offset.offsetX : 0),
      y: baseY + (offset ? offset.offsetY : 0)
    };
  });
}

//--------------------------------이미지 그릴 때 필요한 변수들-------------------------------------//

const BASE_X = 50;
const BASE_Y = 50;
const scale = 6;

let canvas = document.getElementById("avatarCanvas");
let ctx = canvas.getContext("2d");

//버튼에 대한 변수들
const exportButton = document.querySelector('#export');
const uploadImageButton = document.querySelector('#upload-image');
const hairChangeButton = document.querySelector('#hair-change');
const hairColorChangeButton = document.querySelector('#hair-color-change');
const eyeColorChangeButton = document.querySelector('#eye-color-change');
const clothTopChangeButton = document.querySelector('#cloth-top-change');
const clothPantChangeButton = document.querySelector('#cloth-pant-change');

//배율 6배 기준
const offsets = new Map([
  ['head', {offsetX: 0, offsetY: 0}],
  ['eye_fl', {offsetX: -25, offsetY: 14}],
  ['eye_bl', {offsetX: -25, offsetY: 12}],
  ['eye_fr', {offsetX: 2, offsetY: 14}],
  ['eye_br', {offsetX: 2, offsetY: 12}],
  ['leftArm', { offsetX: -37, offsetY: 58}],
  ['chest', {offsetX: -2, offsetY: 55}],
  ['rightArm', {offsetX: 31, offsetY: 58}],
  ['legs', { offsetX: 0, offsetY: 83}],
  ['hair', {offsetX: 0, offsetY: -29}],
  ['top_la', {offsetX: -35, offsetY: 53}],
  ['top_m', {offsetX: -2, offsetY: 53}],
  ['top_ra', {offsetX: 28, offsetY: 53}],
  ['pants', { offsetX: -1, offsetY: 79}]
])

let imageObjects = [
  { type: 'leftArm', src: "test/LeftArm_4.png"},
  { type: 'top_la', src: "clothes/top/Cloth_3_la.png"},
  { type: 'legs', src: "test/Legs_5.png"},
  { type: 'pants', src: "clothes/pants/Foot_1.png"},
  { type: 'chest', src: "test/Body_3.png"},
  { type: 'top_m', src: "clothes/top/Cloth_3_m.png"},
  { type: 'rightArm', src: "test/RightArm_2.png"},
  { type: 'top_ra', src: "clothes/top/Cloth_3_ra.png"},
  { type: 'head', src: "test/Head_1.png"},
  { type: 'eye_bl', src: "default/eyes/Eye_Back.png"},
  { type: 'eye_fl', src: "change_color/Eye/Eye_Front_9.png"},
  { type: 'eye_br', src: "default/eyes/Eye_Back.png"},
  { type: 'eye_fr', src: "change_color/Eye/Eye_Front_9.png"},
  { type: 'hair', src: "change_color/Hair/Hair_1_9.png"}
]

//함수 호출하여 캔버스에 그리는 코드
combineImages(applyOffsets(BASE_X, BASE_Y, imageObjects, offsets), scale)


//-------------------------------버튼 이벤트 리스너들--------------------------------------------//

exportButton.addEventListener('click', () => {
  //캔버스 내용을 이미지로 변환
  const exportImg = canvas.toDataURL();
  //다운로드를 위한 a 태그 생성
  const link = document.createElement('a');
  link.href = exportImg;
  link.download = 'avatar-image.png';
  link.click();
});

//버튼 이벤트 리스너들
uploadImageButton.addEventListener('click', () => {
  const exportImg = canvas.toDataURL("image/png"); 
  // 캔버스 내용을 PNG 이미지로 변환 --> 이미지의 Base64로 인코딩된 문자열을 얻음

  getPresignedURL(exportImg); // 변환된 이미지 데이터를 getPresignedURL 함수에 전달
});


hairChangeButton.addEventListener('click', () => {
  imageObjects.forEach(function(obj) {
    if (obj.type === 'hair') 
    {
      const match = obj.src.match(/Hair_(\d+)_(\d+)\.png$/);
      if (match) {
        let idx = parseInt(match[1], 10);
        idx = idx < 4 ? idx + 1 : 1;
        obj.src = `change_color/Hair/Hair_${idx}_${match[2]}.png`;
        console.log(obj.src);
        //캔버스 클리어
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        combineImages(applyOffsets(BASE_X, BASE_Y, imageObjects, offsets), scale)
      }
    }
  })
});

hairColorChangeButton.addEventListener('click', () => {
  imageObjects.forEach(function(obj) {
    if (obj.type === 'hair') 
    {
      const match = obj.src.match(/Hair_(\d+)_(\d+)\.png$/);
      if (match) {
        let idx = parseInt(match[2], 10);
        idx = idx < 10 ? idx + 1 : 1;
        obj.src = `change_color/Hair/Hair_${match[1]}_${idx}.png`;
        console.log(obj.src);
        //캔버스 클리어
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        combineImages(applyOffsets(BASE_X, BASE_Y, imageObjects, offsets), scale)
      }
    }
  });
});

eyeColorChangeButton.addEventListener('click', () => {
  imageObjects.forEach(function(obj) {
    if (obj.type === 'eye_fl' || obj.type === 'eye_fr') 
    {
      const match = obj.src.match(/Eye_Front_(\d+)\.png$/);
      if (match) {
        let idx = parseInt(match[1], 10);
        idx = idx < 10 ? idx + 1 : 1;
        obj.src = `change_color/Eye/Eye_Front_${idx}.png`;
        console.log(obj.src);
      }
    }
  });
  //캔버스 클리어
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  combineImages(applyOffsets(BASE_X, BASE_Y, imageObjects, offsets), scale)
});

clothTopChangeButton.addEventListener('click', () => {
  imageObjects.forEach(function(obj) {
    if (obj.type === 'top_la' || obj.type === 'top_m' || obj.type === 'top_ra') 
    {
      const match = obj.src.match(/Cloth_(\d+)_(\w+)\.png$/);
      if (match) {
        let idx = parseInt(match[1], 10);
        idx = idx < 3 ? idx + 1 : 1;
        obj.src = `clothes/top/Cloth_${idx}_${match[2]}.png`;
        console.log(obj.src);
      }
    }
  });
  //캔버스 클리어
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  combineImages(applyOffsets(BASE_X, BASE_Y, imageObjects, offsets), scale)
});


clothPantChangeButton.addEventListener('click', () => {
  imageObjects.forEach(function(obj) {
    if (obj.type === 'pants') 
    {
      const match = obj.src.match(/Foot_(\d)\.png$/);
      if (match) {
        let idx = parseInt(match[1], 10);
        idx = idx < 3 ? idx + 1 : 1;
        obj.src = `clothes/pants/Foot_${idx}.png`;
        console.log(obj.src);
        //캔버스 클리어
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        combineImages(applyOffsets(BASE_X, BASE_Y, imageObjects, offsets), scale)
      }
    }
  });
});


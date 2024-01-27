function combineImages(imageObjects) {
    // 이미지 로드를 위한 프로미스 생성
    var loadPromises = imageObjects.map((imgObj) => {
      return new Promise((resolve) => {
        var img = new Image();
        //이미지 중심 계산
        var centerX = imgObj.x - img.width/2;
        var centerY = imgObj.y - img.height/2;
        img.onload = function () {
          resolve({ img: img, x: centerX, y: centerY });
        };
        img.src = imgObj.src;
      });
    });
  
    // 모든 이미지 로딩 완료 후 그리기
    Promise.all(loadPromises).then((loadedImages) => {
      loadedImages.forEach((loadedImg) => {
        ctx.drawImage(loadedImg.img, loadedImg.x, loadedImg.y);
        console.log(`loadedImg:${loadedImg}, ImgX:${loadedImg.x}, ImgY:${loadedImg.y}`)
      });
    });
  }
  
const BASE_X = 50;
const BASE_Y = 50;

var canvas = document.getElementById("avatarCanvas");
var ctx = canvas.getContext("2d");

//캔버스 크기의 절반 계산 -> 중앙좌표 획득
// const BASE_X = canvas.width / 2;
// const BASE_Y = canvas.height / 2;


combineImages([

{ src: "test/LeftArm_4.png", x: BASE_X - 2, y: BASE_Y + 14 },
{ src: "test/Legs_5.png", x: BASE_X + 2, y: BASE_Y + 21 },
{ src: "test/Body_3.png", x: BASE_X + 1, y: BASE_Y + 14 },
{ src: "test/RightArm_2.png", x: BASE_X + 10, y: BASE_Y + 14 },
// { src: "hair/Hair_1.png", x: BASE_X - 7, y: BASE_Y - 13},
{ src: "test/Head_1.png", x: BASE_X, y: BASE_Y },
{ src: "eyes/Eye_Back.png", x: BASE_X+3, y: BASE_Y+6},
{ src: "eyes/Eye_Back.png", x: BASE_X+9, y: BASE_Y+6},
{ src: "hair/Hair_9.png", x: BASE_X - 7, y: BASE_Y - 13},

]);

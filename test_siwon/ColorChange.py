from PIL import Image, ImageOps
from itertools import product

# 파일 경로 배열 (idx, Hair_{idx}.png)
# file_paths = [f"Hair_{i}.png" for i in range(1, 10)]
file_paths = [f"Hair_{i}" for i in range(1, 5)]


# 적용할 색상 배열
# colors = ["#FFF5C3", "#4E342E", "#FFC0CB", "#0000FF",
#           "#FF0000", "#008000", "#FFFF00", "#800080"]
colors = {
        "1" : "#FFFFFF",
        "2" : "#FF0000",
        "3" : "#FF6600",
        "4" : "#FFCC00",
        "5" : "#00CC33",
        "6" : "#0066CC",
        "7" : "#6633CC",
        "8" : "#FF6699",
        "9" : "#663300",
        "10" : "#000000"
        }


# 각 파일에 대해 색상 변경 적용
## 머리 색 바꾸기
for file_path_idx, (key, value) in product(file_paths, colors.items()):
    print(file_path_idx, key)
    # 이미지 열기
    # RGBA 모드로 변환 -> A는 투명도
    image = Image.open(f"default/hair/{file_path_idx}.png").convert("RGBA")
    r, g, b, alpha = image.split()    

    # # 이미지 크기 조정
    # scaled_image = image.resize((250, 200))

    # 회색조로 변환
    # gray_image = ImageOps.grayscale(scaled_image)
    gray_image = ImageOps.grayscale(image)

    # 지정된 색상으로 색조 적용
    colored_image = ImageOps.colorize(gray_image, black="black", white=value)

    # 색상 적용된 이미지를 RGBA로 변환하고, 원본 알파 채널 결합
    colored_image = colored_image.convert("RGBA")
    final_image = Image.merge("RGBA", (colored_image.split()[0], colored_image.split()[1], colored_image.split()[2], alpha))

    # 색상 변경된 이미지 표시
    #final_image.show()

    # result/Hair_{i}_{color}.png 형식으로 저장
    # colored_image.save(f"Hair_{file_path_idx}_{color}.png")

    final_image.save(f"change_color/Hair/{file_path_idx}_{key}.png")


## 눈 색 바꾸기
for key, value in colors.items():
    print("default/Eye/Eye_Front.png", key)
    # 이미지 열기
    image = Image.open(f"default/eyes/Eye_Front.png").convert("RGBA")
    r, g, b, alpha = image.split()  

    # 회색조로 변환
    gray_image = ImageOps.grayscale(image)

    # 지정된 색상으로 색조 적용
    colored_image = ImageOps.colorize(gray_image, black="black", white=value)

    colored_image = colored_image.convert("RGBA")
    final_image = Image.merge("RGBA", (colored_image.split()[0], colored_image.split()[1], colored_image.split()[2], alpha))

    # 색상 변경된 이미지 표시
    #final_image.show()

    final_image.save(f"change_color/Eye/Eye_Front_{key}.png")

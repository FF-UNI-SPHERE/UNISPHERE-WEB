from PIL import Image, ImageOps
from itertools import product

#이미지 파일 숫자가 연속적이지 않아 원하는 숫자만 포함한 리스트 정의
image_nums = [1, 2, 7, 8, 9]

# 파일 경로 배열 (idx, Hair_{idx}.png)
# file_paths = [f"Hair_{i}.png" for i in range(1, 10)]
file_paths_map = {i: f"default/hair/Hair_{i}.png" for i in image_nums}


# 적용할 색상 배열
colors = ["#FFF5C3", "#4E342E", "#FFC0CB", "#0000FF",
          "#FF0000", "#008000", "#FFFF00", "#800080"]

# 각 파일에 대해 색상 변경 적용
## 머리 색 바꾸기
for file_path_idx, color in product(file_paths_map, colors):
    print(file_paths_map[file_path_idx], color)
    # 이미지 열기
    image = Image.open(file_paths_map[file_path_idx])

    # # 이미지 크기 조정
    # scaled_image = image.resize((250, 200))

    # 회색조로 변환
    # gray_image = ImageOps.grayscale(scaled_image)
    gray_image = ImageOps.grayscale(image)

    # 지정된 색상으로 색조 적용
    colored_image = ImageOps.colorize(gray_image, black="black", white=color)

    # 색상 변경된 이미지 표시
    colored_image.show()

    # result/Hair_{i}_{color}.png 형식으로 저장
    # colored_image.save(f"Hair_{file_path_idx}_{color}.png")
    colored_image.save(f"change_color/Hair/Hair_{file_path_idx}_{color}.png")


## 눈 색 바꾸기
for color in product(colors):
    print(f"default/eyes/Eye_Front.png", color)
    # 이미지 열기
    image = Image.open(f"default/eyes/Eye_Front.png")

    # 회색조로 변환
    gray_image = ImageOps.grayscale(image)

    # 지정된 색상으로 색조 적용
    colored_image = ImageOps.colorize(gray_image, black="black", white=color)

    # 색상 변경된 이미지 표시
    colored_image.show()

    colored_image.save(f"change_color/Eye/Eye_Front_{color}.png")
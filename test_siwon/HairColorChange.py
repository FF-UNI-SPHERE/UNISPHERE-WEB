from PIL import Image, ImageOps
from itertools import product


# 파일 경로 배열 (idx, Hair_{idx}.png)
# file_paths = [f"Hair_{i}.png" for i in range(1, 10)]
file_paths_map = {i: f"Hair_{i}.png" for i in range(1, 10)}


# 적용할 색상 배열
colors = ["#FFF5C3", "#4E342E", "#FFC0CB", "#0000FF",
          "#FF0000", "#008000", "#FFFF00", "#800080"]

# 각 파일에 대해 색상 변경 적용
for file_path_idx, color in product(file_paths_map, colors):
    print(file_paths_map[file_path_idx], color)
    # 이미지 열기
    image = Image.open(file_paths_map[file_path_idx])

    # 이미지 크기 조정
    scaled_image = image.resize((250, 200))

    # 회색조로 변환
    gray_image = ImageOps.grayscale(scaled_image)

    # 지정된 색상으로 색조 적용
    colored_image = ImageOps.colorize(gray_image, black="black", white=color)

    # 색상 변경된 이미지 표시
    colored_image.show()

    # result/Hair_{i}_{color}.png 형식으로 저장
    # colored_image.save(f"Hair_{file_path_idx}_{color}.png")
    colored_image.save(f"result/Hair_{file_path_idx}_{color}.png")
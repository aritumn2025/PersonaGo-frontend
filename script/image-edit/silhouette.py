'''シルエット風画像生成スクリプト
透過PNG画像を読み込み、シルエット風に変換して保存します
'''

from pathlib import Path
from PIL import Image, ImageEnhance

# シルエット化の強度パラメータ
# 0 に近いほど真っ黒、1 に近いほど元の明るさを残す
BRIGHTNESS_FACTOR = 0.2  # 明度を抑える度合い
SATURATION_FACTOR = 0.1  # 彩度を抑える度合い
OPACITY_FACTOR = 0.9      # 不透明度（透過の度合い）

DIR = Path(__file__).parent
PROJECT_ROOT = DIR.parent.parent

def main():
    inputs_dir = PROJECT_ROOT / "public" / "images" / "personality"
    outputs_dir = PROJECT_ROOT / "public" / "images" / "personality_silhouette"
    for input_path in inputs_dir.glob("*.png"):
        output_path = outputs_dir / input_path.name
        make_silhouette(input_path, output_path)
        print(f"Processed: {input_path.relative_to(PROJECT_ROOT)} -> {output_path.relative_to(PROJECT_ROOT)}")

def make_silhouette(input_path: Path, output_path: Path) -> None:
    """透過PNGをうっすら見えるシルエット風に変換する"""
    # 画像読み込み（RGBA前提）
    image = Image.open(input_path).convert("RGBA")
    r, g, b, a = image.split()

    # RGBチャンネルの明度と彩度を下げる
    rgb_image = Image.merge("RGB", (r, g, b))
    rgb_image = ImageEnhance.Brightness(rgb_image).enhance(BRIGHTNESS_FACTOR)
    rgb_image = ImageEnhance.Color(rgb_image).enhance(SATURATION_FACTOR)

    # RGBAに戻す
    darkened_image = Image.merge("RGBA", (*rgb_image.split(), a))

    # 透過度を少し上げる（うっすら見えるように）
    alpha = a.point(lambda x: int(x * OPACITY_FACTOR))
    silhouette = Image.merge("RGBA", (*rgb_image.split(), alpha))

    # 保存
    output_path.parent.mkdir(parents=True, exist_ok=True)
    silhouette.save(output_path, format="PNG")

if __name__ == "__main__":
    main()

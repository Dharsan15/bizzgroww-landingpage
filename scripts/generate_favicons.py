import base64
from PIL import Image

# Load the exact brand logo
img = Image.open('public/brand-logo.png').convert('RGBA')

# Find bounding box of non-white pixels
w, h = img.size
min_x, min_y, max_x, max_y = w, h, 0, 0
for y in range(h):
    for x in range(w):
        r, g, b, a = img.getpixel((x, y))
        if r < 240 or g < 240 or b < 240:
            if x < min_x: min_x = x
            if x > max_x: max_x = x
            if y < min_y: min_y = y
            if y > max_y: max_y = y

mark_w = max_x - min_x
mark_h = max_y - min_y
center_x = (min_x + max_x) // 2
center_y = (min_y + max_y) // 2

# Square crop with 12% padding around the mark
side = int(max(mark_w, mark_h) * 1.12)
crop_box = (
    center_x - side // 2,
    center_y - side // 2,
    center_x + side // 2,
    center_y + side // 2
)
cropped = img.crop(crop_box)

# 1. Create transparent version
transparent_mark = cropped.copy()
pixels = transparent_mark.load()
cw, ch = transparent_mark.size
for y in range(ch):
    for x in range(cw):
        r, g, b, a = pixels[x, y]
        if r > 248 and g > 248 and b > 248:
            pixels[x, y] = (r, g, b, 0)
        elif r > 220 and g > 220 and b > 220:
            factor = (255 - max(r, g, b)) / 35.0
            pixels[x, y] = (r, g, b, int(255 * max(0, min(1, factor))))

# Save high quality transparent 256x256
trans_256 = transparent_mark.resize((256, 256), Image.Resampling.LANCZOS)
trans_256.save('public/favicon-256.png')
trans_256.save('public/brand-logo-transparent.png')

# 2. Favicon ICO (multi-size: 16, 32, 48, 64)
transparent_mark.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

# 3. Favicon PNG (32x32, 16x16, 192x192)
trans_32 = transparent_mark.resize((32, 32), Image.Resampling.LANCZOS)
trans_32.save('public/favicon-32x32.png')
trans_32.save('public/favicon.png')

trans_16 = transparent_mark.resize((16, 16), Image.Resampling.LANCZOS)
trans_16.save('public/favicon-16x16.png')

trans_192 = transparent_mark.resize((192, 192), Image.Resampling.LANCZOS)
trans_192.save('public/favicon-192x192.png')

# 4. Apple Touch Icon (180x180)
apple_icon = Image.new('RGBA', (180, 180), (255, 255, 255, 255))
apple_inner = transparent_mark.resize((144, 144), Image.Resampling.LANCZOS)
apple_icon.paste(apple_inner, (18, 18), apple_inner)
apple_icon.save('public/apple-touch-icon.png')

# 5. Exact SVG Favicon containing the EXACT brand logo image as base64
with open('public/favicon-256.png', 'rb') as f:
    b64_str = base64.b64encode(f.read()).decode('utf-8')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <image href="data:image/png;base64,{b64_str}" width="256" height="256" />
</svg>'''

with open('public/favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

print("Generated all favicon assets from brand-logo.png successfully!")

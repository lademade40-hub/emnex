#!/usr/bin/env python3
"""Convert captured PNGs to optimized 1440x900 JPEGs for the portfolio."""
from PIL import Image
import os

TMP = "/tmp/shots"
OUT = "/home/z/my-project/public/projects"

# (source_png, target_jpg)
MAPPING = [
    ("kova-hero.png", "kova-hero.jpg"),
    ("kova-mid.png", "kova-mid.jpg"),
    ("wrenfield-hero.png", "wrenfield-hero.jpg"),
    ("wrenfield-mid.png", "wrenfield-mid.jpg"),
    ("emberroast-hero.png", "emberroast-hero.jpg"),
    ("emberroast-mid.png", "emberroast-mid.jpg"),
    ("voyara-hero.png", "voyara-hero.jpg"),
    ("voyara-low.png", "voyara-mid.jpg"),  # destinations grid is the stronger second shot
]

for src, dst in MAPPING:
    sp = os.path.join(TMP, src)
    dp = os.path.join(OUT, dst)
    im = Image.open(sp).convert("RGB")
    if im.size != (1440, 900):
        im = im.resize((1440, 900), Image.LANCZOS)
    im.save(dp, "JPEG", quality=84, optimize=True, progressive=True)
    print(f"{dst}: {im.size} {os.path.getsize(dp)//1024}KB")

print("DONE")

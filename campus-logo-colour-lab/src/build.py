"""Rebuild ../index.html from template.html + logo.js + engine.js.
Usage: python3 src/build.py"""
from pathlib import Path
here = Path(__file__).parent
t = (here / "template.html").read_text(encoding="utf-8")
t = t.replace("/*LOGO*/", (here / "logo.js").read_text(encoding="utf-8"))
t = t.replace("/*ENGINE*/", (here / "engine.js").read_text(encoding="utf-8"))
(here.parent / "index.html").write_text(t, encoding="utf-8")
print("index.html reconstruit")

# Affaan Mustafa — Layout-Nachbau

Statische Nachbildung des öffentlichen Layouts von [affaanmustafa.com](https://affaanmustafa.com/): schmale Spalte, Newsreader-Überschriften, Manrope-Fließtext, Hell- und Dunkelmodus.

Seiten:

- `/` Startseite
- `/projects/` Work
- `/media/` Writing & Media, mit Suche und Kategorien
- `/about/` About
- `/contact/` Contact
- `/research/` Research & Open Source
- `/talks/ai-engineer-nyc-compute-trading/` Talk

Lokal ansehen:

```bash
python3 -m http.server 8765
```

Dann `http://127.0.0.1:8765/` öffnen. Die Pfade sind vom Site-Root aus absolut, deshalb braucht die Vorschau einen statischen Server.

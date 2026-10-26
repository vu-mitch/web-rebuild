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

Lokal auf dem eigenen Rechner starten, im Projektordner:

```bash
npm start
```

Danach im Browser `http://127.0.0.1:8765/` öffnen. `npm start` braucht kein `npm install`. Node.js reicht.

Ohne Node.js:

```bash
python3 -m http.server 8765
```

Unter Windows, falls `python3` fehlt: `py -m http.server 8765`.

Die Datei `index.html` nicht direkt per Doppelklick öffnen. CSS, Skripte und Bilder werden vom Site-Root geladen und funktionieren nur über diesen Server.

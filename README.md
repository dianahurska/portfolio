# Portfolio

Статичний сайт-портфоліо для GitHub Pages (без збірки, без залежностей). Дизайн повторює шаблон Prysm.

Сторінки:
- `index.html` — головна (ім'я, проєкти, Recent, Timeline, Numbers, Tech stack, Elsewhere)
- `about.html` — About + форма зв'язку
- `project.html?p=<slug>` — сторінка проєкту (одна на всі проєкти, наповнюється з `content.js`)

## Як міняти контент

**Увесь текст, посилання й шляхи до картинок зібрано в одному файлі — [`content.js`](content.js).** HTML/CSS/JS для цього чіпати не треба.

1. Відкрий `content.js` на GitHub → іконка олівця → редагуй → **Commit changes**.
2. Картинки: перейди в папку `assets/images/` → **Add file → Upload files** → перетягни файли → **Commit changes**.
   Потім вкажи шлях у `content.js`, наприклад `cover: "assets/images/my-project.jpg"`.
3. Через ~1 хв зміни з'являться на сайті.

Поради щодо файлів:
- Назви файлів латиницею, без пробілів (`my-project-cover.jpg`, а не `Мій проєкт.JPG`). Регістр важливий: `.JPG` ≠ `.jpg`.
- Розмір картинок до ~1–2 МБ (ширина 1600–2400px), відео — до ~20 МБ (GitHub не приймає файли >100 МБ, через веб — >25 МБ).
- Рекомендовані пропорції: обкладинка проєкту ~ 3:2 (напр. 1728×1212), портрет 314:440, відео 16:9.

Шаблонні картинки `assets/images/*.svg` — це заглушки, їх можна видалити, коли заміниш на свої.

## Увімкнути GitHub Pages

Settings → Pages → **Source: Deploy from a branch** → Branch: `main`, folder: `/ (root)` → Save.
Сайт буде на `https://<username>.github.io/<repo>/`.

## Форма зв'язку

За замовчуванням форма відкриває поштовий клієнт відвідувача. Щоб листи приходили напряму — створи безкоштовну форму на [formspree.io](https://formspree.io) і встав її адресу в `content.js` → `contact.formEndpoint`.

## Локальний перегляд

```
python3 -m http.server
```
і відкрий http://localhost:8000

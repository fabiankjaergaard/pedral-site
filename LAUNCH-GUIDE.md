# Pedral.eu — Lansering

## Innan du börjar

Den nya hemsidan är klar och ser bra ut. Men det blev lite krångligare än jag trodde att koppla ihop allt — inget jättestort, men det finns några saker du behöver göra.

**Problemet:** Din nuvarande WordPress-sida (shoppen, kontaktformuläret osv.) har sin egen styling som inte riktigt matchar nya sidan. Så om en besökare går från nya hemsidan till shoppen eller kontaktsidan ser det lite annorlunda ut.

**Du har två vägar:**

**Alt 1 — Enklast: Allt i WordPress**
Om du inte vill hålla på med massa konton och setup kan du istället leta efter en snygg WordPress-mall som matchar den stil du vill ha. Då ligger allt på ett ställe — hemsida, shop, kontakt — och du sköter allt i WordPress som du redan kan. Det här är enklast om du inte riktigt orkar eller vill lära dig nya verktyg.

**Alt 2 — Full kontroll: Nya sidan + fixa WordPress-stylingen**
Om du vill använda nya sidan vi byggt behöver du:
- Klistra in en CSS-kod i WordPress så att shoppen och kontaktsidan matchar (instruktioner finns längre ner — det tar 5 min)
- Skapa konto på **GitHub** och **Vercel** för att kunna publicera och ändra sidan själv (gratis, tar ca 15 min)
- Valfritt: skapa konto på **Resend** om du vill att kontaktformuläret ska ligga på nya sidan istället för WordPress (gratis, tar 10 min)

Inget av detta är svårt och allt är gratis — men det krävs för att det ska funka. Den här guiden går igenom allt steg för steg.

---

## Sidor som finns

### Huvudsidor
- **Startsida** — Hero, kollektionsöversikt med lagerstatus, testimonials, newsletter
- **Collection** — Alla klockor med filter och priser
- **Produktsidor** — En per klocka (Artefact, Maestro, Triomphe, Okapi Classique, Skulptur, One-Eighty)
- **Brand Story** — Din resa, tidslinje, citat
- **Contact** — Kontaktformulär + info

### Juridiskt
- Privacy Policy
- Terms & Conditions
- Shipping & Customs
- Cookie Policy
- Right of Withdrawal
- Cookie consent banner

### Övrigt
- Sökmotoroptimerat (Google hittar alla sidor)
- Fungerar på mobil, surfplatta och dator
- Animationer vid scroll

---

## Vad du behöver skicka / lägga till

### Bilder

Alla bilder är placeholders just nu. Skicka dem till mig, eller lägg enkelt till dem själv med Claude Code (jag visar dig hur).

| Bild | Storlek |
|------|---------|
| Hero-bild (startsidan) | 800 x 960 |
| Artefact | 800 x 1000 |
| Maestro | 800 x 1000 |
| Triomphe | 800 x 1000 |
| Okapi Classique | 800 x 1000 |
| Skulptur | 800 x 1000 |
| One-Eighty | 800 x 1000 |
| Porträtt på dig | 600 x 800 |
| Delningsbild (Facebook/LinkedIn) | 1200 x 630 |

JPG-format, gärna under 300kb per bild.

### Organisationsnummer

Behövs för Terms & Conditions-sidan.

---

## Shoppen (shop.pedral.eu)

Shoppen ser lite annorlunda ut jämfört med nya sidan. Koden nedan fixar det — samma färger, knappar och typsnitt.

### Viktigt innan du börjar

Jag har själv inte jobbat mycket i WordPress så jag kan inte garantera att allt blir perfekt — men CSS:en nedan är byggd utifrån exakt samma färger, typsnitt och stil som nya sidan, så det borde bli snarlikt.

**Tips: Spara en backup först!** Innan du byter ut något, kopiera den CSS som redan finns i WordPress och spara den i en textfil på datorn (t.ex. "wordpress-backup.txt"). Då kan du enkelt klistra tillbaka den om något inte ser bra ut.

### Gör så här:

1. Logga in på **shop.pedral.eu/wp-admin**
2. Gå till **Utseende → Anpassa → Ytterligare CSS**
3. **Markera allt som står där** (Cmd+A) och **kopiera det** (Cmd+C) — spara det i en textfil som backup
4. När backupen är sparad, ta bort allt (Cmd+A → Delete)
5. Kopiera hela kodblocket nedan och klistra in
6. Klicka **Publicera**
7. Klicka runt i shoppen och kontaktsidan och kolla att det ser okej ut

Om det inte blir bra — klistra tillbaka din backup och allt är som förut. Inga funktioner ändras, det är bara utseendet som påverkas.

### Kopiera allt mellan linjerna:

```css
/* ══════════════════════════════════════════════
   PEDRAL — Klistra in detta i WordPress
   Utseende → Anpassa → Ytterligare CSS
   ══════════════════════════════════════════════ */


/* ──────────────────────────────────────────────
   1. TYPSNITT
   Laddar in samma fonter som nya hemsidan
   ────────────────────────────────────────────── */

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');


/* ──────────────────────────────────────────────
   2. FÄRGPALETT
   Ändra färger här — resten av koden använder dem
   ────────────────────────────────────────────── */

:root {
  --pedral-bg: #0a1214;
  --pedral-bg-alt: #111d20;
  --pedral-surface: #1a2a2d;
  --pedral-text: #f5f2eb;
  --pedral-text-muted: #9a9589;
  --pedral-gold: #c9a84c;
  --pedral-gold-hover: #dbbf6f;
  --pedral-border: rgba(201, 168, 76, 0.08);
  --pedral-border-gold: rgba(201, 168, 76, 0.15);
}


/* ──────────────────────────────────────────────
   3. BAKGRUND & TEXT
   Mörk bakgrund + rätt typsnitt på hela sidan
   ────────────────────────────────────────────── */

body,
.ast-separate-container,
.ast-plain-container {
  background-color: var(--pedral-bg) !important;
  color: var(--pedral-text) !important;
  font-family: 'Outfit', sans-serif !important;
  font-weight: 300;
}

h1, h2, h3, h4, h5, h6,
.woocommerce div.product .product_title,
.woocommerce-loop-product__title,
.entry-title {
  font-family: 'Cormorant Garamond', serif !important;
  font-weight: 400 !important;
  color: var(--pedral-text) !important;
}

p, span, li, td, th, label, div {
  color: var(--pedral-text-muted);
}

a {
  color: var(--pedral-gold) !important;
  text-decoration: none !important;
}

a:hover {
  color: var(--pedral-gold-hover) !important;
}


/* ──────────────────────────────────────────────
   4. MENYN I TOPPEN
   Mörk header med guldiga länkar
   ────────────────────────────────────────────── */

.ast-main-header-wrap,
.ast-header-menu,
.site-header,
.elementor-location-header,
.ast-above-header-wrap,
.ast-below-header-wrap {
  background-color: var(--pedral-bg) !important;
  border-bottom: 1px solid var(--pedral-border) !important;
}

.ast-header-menu .menu-item > a,
.elementor-nav-menu .menu-item a,
.main-navigation a {
  color: var(--pedral-text-muted) !important;
  font-family: 'Outfit', sans-serif !important;
  font-size: 11px !important;
  font-weight: 400 !important;
  letter-spacing: 2.5px !important;
  text-transform: uppercase !important;
}

.ast-header-menu .menu-item > a:hover,
.elementor-nav-menu .menu-item a:hover {
  color: var(--pedral-text) !important;
}


/* ──────────────────────────────────────────────
   5. KNAPPAR
   Alla knappar: köp, kundvagn, checkout osv.
   ────────────────────────────────────────────── */

.ast-button,
.button,
.elementor-button,
.wp-block-button__link,
.woocommerce a.button,
.woocommerce button.button,
.woocommerce input.button,
.woocommerce #respond input#submit,
.woocommerce .cart .button,
.woocommerce .checkout-button,
.single_add_to_cart_button,
input[type="submit"] {
  background-color: var(--pedral-gold) !important;
  color: var(--pedral-bg) !important;
  font-family: 'Outfit', sans-serif !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  letter-spacing: 3px !important;
  text-transform: uppercase !important;
  border: none !important;
  border-radius: 2px !important;
  padding: 16px 36px !important;
  transition: all 0.3s ease !important;
}

.ast-button:hover,
.button:hover,
.elementor-button:hover,
.wp-block-button__link:hover,
.woocommerce a.button:hover,
.woocommerce button.button:hover,
.single_add_to_cart_button:hover,
input[type="submit"]:hover {
  background-color: var(--pedral-gold-hover) !important;
  color: var(--pedral-bg) !important;
}

.woocommerce a.button.alt,
.button.alt {
  background-color: transparent !important;
  border: 1px solid var(--pedral-border-gold) !important;
  color: var(--pedral-gold) !important;
}

.woocommerce a.button.alt:hover,
.button.alt:hover {
  background-color: var(--pedral-gold) !important;
  color: var(--pedral-bg) !important;
}


/* ──────────────────────────────────────────────
   6. PRODUKTKORT (shop-listan)
   Klockorna i listan med hover-effekt
   ────────────────────────────────────────────── */

.woocommerce ul.products li.product,
.ast-woo-shop-archive .product {
  background-color: var(--pedral-bg) !important;
  border: 1px solid var(--pedral-border) !important;
  border-radius: 2px !important;
  transition: all 0.4s ease !important;
}

.woocommerce ul.products li.product:hover {
  border-color: var(--pedral-border-gold) !important;
  transform: translateY(-3px);
}

.woocommerce ul.products li.product .price,
.woocommerce div.product p.price {
  color: var(--pedral-text) !important;
  font-family: 'Outfit', sans-serif !important;
  font-weight: 400 !important;
  font-size: 17px !important;
}

.woocommerce ul.products li.product .woocommerce-loop-product__title {
  font-family: 'Cormorant Garamond', serif !important;
  font-size: 24px !important;
  font-weight: 400 !important;
  color: var(--pedral-text) !important;
}

.woocommerce span.onsale {
  background-color: var(--pedral-gold) !important;
  color: var(--pedral-bg) !important;
  font-family: 'Outfit', sans-serif !important;
  font-size: 9px !important;
  font-weight: 500 !important;
  letter-spacing: 1.5px !important;
  text-transform: uppercase !important;
  border-radius: 2px !important;
}


/* ──────────────────────────────────────────────
   7. PRODUKTSIDA (enskild klocka)
   Stor rubrik, mjuk text, flikar
   ────────────────────────────────────────────── */

.woocommerce div.product {
  background-color: var(--pedral-bg) !important;
}

.woocommerce div.product .product_title {
  font-size: 42px !important;
  font-weight: 300 !important;
}

.woocommerce-product-details__short-description,
.woocommerce div.product .woocommerce-tabs .panel p {
  color: var(--pedral-text-muted) !important;
  font-size: 15px !important;
  font-weight: 300 !important;
  line-height: 1.75 !important;
}

.woocommerce div.product .woocommerce-tabs ul.tabs li {
  background-color: var(--pedral-bg-alt) !important;
  border-color: var(--pedral-border) !important;
  border-radius: 0 !important;
}

.woocommerce div.product .woocommerce-tabs ul.tabs li a {
  color: var(--pedral-text-muted) !important;
  font-family: 'Outfit', sans-serif !important;
  font-size: 11px !important;
  letter-spacing: 2px !important;
  text-transform: uppercase !important;
}

.woocommerce div.product .woocommerce-tabs ul.tabs li.active {
  border-bottom-color: var(--pedral-gold) !important;
}

.woocommerce div.product .woocommerce-tabs ul.tabs li.active a {
  color: var(--pedral-text) !important;
}


/* ──────────────────────────────────────────────
   8. KUNDVAGN & CHECKOUT
   Tabell, formulär, inputfält
   ────────────────────────────────────────────── */

.woocommerce-cart .woocommerce table.shop_table,
.woocommerce table.shop_table {
  background-color: var(--pedral-bg-alt) !important;
  border-color: var(--pedral-border) !important;
}

.woocommerce table.shop_table th,
.woocommerce table.shop_table td {
  border-color: var(--pedral-border) !important;
  color: var(--pedral-text-muted) !important;
}

.woocommerce form .form-row label {
  color: var(--pedral-text-muted) !important;
  font-family: 'Outfit', sans-serif !important;
  font-size: 10px !important;
  font-weight: 500 !important;
  letter-spacing: 2px !important;
  text-transform: uppercase !important;
}

.woocommerce form .form-row input.input-text,
.woocommerce form .form-row textarea,
.woocommerce form .form-row select,
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"],
textarea,
select {
  background-color: var(--pedral-bg-alt) !important;
  border: 1px solid var(--pedral-border-gold) !important;
  border-radius: 2px !important;
  color: var(--pedral-text) !important;
  font-family: 'Outfit', sans-serif !important;
  font-size: 14px !important;
  font-weight: 300 !important;
  padding: 12px 16px !important;
}

input:focus,
textarea:focus,
select:focus {
  border-color: var(--pedral-gold) !important;
  outline: none !important;
}


/* ──────────────────────────────────────────────
   9. SIDFOT
   ────────────────────────────────────────────── */

.site-footer,
.elementor-location-footer {
  background-color: var(--pedral-bg) !important;
  border-top: 1px solid var(--pedral-border) !important;
}

.site-footer p,
.site-footer span,
.site-footer a,
.site-footer .widget-title {
  color: var(--pedral-text-muted) !important;
}

.site-footer a:hover {
  color: var(--pedral-gold) !important;
}


/* ──────────────────────────────────────────────
   10. ÖVRIGT
   Meddelanden, scrollbar, textmarkering
   ────────────────────────────────────────────── */

.woocommerce .woocommerce-message,
.woocommerce .woocommerce-info {
  background-color: var(--pedral-bg-alt) !important;
  border-top-color: var(--pedral-gold) !important;
  color: var(--pedral-text-muted) !important;
}

.woocommerce .woocommerce-error {
  background-color: var(--pedral-bg-alt) !important;
  border-top-color: #b43c28 !important;
  color: var(--pedral-text-muted) !important;
}

::selection {
  background-color: var(--pedral-gold);
  color: var(--pedral-bg);
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--pedral-bg); }
::-webkit-scrollbar-thumb { background: var(--pedral-surface); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--pedral-gold); }


/* ──────────────────────────────────────────────
   11. KONTAKTFORMULÄR (Contact Form 7)
   Stylar formuläret på kontaktsidan
   ────────────────────────────────────────────── */

.wpcf7 { max-width: 600px; }

.wpcf7-form label {
  color: var(--pedral-text-muted) !important;
  font-family: 'Outfit', sans-serif !important;
  font-size: 10px !important;
  font-weight: 500 !important;
  letter-spacing: 2px !important;
  text-transform: uppercase !important;
  display: block !important;
  margin-bottom: 6px !important;
}

.wpcf7-form-control.wpcf7-text,
.wpcf7-form-control.wpcf7-email,
.wpcf7-form-control.wpcf7-textarea {
  background-color: var(--pedral-bg-alt) !important;
  border: 1px solid var(--pedral-border-gold) !important;
  border-radius: 2px !important;
  color: var(--pedral-text) !important;
  font-family: 'Outfit', sans-serif !important;
  font-size: 14px !important;
  font-weight: 300 !important;
  padding: 12px 16px !important;
  width: 100% !important;
  margin-bottom: 20px !important;
}

.wpcf7-form-control.wpcf7-text:focus,
.wpcf7-form-control.wpcf7-email:focus,
.wpcf7-form-control.wpcf7-textarea:focus {
  border-color: var(--pedral-gold) !important;
  outline: none !important;
}

.wpcf7-form-control.wpcf7-textarea {
  min-height: 150px !important;
  resize: vertical !important;
}

.wpcf7-form-control.wpcf7-submit {
  background-color: var(--pedral-gold) !important;
  color: var(--pedral-bg) !important;
  font-family: 'Outfit', sans-serif !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  letter-spacing: 3px !important;
  text-transform: uppercase !important;
  border: none !important;
  border-radius: 2px !important;
  padding: 16px 36px !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
}

.wpcf7-form-control.wpcf7-submit:hover {
  background-color: var(--pedral-gold-hover) !important;
}

.wpcf7 .wpcf7-response-output {
  border-color: var(--pedral-gold) !important;
  color: var(--pedral-text-muted) !important;
  font-family: 'Outfit', sans-serif !important;
  font-size: 13px !important;
}

.wpcf7 .wpcf7-not-valid-tip {
  color: #b43c28 !important;
  font-family: 'Outfit', sans-serif !important;
  font-size: 12px !important;
}

.entry-content p,
.entry-content li {
  color: var(--pedral-text-muted) !important;
  font-family: 'Outfit', sans-serif !important;
  font-size: 15px !important;
  font-weight: 300 !important;
  line-height: 1.75 !important;
}
```

---

## Redigera sidan själv

Du kan göra ändringar på hemsidan själv — byta texter, uppdatera priser, lägga till bilder, osv. Du behöver inte kunna programmera. Du pratar bara med en AI och beskriver vad du vill ändra, på svenska.

### Enklaste sättet: Claude Desktop-appen (rekommenderas)

Det absolut enklaste sättet är att använda **Claude Desktop-appen** som du förmodligen redan har med din Pro-prenumeration.

1. Öppna **Claude-appen** på din Mac
2. Dra in projektmappen (**pedral-site**) i chatten, eller beskriv vad du vill ändra
3. Prata på svenska — t.ex. "Ändra priset på Artefact till 1 549 EUR"
4. Claude gör ändringen och visar vad som ändrats

### Alternativ: Claude Code i Terminal (mer kontroll)

Om du vill ha mer kontroll kan du använda Claude Code i Terminal istället. Det kräver lite mer setup men ger dig tillgång till fler verktyg.

**Engångs-setup:**

1. Öppna **Terminal** (Cmd + Mellanslag → skriv "Terminal")
2. Installera Homebrew: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
3. Installera Node.js och Git: `brew install node git`
4. Hämta koden: `cd ~/Desktop && git clone REPO-LÄNK` (jag ger dig länken)
5. Installera beroenden: `cd ~/Desktop/pedral-site && npm install`
6. Installera Claude Code: `npm install -g @anthropic-ai/claude-code`

**Göra ändringar:**

1. Öppna Terminal
2. Skriv: `cd ~/Desktop/pedral-site`
3. Skriv: `claude`
4. Beskriv vad du vill ändra på svenska

**Exempel på saker du kan be om:**

- "Byt hero-bilden till den nya bilden som heter hero-ny.jpg i min Downloads-mapp"
- "Ändra priset på Artefact till 1 549 EUR"
- "Sätt Triomphe till 1 kvar av 20"
- "Ändra rubriken på startsidan till Designed by one. Owned by few."
- "Starta dev-servern så jag kan se sidan"

**Publicera:**

Skriv "Pusha ändringarna till GitHub" — sidan uppdateras automatiskt inom 30 sekunder.

**Avsluta:** Skriv `/exit`

---

## Skapa Vercel-konto (gratis)

Vercel är tjänsten som visar din hemsida på internet. Du behöver ett eget konto så du äger allt själv.

1. Gå till **vercel.com**
2. Klicka **Sign Up** → välj **Continue with GitHub**
3. Logga in med ditt GitHub-konto (som du skapade i setup:en ovan)
4. Klicka **Add New Project** → välj **pedral-site** från listan
5. Klicka **Deploy** — vänta tills det blir grönt
6. Klart! Sidan är live på en tillfällig adress (typ pedral-site.vercel.app)

Sedan pekar vi pedral.eu till Vercel — jag hjälper dig med det.

Efter detta uppdateras sidan automatiskt varje gång du pushar till GitHub.


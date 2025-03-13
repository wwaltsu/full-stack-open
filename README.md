# Full Stack Open - Create React App (CRA)

Tämä repositorio sisältää Full Stack Open -kurssin tehtäviä vuodelta 2021, kuudenteen osaan saakka.

## Huomio Create React App:ista

Tämä projekti käyttää Create React App (CRA) -työkalua, joka ei ole enää aktiivisessa kehityksessä. React-tiimi on ilmoittanut joulukuussa 2023, että he eivät enää suosittele CRA:ta uusille projekteille.
## Projektin rakenne

Projekti on jaettu osiin kurssin osien mukaisesti:

- **Osa1**: React-perusteet
  - anekdootit: Satunnaisten anekdoottien näyttäminen ja äänestäminen
  - kurssitiedot: Kurssitietojen näyttäminen
  - unicafe: Palautejärjestelmä

- **Osa2**: Palvelimella olevan datan hakeminen
  - kurssitiedot: Laajennettu versio Osa1:n kurssitiedot-sovelluksesta
  - maidentiedot: Maiden tietojen hakeminen ja näyttäminen
  - puhelinluettelo: Puhelinluettelosovellus

- **Osa3**: Palvelimen ohjelmointi NodeJS:llä
  - puhelinBackend: Backend puhelinluettelosovellukselle

- **Osa4**: Express-sovellusten testaaminen, käyttäjänhallinta
  - blogilista: Blogisovelluksen backend

- **Osa5**: React-sovelluksen testaaminen
  - Blogisovelluksen frontend

- **Osa6**: Sovelluksen tilan hallinta Redux-kirjastolla
  - unicafe-redux: Unicafe-sovellus Redux-tilanhallinnalla
  - redux-anecdotes: Anekdootit-sovellus Redux-tilanhallinnalla

## Vanhojen React-sovellusten käynnistäminen

Tämä projekti sisältää vanhempia React-sovelluksia (React 16.x, react-scripts 3.x), jotka vaativat erityisiä asetuksia käynnistyäkseen uudemmilla Node.js-versioilla (Node.js 17+).

### Käynnistäminen PowerShell-komentotulkissa

```powershell
# Siirry haluttuun projektikansioon, esimerkiksi:
cd osa1/anekdootit

# Asenna riippuvuudet, jos niitä ei ole vielä asennettu:
npm install

# Käynnistä sovellus:
$env:NODE_OPTIONS="--openssl-legacy-provider"; npm start
```

### Käynnistäminen cmd-komentotulkissa

```cmd
# Siirry haluttuun projektikansioon, esimerkiksi:
cd osa1/anekdootit

# Asenna riippuvuudet, jos niitä ei ole vielä asennettu:
npm install

# Käynnistä sovellus:
set NODE_OPTIONS=--openssl-legacy-provider && npm start
```

### Käynnistäminen bash/sh-komentotulkissa

```bash
# Siirry haluttuun projektikansioon, esimerkiksi:
cd osa1/anekdootit

# Asenna riippuvuudet, jos niitä ei ole vielä asennettu:
npm install

# Käynnistä sovellus:
NODE_OPTIONS=--openssl-legacy-provider npm start
```

Tämä asetus on tarpeen, koska uudemmat Node.js-versiot käyttävät uudempaa OpenSSL-versiota, joka ei ole yhteensopiva vanhempien webpack-versioiden kanssa, joita käytetään vanhemmissa react-scripts-versioissa.

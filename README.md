**Beskrivning av lösning**

Denna React-applikation är en enkel webbapplikation där användaren kan se en samling böcker. 
Varje bok innehåller information om titel, författare, utgivningsår och om boken har lästs eller inte. 
Applikationen använder TypeScript och är uppdelad i komponenter för bättre struktur och återanvändbarhet.

**Teknologier**

React
TypeScript
CSS 

**Komponenter**

*Title.tsx*

- Denna komponent används för att visa applikationens titel.
- Tar emot en prop name (en sträng) som innehåller titeln på sidan.
- Renderas i App.tsx och får titeln "Min boksamling" skickad som prop.

*Hobby.tsx*

- Denna komponent innehåller en lista med böcker och en underkomponent Book, som ansvarar för att rendera varje enskild bok.
- Book-komponenten: Tar emot en enskild bok som prop och renderar dess detaljer (titel, författare, utgivningsår och om boken har lästs eller inte).
- Boklistan: En array med böcker som itereras och varje bok renderas med Book-komponenten.

*App.tsx*

- Denna komponent sammanför alla andra komponenter och skapar huvudlayouten för applikationen.

**Relationer mellan komponenter**

- Hobby.tsx importeras i App.tsx och renderas där för att visa listan med böcker.
- Title.tsx renderas i App.tsx och för att visa titeln "Min boksamling".

**Hur Props används**

Props används för att skicka data mellan komponenter:

- Title.tsx tar emot name-prop från App.tsx och renderar den som en rubrik.
- Hobby.tsx har en lista av böcker och skickar varje bok som en prop till Book-komponenten.
- Book-komponenten tar emot props (name, author, year, read) och renderar informationen.

**Användning av Interface**
- I Title.tsx och Hobby.tsx används TypeScript interface för att definiera vilka props en komponent förväntas ta emot.
- TitleProps i Title.tsx används för att säkerställa att Title-komponenten alltid får en name-prop av typen string.
- HobbyProps i Hobby.tsx definierar att Book-komponenten måste ta emot name (titel på boken), author (författare), year (utgivningsår) och read (om boken är läst eller inte).

**Styling är gjord för enskild komponent via**

*App.css (Global styling)
*Hobby.css (Specifik styling)

**Kör applikationen**
1. Klona detta repository
2. Installera beroenden - npm install
3. Starta applikationen - npm run dev
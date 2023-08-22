# **Oefeningen: Databinding & directives**
## Oefening 1
Maak een nieuw Angular project h45-oefening1 in de root directory van deze directory.

*   Voorzie in de app component een input veld dat je koppelt via 2-way binding aan een variabele username. 
*   Toon de inhoud van de username in paragraaf onder het input veld.
*   Voeg een knop toe waar je enkel op kan klikken als de username geen lege string is.
*   Als je op de knop klikt, wordt de string terug leeggemaakt.

Controleer na het maken van deze oefening of je alle wijzigingen naar github hebt gepusht.

## Oefening 2

Maak een nieuw Angular-project h45-oefening2 in de root directory van deze repository. 
*   Maak een nieuwe component met de naam “calculator”. Geef deze de selector “app-calculator”.
*   Voorzie 2 tekstvakken. Beiden zijn gekoppeld aan variabele in de klasse van de component via 2-way binding.
*   Voorzie een knop “Optellen” die de 2 input waardes bij elkaar optelt. Het resultaat wordt getoond in een div.
*   Voorzie dat de div pas getoond wordt na het drukken op de knop (hidden).

![opdracht telmachine](https://i.imgur.com/ehEDZcJ.png "opdracht telmachine")

Controleer na het maken van deze oefening of je alle wijzigingen naar github hebt gepusht.

## Oefening 3
Maak een nieuw Angular project h45-oefening3 in de root directory van deze repository. 
*   Maak een nieuwe component met de naam “pokemon”. Geef deze de selector “app-pokemon”. Als CSS voeg je onderstaande code toe en pas je aan waar nodig:
```
:host {
	padding: 1rem;
	margin: 0.5rem;
	border-radius: 3px;
	border: 1px solid #ccc;
	display: block;
}

```

*   Maak in de app.component.ts een array aan van de eerste 9 Pokémon uit de pokédex (objecten). 
```
pokemons: Pokemon[] = [
    { id: 1, name: "Bulbasaur", type: "grass", icon: "assets/1.png" },
    { id: 2, name: "Ivysaur", type: "grass", icon: "assets/2.png" },
    { id: 3, name: "Venusaur", type: "grass", icon: "assets/3.png" },
    { id: 4, name: "Charmander", type: "fire", icon: "assets/4.png" },
    { id: 5, name: "Charmeleon", type: "fire", icon: "assets/5.png" },
    { id: 6, name: "Charizard", type: "fire", icon: "assets/6.png" },
    { id: 7, name: "Squirtle", type: "water", icon: "assets/7.png" },
    { id: 8, name: "Wartortle", type: "water", icon: "assets/8.png" },
    { id: 9, name: "Blastoise", type: "water", icon: "assets/9.png" }
];

```


*   Vanuit de app.component render je voor elke Pokémon een <app-pokemon> component. Plaats deze onder een h1 met als inhoud “Pokédex”.
*   Zorg ervoor dat de achtergrond van de <app-pokemon> variabel aanpast naarmate het type van de Pokémon. Grass Pokémon krijgen bijvoorbeeld een groene achtergrondkleur.
*   Bij het selecteren (klikken) van een Pokémon, wordt deze getoond onder de titel “pokedex”. Deze melding is enkel zichtbaar als een Pokémon geselecteerd is! Extra: voorzie een goude rand voor de geselecteerde pokemon.
*   Voorzie een afbeelding van elke pokémon in de assets folder. Plaats deze ook in onderstaande gridview.
*   Extra: nadat we gezien hebben hoe je API calls kan maken, kan je deze oefening uitbreiden met de [pokeAPI](https://pokeapi.co/) (week 8).

![pokedex](https://i.imgur.com/tM0EwBm.png "oefening pokedex")

Controleer na het maken van deze oefening of je alle wijzigingen naar github hebt gepusht.

## Oefening 4
Maak een nieuw Angular project H45-oefening4 in de root directory van deze repository. 
*   Voorzie een array van strings met de naam “huisdieren”. Voorzie enkele  elementen.
*   Geef de data weer in een tabel.
*   Voorzie onderaan de tabel een input veld en een knop ‘toevoegen’. Bij het drukken op de knop, wordt de ingegeven string toegevoegd aan de tabel \
_tip: [(ngModel)]=”ingegevenPet”_
*   Voorzie voor de naam van elk huisdier een knop “del”. Bij het drukken op deze knop, verwijder je dat element uit de array
    _Tip: _gebruik de index van *ngFor

![huisdieren](https://i.imgur.com/lHcS1X6.png "oefening huisdieren")

Controleer na het maken van deze oefening of je alle wijzigingen naar github hebt gepusht.

## Oefening 5
Maak een nieuw Angular project H45-oefening5 en maak een nieuwe Component:

*   Geef de component de naam “artikelComponent” een bijhorende selector
*   In de app.component.ts file voorzie je een variabele met als naam “artikelen” van het datatype Artikel[ ]. Voorzie een model die je hiervoor gebruikt in een aparte file.
*   Voorzie onderstaande inhoud voor die variabele. Het toekennen van de inhoud doe je in de onInit lifecycle hook van je appComponent.

<table>
  <tr>
   <td>
Artikelnummer
   </td>
   <td>Artikelnaam
   </td>
   <td>Aankoopprijs
   </td>
   <td>Verkoopprijs
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>Tandenborstel
   </td>
   <td>1,5
   </td>
   <td>3,24
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>Handdoek
   </td>
   <td>2,5
   </td>
   <td>4,75
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>Washandje
   </td>
   <td>0,4
   </td>
   <td>1,20
   </td>
  </tr>
  <tr>
   <td>4
   </td>
   <td>Keukenrol
   </td>
   <td>1,75
   </td>
   <td>0,65
   </td>
  </tr>
</table>

*   Zorg dat er in de artikelComponent een tabel afgedrukt wordt met de artikelen. In de tabel toon je de artikel nummer en artikelnaam. De volledige array met artikelen wordt doorgegeven door de parent component naar de artikelComponent (werk met @Input() in de child component).
*   In de tabel zorg je ervoor dat de even en oneven rijen een andere kleur krijgen.
*   Wanneer op een artikel geklikt wordt, worden de details getoond in een JavaScript alert(Artikelomschrijving – verkoopprijs - aankoopprijs).
*   Voorzie een afbeelding van elk product en plaats deze in de assets folder.  Het pad van de afbeelding wordt bijgehouden in je model. Voeg de afbeelding toe aan de tabel. 	
*   Voorzie een extra kolom met een hyperlink “info” in. De achterliggende hyperlink zoekt op google naar de artikelnaam. Als je dus op info klikt bij tandenborstel, wordt je doorverwezen naar de pagina [https://www.google.be/search?q=tandenborstel](https://www.google.be/search?q=tandenborstel) 

Controleer na het maken van deze oefening of je alle wijzigingen naar github hebt gepusht.
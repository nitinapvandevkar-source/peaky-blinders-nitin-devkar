import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";

// Intro and additional home archive assets
import introBg from "./assets/home/intro-bg.jpg";

// Home assets
import birmingham from "./assets/home/birmingham.jpg";
import empire from "./assets/home/empire.jpg";
import garrsionpub from "./assets/home/garrison-pub.jpg";
import shelbyfamily from "./assets/home/shelby-family.jpg";
import tommyintro from "./assets/home/tommy-intro.jpg";

// Shelby Family assets
import adaShelby from "./assets/shelby-family/ada-shelby.jpg";
import arthurShelby from "./assets/shelby-family/arthur-shelby.jpg";
import charlieStrong from "./assets/shelby-family/charlie-strong.jpg";
import dukeShelby from "./assets/shelby-family/duke-shelby.jpg";
import esmeShelby from "./assets/shelby-family/esme-shelby.jpg";
import finnShelby from "./assets/shelby-family/finn-shelby.jpg";
import graceShelby from "./assets/shelby-family/grace-shelby.jpg";
import johnShelby from "./assets/shelby-family/john-shelby.jpg";
import lindaShelby from "./assets/shelby-family/linda-shelby.jpg";
import lizzieShelby from "./assets/shelby-family/lizzie-shelby.jpg";
import michaelGray from "./assets/shelby-family/michael-gray.jpg";
import pollyGray from "./assets/shelby-family/polly-gray.jpg";
import rubyShelby from "./assets/shelby-family/ruby-shelby.jpg";
import thomasShelby from "./assets/shelby-family/thomas-shelby.jpg";

// Characters assets
import aberamaGold from "./assets/characters/aberama-gold.jpg";
import charAdaShelby from "./assets/characters/ada-shelby.jpg";
import alfieSolomons from "./assets/characters/alfie-solomons.jpg";
import billyKimber from "./assets/characters/billy-kimber.jpg";
import darbySabini from "./assets/characters/darby-sabini.jpg";
import dianaMitford from "./assets/characters/diana-mitford.jpg";
import fatherJohnHugs from "./assets/characters/father-john-hugs.jpg";
import ginaGray from "./assets/characters/gina-gray.jpg";
import haydenStagg from "./assets/characters/hayden-stagg.jpg";
import inspectorCampbell from "./assets/characters/inspector-campbell.jpg";
import jackNelson from "./assets/characters/jack-nelson.jpg";
import jeremiahJones from "./assets/characters/jeremiah-jones.jpg";
import jessieEden from "./assets/characters/jessie-eden.jpg";
import jhonnyDogs from "./assets/characters/jhonny-dogs.jpg";
import lucaChangretta from "./assets/characters/luca-changretta.jpg";
import mayCarleton from "./assets/characters/may-carleton.jpg";
import oswaldMosley from "./assets/characters/oswald-mosley.jpg";
import tatianaPetrovna from "./assets/characters/tatiana-petrovna.jpg";
import winstonChurchill from "./assets/characters/winston-churchill.jpg";

// Gangs assets
import alfieGang from "./assets/gangs/alfie-solomons'-organisation.jpg";
import billyGang from "./assets/gangs/billy-kimber's-gang.jpg";
import changrettaGang from "./assets/gangs/changretta-family.jpg";
import leeGang from "./assets/gangs/lee-family.jpg";
import mosleyGang from "./assets/gangs/mosley's-political- organisation.jpg";
import shelbyGangImg from "./assets/gangs/shelby-gang.jpg";

// Empire assets
import businessMeetings from "./assets/empire/business-meetings.jpg";
import empireBettingShop from "./assets/empire/shelby-betting-shop.jpg";
import shelbyCompanyBuilding from "./assets/empire/shelby-company-limited-building.jpg";
import shelbyFactoryInterior from "./assets/empire/shelby-factory-interior.jpg";
import shelbyFamilyGroup from "./assets/empire/shelby-family-business-group.jpg";
import shelbyMansionInterior from "./assets/empire/shelby-mansion-interior.jpg";
import shelbyOffice from "./assets/empire/shelby-office.jpg";
import vintageAutomobiles from "./assets/empire/vintage-automobiles.jpg";

// Locations assets
import arrowHouse from "./assets/locations/arrow-house.jpg";
import birminghamRailwayStation from "./assets/locations/birmingham-railway-station.jpg";
import camdenTown from "./assets/locations/camden-town.jpg";
import charliesYard from "./assets/locations/charlie's-yard.jpg";
import locGarrisonPub from "./assets/locations/garrison-pub.jpg";
import industrialCanals from "./assets/locations/industrial-canals.jpg";
import londonStreets from "./assets/locations/london-streets.jpg";
import locBettingShop from "./assets/locations/shelby-betting-shop.jpg";
import locShelbyFactory from "./assets/locations/shelby-company-limited-factory.jpg";
import smallHeathBirmingham from "./assets/locations/small-heath-birmingham.jpg";
import thomasShelbyOffice from "./assets/locations/thomas-shelby-office.jpg";

// Seasons assets
import season1 from "./assets/seasons/season-1.jpg";
import season2 from "./assets/seasons/season-2.jpg";
import season3 from "./assets/seasons/season-3.jpg";
import season4 from "./assets/seasons/season-4.jpg";
import season5 from "./assets/seasons/season-5.jpg";
import season6 from "./assets/seasons/season-6.jpg";

// Timeline assets
import britishStreets1920 from "./assets/timeline/1920-british-streets.jpg";
import birmingham1919 from "./assets/timeline/birmingham-1919-1920/1919-birmingham.jpg";
import birmingham1920 from "./assets/timeline/birmingham-1919-1920/1920-birmingham.jpg";
import britishFactory1920 from "./assets/timeline/british-factories-1920/1920-british-factory.jpg";
import factoryInterior1920 from "./assets/timeline/british-factories-1920/factory-interior.jpg";
import steamLocomotive1 from "./assets/timeline/steam-locomotives/steam-locomotive-1.jpg";
import steamLocomotive2 from "./assets/timeline/steam-locomotives/steam-locomotive-2.jpg";
import vintageNewspaper from "./assets/timeline/vintage-newspaper.jpg";

// Gallery assets
import arthurGallery1 from "./assets/gallery/arthur-shelby/arthur-shelby-1.jpg";
import arthurGallery2 from "./assets/gallery/arthur-shelby/arthur-shelby-2.jpg";
import birminghamGallery1 from "./assets/gallery/birmingham/birmingham-1.jpg";
import birminghamGallery2 from "./assets/gallery/birmingham/birmingham-2.jpg";
import garrisonGalleryMain from "./assets/gallery/garrison-pub/garrison-pub.jpg";
import garrisonGallery1 from "./assets/gallery/garrison-pub/pub-1.jpg";
import garrisonGallery2 from "./assets/gallery/garrison-pub/pub-2.jpg";
import johnGallery1 from "./assets/gallery/john-shelby/john-shelby-1.jpg";
import johnGallery2 from "./assets/gallery/john-shelby/john-shelby-2.jpg";
import shelbyBrothersImg from "./assets/gallery/shelby-brothers/shelby-brothers.jpg";
import shelbyFamilyGallery1 from "./assets/gallery/shelby-family/shelby-family-1.jpg";
import shelbyFamilyGallery2 from "./assets/gallery/shelby-family/shelby-family-2.jpg";
import shelbyGangGallery1 from "./assets/gallery/shelby-gang/shelby-gang-1.jpg";
import shelbyGangGallery2 from "./assets/gallery/shelby-gang/shelby-gang-2.jpg";
import thomasGallery1 from "./assets/gallery/thomas-shelby/thomas-shelby-1.jpg";
import thomasGallery2 from "./assets/gallery/thomas-shelby/thomas-shelby-2.jpg";
import thomasGallery3 from "./assets/gallery/thomas-shelby/thomas-shelby-3.jpg";

const HOME_ITEMS = [
  {
    badge: "Small Heath",
    title: "The Walk Through Smoke",
    desc: "Cold iron, coal dust, and calculated ambition moving down the streets of Small Heath after the Great War.",
    quote: "There is no rest for me in this world.",
    img: tommyintro,
  },
  {
    badge: "Birmingham",
    title: "Shadows Over Birmingham",
    desc: "Where street authority is forged amid fog, brick terraces, and the restless pulse of the city.",
    quote: "In the bleak midwinter.",
    img: birmingham,
  },
  {
    badge: "Bloodline & Loyalty",
    title: "The Shelby Family",
    desc: "The Shelby name stands above fear—built by family, tested by betrayal, and bound by history.",
    quote: "No fighting. No fighting.",
    img: shelbyfamily,
  },
  {
    badge: "The Garrison",
    title: "Crimson & Brass",
    desc: "From smoky backrooms to high-stakes tables, every conversation carries a price.",
    quote: "A quiet word can change everything.",
    img: garrsionpub,
  },
  {
    badge: "The Empire",
    title: "The Long Game",
    desc: "A growing business empire reaches beyond the streets of Small Heath into a wider world of influence.",
    quote: "Business is business.",
    img: empire,
  },
];

const SHELBY_FAMILY_ITEMS = [
  {
    badge: "Head of the House",
    title: "Thomas Shelby",
    desc: "Tactical mastermind of Small Heath, war veteran, and architect of the Shelby rise.",
    quote: "I'm a businessman.",
    img: thomasShelby,
  },
  {
    badge: "The Elder Brother",
    title: "Arthur Shelby",
    desc: "Fierce enforcer with a haunted heart, bound to family and fury.",
    quote: "By order of the Peaky Blinders!",
    img: arthurShelby,
  },
  {
    badge: "The Younger Brother",
    title: "John Shelby",
    desc: "Quick-tempered, loyal, and fearless on the front lines of Small Heath.",
    quote: "We're the Peaky fucking Blinders.",
    img: johnShelby,
  },
  {
    badge: "Youngest Shelby Brother",
    title: "Finn Shelby",
    desc: "Raised in the shadow of the gang's legend and growing pains.",
    quote: "I'm ready.",
    img: finnShelby,
  },
  {
    badge: "The Sister",
    title: "Ada Shelby",
    desc: "Defiant, intelligent, and unwilling to bow to convention or control.",
    quote: "I don't belong to any of you.",
    img: adaShelby,
  },
  {
    badge: "Inner Circle",
    title: "Grace Shelby",
    desc: "A pivotal figure whose presence altered Thomas Shelby's path forever.",
    quote: "You're not a good man, Tommy.",
    img: graceShelby,
  },
  {
    badge: "Matriarch",
    title: "Polly Gray",
    desc: "Sharp-tongued treasurer and guardian of the family's soul and secrets.",
    quote: "You need to stand up for yourselves.",
    img: pollyGray,
  },
  {
    badge: "Cousin",
    title: "Michael Gray",
    desc: "Ambitious and calculated, drawn deeper into the family's empire.",
    quote: "I want a piece of the future.",
    img: michaelGray,
  },
  {
    badge: "Shelby House",
    title: "Lizzie Shelby",
    desc: "Steadfast and resilient through years of upheaval and power.",
    quote: "I know what you are.",
    img: lizzieShelby,
  },
  {
    badge: "Lee Bloodline",
    title: "Esme Shelby",
    desc: "Spirited and outspoken, fiercely devoted to her own family.",
    quote: "You're all mad.",
    img: esmeShelby,
  },
  {
    badge: "Yard & Boat",
    title: "Charlie Strong",
    desc: "Trusted ally, boatyard keeper, and steady voice from the early days.",
    quote: "Keep your head down, lad.",
    img: charlieStrong,
  },
  {
    badge: "New Generation",
    title: "Duke Shelby",
    desc: "Carrying Shelby grit and street instincts into a new era.",
    quote: "I know how to handle myself.",
    img: dukeShelby,
  },
  {
    badge: "Next Generation",
    title: "Ruby Shelby",
    desc: "A fragile light cherished within the turbulent Shelby household.",
    quote: "Daddy.",
    img: rubyShelby,
  },
  {
    badge: "Marriage & Faith",
    title: "Linda Shelby",
    desc: "A strong, contentious presence in Arthur's life and choices.",
    quote: "You have to choose.",
    img: lindaShelby,
  },
];

const CHARACTER_ITEMS = [
  {
    badge: "Camden",
    title: "Alfie Solomons",
    desc: "Unpredictable, razor-witted leader of Camden Town with his own brutal code.",
    quote: "Big fucks small.",
    img: alfieSolomons,
  },
  {
    badge: "New York",
    title: "Luca Changretta",
    desc: "Cold-blooded vendetta enforcer arriving from New York with a list of names.",
    quote: "Vendetta.",
    img: lucaChangretta,
  },
  {
    badge: "Politics",
    title: "Oswald Mosley",
    desc: "Charismatic, dangerous political force threatening Britain from within.",
    quote: "Power belongs to the bold.",
    img: oswaldMosley,
  },
  {
    badge: "The Crown",
    title: "Inspector Campbell",
    desc: "Relentless officer obsessed with crushing the Peaky Blinders.",
    quote: "This city will be clean.",
    img: inspectorCampbell,
  },
  {
    badge: "Birmingham",
    title: "Billy Kimber",
    desc: "Early racecourse boss who underestimated the ambition of Small Heath.",
    quote: "I run the tracks.",
    img: billyKimber,
  },
  {
    badge: "London",
    title: "Darby Sabini",
    desc: "London turf boss locked in bitter rivalry over territory and control.",
    quote: "London isn't Birmingham.",
    img: darbySabini,
  },
  {
    badge: "Wandering Clan",
    title: "Aberama Gold",
    desc: "Deadly sharpshooter and ally bound by honor and vengeance.",
    quote: "I don't miss.",
    img: aberamaGold,
  },
  {
    badge: "Labor",
    title: "Jessie Eden",
    desc: "Resolute union organizer fighting for workers' rights in the factories.",
    quote: "Solidarity.",
    img: jessieEden,
  },
  {
    badge: "Aristocracy",
    title: "May Carleton",
    desc: "Composed and wealthy, drawn into Thomas's complicated orbit.",
    quote: "You have a dark mind, Thomas.",
    img: mayCarleton,
  },
  {
    badge: "High Society",
    title: "Tatiana Petrovna",
    desc: "Enigmatic Russian noblewoman entangled in high-stakes intrigue.",
    quote: "Nothing is free.",
    img: tatianaPetrovna,
  },
  {
    badge: "Statesman",
    title: "Winston Churchill",
    desc: "High-level political operator using shadows and leverage.",
    quote: "Duty comes first.",
    img: winstonChurchill,
  },
  {
    badge: "New York",
    title: "Jack Nelson",
    desc: "Powerful American figure pulling strings across the Atlantic.",
    quote: "Business is business.",
    img: jackNelson,
  },
  {
    badge: "New York",
    title: "Gina Gray",
    desc: "Sharp, ambitious, and unafraid to play power games.",
    quote: "Look ahead.",
    img: ginaGray,
  },
  {
    badge: "Aristocracy",
    title: "Diana Mitford",
    desc: "Calculating figure in upper-crust political circles.",
    quote: "Influence is everything.",
    img: dianaMitford,
  },
  {
    badge: "Faith",
    title: "Father John Hughes",
    desc: "Menacing figure cloaked in clerical authority.",
    quote: "Confess.",
    img: fatherJohnHugs,
  },
  {
    badge: "Small Heath",
    title: "Jeremiah Jesus",
    desc: "Vocal street preacher and longtime witness to Small Heath.",
    quote: "Repent!",
    img: jeremiahJones,
  },
  {
    badge: "Scout",
    title: "Johnny Dogs",
    desc: "Loyal, sharp-eyed scout and trusted messenger for the Shelbys.",
    quote: "I found him, Tommy.",
    img: jhonnyDogs,
  },
  {
    badge: "Foundry",
    title: "Hayden Stagg",
    desc: "Hard-nosed factory foreman with secrets of his own.",
    quote: "Keep moving.",
    img: haydenStagg,
  },
  {
    badge: "Shelby",
    title: "Ada Thorne (Shelby)",
    desc: "Fearless voice of reason and resistance within the family.",
    quote: "You're blind to yourselves.",
    img: charAdaShelby,
  },
];

const GANG_ITEMS = [
  {
    badge: "Small Heath",
    title: "The Shelby Gang",
    desc: "The core Peaky Blinders crew—disciplined, ruthless, and feared across Birmingham.",
    quote: "No one crosses the Peaky Blinders.",
    img: shelbyGangImg,
  },
  {
    badge: "Camden Town",
    title: "Alfie Solomons' Organisation",
    desc: "Tight-knit, volatile London operation built on secrecy and ferocity.",
    quote: "Camden belongs to us.",
    img: alfieGang,
  },
  {
    badge: "New York Mafia",
    title: "The Changretta Family",
    desc: "Old-world Sicilian syndicate operating with cold precision and blood oaths.",
    quote: "Blood answers blood.",
    img: changrettaGang,
  },
  {
    badge: "Racecourses",
    title: "Billy Kimber's Gang",
    desc: "Early powerhouse controlling protection and betting tracks across England.",
    quote: "Order on the turf.",
    img: billyGang,
  },
  {
    badge: "Romanichal",
    title: "The Lee Family",
    desc: "Proud, storied family with deep roots and fierce loyalty.",
    quote: "Honor above all.",
    img: leeGang,
  },
  {
    badge: "Political Bloc",
    title: "Mosley's Political Organisation",
    desc: "Ideological and street-level movement maneuvering for national power.",
    quote: "March forward.",
    img: mosleyGang,
  },
];

const EMPIRE_ITEMS = [
  {
    badge: "Corporate",
    title: "Shelby Company Limited",
    desc: "Legitimate corporate front masking high-stakes trade, politics, and power.",
    quote: "Legitimate on paper.",
    img: shelbyCompanyBuilding,
  },
  {
    badge: "Command Room",
    title: "Thomas's Office",
    desc: "Whiskey, ledgers, maps, and quiet decisions that reshape fortunes.",
    quote: "Sit down.",
    img: shelbyOffice,
  },
  {
    badge: "Manor",
    title: "Shelby Mansion Interior",
    desc: "Opulent halls that contrast sharply with the grit of Small Heath.",
    quote: "How far we've come.",
    img: shelbyMansionInterior,
  },
  {
    badge: "Industry",
    title: "Shelby Factory Interior",
    desc: "Heavy machinery, steel, and industrial production driving the machine.",
    quote: "Iron and smoke.",
    img: shelbyFactoryInterior,
  },
  {
    badge: "Turf",
    title: "Shelby Betting Shop",
    desc: "Where odds are fixed, cash moves fast, and information is currency.",
    quote: "Place your bets.",
    img: empireBettingShop,
  },
  {
    badge: "Strategy",
    title: "Business Meetings",
    desc: "Tense negotiations where alliances are brokered or broken.",
    quote: "Name your price.",
    img: businessMeetings,
  },
  {
    badge: "Family Board",
    title: "Shelby Family Business Group",
    desc: "Family ambition turned into an organized syndicate.",
    quote: "Together or not at all.",
    img: shelbyFamilyGroup,
  },
  {
    badge: "Fleet",
    title: "Vintage Automobiles",
    desc: "Classic motorcars signaling status, speed, and authority.",
    quote: "Make way.",
    img: vintageAutomobiles,
  },
];

const LOCATION_ITEMS = [
  {
    badge: "Birmingham",
    title: "Small Heath",
    desc: "Foggy streets, brick terraces, and the birthplace of Peaky Blinders rule.",
    quote: "Welcome to Small Heath.",
    img: smallHeathBirmingham,
  },
  {
    badge: "The Pub",
    title: "The Garrison Pub",
    desc: "Heart of Shelby business, late-night deals, and bitter rivalries.",
    quote: "Pint of bitter.",
    img: locGarrisonPub,
  },
  {
    badge: "Estate",
    title: "Arrow House",
    desc: "Grand countryside estate symbolizing wealth, isolation, and power.",
    quote: "A different world.",
    img: arrowHouse,
  },
  {
    badge: "Waterfront",
    title: "Charlie's Yard",
    desc: "Canal-side boatyard holding memories, barges, and quiet refuge.",
    quote: "Down by the water.",
    img: charliesYard,
  },
  {
    badge: "London",
    title: "Camden Town",
    desc: "Gritty London district ruled by Alfie Solomons and his crew.",
    quote: "Mind the gap.",
    img: camdenTown,
  },
  {
    badge: "London",
    title: "London Streets",
    desc: "Expansion beyond Birmingham into high-stakes capital territory.",
    quote: "Bigger stakes.",
    img: londonStreets,
  },
  {
    badge: "Transit",
    title: "Birmingham Railway Station",
    desc: "Steam, departures, arrivals, and messages moving across the country.",
    quote: "Next train out.",
    img: birminghamRailwayStation,
  },
  {
    badge: "Canals",
    title: "Industrial Canals",
    desc: "Dark waterways threading through industrial Britain.",
    quote: "Quiet water runs deep.",
    img: industrialCanals,
  },
  {
    badge: "Bookmakers",
    title: "Shelby Betting Shop",
    desc: "Neighborhood betting parlor anchoring street-level income.",
    quote: "Odds are in our favor.",
    img: locBettingShop,
  },
  {
    badge: "Works",
    title: "Shelby Company Limited Factory",
    desc: "Industrial base grounding the Shelby enterprise in brick and steel.",
    quote: "Work never stops.",
    img: locShelbyFactory,
  },
  {
    badge: "HQ",
    title: "Thomas Shelby Office",
    desc: "Private command hub for strategy, letters, and deals.",
    quote: "Lock the door.",
    img: thomasShelbyOffice,
  },
];

const SEASON_ITEMS = [
  {
    badge: "Season 1",
    title: "The Rise in Small Heath",
    desc: "The Peaky Blinders clash with Inspector Campbell and Billy Kimber while forging their name.",
    quote: "In the bleak midwinter.",
    img: season1,
  },
  {
    badge: "Season 2",
    title: "London & The Racecourses",
    desc: "Expansion into London, clashes with Sabini and Alfie, and escalating danger.",
    quote: "Nearly got fucking everything.",
    img: season2,
  },
  {
    badge: "Season 3",
    title: "International Shadows",
    desc: "High-stakes intrigue, aristocratic circles, and heavy personal costs.",
    quote: "We have to go deeper.",
    img: season3,
  },
  {
    badge: "Season 4",
    title: "The Vendetta",
    desc: "Luca Changretta brings a deadly Italian vendetta straight to the Shelby door.",
    quote: "Vendetta is a dish best served cold.",
    img: season4,
  },
  {
    badge: "Season 5",
    title: "Politics & Paranoia",
    desc: "Fascism rises in Britain as ambition and betrayal test every bond.",
    quote: "The devil is in the detail.",
    img: season5,
  },
  {
    badge: "Season 6",
    title: "The Final Reckoning",
    desc: "A dark, reckoning chapter closing an era of smoke, ghosts, and power.",
    quote: "One last piece of business.",
    img: season6,
  },
];

const TIMELINE_ITEMS = [
  {
    badge: "1919",
    title: "Birmingham 1919",
    desc: "Post-war streets of Birmingham marked by grit, hardship, and emerging street power.",
    quote: "After the war.",
    img: birmingham1919,
  },
  {
    badge: "1920",
    title: "Birmingham 1920",
    desc: "Rapid industrial tension and shifting power across the city.",
    quote: "A new decade of blood and brass.",
    img: birmingham1920,
  },
  {
    badge: "1920s",
    title: "1920 British Streets",
    desc: "Cobblestones, fog, and everyday life in post-war Britain.",
    quote: "Every corner holds a story.",
    img: britishStreets1920,
  },
  {
    badge: "Industry",
    title: "1920 British Factory",
    desc: "Heavy manufacturing powering the nation's post-war recovery.",
    quote: "Forged in steel.",
    img: britishFactory1920,
  },
  {
    badge: "Foundry",
    title: "Factory Interior",
    desc: "Furnaces, gears, and relentless labor behind closed doors.",
    quote: "Heat and hammer.",
    img: factoryInterior1920,
  },
  {
    badge: "Rail I",
    title: "Steam Locomotives",
    desc: "Iron rails linking cities, goods, and clandestine movements.",
    quote: "Full steam ahead.",
    img: steamLocomotive1,
  },
  {
    badge: "Rail II",
    title: "Freight & Distance",
    desc: "Locomotives carrying cargo and ambition across Britain.",
    quote: "Miles of smoke.",
    img: steamLocomotive2,
  },
  {
    badge: "Press",
    title: "Vintage Newspaper",
    desc: "Headlines, scandals, and public narratives shaped behind the scenes.",
    quote: "Read all about it.",
    img: vintageNewspaper,
  },
];

// Gallery sections in exact requested order
const GALLERY_SECTIONS = [
  {
    heading: "THOMAS SHELBY",
    items: [
      {
        badge: "Thomas Shelby",
        title: "Thomas Shelby — Portrait I",
        desc: "Composed, calculating, and commanding every room he enters.",
        quote: "I always know what I'm doing.",
        img: thomasGallery1,
      },
      {
        badge: "Thomas Shelby",
        title: "Thomas Shelby — Portrait II",
        desc: "Quiet resolve forged in trenches and hardened in Small Heath.",
        quote: "Limits are for other men.",
        img: thomasGallery2,
      },
      {
        badge: "Thomas Shelby",
        title: "Thomas Shelby — Portrait III",
        desc: "Unblinking focus beneath the weight of crown and family.",
        quote: "On my terms.",
        img: thomasGallery3,
      },
    ],
  },
  {
    heading: "BIRMINGHAM",
    items: [
      {
        badge: "Small Heath",
        title: "Birmingham — Archive I",
        desc: "The streets and industrial atmosphere that shape the world of the Peaky Blinders.",
        quote: "Every street has a story.",
        img: birminghamGallery1,
      },
      {
        badge: "Small Heath",
        title: "Birmingham — Archive II",
        desc: "A second glimpse into the city that stands behind the Shelby family's rise.",
        quote: "This is our city.",
        img: birminghamGallery2,
      },
    ],
  },
  {
    heading: "ARTHUR SHELBY",
    items: [
      {
        badge: "Arthur Shelby",
        title: "Arthur Shelby — Frame I",
        desc: "Raw strength and fierce devotion to the Shelby banner.",
        quote: "For the family.",
        img: arthurGallery1,
      },
      {
        badge: "Arthur Shelby",
        title: "Arthur Shelby — Frame II",
        desc: "Storm and sorrow carried side by side.",
        quote: "I'm still here.",
        img: arthurGallery2,
      },
    ],
  },
  {
    heading: "JOHN SHELBY",
    items: [
      {
        badge: "John Shelby",
        title: "John Shelby — Frame I",
        desc: "Sharp, bold, and ready whenever trouble calls.",
        quote: "Let's go.",
        img: johnGallery1,
      },
      {
        badge: "John Shelby",
        title: "John Shelby — Frame II",
        desc: "Loyalty without hesitation in the streets of Birmingham.",
        quote: "Always with you.",
        img: johnGallery2,
      },
    ],
  },
  {
    heading: "SHELBY FAMILY",
    items: [
      {
        badge: "Shelby Family",
        title: "Shelby Family — Archive I",
        desc: "Blood ties bound by survival, pride, and shared history.",
        quote: "Family is everything.",
        img: shelbyFamilyGallery1,
      },
      {
        badge: "Shelby Family",
        title: "Shelby Family — Archive II",
        desc: "Standing together against every storm that hits Small Heath.",
        quote: "We don't break.",
        img: shelbyFamilyGallery2,
      },
    ],
  },
  {
    heading: "GARRISON PUB",
    items: [
      {
        badge: "Garrison Pub",
        title: "The Garrison — Main View",
        desc: "The iconic gathering ground of the Peaky Blinders.",
        quote: "The Garrison is ours.",
        img: garrisonGalleryMain,
      },
      {
        badge: "Garrison Pub",
        title: "The Garrison — Interior I",
        desc: "Dimly lit corners where deals are sealed over whiskey.",
        quote: "Keep it quiet.",
        img: garrisonGallery1,
      },
      {
        badge: "Garrison Pub",
        title: "The Garrison — Interior II",
        desc: "Atmosphere thick with smoke, secrets, and history.",
        quote: "Pour another.",
        img: garrisonGallery2,
      },
    ],
  },
  {
    heading: "THE SHELBY GANG",
    items: [
      {
        badge: "The Shelby Gang",
        title: "Peaky Blinders Crew — I",
        desc: "United street force enforcing order across turf and trade.",
        quote: "By order of the Peaky Blinders.",
        img: shelbyGangGallery1,
      },
      {
        badge: "The Shelby Gang",
        title: "Peaky Blinders Crew — II",
        desc: "Feared across districts for speed, grit, and ruthlessness.",
        quote: "Don't cross the line.",
        img: shelbyGangGallery2,
      },
    ],
  },
  {
    heading: "THE SHELBY BROTHERS",
    items: [
      {
        badge: "The Shelby Brothers",
        title: "The Shelby Brothers",
        desc: "Brothers bound by blood, war, and an unbreakable pact.",
        quote: "Brothers till the end.",
        img: shelbyBrothersImg,
      },
    ],
  },
];

function ItemBrowser({ items, sectionLabel = "Select an entry" }) {
  const [selected, setSelected] = useState(null);
  const detailRef = React.useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setSelected(null);
  }, [pathname]);

  const openDetails = (item) => {
    setSelected(item);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        detailRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  };

  return (
    <>
      <div
        className={`pb-item-grid ${sectionLabel !== "Shelby Family" && sectionLabel !== "Characters" ? "pb-item-grid--cinematic" : ""}`}
        aria-label={sectionLabel}
      >
        {items.map((item, idx) => (
          <button
            type="button"
            className={`pb-item-tile ${selected?.title === item.title ? "is-selected" : ""}`}
            key={`${item.title}-${idx}`}
            onClick={() => openDetails(item)}
            aria-pressed={selected?.title === item.title}
          >
            <span className="pb-item-image-wrap">
              <img src={item.img} alt="" loading="lazy" />
            </span>
            <span className="pb-item-name">{item.title}</span>
          </button>
        ))}
      </div>

      {selected && (
        <section
          className="pb-detail-panel"
          ref={detailRef}
          tabIndex={-1}
          aria-live="polite"
        >
          <div className="pb-detail-copy">
            <span className="pb-badge">{selected.badge}</span>
            <p className="pb-detail-overline">{sectionLabel}</p>
            <h2 className="pb-detail-title">{selected.title}</h2>
            <p className="pb-desc">{selected.desc}</p>
            {selected.quote && (
              <blockquote className="pb-quote">“{selected.quote}”</blockquote>
            )}
            <button
              type="button"
              className="pb-close-detail"
              onClick={() => setSelected(null)}
            >
              Close details <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="pb-detail-media">
            <img src={selected.img} alt={selected.title} />
          </div>
        </section>
      )}
    </>
  );
}

function DossierPage({ kicker, title, items, home = false }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <main className="pb-main">
      <header className="pb-header">
        <span className="pb-kicker">{kicker}</span>
        <h1 className="pb-title">{title}</h1>
      </header>

      {home && (
        <section
          className="pb-home-story"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(8, 9, 8, 0.96) 0%, rgba(8, 9, 8, 0.78) 48%, rgba(8, 9, 8, 0.18) 100%), url(${introBg})`,
          }}
          aria-label="The story of Birmingham and the Shelby family"
        >
          <div className="pb-home-story-copy">
            <span className="pb-home-story-kicker">Birmingham · 1919</span>
            <h2>Where the city learned their name.</h2>
            <p>
              In the smoke of post-war Small Heath, a family built its name
              street by street. Follow the bloodline, the rivalries, and the
              empire that carried the Peaky Blinders beyond Birmingham.
            </p>
            <NavLink to="/shelby-family" className="pb-story-link">
              Discover the Shelby bloodline <span aria-hidden="true">↗</span>
            </NavLink>
          </div>
          <span className="pb-home-story-index" aria-hidden="true">
            I — THE RISE
          </span>
        </section>
      )}

      <ItemBrowser key={pathname} items={items} sectionLabel={title} />
    </main>
  );
}

function GalleryPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <main className="pb-main">
      <header className="pb-header">
        <span className="pb-kicker">Visual Vault</span>
        <h1 className="pb-title">The Gallery</h1>
      </header>

      {GALLERY_SECTIONS.map((section) => (
        <section key={section.heading} className="pb-gallery-group">
          <h2 className="pb-gallery-group-title">{section.heading}</h2>
          <ItemBrowser
            key={`${pathname}-${section.heading}`}
            items={section.items}
            sectionLabel={section.heading}
          />
        </section>
      ))}
    </main>
  );
}

export default function App() {
  const [entered, setEntered] = useState(false);
  const themeAudioRef = useRef(null);

  const enterKhansaar = () => {
    setEntered(true);

    const audio = themeAudioRef.current;
    if (audio) {
      // Begin the looping theme 0.3 seconds into the audio file.
      audio.currentTime = 3;
      const playback = audio.play();
      if (playback && typeof playback.catch === "function") {
        playback.catch(() => {
          // Playback can be blocked by browser settings; the user can still enter the site.
        });
      }
    }
  };

  const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/shelby-family", label: "Shelby Family" },
    { to: "/characters", label: "Characters" },
    { to: "/gangs", label: "Gangs" },
    { to: "/empire", label: "Empire" },
    { to: "/locations", label: "Locations" },
    { to: "/seasons", label: "Seasons" },
    { to: "/timeline", label: "Timeline" },
    { to: "/gallery", label: "Gallery" },
  ];

  return (
    <BrowserRouter>
      <audio ref={themeAudioRef} src="/audio/theme.mp3" loop preload="auto" />
      <div className="pb-grain" aria-hidden="true" />

      <div className={`pb-intro ${entered ? "pb-intro-exit" : ""}`}>
        <img src={introBg} alt="Peaky Blinders Intro" className="pb-intro-bg" />
        <div className="pb-intro-vignette" />
        <span className="pb-intro-kicker">Small Heath • Birmingham</span>
        <button type="button" className="pb-order-btn" onClick={enterKhansaar}>
          By the Order of Peaky Blinders
        </button>
      </div>

      <nav className="pb-nav">
        <NavLink to="/" end className="pb-brand">
          PEAKY BLINDERS
        </NavLink>
        <div className="pb-nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `pb-nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <DossierPage
              kicker="Small Heath Decree"
              title="Home"
              items={HOME_ITEMS}
              home
            />
          }
        />
        <Route
          path="/shelby-family"
          element={
            <DossierPage
              kicker="Bloodline"
              title="Shelby Family"
              items={SHELBY_FAMILY_ITEMS}
            />
          }
        />
        <Route
          path="/characters"
          element={
            <DossierPage
              kicker="Allies & Rivals"
              title="Characters"
              items={CHARACTER_ITEMS}
            />
          }
        />
        <Route
          path="/gangs"
          element={
            <DossierPage
              kicker="Turf & Syndicates"
              title="Gangs"
              items={GANG_ITEMS}
            />
          }
        />
        <Route
          path="/empire"
          element={
            <DossierPage
              kicker="Shelby Company Ltd."
              title="Empire"
              items={EMPIRE_ITEMS}
            />
          }
        />
        <Route
          path="/locations"
          element={
            <DossierPage
              kicker="Birmingham & Beyond"
              title="Locations"
              items={LOCATION_ITEMS}
            />
          }
        />
        <Route
          path="/seasons"
          element={
            <DossierPage
              kicker="Chapters I–VI"
              title="Seasons"
              items={SEASON_ITEMS}
            />
          }
        />
        <Route
          path="/timeline"
          element={
            <DossierPage
              kicker="1919 — Post-War Era"
              title="Timeline"
              items={TIMELINE_ITEMS}
            />
          }
        />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>

      <footer className="pb-footer">By Order of the Peaky Blinders</footer>
    </BrowserRouter>
  );
}

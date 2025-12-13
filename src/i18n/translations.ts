// Top 10 EU Languages: DE, EN, FR, ES, IT, NL, PL, PT, SV, CS
export type Language = 'de' | 'en' | 'fr' | 'es' | 'it' | 'nl' | 'pl' | 'pt' | 'sv' | 'cs';

export const SUPPORTED_LANGUAGES: Language[] = ['de', 'en', 'fr', 'es', 'it', 'nl', 'pl', 'pt', 'sv', 'cs'];

export const LANGUAGE_NAMES: Record<Language, string> = {
  de: 'Deutsch',
  en: 'English',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  nl: 'Nederlands',
  pl: 'Polski',
  pt: 'Português',
  sv: 'Svenska',
  cs: 'Čeština',
};

export const LANGUAGE_FLAGS: Record<Language, string> = {
  de: '🇩🇪',
  en: '🇬🇧',
  fr: '🇫🇷',
  es: '🇪🇸',
  it: '🇮🇹',
  nl: '🇳🇱',
  pl: '🇵🇱',
  pt: '🇵🇹',
  sv: '🇸🇪',
  cs: '🇨🇿',
};

// EU Country codes type
export type EUCountryCode = 'D' | 'A' | 'B' | 'BG' | 'HR' | 'CY' | 'CZ' | 'DK' | 'EST' | 'FIN' | 'F' | 'GR' | 'H' | 'IRL' | 'I' | 'LV' | 'LT' | 'L' | 'M' | 'NL' | 'PL' | 'P' | 'RO' | 'SK' | 'SLO' | 'E' | 'S';

export interface Translations {
  // Page title
  pageTitle: string;
  
  // Section titles
  configureTitle: string;
  previewTitle: string;
  
  // Labels
  country: string;
  cityCode: string;
  letters: string;
  numbers: string;
  suffix: string;
  state: string;
  city: string;
  plateWidth: string;
  plateStyle: string;
  huYear: string;
  huMonth: string;
  showStatePlakette: string;
  showHUPlakette: string;
  plateText: string;
  fontColor: string;
  backgroundColor: string;
  rightBandText: string;
  
  // Plate widths
  widthStandard: string;
  widthCompact: string;
  
  // Plate styles
  styleNormal: string;
  style3DBlack: string;
  style3DCarbon: string;
  style3DBlackMatte: string;
  style3DCarbonMatte: string;
  
  // Buttons
  exportPNG: string;
  
  // Messages
  exportFailed: string;
  
  // Footer
  wappenAttribution: string;
  
  // Months
  months: string[];
  
  // Country names
  countries: Record<EUCountryCode, string>;
}

const translations: Record<Language, Translations> = {
  de: {
    pageTitle: '🇪🇺 EU Kennzeichen Generator',
    configureTitle: 'Kennzeichen konfigurieren',
    previewTitle: 'Vorschau',
    country: 'Land',
    cityCode: 'Ort',
    letters: 'Buchstaben',
    numbers: 'Zahlen',
    suffix: 'Suffix',
    state: 'Bundesland',
    city: 'Stadt',
    plateWidth: 'Breite',
    plateStyle: 'Stil',
    huYear: 'HU Jahr',
    huMonth: 'HU Monat',
    showStatePlakette: 'Wappen anzeigen',
    showHUPlakette: 'HU-Plakette anzeigen',
    plateText: 'Kennzeichentext',
    fontColor: 'Schriftfarbe',
    backgroundColor: 'Hintergrundfarbe',
    rightBandText: 'Region/Code',
    widthStandard: 'Standard (520mm)',
    widthCompact: 'Kompakt',
    styleNormal: 'Normal (weiß)',
    style3DBlack: '3D Schwarz glänzend',
    style3DCarbon: '3D Carbon glänzend',
    style3DBlackMatte: '3D Schwarz matt',
    style3DCarbonMatte: '3D Carbon matt',
    exportPNG: 'Als PNG exportieren',
    exportFailed: 'Export fehlgeschlagen. Bitte versuche es erneut.',
    wappenAttribution: 'Wappen: Wikimedia Commons (Public Domain / CC)',
    months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    countries: {
      'D': 'Deutschland', 'A': 'Österreich', 'B': 'Belgien', 'BG': 'Bulgarien', 'HR': 'Kroatien',
      'CY': 'Zypern', 'CZ': 'Tschechien', 'DK': 'Dänemark', 'EST': 'Estland', 'FIN': 'Finnland',
      'F': 'Frankreich', 'GR': 'Griechenland', 'H': 'Ungarn', 'IRL': 'Irland', 'I': 'Italien',
      'LV': 'Lettland', 'LT': 'Litauen', 'L': 'Luxemburg', 'M': 'Malta', 'NL': 'Niederlande',
      'PL': 'Polen', 'P': 'Portugal', 'RO': 'Rumänien', 'SK': 'Slowakei', 'SLO': 'Slowenien',
      'E': 'Spanien', 'S': 'Schweden',
    },
  },
  en: {
    pageTitle: '🇪🇺 EU License Plate Generator',
    configureTitle: 'Configure License Plate',
    previewTitle: 'Preview',
    country: 'Country',
    cityCode: 'City Code',
    letters: 'Letters',
    numbers: 'Numbers',
    suffix: 'Suffix',
    state: 'State',
    city: 'City',
    plateWidth: 'Width',
    plateStyle: 'Style',
    huYear: 'Inspection Year',
    huMonth: 'Inspection Month',
    showStatePlakette: 'Show State Emblem',
    showHUPlakette: 'Show Inspection Sticker',
    plateText: 'Plate Text',
    fontColor: 'Font Color',
    backgroundColor: 'Background Color',
    rightBandText: 'Region/Code',
    widthStandard: 'Standard (520mm)',
    widthCompact: 'Compact',
    styleNormal: 'Normal (white)',
    style3DBlack: '3D Black glossy',
    style3DCarbon: '3D Carbon glossy',
    style3DBlackMatte: '3D Black matte',
    style3DCarbonMatte: '3D Carbon matte',
    exportPNG: 'Export as PNG',
    exportFailed: 'Export failed. Please try again.',
    wappenAttribution: 'Emblems: Wikimedia Commons (Public Domain / CC)',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    countries: {
      'D': 'Germany', 'A': 'Austria', 'B': 'Belgium', 'BG': 'Bulgaria', 'HR': 'Croatia',
      'CY': 'Cyprus', 'CZ': 'Czech Republic', 'DK': 'Denmark', 'EST': 'Estonia', 'FIN': 'Finland',
      'F': 'France', 'GR': 'Greece', 'H': 'Hungary', 'IRL': 'Ireland', 'I': 'Italy',
      'LV': 'Latvia', 'LT': 'Lithuania', 'L': 'Luxembourg', 'M': 'Malta', 'NL': 'Netherlands',
      'PL': 'Poland', 'P': 'Portugal', 'RO': 'Romania', 'SK': 'Slovakia', 'SLO': 'Slovenia',
      'E': 'Spain', 'S': 'Sweden',
    },
  },
  fr: {
    pageTitle: '🇪🇺 Générateur de Plaques EU',
    configureTitle: 'Configurer la plaque',
    previewTitle: 'Aperçu',
    country: 'Pays',
    cityCode: 'Code ville',
    letters: 'Lettres',
    numbers: 'Chiffres',
    suffix: 'Suffixe',
    state: 'État',
    city: 'Ville',
    plateWidth: 'Largeur',
    plateStyle: 'Style',
    huYear: 'Année contrôle',
    huMonth: 'Mois contrôle',
    showStatePlakette: 'Afficher emblème',
    showHUPlakette: 'Afficher vignette contrôle',
    plateText: 'Texte plaque',
    fontColor: 'Couleur police',
    backgroundColor: 'Couleur fond',
    rightBandText: 'Région/Code',
    widthStandard: 'Standard (520mm)',
    widthCompact: 'Compact',
    styleNormal: 'Normal (blanc)',
    style3DBlack: '3D Noir brillant',
    style3DCarbon: '3D Carbone brillant',
    style3DBlackMatte: '3D Noir mat',
    style3DCarbonMatte: '3D Carbone mat',
    exportPNG: 'Exporter en PNG',
    exportFailed: 'Échec de l\'export. Veuillez réessayer.',
    wappenAttribution: 'Emblèmes: Wikimedia Commons (Domaine public / CC)',
    months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
    countries: {
      'D': 'Allemagne', 'A': 'Autriche', 'B': 'Belgique', 'BG': 'Bulgarie', 'HR': 'Croatie',
      'CY': 'Chypre', 'CZ': 'Tchéquie', 'DK': 'Danemark', 'EST': 'Estonie', 'FIN': 'Finlande',
      'F': 'France', 'GR': 'Grèce', 'H': 'Hongrie', 'IRL': 'Irlande', 'I': 'Italie',
      'LV': 'Lettonie', 'LT': 'Lituanie', 'L': 'Luxembourg', 'M': 'Malte', 'NL': 'Pays-Bas',
      'PL': 'Pologne', 'P': 'Portugal', 'RO': 'Roumanie', 'SK': 'Slovaquie', 'SLO': 'Slovénie',
      'E': 'Espagne', 'S': 'Suède',
    },
  },
  es: {
    pageTitle: '🇪🇺 Generador de Matrículas EU',
    configureTitle: 'Configurar matrícula',
    previewTitle: 'Vista previa',
    country: 'País',
    cityCode: 'Código ciudad',
    letters: 'Letras',
    numbers: 'Números',
    suffix: 'Sufijo',
    state: 'Estado',
    city: 'Ciudad',
    plateWidth: 'Ancho',
    plateStyle: 'Estilo',
    huYear: 'Año ITV',
    huMonth: 'Mes ITV',
    showStatePlakette: 'Mostrar emblema',
    showHUPlakette: 'Mostrar pegatina ITV',
    plateText: 'Texto matrícula',
    fontColor: 'Color fuente',
    backgroundColor: 'Color fondo',
    rightBandText: 'Región/Código',
    widthStandard: 'Estándar (520mm)',
    widthCompact: 'Compacto',
    styleNormal: 'Normal (blanco)',
    style3DBlack: '3D Negro brillante',
    style3DCarbon: '3D Carbono brillante',
    style3DBlackMatte: '3D Negro mate',
    style3DCarbonMatte: '3D Carbono mate',
    exportPNG: 'Exportar como PNG',
    exportFailed: 'Error al exportar. Por favor, inténtalo de nuevo.',
    wappenAttribution: 'Emblemas: Wikimedia Commons (Dominio público / CC)',
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    countries: {
      'D': 'Alemania', 'A': 'Austria', 'B': 'Bélgica', 'BG': 'Bulgaria', 'HR': 'Croacia',
      'CY': 'Chipre', 'CZ': 'Chequia', 'DK': 'Dinamarca', 'EST': 'Estonia', 'FIN': 'Finlandia',
      'F': 'Francia', 'GR': 'Grecia', 'H': 'Hungría', 'IRL': 'Irlanda', 'I': 'Italia',
      'LV': 'Letonia', 'LT': 'Lituania', 'L': 'Luxemburgo', 'M': 'Malta', 'NL': 'Países Bajos',
      'PL': 'Polonia', 'P': 'Portugal', 'RO': 'Rumanía', 'SK': 'Eslovaquia', 'SLO': 'Eslovenia',
      'E': 'España', 'S': 'Suecia',
    },
  },
  it: {
    pageTitle: '🇪🇺 Generatore Targhe EU',
    configureTitle: 'Configura targa',
    previewTitle: 'Anteprima',
    country: 'Paese',
    cityCode: 'Codice città',
    letters: 'Lettere',
    numbers: 'Numeri',
    suffix: 'Suffisso',
    state: 'Stato',
    city: 'Città',
    plateWidth: 'Larghezza',
    plateStyle: 'Stile',
    huYear: 'Anno revisione',
    huMonth: 'Mese revisione',
    showStatePlakette: 'Mostra stemma',
    showHUPlakette: 'Mostra bollino revisione',
    plateText: 'Testo targa',
    fontColor: 'Colore carattere',
    backgroundColor: 'Colore sfondo',
    rightBandText: 'Regione/Codice',
    widthStandard: 'Standard (520mm)',
    widthCompact: 'Compatto',
    styleNormal: 'Normale (bianco)',
    style3DBlack: '3D Nero lucido',
    style3DCarbon: '3D Carbonio lucido',
    style3DBlackMatte: '3D Nero opaco',
    style3DCarbonMatte: '3D Carbonio opaco',
    exportPNG: 'Esporta come PNG',
    exportFailed: 'Esportazione fallita. Riprova.',
    wappenAttribution: 'Stemmi: Wikimedia Commons (Pubblico dominio / CC)',
    months: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    countries: {
      'D': 'Germania', 'A': 'Austria', 'B': 'Belgio', 'BG': 'Bulgaria', 'HR': 'Croazia',
      'CY': 'Cipro', 'CZ': 'Cechia', 'DK': 'Danimarca', 'EST': 'Estonia', 'FIN': 'Finlandia',
      'F': 'Francia', 'GR': 'Grecia', 'H': 'Ungheria', 'IRL': 'Irlanda', 'I': 'Italia',
      'LV': 'Lettonia', 'LT': 'Lituania', 'L': 'Lussemburgo', 'M': 'Malta', 'NL': 'Paesi Bassi',
      'PL': 'Polonia', 'P': 'Portogallo', 'RO': 'Romania', 'SK': 'Slovacchia', 'SLO': 'Slovenia',
      'E': 'Spagna', 'S': 'Svezia',
    },
  },
  nl: {
    pageTitle: '🇪🇺 EU Kentekenplaat Generator',
    configureTitle: 'Kentekenplaat configureren',
    previewTitle: 'Voorbeeld',
    country: 'Land',
    cityCode: 'Plaatscode',
    letters: 'Letters',
    numbers: 'Cijfers',
    suffix: 'Achtervoegsel',
    state: 'Deelstaat',
    city: 'Stad',
    plateWidth: 'Breedte',
    plateStyle: 'Stijl',
    huYear: 'APK Jaar',
    huMonth: 'APK Maand',
    showStatePlakette: 'Embleem tonen',
    showHUPlakette: 'APK-sticker tonen',
    plateText: 'Kentekentekst',
    fontColor: 'Letterkleur',
    backgroundColor: 'Achtergrondkleur',
    rightBandText: 'Regio/Code',
    widthStandard: 'Standaard (520mm)',
    widthCompact: 'Compact',
    styleNormal: 'Normaal (wit)',
    style3DBlack: '3D Zwart glanzend',
    style3DCarbon: '3D Carbon glanzend',
    style3DBlackMatte: '3D Zwart mat',
    style3DCarbonMatte: '3D Carbon mat',
    exportPNG: 'Exporteren als PNG',
    exportFailed: 'Export mislukt. Probeer het opnieuw.',
    wappenAttribution: 'Emblemen: Wikimedia Commons (Publiek domein / CC)',
    months: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    countries: {
      'D': 'Duitsland', 'A': 'Oostenrijk', 'B': 'België', 'BG': 'Bulgarije', 'HR': 'Kroatië',
      'CY': 'Cyprus', 'CZ': 'Tsjechië', 'DK': 'Denemarken', 'EST': 'Estland', 'FIN': 'Finland',
      'F': 'Frankrijk', 'GR': 'Griekenland', 'H': 'Hongarije', 'IRL': 'Ierland', 'I': 'Italië',
      'LV': 'Letland', 'LT': 'Litouwen', 'L': 'Luxemburg', 'M': 'Malta', 'NL': 'Nederland',
      'PL': 'Polen', 'P': 'Portugal', 'RO': 'Roemenië', 'SK': 'Slowakije', 'SLO': 'Slovenië',
      'E': 'Spanje', 'S': 'Zweden',
    },
  },
  pl: {
    pageTitle: '🇪🇺 Generator Tablic EU',
    configureTitle: 'Konfiguruj tablicę',
    previewTitle: 'Podgląd',
    country: 'Kraj',
    cityCode: 'Kod miasta',
    letters: 'Litery',
    numbers: 'Cyfry',
    suffix: 'Sufiks',
    state: 'Kraj związkowy',
    city: 'Miasto',
    plateWidth: 'Szerokość',
    plateStyle: 'Styl',
    huYear: 'Rok przeglądu',
    huMonth: 'Miesiąc przeglądu',
    showStatePlakette: 'Pokaż godło',
    showHUPlakette: 'Pokaż naklejkę przeglądu',
    plateText: 'Tekst tablicy',
    fontColor: 'Kolor czcionki',
    backgroundColor: 'Kolor tła',
    rightBandText: 'Region/Kod',
    widthStandard: 'Standardowa (520mm)',
    widthCompact: 'Kompaktowa',
    styleNormal: 'Normalna (biała)',
    style3DBlack: '3D Czarna błyszcząca',
    style3DCarbon: '3D Carbon błyszczący',
    style3DBlackMatte: '3D Czarna matowa',
    style3DCarbonMatte: '3D Carbon matowy',
    exportPNG: 'Eksportuj jako PNG',
    exportFailed: 'Eksport nie powiódł się. Spróbuj ponownie.',
    wappenAttribution: 'Godła: Wikimedia Commons (Domena publiczna / CC)',
    months: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
    countries: {
      'D': 'Niemcy', 'A': 'Austria', 'B': 'Belgia', 'BG': 'Bułgaria', 'HR': 'Chorwacja',
      'CY': 'Cypr', 'CZ': 'Czechy', 'DK': 'Dania', 'EST': 'Estonia', 'FIN': 'Finlandia',
      'F': 'Francja', 'GR': 'Grecja', 'H': 'Węgry', 'IRL': 'Irlandia', 'I': 'Włochy',
      'LV': 'Łotwa', 'LT': 'Litwa', 'L': 'Luksemburg', 'M': 'Malta', 'NL': 'Holandia',
      'PL': 'Polska', 'P': 'Portugalia', 'RO': 'Rumunia', 'SK': 'Słowacja', 'SLO': 'Słowenia',
      'E': 'Hiszpania', 'S': 'Szwecja',
    },
  },
  pt: {
    pageTitle: '🇪🇺 Gerador de Matrículas EU',
    configureTitle: 'Configurar matrícula',
    previewTitle: 'Pré-visualização',
    country: 'País',
    cityCode: 'Código cidade',
    letters: 'Letras',
    numbers: 'Números',
    suffix: 'Sufixo',
    state: 'Estado',
    city: 'Cidade',
    plateWidth: 'Largura',
    plateStyle: 'Estilo',
    huYear: 'Ano inspeção',
    huMonth: 'Mês inspeção',
    showStatePlakette: 'Mostrar emblema',
    showHUPlakette: 'Mostrar autocolante inspeção',
    plateText: 'Texto matrícula',
    fontColor: 'Cor da fonte',
    backgroundColor: 'Cor de fundo',
    rightBandText: 'Região/Código',
    widthStandard: 'Padrão (520mm)',
    widthCompact: 'Compacto',
    styleNormal: 'Normal (branco)',
    style3DBlack: '3D Preto brilhante',
    style3DCarbon: '3D Carbono brilhante',
    style3DBlackMatte: '3D Preto mate',
    style3DCarbonMatte: '3D Carbono mate',
    exportPNG: 'Exportar como PNG',
    exportFailed: 'Falha na exportação. Tente novamente.',
    wappenAttribution: 'Emblemas: Wikimedia Commons (Domínio público / CC)',
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    countries: {
      'D': 'Alemanha', 'A': 'Áustria', 'B': 'Bélgica', 'BG': 'Bulgária', 'HR': 'Croácia',
      'CY': 'Chipre', 'CZ': 'Chéquia', 'DK': 'Dinamarca', 'EST': 'Estónia', 'FIN': 'Finlândia',
      'F': 'França', 'GR': 'Grécia', 'H': 'Hungria', 'IRL': 'Irlanda', 'I': 'Itália',
      'LV': 'Letónia', 'LT': 'Lituânia', 'L': 'Luxemburgo', 'M': 'Malta', 'NL': 'Países Baixos',
      'PL': 'Polónia', 'P': 'Portugal', 'RO': 'Roménia', 'SK': 'Eslováquia', 'SLO': 'Eslovénia',
      'E': 'Espanha', 'S': 'Suécia',
    },
  },
  sv: {
    pageTitle: '🇪🇺 EU Registreringsskylt Generator',
    configureTitle: 'Konfigurera skylt',
    previewTitle: 'Förhandsgranskning',
    country: 'Land',
    cityCode: 'Stadskod',
    letters: 'Bokstäver',
    numbers: 'Siffror',
    suffix: 'Suffix',
    state: 'Delstat',
    city: 'Stad',
    plateWidth: 'Bredd',
    plateStyle: 'Stil',
    huYear: 'Besiktningsår',
    huMonth: 'Besiktningsmånad',
    showStatePlakette: 'Visa emblem',
    showHUPlakette: 'Visa besiktningsdekal',
    plateText: 'Skylttext',
    fontColor: 'Textfärg',
    backgroundColor: 'Bakgrundsfärg',
    rightBandText: 'Region/Kod',
    widthStandard: 'Standard (520mm)',
    widthCompact: 'Kompakt',
    styleNormal: 'Normal (vit)',
    style3DBlack: '3D Svart blank',
    style3DCarbon: '3D Kolfiber blank',
    style3DBlackMatte: '3D Svart matt',
    style3DCarbonMatte: '3D Kolfiber matt',
    exportPNG: 'Exportera som PNG',
    exportFailed: 'Export misslyckades. Försök igen.',
    wappenAttribution: 'Emblem: Wikimedia Commons (Public Domain / CC)',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    countries: {
      'D': 'Tyskland', 'A': 'Österrike', 'B': 'Belgien', 'BG': 'Bulgarien', 'HR': 'Kroatien',
      'CY': 'Cypern', 'CZ': 'Tjeckien', 'DK': 'Danmark', 'EST': 'Estland', 'FIN': 'Finland',
      'F': 'Frankrike', 'GR': 'Grekland', 'H': 'Ungern', 'IRL': 'Irland', 'I': 'Italien',
      'LV': 'Lettland', 'LT': 'Litauen', 'L': 'Luxemburg', 'M': 'Malta', 'NL': 'Nederländerna',
      'PL': 'Polen', 'P': 'Portugal', 'RO': 'Rumänien', 'SK': 'Slovakien', 'SLO': 'Slovenien',
      'E': 'Spanien', 'S': 'Sverige',
    },
  },
  cs: {
    pageTitle: '🇪🇺 Generátor SPZ EU',
    configureTitle: 'Konfigurovat SPZ',
    previewTitle: 'Náhled',
    country: 'Země',
    cityCode: 'Kód města',
    letters: 'Písmena',
    numbers: 'Čísla',
    suffix: 'Přípona',
    state: 'Spolková země',
    city: 'Město',
    plateWidth: 'Šířka',
    plateStyle: 'Styl',
    huYear: 'Rok STK',
    huMonth: 'Měsíc STK',
    showStatePlakette: 'Zobrazit znak',
    showHUPlakette: 'Zobrazit nálepku STK',
    plateText: 'Text SPZ',
    fontColor: 'Barva písma',
    backgroundColor: 'Barva pozadí',
    rightBandText: 'Region/Kód',
    widthStandard: 'Standardní (520mm)',
    widthCompact: 'Kompaktní',
    styleNormal: 'Normální (bílá)',
    style3DBlack: '3D Černá lesklá',
    style3DCarbon: '3D Karbon lesklý',
    style3DBlackMatte: '3D Černá matná',
    style3DCarbonMatte: '3D Karbon matný',
    exportPNG: 'Exportovat jako PNG',
    exportFailed: 'Export selhal. Zkuste to znovu.',
    wappenAttribution: 'Znaky: Wikimedia Commons (Public Domain / CC)',
    months: ['Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čvn', 'Čvc', 'Srp', 'Zář', 'Říj', 'Lis', 'Pro'],
    countries: {
      'D': 'Německo', 'A': 'Rakousko', 'B': 'Belgie', 'BG': 'Bulharsko', 'HR': 'Chorvatsko',
      'CY': 'Kypr', 'CZ': 'Česko', 'DK': 'Dánsko', 'EST': 'Estonsko', 'FIN': 'Finsko',
      'F': 'Francie', 'GR': 'Řecko', 'H': 'Maďarsko', 'IRL': 'Irsko', 'I': 'Itálie',
      'LV': 'Lotyšsko', 'LT': 'Litva', 'L': 'Lucembursko', 'M': 'Malta', 'NL': 'Nizozemsko',
      'PL': 'Polsko', 'P': 'Portugalsko', 'RO': 'Rumunsko', 'SK': 'Slovensko', 'SLO': 'Slovinsko',
      'E': 'Španělsko', 'S': 'Švédsko',
    },
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.en;
}

export function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language || (navigator as unknown as { userLanguage?: string }).userLanguage || 'en';
  const shortLang = browserLang.split('-')[0].toLowerCase() as Language;
  
  if (SUPPORTED_LANGUAGES.includes(shortLang)) {
    return shortLang;
  }
  
  return 'en';
}

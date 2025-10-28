export const thesaurus: Record<string, string[]> = {
  pulizie: ['pulizia', 'igienizzazione', 'sanificazione leggera', 'interventi di pulizia professionale', 'servizi di pulizia', 'trattamento igienico'],
  uffici: ['uffici', 'sedi aziendali', 'studi professionali', 'spazi di lavoro', 'ambienti lavorativi', 'sedi direzionali'],
  condomini: ['condomini', 'stabili residenziali', 'palazzi', 'complessi abitativi', 'edifici residenziali'],
  capannoni: ['capannoni', 'stabilimenti', 'impianti produttivi', 'aree industriali', 'siti produttivi'],
  velocità: ['velocità', 'tempi rapidi', 'intervento tempestivo', 'risposta immediata', 'prontezza'],
  qualità: ['qualità', 'standard elevati', 'risultati impeccabili', 'livello professionale', 'eccellenza'],
  professionale: ['professionale', 'specializzato', 'qualificato', 'esperto', 'certificato'],
  garantiamo: ['garantiamo', 'assicuriamo', 'offriamo', 'forniamo', 'mettiamo a disposizione'],
  personale: ['personale', 'operatori', 'team', 'squadra', 'tecnici'],
  servizio: ['servizio', 'prestazione', 'intervento', 'soluzione', 'attività'],
  completo: ['completo', 'totale', 'integrale', 'esaustivo', 'approfondito'],
  esperienza: ['esperienza', 'competenza', 'know-how', 'expertise', 'professionalità consolidata'],
  attenzione: ['attenzione', 'cura', 'accuratezza', 'precisione', 'scrupolosità'],
  ambiente: ['ambiente', 'spazio', 'locale', 'area', 'zona'],
  pulito: ['pulito', 'igienizzato', 'sanificato', 'deterso', 'ordinato'],
  efficace: ['efficace', 'efficiente', 'performante', 'produttivo', 'ottimale'],
  sicurezza: ['sicurezza', 'protezione', 'tutela', 'salvaguardia'],
  certificato: ['certificato', 'attestato', 'conforme', 'regolare', 'a norma'],
  prodotti: ['prodotti', 'detergenti', 'sostanze', 'formulati', 'soluzioni'],
  ecologici: ['ecologici', 'eco-friendly', 'sostenibili', 'a basso impatto', 'green'],
  provincia: ['provincia', 'territorio', 'area', 'zona', 'comprensorio'],
  città: ['città', 'località', 'comune', 'centro urbano', 'centro'],
  zona: ['zona', 'area', 'quartiere', 'settore', 'distretto'],
  azienda: ['azienda', 'impresa', 'società', 'realtà aziendale', 'organizzazione'],
  cliente: ['cliente', 'committente', 'utente', 'fruitore del servizio'],
};

export function applyVariations(text: string, seed: number): string {
  let result = text;
  let variationIndex = seed % 100;

  Object.entries(thesaurus).forEach(([original, variations]) => {
    const regex = new RegExp(`\\b${original}\\b`, 'gi');
    const matches = result.match(regex);

    if (matches) {
      matches.forEach((match, idx) => {
        if ((variationIndex + idx) % 3 === 0) {
          const varIndex = (variationIndex + idx) % variations.length;
          const replacement = variations[varIndex];
          result = result.replace(match, replacement);
        }
      });
    }
  });

  return result;
}

export function getRandomFromArray<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

export function shuffleArray<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = (seed + i) % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

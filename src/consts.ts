export const SITE = {
  name: 'AxioPilot',
  url: 'https://axiopilot.com',
  title: 'AxioPilot · Automatisation pour agences du Québec',
  description:
    "AxioPilot automatise l'accueil des nouveaux clients, le rapport mensuel et les demandes de soumission des agences marketing et web du Québec. Livré en 21 jours, avec vos outils.",
  email: 'kevin@axiopilot.com',
  linkedin: '', // à compléter : URL de la page LinkedIn
  // Lien de l'agenda de réservation Google Agenda. Tant qu'il est vide, les boutons ouvrent un courriel.
  bookingUrl: 'https://calendar.app.google/36aPX9WEMsn4uUhh9',
};

export const bookingHref = SITE.bookingUrl
  || `mailto:${SITE.email}?subject=${encodeURIComponent('Appel découverte AxioPilot')}`;

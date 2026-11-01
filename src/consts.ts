export const SITE = {
  name: 'AxioPilot',
  url: 'https://axiopilot.com',
  title: 'AxioPilot · Automatisation pour agences du Québec',
  description:
    "AxioPilot aide les agences marketing et web du Québec à récupérer les heures perdues en tâches répétitives : accueil des clients, rapports, soumissions, facturation. Livré en 21 jours.",
  email: 'kevin@axiopilot.com',
  linkedin: '', // à compléter : URL de la page LinkedIn
  // Lien de l'agenda de réservation Google Agenda. Tant qu'il est vide, les boutons ouvrent un courriel.
  bookingUrl: 'https://calendar.app.google/36aPX9WEMsn4uUhh9',
};

export const bookingHref = SITE.bookingUrl
  || `mailto:${SITE.email}?subject=${encodeURIComponent('Appel découverte AxioPilot')}`;

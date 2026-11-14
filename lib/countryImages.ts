export const countryImages = {
  "Italy": "/services/italy.jpg",
  "Greece": "/services/greece.jpg",
  "Portugal": "/services/portugal.jpg",
  "Canada": "/services/canada.jpg",
  "United Kingdom": "/services/united-kingdom.jpg",
  "Turkey": "/services/turkey.jpg",
  "Bulgaria": "/services/bulgaria.jpg",
  "Belarus": "/services/belarus.jpg",
  "New Zealand": "/services/new-zealand.jpg",
  "Japan": "/services/japan.jpg",
  "United States": "/services/united-states.jpg",
  "Poland": "/services/poland.jpg"
} as const

export function getCountryImage(country: keyof typeof countryImages) {
  return countryImages[country]
}

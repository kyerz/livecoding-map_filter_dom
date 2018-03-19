const images = [
  { category: 'monuments', src: "photos_Paris/photo1.jpg", alt: "photo1", legend: "Monuments: Angle de la rue de Charras et du Boulevard Haussmann" },
  { category: 'monuments', src: "photos_Paris/photo2.jpg", alt: "photo2", legend: "Monuments: Coucher de soleil en automne" },
  { category: 'monuments', src: "photos_Paris/photo3.jpg", alt: "photo3", legend: "Monuments: Paris est une fête Ernest Hemingway" },
  { category: 'monuments', src: "photos_Paris/photo4.jpg", alt: "photo4", legend: "Monuments: Vue sur la Tour Eiffel" },
  { category: 'monuments', src: "photos_Paris/photo5.jpg", alt: "photo5", legend: "Monuments: Vue panoramique sur Paris" },
  { category: 'monuments', src: "photos_Paris/photo6.jpg", alt: "photo6", legend: "Monuments: La Dame de Fer" },
  { category: 'monuments', src: "photos_Paris/photo7.jpg", alt: "photo7", legend: "Monuments: La Seine et le Pont d'Alexandre III" },
  { category: 'monuments', src: "photos_Paris/photo8.jpg", alt: "photo8", legend: "Monuments: Vue sur Le Louvre et sa Pyramide" },
  { category: 'monuments', src: "photos_Paris/photo9.jpg", alt: "photo9", legend: "Monuments: Rosace de Notre Dame de Paris" },
  { category: 'monuments', src: "photos_Paris/photo10.jpg", alt: "photo10", legend: "Monuments: Les péniches du bord de Seine" },
  { category: 'jardins', src: "photos_Paris/photo11.jpg", alt: "photo11", legend: "Jardins: l'Île de la Cité" },
  { category: 'jardins', src: "photos_Paris/photo12.jpg", alt: "photo12", legend: "Jardins: le Pont Alexandre III" },
  { category: 'jardins', src: "photos_Paris/photo13.jpg", alt: "photo13", legend: "Jardins: Quai de Montebello" },
  { category: 'jardins', src: "photos_Paris/photo14.jpg", alt: "photo14", legend: "Jardins: La Dame de Fer" },
  { category: 'jardins', src: "photos_Paris/photo15.jpg", alt: "photo15", legend: "Jardins: Mairie du 12ème arrondissement" },
  { category: 'jardins', src: "photos_Paris/photo16.jpg", alt: "photo16", legend: "Jardins: l'Île de la Cité" },
  { category: 'jardins', src: "photos_Paris/photo17.jpg", alt: "photo17", legend: "Jardins: Paris de nuit" },
  { category: 'jardins', src: "photos_Paris/photo18.jpg", alt: "photo18", legend: "Jardins: La Conciergerie de l'Île de la Cité" },
  { category: 'jardins', src: "photos_Paris/photo19.jpg", alt: "photo19", legend: "Jardins: Vue sur le Champs de Mars et la Tour Eiffel" },
  { category: 'jardins', src: "photos_Paris/photo20.jpg", alt: "photo20", legend: "Jardins: Le Louvre hypnotique" },
  { category: 'jardins', src: "photos_Paris/photo21.jpg", alt: "photo21", legend: "Jardins: Pont Alexandre III de nuit" },
  { category: 'jardins', src: "photos_Paris/photo22.jpg", alt: "photo22", legend: "Jardins: Pont Alexandre III de jour" },
  { category: 'jardins', src: "photos_Paris/photo23.jpg", alt: "photo23", legend: "Jardins: Ici c'est Paris" },
  { category: 'jardins', src: "photos_Paris/photo24.jpg", alt: "photo24", legend: "Jardins: Avenue Charles de Gaulle menant à la Défense." },
  { category: 'jardins', src: "photos_Paris/photo25.jpg", alt: "photo25", legend: "Jardins: Gargouille de Notre-Dame de Paris" },
  { category: 'jardins', src: "photos_Paris/photo26.jpg", alt: "photo26", legend: "Jardins: Champs de Mars et sa Tour Eiffel" },
  { category: 'jardins', src: "photos_Paris/photo27.jpg", alt: "photo27", legend: "Jardins: Vue intérieur Printemps, boulevard Haussmann" },
  { category: 'jardins', src: "photos_Paris/photo28.jpg", alt: "photo28", legend: "Jardins: Paris est magique" },
  { category: 'pigeons', src: "photos_Paris/photo29.jpg", alt: "photo29", legend: "Pigeons: Arc de Triomphe" },
  { category: 'pigeons', src: "photos_Paris/photo30.jpg", alt: "photo30", legend: "Pigeons: la Grande Roue domine" },
  { category: 'pigeons', src: "photos_Paris/photo31.jpg", alt: "photo31", legend: "Pigeons: Notre Dame de Paris" },
  { category: 'pigeons', src: "photos_Paris/photo32.jpg", alt: "photo32", legend: "Pigeons: Opéra Garnier" },
  { category: 'pigeons', src: "photos_Paris/photo33.jpg", alt: "photo33", legend: "Pigeons: Basilique du Sacré Coeur" },
  { category: 'pigeons', src: "photos_Paris/photo34.jpg", alt: "photo34", legend: "Pigeons: Pont de l'Archevêché, le pont des amoureux" },
  { category: 'pigeons', src: "photos_Paris/photo35.jpg", alt: "photo35", legend: "Pigeons: l'Île de la Cité" },
  { category: 'jardins', src: "photos_Paris/photo36.jpg", alt: "photo36", legend: "Jardins: Jolie rue de Montmartre" },
  { category: 'pigeons', src: "photos_Paris/photo37.jpg", alt: "photo37", legend: "Pigeons: Fontaine de la Concorde, Place de la Concorde" },
  { category: 'pigeons', src: "photos_Paris/photo38.jpg", alt: "photo38", legend: "Pigeons: Le pont Alexandre III et sa vue sur l'Hôtel des Invalides - Musée de l'Armée" },
  { category: 'pigeons', src: "photos_Paris/photo39.jpg", alt: "photo39", legend: "Pigeons: Entrée du Musée du Louvre" },
  { category: 'pigeons', src: "photos_Paris/photo40.jpg", alt: "photo40", legend: "Pigeons: Vue sur l'esplanade du Trocadéro et de la Tour Eiffel" },
  { category: 'pigeons', src: "photos_Paris/photo41.jpg", alt: "photo41", legend: "Pigeons: Détail Tour Eiffel" },
  { category: 'pigeons', src: "photos_Paris/photo42.jpg", alt: "photo42", legend: "Pigeons: Fontaine de la Concorde, Place de la Concorde" },
  { category: 'pigeons', src: "photos_Paris/photo43.jpg", alt: "photo43", legend: "Pigeons: Avenue des Champs Elysée" },
  { category: 'pigeons', src: "photos_Paris/photo44.jpg", alt: "photo44", legend: "Pigeons: Café restaurant Esmeralda, 2 rue Cloître Notre-Dame" },
  { category: 'monuments', src: "photos_Paris/photo45.jpg", alt: "photo45", legend: "Monuments: Au Fournil, boulevard Voltaire" },
  { category: 'pigeons', src: "photos_Paris/photo46.jpg", alt: "photo46", legend: "Pigeons: Vue sur l'île Saint Louis" },
  { category: 'pigeons', src: "photos_Paris/photo47.jpg", alt: "photo47", legend: "Pigeons: Pont Napoléon" },
  { category: 'pigeons', src: "photos_Paris/photo48.jpg", alt: "photo48", legend: "Pigeons: l'Île de la Cité" },
  { category: 'pigeons', src: "photos_Paris/photo49.jpg", alt: "photo49", legend: "Pigeons: Vue panoramique de Paris" },
  { category: 'pigeons', src: "photos_Paris/photo50.jpg", alt: "photo50", legend: "Pigeons: Vue sur la butte Montmartre et son Sacré Coeur" },
  { category: 'pigeons', src: "photos_Paris/photo51.jpg", alt: "photo51", legend: "Pigeons: Notre-Dame de Paris" },
  { category: 'pigeons', src: "photos_Paris/photo52.jpg", alt: "photo52", legend: "Pigeons: Le jardin du Trocadéro et sa Tour Eiffel" },
  { category: 'pigeons', src: "photos_Paris/photo53.jpg", alt: "photo53", legend: "Pigeons: Pont Alexandre III" },
  { category: 'pigeons', src: "photos_Paris/photo54.jpg", alt: "photo54", legend: "Pigeons: Vue panoramique de Paris" },
  { category: 'pigeons', src: "photos_Paris/photo55.jpg", alt: "photo55", legend: "Pigeons: Vue panoramique au-dessus de Notre-Dame de Paris" },
  { category: 'pigeons', src: "photos_Paris/photo56.jpg", alt: "photo56", legend: "Pigeons: Péniche restaurant sur La Seine" },
]

const createImgDiv = img => {
  return `
    <div class="col-xs col-sm-6 col-md-4 col-lg-3">
      <a href="#" class="thumbnail">
      <img src="${img.src}" onclick="oppenDiapo(this.src)" alt="${img.alt}"/></a>
      <p class="legende">${img.legend}</p>
    </div>
  `
}

const imagesContainer = document.getElementById('images')

const generatedImages = images.map(createImgDiv).join("")

imagesContainer.innerHTML = generatedImages.join("")


const selectCategory = event => {
  const catName = event.target.textContent.toLowerCase()
  const filteredImages = images
    .filter(image => image.category === catName)
    .map(createImgDiv)
    .join("")
  imagesContainer.innerHTML = filteredImages
}

const categoryButtons = Array.from(document.getElementsByClassName('category-btn'))
  .forEach(btn => btn.addEventListener('click', selectCategory))


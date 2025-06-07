const temples = [
    //1
  {
    templeName: "Accra Temple",
    location: "John R Lewis, Accra, Ghana",
    dedicated: "30 October 2019",
    area: 11113,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-7148.jpg"
  },
  //2
  {
    templeName: "Accra, Temple",
    location: "Nicole, M, Emmett, Accra, Ghana",
    dedicated: "20, February, 2015",
    area: 11111,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13753.jpg"
  },
  //3
  {
    templeName: "Kumasi Temple",
    location: "Bantama, Ghana",
    dedicated: "2022, April, 23",
    area: 11113,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13754.jpg"
  },
  //4
  {
    templeName: "Kumasi Temple",
    location: "Bantama, Nana Benya, Ghana",
    dedicated: "20, July, 2022",
    area: 11111,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13743.jpg"
  },
  //4
  {
    templeName: "Cape Coast Temple",
    location: "Cape Coast, Aaron Anderson, Ghana",
    dedicated: "19, November, 2010",
    area: 11111,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13754.jpg"
  },
  //5
  {
    templeName: "Accra Temple",
    location: "Accra, John, R. Lewis, Ghana",
    dedicated: "9 January, 2004",
    area: 11110,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13748.jpg"
  },
  //6
  {
    templeName: "Accra Temple",
    location: "Accra,   Paul Moncur, Ghana",
    dedicated: "20, January, 2004",
    area: 11112,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13742.jpg"
  },
  //7
  {
    templeName: "Accra Temple",
    location: "Accra-Dansoman  Kofi Nyan Amoako",
    dedicated: "8, March,2006 ",
    area: 11115,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13745.jpg"
  },
  
];

const container = document.querySelector("#temple-cards");
const filterTitle = document.querySelector("#filter-title");

// display function - nuevo
function displayTemples(list) {
  container.innerHTML = "";
  list.forEach(temple => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" loading="lazy" alt="${temple.templeName} Temple">
    `;
    container.appendChild(card);
  });
}

// aqui cambio tamaños y antiguedad etc.
function filterTemples(criteria) {
  let filtered;
  switch (criteria) {
    case "old":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1999);
      filterTitle.textContent = "Old Temples";
      break;
    case "new":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
      filterTitle.textContent = "New Temples";
      break;
    case "large":
      filtered = temples.filter(t => t.area > 10000);
      filterTitle.textContent = "Large Temples";
      break;
    case "small":
      filtered = temples.filter(t => t.area < 11112);
      filterTitle.textContent = "Small Temples";
      break;
    default:
      filtered = temples;
      filterTitle.textContent = "Home";
  }
  displayTemples(filtered);
}


document.querySelectorAll("nav button").forEach(button =>
  button.addEventListener("click", () => filterTemples(button.dataset.filter))
);

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// nuevo
displayTemples(temples);
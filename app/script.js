console.log('Join The Team')

const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];

// DOM ELEMENTS
const cardImage = document.getElementById('card_img')
const cardTitle = document.getElementById('card_title')
const cardText = document.getElementById('card_text')
const cardInfo = document.getElementById('card_info')
const cardContainer = document.getElementById('card_container')
const addMemberForm = document.getElementById('add-member-form')


// Funzione per creare una card e aggiungerla al DOM
function createCard(member) {
    const cardDiv = document.createElement('div')
    cardDiv.className = 'col-12 col-md-6 col-lg-4'

    const card = document.createElement('div')
    card.className = 'card mb-3 bg-dark'

    const cardRow = document.createElement('div')
    cardRow.className = 'row g-0'

    const cardImgCol = document.createElement('div')
    cardImgCol.className = 'col-4'

    const img = document.createElement('img')
    img.src = member.img
    img.className = 'img-fluid'
    img.alt = `Immagine di ${member.name}`

    const cardBodyCol = document.createElement('div')
    cardBodyCol.className = 'col-8'

    const cardBody = document.createElement('div')
    cardBody.className = 'card-body ms-3'

    const name = document.createElement('h5')
    name.textContent = member.name
    name.className = 'text-white text-uppercase fw-bold pt-3'

    const role = document.createElement('p')
    role.textContent = member.role
    role.className = 'text-white'

    const email = document.createElement('a')
    email.href = `mailto:${member.email}`
    email.textContent = member.email
    email.className = 'text-info'

    cardBody.appendChild(name)
    cardBody.appendChild(role)
    cardBody.appendChild(email)
    cardBodyCol.appendChild(cardBody)
    cardImgCol.appendChild(img)
    cardRow.appendChild(cardImgCol)
    cardRow.appendChild(cardBodyCol)
    card.appendChild(cardRow)
    cardDiv.appendChild(card)
    cardContainer.appendChild(cardDiv)
}

// Creazione delle cards iniziali, con funzione applicata ad ogni i dell'array di oggetti
for (let i = 0; i < teamMembers.length; i++) {
    createCard(teamMembers[i])
}

// Funzione per aggiungere un nuovo membro
function addMember(event) {
    event.preventDefault()
    const newMember = {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        email: document.getElementById('email').value,
        img: document.getElementById('img').value
    }
    teamMembers.push(newMember)  // aggiungo il nuovo membro nell'array di oggetti iniziali
    createCard(newMember)   // applico la funzione per creare la card per il nuovo membro
    addMemberForm.reset()
}

// Evento per l'invio del form
addMemberForm.addEventListener('submit', addMember)
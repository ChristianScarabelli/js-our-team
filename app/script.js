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
const cardContainer = document.getElementById('card-container')
const addMemberForm = document.getElementById('add-member-form')
const cardTemplate = document.getElementById('card-template')

// Funzione per creare e riempire una nuova card
function createCard(member) {
    // Clono il template della card con tutti i suoi figli e classi
    const cardClone = cardTemplate.cloneNode(true)
    cardClone.classList.remove('d-none') // Rendi la card visibile

    // Riempi i contenuti con i dati del membro
    cardClone.querySelector('.card-img').src = member.img;
    cardClone.querySelector('.card-img').alt = `Immagine di ${member.name}`
    cardClone.querySelector('.card-title').textContent = member.name
    cardClone.querySelector('.card-role').textContent = member.role
    cardClone.querySelector('.card-email').textContent = member.email

    // Aggiungi la card clonata al suo contenitore
    cardContainer.appendChild(cardClone)
}

// Crea le card iniziali con la funzione per ogni elemento dell'array di oggetti
teamMembers.forEach(createCard)

// Aggiungi un nuovo membro dal form
function addMember(event) {
    event.preventDefault()
    const newMember = {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        email: document.getElementById('email').value,
        img: document.getElementById('img').value
    }
    teamMembers.push(newMember)

    // Crea e aggiungi la nuova card
    createCard(newMember)
    addMemberForm.reset()
}

// Evento per l'invio del form
addMemberForm.addEventListener('submit', addMember)
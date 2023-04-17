const firebaseConfig = {
  apiKey: 'string',
  authDomain: 'string',
  databaseURL: 'string',
  projectId: 'string',
  storageBucket: 'string',
  messagingSenderId: 'string',
  appId: 'string',
  measurementId: 'string'
}

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

document.addEventListener('mousemove', (event) => {
  database.ref('cursor').set({
    x: event.clientX,
    y: event.clientY
  })
  console.log(`X: ${event.clientX}, Y: ${event.clientY}`)
})

const cursor = document.createElement('div')
cursor.classList.add('cursor')
document.body.appendChild(cursor)

database.ref('cursor').on('value', (snapshot) => {
  const position = snapshot.val()
  cursor.style.left = `${position.x}px`
  cursor.style.top = `${position.y}px`
})

const firebaseConfig = {
  apiKey: 'AIzaSyBZNgG7GfyOWXRLD6p5PLEcTxqMOBWG84E',
  authDomain: 'test-a588a.firebaseapp.com',
  // databaseURL: 'https://test-a588a-default-rtdb.firebaseio.com',
  projectId: 'test-a588a',
  storageBucket: 'test-a588a.appspot.com',
  messagingSenderId: '329169784968',
  appId: '1:329169784968:web:baee7b340209db69588f3d',
  measurementId: 'G-ZY9GNQC48Y'
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

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Create a reference to the Realtime Database
const database = firebase.database()

// Listen to mouse movement and write data to the database
document.addEventListener('mousemove', (event) => {
  database.ref('cursor').set({
    x: event.clientX,
    y: event.clientY
  })
  // Log the mouse coordinates to the console
  console.log(`X: ${event.clientX}, Y: ${event.clientY}`)
})

// Create a dot (cursor) and add it to the HTML
const cursor = document.createElement('div')
cursor.classList.add('cursor')
document.body.appendChild(cursor)

// Retrieve the cursor position from the Realtime Database and update the dot's style
database.ref('cursor').on('value', (snapshot) => {
  const position = snapshot.val()
  cursor.style.left = `${position.x}px`
  cursor.style.top = `${position.y}px`
})

// // Firebase SDKをインポートします
import firebase from "firebase/app";
import "firebase/database";

// // Firebaseの設定を追加します
// const firebaseConfig = {
//     apiKey: "your-api-key",
//     authDomain: "your-auth-domain",
//     databaseURL: "your-database-url",
//     projectId: "your-project-id",
//     storageBucket: "your-storage-bucket",
//     messagingSenderId: "your-messaging-sender-id",
//     appId: "your-app-id",
// };

// // Firebaseを初期化します
// firebase.initializeApp(firebaseConfig);
// const database = firebase.database();

// const draggable = document.getElementById("draggable");
// let offsetX, offsetY;

// draggable.addEventListener("mousedown", (e) => {
//     offsetX = e.clientX - parseFloat(draggable.style.left || 0);
//     offsetY = e.clientY - parseFloat(draggable.style.top || 0);
//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseup", onMouseUp);
// });

// function onMouseMove(e) {
//     e.preventDefault();
//     const x = e.clientX - offsetX;
//     const y = e.clientY - offsetY;

//     draggable.style.left = `${x}px`;
//     draggable.style.top = `${y}px`;

//     // 座標をFirebase Realtime Databaseに送信
//     database.ref("coordinates").set({ x, y });
// }

// function onMouseUp() {
//     document.removeEventListener("mousemove", onMouseMove);
//     document.removeEventListener("mouseup", onMouseUp);
// }

// // 座標をFirebase Realtime Databaseから受信してオブジェクトの位置を更新
// database.ref("coordinates").on("value", (snapshot) => {
//     const { x, y } = snapshot.val();
//     draggable.style.left = `${x}px`;
//     draggable.style.top = `${y}px`;
// });


const draggable = document.getElementById("draggable");
let offsetX, offsetY;

const ws = new WebSocket("ws://localhost:8080");

draggable.addEventListener("mousedown", (e) => {
  offsetX = e.clientX - parseFloat(draggable.style.left || 0);
  offsetY = e.clientY - parseFloat(draggable.style.top || 0);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

function onMouseMove(e) {
  e.preventDefault();
  const x = e.clientX - offsetX;
  const y = e.clientY - offsetY;

  draggable.style.left = `${x}px`;
  draggable.style.top = `${y}px`;

  ws.send(JSON.stringify({ x, y }));
}

function onMouseUp() {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

ws.addEventListener("message", (e) => {
  const { x, y } = JSON.parse(e.data);
  draggable.style.left = `${x}px`;
  draggable.style.top = `${y}px`;
});

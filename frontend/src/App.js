import React from "react";
import MapComponent from "./Map";

export default function App() {
    return (
        <MapComponent />
    )
}

// import "./styles.css"
// import Router from "./Router"
// import RandomPage from "./pages/RandomPage";
// import MainPage from "./pages/MainPage";
//
// export default function App() {
//     const routes = {
//         "/": MainPage,
//         "/random": RandomPage,
//         "*": () => <div>404 Page not found</div>
//     }
//
//     return (
//         <Router routes={routes}></Router>
//     );
// }




// import L from 'leaflet';
// import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
//
// // 1. Ссылка на ваше изображение-карту
//
// // 2. Координаты углов изображения (нижний левый, верхний правый).
// //    Если реальные координаты не важны, просто задаем условную сетку.
// const imageBounds = [
//   [0, 0],     // Юго-западный угол (широта, долгота) - левый нижний
//   [100, 100]  // Северо-восточный угол - правый верхний
// ];
//
// function CustomMap() {
//   return (
//       <MapContainer
//           // Центр карты — середина нашей условной сетки
//           center={[50, 50]}
//           zoom={5}
//           style={{ height: '600px', width: '100%' }}
//           // Важно: отключаем привязку к реальным координатам, если нужно
//           crs={L.CRS.Simple}
//       >
//         {/* Накладываем изображение на указанные границы */}
//         <ImageOverlay
//             url={imageUrl}
//             bounds={imageBounds}
//             // Опционально: добавляем прозрачность или подпись
//             opacity={1}
//             attribution="Схема кампуса"
//         />
//
//         {/* Можно добавлять маркеры в выбранных вами координатах */}
//         <Marker position={[30, 30]}>
//           <Popup>Корпус А (библиотека)</Popup>
//         </Marker>
//         <Marker position={[70, 70]}>
//           <Popup>Корпус Б (столовая)</Popup>
//         </Marker>
//       </MapContainer>
//   );
// }
//
// export default CustomMap;
//
//
//
//
// // import logo from './logo.svg';
// // import './App.css';
// //
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }
// //
// // export default App;

// import React, { useState } from 'react'

// export default () => {
//   const [sidebar1Open, setSidebar1Open] = useState(false)
//   const [sidebar2Open, setSidebar2Open] = useState(false)
//   const [sidebar3Open, setSidebar3Open] = useState(false)

//   return (
//     <div className="flex flex-col md:flex-row h-screen relative">
//       <div className="md:w-1/3 p-4 relative border">
//         <button
//           className="absolute top-0 right-0"
//           onClick={() => setSidebar1Open(!sidebar1Open)}
//         >
//           Abrir Sidebar
//         </button>
//         {sidebar1Open && (
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-10"></div>
//         )}
//         <div
//           className={`absolute top-0 right-0 bottom-0 md:left-auto bg-gray-500 bg-opacity-25 transition-all duration-300 z-20 ${sidebar1Open ? 'w-2/5' : 'w-0'}`}
//         >
//           {sidebar1Open && (
//             <div className="h-full bg-white p-4 rounded-md">
//               <div>Sidebar 1</div>
//               <ul>
//                 <li>Opción 1</li>
//                 <li>Opción 2</li>
//                 <li>Opción 3</li>
//               </ul>
//               <button onClick={() => setSidebar1Open(false)}>Cerrar</button>
//             </div>
//           )}
//         </div>
//         Contenido de la columna 1
//       </div>

//       <div className="md:w-1/3 p-4 relative border">
//         <button
//           className="absolute top-0 right-0"
//           onClick={() => setSidebar2Open(!sidebar2Open)}
//         >
//           Abrir Sidebar
//         </button>
//         {sidebar2Open && (
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-10"></div>
//         )}
//         <div
//           className={`absolute top-0 right-0 bottom-0 md:left-auto bg-gray-500 bg-opacity-25 transition-all duration-300 z-20 ${sidebar2Open ? 'w-2/5' : 'w-0'}`}
//         >
//           {sidebar2Open && (
//             <div className="h-full bg-white p-4 rounded-md">
//               <div>Sidebar 2</div>
//               <ul>
//                 <li>Opción A</li>
//                 <li>Opción B</li>
//                 <li>Opción C</li>
//               </ul>
//               <button onClick={() => setSidebar2Open(false)}>Cerrar</button>
//             </div>
//           )}
//         </div>
//         Contenido de la columna 2
//       </div>

//       <div className="md:w-1/3 p-4 relative border">
//         <button
//           className="absolute top-0 right-0"
//           onClick={() => setSidebar3Open(!sidebar3Open)}
//         >
//           Abrir Sidebar
//         </button>
//         {sidebar3Open && (
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-10"></div>
//         )}
//         <div
//           className={`absolute top-0 right-0 bottom-0 md:left-auto bg-gray-500 bg-opacity-25 transition-all duration-300 z-20 ${sidebar3Open ? 'w-2/5' : 'w-0'}`}
//         >
//           {sidebar3Open && (
//             <div className="h-full bg-white p-4 rounded-md">
//               <div>Sidebar 3</div>
//               <ul>
//                 <li>Opción X</li>
//                 <li>Opción Y</li>
//                 <li>Opción Z</li>
//               </ul>
//               <button onClick={() => setSidebar3Open(false)}>Cerrar</button>
//             </div>
//           )}
//         </div>
//         Contenido de la columna 3
//       </div>
//     </div>
//   )
// }

// import React, { useEffect, useRef, useState } from 'react'
// import "./Title.css"
// // import cards_data from "../../../assets/cards/Cards_data.js"
// import { Link } from 'react-router-dom';




// function TitleCards({ title, category = "now_playing" }) {
//   const [apiData, setApiData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const cardsRef = useRef();

//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjI3MDRjNzg2MGZlZmI2NDBkYjk3OGU1ZTlkNTc0NCIsIm5iZiI6MTc1MjQ3ODc0OC4zNTIsInN1YiI6IjY4NzRiNDFjMjc1YmI0NmVlZTZlYTg5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q-S0x7CYe_FgZ8LNuBeyjACjt5zjqmEXevefQOmfmME'
//     }
//   };

//   const handleWheel = (event) => {
//   if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
//     event.preventDefault();
//     if (cardsRef.current) {
//       cardsRef.current.scrollLeft += event.deltaY;
//     }
//   }
// };


//   useEffect(() => {
//           setApiData(data);
//           setIsLoading(false);


//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         const randomPage = Math.floor(Math.random() * 5) + 1;
//         const response = await fetch(
//   `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${randomPage}`,
//   options
// );
        
//         if (!response.ok) throw new Error('Network error');
        
//         const data = await response.json();
//         console.log(category, data.results);
//         setApiData(data.results || []);
//       } catch (err) {
//         setError(err.message);
//         console.error("Fetch error:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();

//     const currentRef = cardsRef.current;
//     currentRef?.addEventListener('wheel', handleWheel);

//     return () => {
//       currentRef?.removeEventListener('wheel', handleWheel);
//     };
//   }, [category]);

//   if (isLoading) return <div className="loading">Loading...</div>;
//   if (error) return <div className="error">Error: {error}</div>;
//   if (!apiData.length) return <div>No data found</div>;

//   return (
//     <div className='title-card'>
//       <h2>{title || 'Popular on Netflix'}</h2>
//       <div className="card-list" ref={cardsRef}>
//         {apiData.map((card) => (
//           <Link to={`/player/${card.id}`} className="card" key={card.id}>
//             <div className="card-image-container">
//               <img
//                 src={
//                   card.backdrop_path
//                     ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
//                     : 'https://via.placeholder.com/500x281?text=No+Image'
//                 }
//                 alt={card.title}
//                 loading="lazy"
//               />
//             </div>
//             <p>{card.title || card.original_title}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TitleCards;
















import React, { useEffect, useRef, useState } from 'react';
import './Title.css';
import { Link } from 'react-router-dom';



// import React, { useEffect, useRef, useState } from 'react'
// import "./Title.css"
// import { Link } from 'react-router-dom';




// function TitleCards({ title, category = "now_playing" }) {
//   const [apiData, setApiData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const cardsRef = useRef();

//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjI3MDRjNzg2MGZlZmI2NDBkYjk3OGU1ZTlkNTc0NCIsIm5iZiI6MTc1MjQ3ODc0OC4zNTIsInN1YiI6IjY4NzRiNDFjMjc1YmI0NmVlZTZlYTg5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q-S0x7CYe_FgZ8LNuBeyjACjt5zjqmEXevefQOmfmME'
//     }
//   };

//   const handleWheel = (event) => {
//     if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
//       event.preventDefault();
//       if (cardsRef.current) {
//         cardsRef.current.scrollLeft += event.deltaY;
//       }
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         const randomPage = Math.floor(Math.random() * 5) + 1;
//         const response = await fetch(
//           `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${randomPage}`,
//           options
//         );
        
//         if (!response.ok) throw new Error('Network error');
        
//         const data = await response.json();
//         setApiData(data.results || []);
//       } catch (err) {
//         setError(err.message);
//         console.error("Fetch error:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();

//     const currentRef = cardsRef.current;
//     currentRef?.addEventListener('wheel', handleWheel);

//     return () => {
//       currentRef?.removeEventListener('wheel', handleWheel);
//     };
//   }, [category]);

//   if (isLoading) return <div className="loading">Loading...</div>;
//   if (error) return <div className="error">Error: {error}</div>;
//   if (!apiData.length) return <div>No data found</div>;

//   const type = card.media_type || "movie"; // fallback to 'movie'
//   return (
//     <div className='title-card'>
//       <h2>{title || 'Popular on Netflix'}</h2>
//       <div className="card-list" ref={cardsRef}>
//         // Change the Link component to include media type
// {apiData.map((card) => (
//   // <Link to={`/player/movie/${card.id}`} className="card" key={card.id}>
// <Link to={`/player/${type}/${card.id}`} className="card" key={card.id}>

//     <div className="card-image-container">
//       <img
//         src={
//           card.backdrop_path
//             ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
//             : 'https://via.placeholder.com/500x281?text=No+Image'
//         }
//         alt={card.title}
//         loading="lazy"
//       />
//     </div>
//     <p>{card.title || card.original_title}</p>
//   </Link>
// ))}
//       </div>
//     </div>
//   );
// }

// export default TitleCards;












// import React, { useEffect, useRef, useState } from 'react';
// import './Title.css';
// import { Link } from 'react-router-dom';

// function TitleCards({ title, category = 'now_playing' }) {
//   const [apiData, setApiData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const cardsRef = useRef();

//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjI3MDRjNzg2MGZlZmI2NDBkYjk3OGU1ZTlkNTc0NCIsIm5iZiI6MTc1MjQ3ODc0OC4zNTIsInN1YiI6IjY4NzRiNDFjMjc1YmI0NmVlZTZlYTg5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q-S0x7CYe_FgZ8LNuBeyjACjt5zjqmEXevefQOmfmME',
//     },
//   };

//   const handleWheel = (event) => {
//     if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
//       event.preventDefault();
//       if (cardsRef.current) {
//         cardsRef.current.scrollLeft += event.deltaY;
//       }
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         const randomPage = Math.floor(Math.random() * 5) + 1;
//         const response = await fetch(
//           `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${randomPage}`,
//           options
//         );

//         if (!response.ok) throw new Error('Network error');

//         const data = await response.json();
//         setApiData(data.results || []);
//       } catch (err) {
//         setError(err.message);
//         console.error('Fetch error:', err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();

//     const currentRef = cardsRef.current;
//     currentRef?.addEventListener('wheel', handleWheel);
//     return () => {
//       currentRef?.removeEventListener('wheel', handleWheel);
//     };
//   }, [category]);

//   if (isLoading) return <div className="loading">Loading...</div>;
//   if (error) return <div className="error">Error: {error}</div>;
//   if (!apiData.length) return <div>No data found</div>;

//   return (
//     <div className="title-card">
//       <h2>{title || 'Popular on Netflix'}</h2>
//       <div className="card-list" ref={cardsRef}>
//         {apiData.map((card) => (
//           <Link to={`/player/movie/${card.id}`} className="card" key={card.id}>
//             {console.log("Navigating to:", `/player/movie/${card.id}`)
// }
//             <div className="card-image-container">
//               <img
//                 src={
//                   card.backdrop_path
//                     ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
//                     : 'https://via.placeholder.com/500x281?text=No+Image'
//                 }
//                 alt={card.title}
//                 loading="lazy"
//               />
//             </div>
//             <p>{card.title || card.original_title}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TitleCards;































// function TitleCards({ title, category = 'now_playing', data = null }) {
//   const [apiData, setApiData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const cardsRef = useRef();

//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjI3MDRjNzg2MGZlZmI2NDBkYjk3OGU1ZTlkNTc0NCIsIm5iZiI6MTc1MjQ3ODc0OC4zNTIsInN1YiI6IjY4NzRiNDFjMjc1YmI0NmVlZTZlYTg5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q-S0x7CYe_FgZ8LNuBeyjACjt5zjqmEXevefQOmfmME'
//     }
//   };

//   const handleWheel = (event) => {
//     if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
//       event.preventDefault();
//       if (cardsRef.current) {
//         cardsRef.current.scrollLeft += event.deltaY;
//       }
//     }
//   };

//   useEffect(() => {
//     if (data) {
//       // External data from search, no need to fetch
//       setApiData(data);
//       setIsLoading(false);
//       return;
//     }

//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         const randomPage = Math.floor(Math.random() * 5) + 1;
//         const response = await fetch(
//           `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${randomPage}`,
//           options
//         );

//         if (!response.ok) throw new Error('Network error');

//         const result = await response.json();
//         setApiData(result.results || []);
//       } catch (err) {
//         setError(err.message);
//         console.error('Fetch error:', err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();

//     const currentRef = cardsRef.current;
//     currentRef?.addEventListener('wheel', handleWheel);

//     return () => {
//       currentRef?.removeEventListener('wheel', handleWheel);
//     };
//   }, [category, data]);

//   if (isLoading) return <div className="loading">Loading...</div>;
//   if (error) return <div className="error">Error: {error}</div>;
//   if (!apiData.length) return <div>No data found</div>;

//   return (
//     <div className="title-card">
//       <h2>{title || 'Popular on Netflix'}</h2>
//       <div className="card-list" ref={cardsRef}>
//         {apiData.map((card) => (
//           <Link to={`/player/${card.id}`} className="card" key={card.id}>
//             <div className="card-image-container">
//               <img
//                 src={
//                   card.backdrop_path
//                     ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
//                     : 'https://via.placeholder.com/500x281?text=No+Image'
//                 }
//                 alt={card.title}
//                 loading="lazy"
//               />
//             </div>
//             <p>{card.title || card.original_title}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TitleCards;

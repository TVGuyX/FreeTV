// database.js
const contentDatabase = {
    movies: [
        {
            id: 1,
            title: "Movie Title 1",
            description: "A brief description of Movie Title 1.",
            trailer: "trailer-url.mp4",
            image: "movie-image1.jpg",
            recommended: [2, 3], // Array of recommended movie/show IDs
        },
        {
            id: 2,
            title: "Movie Title 2",
            description: "A brief description of Movie Title 2.",
            trailer: "trailer-url.mp4",
            image: "movie-image2.jpg",
            recommended: [1, 3],
        },
    ],
    tvShows: [
        {
            id: 1,
            title: "TV Show Title 1",
            description: "A brief description of TV Show Title 1.",
            seasons: 3,
            image: "tvshow-image1.jpg",
            recommended: [2, 3], // Array of recommended show/movie IDs
        },
        {
            id: 2,
            title: "TV Show Title 2",
            description: "A brief description of TV Show Title 2.",
            seasons: 2,
            image: "tvshow-image2.jpg",
            recommended: [1, 3],
        },
    ],
    games: [
        {
            id: 1,
            title: "Game Title 1",
            description: "A brief description of Game Title 1.",
            platform: "PC",
            image: "game-image1.jpg",
        },
        // Add more games here
    ],
    // Add music, books, apps, operating systems, and cheating tools similarly
};

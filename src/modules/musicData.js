const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '29d7210859msh74cbedb9b3a87e2p1df03ejsnda0ebe859a2c',
    'x-rapidapi-host': 'spotify23.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export const sortSongsForPopularity = () => {
    const data = result
    const sortedSongs = data.tracks
    sortedSongs.sort((a, b) => b.popularity - a.popularity)
    return sortedSongs
}

export const releaseYear = (data) => {
    const releaseDateFull = data.album.release_date
    const year = new Date(releaseDateFull).getFullYear()
    return year
}
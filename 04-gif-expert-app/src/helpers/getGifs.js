export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=evJEmkBr0FC0Hayjp9CrcjYtccVy4lIH&q=${category}&limit=10`
    const respuesta = await fetch(url);
    const {data } = await respuesta.json();// el = [] es solo para tener el linter de que es un array
    
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}
class Photos {

  async getPhotos(){
    // return []
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=3');
    const photos = await res.json();
    return photos;
  }
}

export default Photos;

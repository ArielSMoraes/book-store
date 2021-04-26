export type Book = {
  id: string,
  volumeInfo: {
    title: string,
    imageLinks: {
      smallThumbnail: string,
      thumbnail: string
    }
  },
  categories: Array<string>
}

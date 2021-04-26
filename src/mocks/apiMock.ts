import { Book } from '../types/book'

export function apiResponseMock(count: number) {
  const items = []
  for (let index = 0; index < count; index++) {
    items.push(bookMock(`id-${index}`))
  }

  return {
    items,
    kind: "books#volumes",
    totalItems: 1445
  }
}

export function bookMock(id: string): Book {
  return {
    categories: ['some category'],
    id,
    volumeInfo: {
      "imageLinks": {
        "smallThumbnail": `smallthumbOf${id}`,
        "thumbnail": `thumbOf${id}`
      },
      "title": `Title of ${id}`
    }
  }
}

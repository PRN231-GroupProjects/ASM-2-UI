export type PaginatedItems<T> = {
  items: T[];
  totalCount: number;
  page: number;
  size: number;
  totalPages: number;
  hasNextPage: number;
  hasPrevPage: number;
};

export type Author = {
  lastName: string,
  firstName: string,
  phone: string,
  address: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  bookAuthors: Author[],
  id: number
}

export type Publisher = {
  name: string,
  city: string,
  state: string,
  country: string,
  users: [],
  books: [],
  id: number
}

export type Book = {
  title: string,
  type: string,
  publisherId: number,
  price: number,
  advance: number,
  royalty: number,
  ytdSales: number,
  notes: string,
  publishedDate: Date,
  publisher: Publisher,
  id: 2
}


export type UpdatePublisher = {
    name: string;
    city: string;
    state: string;
    country: string;
}

export type UpdateAuthor = {
    lastName: string;
    firstName: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    email: string;
}

export type UpdateBook = {
    title: string,
    type: string,
    publisherId: number,
    price: number,
    advance: number,
    royalty: number,
    ytdSales: number,
    notes: string,
    publishedDate: string,
    authorIds: number[]
}
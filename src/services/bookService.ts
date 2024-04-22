import { UpdateBook } from "../types/request"
import { Book, PaginatedItems } from "../types/response"
import { http } from "../utils/http"

export const getBook = () => {
    return http.get<PaginatedItems<Book>>('/api/book')
}

export const getBookDetail = (id: string) => {
    return http.get<Book>(`/api/book/${id}`)
}

export const updateBookDetail = (id: string, data: UpdateBook) => {
    return http.put<Book>(`/api/book/${id}`, data)
}

export const createBookDetail = (data: UpdateBook) => {
    return http.post<Book>(`/api/book`, data)
}

export const deleteBookDetail = (id: string) => {
    return http.delete<Book>(`/api/book/${id}`, null)
}
import { Book, PaginatedItems } from "../types/response"
import { http } from "../utils/http"

export const getBook = () => {
    return http.get<PaginatedItems<Book>>('/api/book')
}
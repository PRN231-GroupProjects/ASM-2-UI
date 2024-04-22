import { Author, PaginatedItems } from "../types/response";
import { http } from "../utils/http"


export const getAuthor = () => {
    return http.get<PaginatedItems<Author>>('/api/author');
}
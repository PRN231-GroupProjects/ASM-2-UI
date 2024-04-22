import { UpdateAuthor } from "../types/request";
import { Author, PaginatedItems } from "../types/response";
import { http } from "../utils/http"


export const getAuthor = () => {
    return http.get<PaginatedItems<Author>>('/api/author');
}

export const getAuthorDetail = (id: string) => {
    return http.get<Author>(`/api/author/${id}`);
}

export const updateAuthorDetail = (id: string, data: UpdateAuthor) => {
    return http.put<Author>(`/api/author/${id}`, data);
}

export const createAuthorDetail = (data: UpdateAuthor) => {
    return http.post<Author>(`/api/author`, data);
}

export const deleteAuthorDetail = (id: string) => {
    return http.delete<Author>(`/api/author/${id}`, null);
}
import { UpdatePublisher } from "../types/request";
import { PaginatedItems, Publisher } from "../types/response";
import { http } from "../utils/http"

export const getPublisher = () => {
    return http.get<PaginatedItems<Publisher>>('/api/publisher');
}

export const getPublisherDetail = (id: string) => {
    return http.get<Publisher>(`/api/publisher/${id}`);
}

export const updatePublisherDetail = (id: string, data: UpdatePublisher) => {
    return http.put<Publisher>(`/api/publisher/${id}`, data);
}

export const createPublisherDetail = (data: UpdatePublisher) => {
    return http.post<Publisher>(`/api/publisher`, data);
}

export const deletePublisherDetail = (id: string) => {
    return http.delete<Publisher>(`/api/publisher/${id}`, null);
}
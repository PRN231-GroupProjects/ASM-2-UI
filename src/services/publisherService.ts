import { PaginatedItems, Publisher } from "../types/response";
import { http } from "../utils/http"

export const getPublisher = () => {
    return http.get<PaginatedItems<Publisher>>('/api/publisher');
}
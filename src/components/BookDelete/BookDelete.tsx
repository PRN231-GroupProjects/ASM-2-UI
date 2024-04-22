import { useNavigate } from "react-router-dom";
import { deleteBookDetail } from "../../services/bookService";

export const BookDelete = ({ id }: { id: string }) => {

    const navigate = useNavigate()

    const handleDelete = async () => {
        const res = await deleteBookDetail(id)
        if (res.data) {
            navigate(0)
        }
    }

    return (
        <>
            <button className="text-[#f93c65]" onClick={handleDelete}>Delete</button>
        </>
    );
}
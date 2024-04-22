import { useNavigate } from "react-router-dom";
import { deleteAuthorDetail } from "../../services/authorService";

export const AuthorDelete = ({ id }: { id: string }) => {

    const navigate = useNavigate()

    const handleDelete = async () => {
        const res = await deleteAuthorDetail(id)
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
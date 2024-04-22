import { useNavigate } from "react-router-dom";
import { deletePublisherDetail } from "../../services/publisherService";

export const PublisherDelete = ({ id }: { id: string }) => {

    const navigate = useNavigate()

    const handleDelete = async () => {
        const res = await deletePublisherDetail(id)
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
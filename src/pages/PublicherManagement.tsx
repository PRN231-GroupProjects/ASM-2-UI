import { useEffect, useState } from "react";
import { Publisher } from "../types/response";
import { getPublisher } from "../services/publisherService";
import Layout from "../layout";
import PublisherTable from "../components/PublisherTable/PublisherTable";

const PublicherManagement = () => {
    const [author, setAuthor] = useState<Publisher[]>([]);

    useEffect(() => {
        const getAuth = async () => {
            const { data } = await getPublisher();
            setAuthor(data?.items ?? []);
        }
        getAuth();
    }, [])

    return (
        <Layout>
            <div className="">
                <PublisherTable data={author} />
            </div>
        </Layout>
    );
}

export default PublicherManagement;
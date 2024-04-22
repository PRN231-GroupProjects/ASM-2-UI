import { useEffect, useState } from "react";
import { Author } from '../types/response'
import { getAuthor } from "../services/authorService";
import Layout from "../layout";
import AuthorTable from "../components/AuthorTable/AuthorTable";

export const AuthorManagement = () => {

    const [author, setAuthor] = useState<Author[]>([]);

    useEffect(() => {
        const getAuth = async () => {
            const { data } = await getAuthor();
            setAuthor(data?.items ?? []);
        }
        getAuth();
    }, [])


    return (
        <Layout>
            <div className="">
                <AuthorTable data={author} />
            </div>
        </Layout>
    );
}
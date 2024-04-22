import { useEffect, useState } from "react";
import { BookTable } from "../components/BookTable/BookTable";
import Layout from "../layout";
import { getBook } from "../services/bookService";
import { Book } from "../types/response";

export const BookManagement = () => {

    const [author, setAuthor] = useState<Book[]>([]);

    useEffect(() => {
        const getAuth = async () => {
            const { data } = await getBook();
            setAuthor(data?.items ?? []);
        }
        getAuth();
    }, [])


    return (
        <Layout>
            <div className="">
                <BookTable data={author} />
            </div>
        </Layout>
    );
}
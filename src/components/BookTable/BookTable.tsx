import { Book } from "../../types/response";
import Table from "../Table";


const columns = [
    {
        name: "Title",
        selector: (row: any) => `${row.title}`,
        sortable: true,
    },
    {
        name: "Publisher",
        selector: (row: any) => row.publisher.name,
        sortable: true,
    },
    {
        name: "Type",
        selector: (row: any) => row.type,
        sortable: true,
    },
    {
        name: "Price",
        selector: (row: any) => row.price,
        sortable: true,
    },
    {
        name: "Published Date",
        selector: (row: any) => { const date = new Date(row.publishedDate); return date.toLocaleString() },
        sortable: true,
    },
    {
        name: "Action",
        selector: (row: any) => (
            <div id={row.id} className="flex items-center space-x-2">
                <button className="text-[#00B69B]">View</button>
                <button className="text-[#f93c65]">Delete</button>
            </div>
        ),
    }
];

type AuthorTableProps = {
    data: Book[];
}

export const BookTable = (AuthorTableProps: AuthorTableProps) => {
    return (
        <div className="md:w-[95%] w-[80%] bg-white shadow-sm rounded-xl mt-10 px-5 py-4 mb-8">
            <div className="flex w-full items-center justify-between mb-6">
                <span className="font-bold text-[#202224] text-[24px]">Book</span>
            </div>
            <Table columns={columns} data={AuthorTableProps?.data ?? []} />
        </div>
    );
}

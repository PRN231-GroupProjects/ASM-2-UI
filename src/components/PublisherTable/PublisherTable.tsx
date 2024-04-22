import { Publisher } from "../../types/response";
import Table from "../Table";

const columns = [
    {
        name: "Name",
        selector: (row: any) => `${row.name}`,
        sortable: true,
    },
    {
        name: "City",
        selector: (row: any) => row.city,
        sortable: true,
    },
    {
        name: "Country",
        selector: (row: any) => row.country,
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
    data: Publisher[];
}

const PublisherTable = (AuthorTableProps: AuthorTableProps) => {
    return (
        <div className="md:w-[95%] w-[80%] bg-white shadow-sm rounded-xl mt-10 px-5 py-4 mb-8">
            <div className="flex w-full items-center justify-between mb-6">
                <span className="font-bold text-[#202224] text-[24px]">Publisher</span>
            </div>
            <Table columns={columns} data={AuthorTableProps?.data ?? []} />
        </div>
    );
};

export default PublisherTable;

import { Author } from "../../types/response";
import { AuthorAdd } from "../AuthorAdd/AuthorAdd";
import { AuthorDelete } from "../AuthorDelete/AuthorDelete";
import { AuthorUpdate } from "../AuthorUpdate/AuthorUpdate";
import Table from "../Table";

const columns = [
    {
        name: "Name",
        selector: (row: any) => `${row.firstName} ${row.lastName}`,
        sortable: true,
    },
    {
        name: "Email",
        selector: (row: any) => row.email,
        sortable: true,
    },
    {
        name: "Phone",
        selector: (row: any) => row.phone,
        sortable: true,
    },
    {
        name: "Address",
        selector: (row: any) => row.address,
        sortable: true,
    },
    {
        name: "City",
        selector: (row: any) => row.city,
        sortable: true,
    },
    {
        name: "Action",
        selector: (row: any) => (
            <div id={row.id} className="flex items-center space-x-2">
                <AuthorUpdate id={row.id} />
                <AuthorDelete id={row.id} />
            </div>
        ),
    }
];

type AuthorTableProps = {
    data: Author[];
}

const AuthorTable = (AuthorTableProps: AuthorTableProps) => {
    return (
        <div className="md:w-[95%] w-[80%] bg-white shadow-sm rounded-xl mt-10 px-5 py-4 mb-8">
            <div className="flex w-full items-center justify-between mb-6">
                <span className="font-bold text-[#202224] text-[24px]">Author</span>
            </div>
            <div className="flex items-center justify-end mb-3">
                <AuthorAdd />
            </div>
            <Table columns={columns} data={AuthorTableProps?.data ?? []} />
        </div>
    );
};

export default AuthorTable;

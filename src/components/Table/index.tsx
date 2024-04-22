/* eslint-disable @typescript-eslint/no-explicit-any */
import DataTable from "react-data-table-component";

interface TableProps<T> {
	columns: {
		name: string,
		selector: (row: any) => any,
		sortable?: boolean,
	}[];
	data: T[];
};

const Table = (TableProps: TableProps<any>) => {
	return (
		<DataTable
			columns={TableProps.columns}
			data={TableProps.data}
			pagination
		/>
	);
};



export default Table;

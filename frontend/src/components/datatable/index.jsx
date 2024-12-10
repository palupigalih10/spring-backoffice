import dynamic from "next/dynamic";
import { React, useState } from "react";
import {
  CTable,
  CTableRow,
  CTableHead,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from "@coreui/react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import PropTypes from "prop-types";

const TableHeader = dynamic(() => import("@components/datatable/TableHeader"));

/**
 * Generate datatable component.
 *
 */
const Datatable = ({ columns, data }) => {
  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: { columnFilters, sorting },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <CTable bordered striped responsive>
      <TableHeader table={table} />
    </CTable>
  );
};

Datatable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
};

export default Datatable;

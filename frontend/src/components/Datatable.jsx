import { React, useState, useEffect } from "react";
import {
  CButton,
  CFormSelect,
  CTable,
  CTableRow,
  CTableHead,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CTableFoot,
  CTooltip,
} from "@coreui/react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  faArrowUp,
  faArrowDown,
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Generate datatable component.
 *
 */
const Datatable = ({ columns, data, pageLength, ...props }) => {
  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState([]);
  const defaultPageLength = pageLength ? pageLength : [10, 25, 50, 100];
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: defaultPageLength[0],
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      sorting,
      pageLength: defaultPageLength,
      pagination: pagination,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
  });

  return (
    <div className="d-flex flex-column">
      <div className="d-flex mb-2">
        <PageLengthOption table={table} />
      </div>
      <CTable bordered striped responsive {...props}>
        <TableHeader table={table} />
        <TableBody table={table} />
      </CTable>
      <TableFooter table={table} />
    </div>
  );
};

/**
 *  Make table header component.
 *
 *  @param {useReactTable} table
 *  @returns {React.Component <CTableHead>}
 */
const TableHeader = ({ table }) => {
  const headerGroup = table.getHeaderGroups();

  return (
    <CTableHead>
      {headerGroup.map((group) => {
        return (
          <CTableRow key={group.id}>
            {group.headers.map((header) => {
              return (
                <CTableHeaderCell scope="col" key={header.id}>
                  {!header.isPlaceholder && <ColumnHeader header={header} />}
                </CTableHeaderCell>
              );
            })}
          </CTableRow>
        );
      })}
    </CTableHead>
  );
};

/**
 * Column header component.
 *
 * @param {InstanceType} header
 * @returns
 */
const ColumnHeader = ({ header }) => {
  const sort = header.column.getIsSorted();

  return (
    <div
      className="d-flex"
      onClick={header.column.getToggleSortingHandler()}
      style={{ cursor: "pointer" }}
    >
      <div className="flex-grow-1">
        {flexRender(header.column.columnDef.header, header.getContext())}
      </div>
      {sort !== false && <SortIcon sort={sort} />}
    </div>
  );
};

/**
 * Sorting indicator.
 *
 * @param {String} sort
 * @returns {React.Component}
 */
const SortIcon = ({ sort }) => {
  const ascIcon = <FontAwesomeIcon icon={faArrowUp} size="xs" />;
  const descIcon = <FontAwesomeIcon icon={faArrowDown} size="xs" />;

  return (
    <div className="d-flex pt-1 align-content-center">
      {sort == "asc" && ascIcon}
      {sort == "desc" && descIcon}
    </div>
  );
};

/**
 * Make table body component.
 *
 * @param {useReactTable} table
 * @returns {React.Component <CTableBody>}
 */
const TableBody = ({ table }) => {
  const rows = table.getRowModel().rows;

  return (
    <CTableBody>
      {rows.map((row) => {
        return (
          <CTableRow key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <CTableDataCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </CTableDataCell>
              );
            })}
          </CTableRow>
        );
      })}
    </CTableBody>
  );
};

/**
 * Make table footer component.
 *
 * @returns {React.Component <CTableFooter>}
 */
const TableFooter = ({ table }) => {
  return (
    <CTableFoot className="d-flex justify-content-between">
      <PageInfo
        rows={table.getRowModel()}
        dataLength={table.getCoreRowModel().rows.length}
      />
      <Pagination className="float-end" table={table} />
    </CTableFoot>
  );
};

/**
 * Page length option.
 *
 * @param {useReactTable} table
 * @return {React.Component}
 */
const PageLengthOption = ({ table }) => {
  const tableState = table.getState();
  const pageLength = tableState.pageLength;

  return (
    <div className="d-grid d-md-flex gap-1 align-items-md-center">
      Show{" "}
      <CFormSelect
        size="sm"
        value={tableState.pagination.pageSize}
        onChange={(e) => table.setPageSize(Number(e.target.value))}
      >
        {pageLength.map((length) => {
          return (
            <option key={`page_length-${length}`} value={length}>
              {length}
            </option>
          );
        })}
      </CFormSelect>{" "}
      entries
    </div>
  );
};

/**
 * Pagination control.
 *
 * @param {useReactTable} table
 * @returns {React.Component}
 */
const Pagination = ({ table }) => {
  const buttons = [
    {
      icon: <FontAwesomeIcon icon={faAnglesLeft} />,
      title: "First Page",
      onClick: () => {
        table.firstPage();
      },
      disabled: !table.getCanPreviousPage(),
    },
    {
      icon: <FontAwesomeIcon icon={faAngleLeft} />,
      title: "Previous Page",
      onClick: () => {
        table.previousPage();
      },
      disabled: !table.getCanPreviousPage(),
    },
    {
      icon: <FontAwesomeIcon icon={faAngleRight} />,
      title: "Next Page",
      onClick: () => {
        table.nextPage();
      },
      disabled: !table.getCanNextPage(),
    },
    {
      icon: <FontAwesomeIcon icon={faAnglesRight} />,
      title: "Last Page",
      onClick: () => {
        table.lastPage();
      },
      disabled: !table.getCanNextPage(),
    },
  ];

  const PageButton = ({ prop }) => {
    return (
      <CTooltip content={prop.title} placement="top">
        <CButton
          color="dark"
          size="sm"
          onClick={prop.onClick}
          disabled={typeof prop.disabled == "boolean" && prop.disabled}
          variant="outline"
        >
          {prop.icon}
        </CButton>
      </CTooltip>
    );
  };

  return (
    <div className="d-grid gap-1 d-md-flex">
      {buttons.map((button) => {
        return <PageButton prop={button} />;
      })}
    </div>
  );
};

/**
 * Table data info.
 *
 * @param {Array} rows
 * @param {Number} dataLength
 * @returns {React.Component}
 */
const PageInfo = ({ rows, dataLength }) => {
  const firstRow = rows.flatRows[1];
  const lastRow = rows.flatRows[rows.flatRows.length - 1];

  return (
    <span>
      Showing <strong>{firstRow ? firstRow.index : 0}</strong> to{" "}
      <strong>{lastRow ? lastRow.index + 1 : 0}</strong> of{" "}
      <strong>{dataLength ? dataLength : 0}</strong> entries.
    </span>
  );
};

Datatable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  pageLength: PropTypes.arrayOf(PropTypes.number),
};

export default Datatable;

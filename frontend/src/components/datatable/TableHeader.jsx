import { React, useState } from "react";
import { flexRender } from "@tanstack/react-table";
import { CTableRow, CTableHead, CTableHeaderCell } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilArrowTop, cilArrowBottom } from "@coreui/icons";

/**
 * Sorting indicator.
 *
 * @param {String} sort
 * @returns
 */
const SortIcon = ({ sort }) => {
  const ascIcon = <CIcon icon={cilArrowTop} />;
  const descIcon = <CIcon icon={cilArrowBottom} />;

  return (
    <div className="d-flex">
      {sort == "asc" && ascIcon}
      {sort == "desc" && descIcon}
    </div>
  );
};

/**
 * Make column header.
 *
 * @param {InstanceType} header
 * @returns {React.Component}
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
      <div>
        <SortIcon sort={sort} />
      </div>
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
    <CTableHead color="dark">
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

export default TableHeader;

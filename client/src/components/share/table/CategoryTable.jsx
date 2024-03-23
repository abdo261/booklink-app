import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { FaArrowDown, FaArrowUp, FaPlus } from "react-icons/fa";
import ActionCategoryDropDown from "../dropdowns/ActionCategoryDropDown";
import { useCallback, useMemo, useState } from "react";
import InputCmp from "../InputCmp";
import BtnCmp from "../BtnCmp";

const CategoryTable = ({ categorys, onOpenCreate, onOpenEdite,onOpenDelete }) => {
  const [page, setPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(parseInt(e.target.value));
    setPage(1);
  }, []);
  const pages = Math.ceil(categorys.length / rowsPerPage);

  const sortedItems = useMemo(() => {
    let sortableItems = [...categorys];
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return sortableItems.slice(start, end);
  }, [categorys, sortConfig, page, rowsPerPage]);
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-4 items-end">
          <InputCmp
            radius="md"
            variant="bordered"
            className="text-xl font-bold"
            placeholder="Search By Name"
          />

          <BtnCmp
            text="Add New"
            color="primary"
            oncklick={onOpenCreate}
            endContent={<FaPlus size={28} />}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {categorys.length} Categorys
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    // filterValue,
    // statusFilter,
    onOpenCreate,
    onRowsPerPageChange,
    categorys.length,
    // onSearchChange,
    // hasSearchFilter,
  ]);
  return (
    <Table
      aria-label="Example empty table"
      selectionMode="single"
      topContent={topContent}
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={pages}
            onChange={(newPage) => setPage(newPage)}
          />
        </div>
      }
      classNames={{
        // wrapper: "min-h-[353px] overflow-scroll",
        wrapper: "max-h-[520px] overflow-scroll",
      }}
      color="primary"
      isHeaderSticky={true}
    >
      <TableHeader>
        <TableColumn>IMAGE</TableColumn>
        <TableColumn
          onClick={() => handleSort("name")}
          className="cursor-pointer flex gap-1 items-center"
        >
          {sortConfig?.direction === "ascending" ? (
            <FaArrowDown />
          ) : (
            <FaArrowUp />
          )}{" "}
          NAME
        </TableColumn>
        <TableColumn></TableColumn>
      </TableHeader>
      {/* <TableBody emptyContent={"No rows to display."}>{[]}</TableBody> */}
      <TableBody>
        {sortedItems.map((c, i) => (
          <TableRow key={i} >
            <TableCell  className="image-cell">
              <div className="table-img">
                <img src="/images/107846.jpg" alt={i} className="rounded-md" />
              </div>
            </TableCell>
            <TableCell  className="name-cell">
              <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                {c.name}
              </span>
            </TableCell>
            <TableCell  className="actions-cell">
              <ActionCategoryDropDown onOpenEdite={onOpenEdite} onOpenDelete={onOpenDelete} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default CategoryTable;

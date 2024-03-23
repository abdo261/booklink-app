import { books } from "./data";
import BookTable from "../../components/share/table/BookTable";
import BookCards from "../../components/share/card/BookCards";

const List = ({ showTable, onOpenCreate,onOpenEdite,onOpenDelete }) => {
  return (
    <div className="my-3">
      {showTable ? (
        <BookTable onOpenDelete={onOpenDelete} onOpenCreate={onOpenCreate} onOpenEdite={onOpenEdite} books={books} />
      ) : (
        <BookCards onOpenDelete={onOpenDelete} onOpenCreate={onOpenCreate} onOpenEdite={onOpenEdite}   books={books}/>
      )}
    </div>
  );
};

export default List;



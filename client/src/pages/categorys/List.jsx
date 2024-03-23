import { categorys } from "./data";
import CategoryCards from "../../components/share/card/CategoryCards";

import CategoryTable from "../../components/share/table/CategoryTable";

const List = ({ showTable, onOpenCreate, onOpenEdite, onOpenDelete }) => {
  return (
    <div className="my-3">
      {showTable ? (
        <CategoryTable
          onOpenDelete={onOpenDelete}
          onOpenCreate={onOpenCreate}
          onOpenEdite={onOpenEdite}
          categorys={categorys}
        />
      ) : (
        <CategoryCards
          onOpenDelete={onOpenDelete}
          onOpenCreate={onOpenCreate}
          onOpenEdite={onOpenEdite}
          categorys={categorys}
        />
      )}
    </div>
  );
};

export default List;

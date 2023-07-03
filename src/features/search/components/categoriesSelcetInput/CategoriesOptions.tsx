import { useSelector } from "react-redux";
import IState from "../../../../types/StateType";
import { boundSearchActions } from "../../../../hooks/useBindActionsToDispatch";
import { ChangeEvent, useMemo } from "react";
import "./CategoriesOptions.scss";

const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
  const value = e.target.value;
  boundSearchActions.changeCategory({ category: value });
};

const CategoriesOptions = () => {
  const stateCategories = useSelector(
    (state: IState) => state.products.products
  ).map((el) => el.category);

  const categories = useMemo(() => {
    return Array.from(new Set(stateCategories));
  }, [stateCategories]);
  const currCategory = useSelector(
    (state: IState) => state.search.searchCategory
  );
  return (
    <select className="select" onChange={handleCategoryChange}>
      <option className="select__option" value="all products">
        all products
      </option>
      {categories.map((el, i) => {
        if (el === currCategory) {
          return (
            <option className="select__option" key={i} selected value={el}>
              {el}
            </option>
          );
        }
        return (
          <option className="select__option" key={i} value={el}>
            {el}
          </option>
        );
      })}
    </select>
  );
};

export default CategoriesOptions;

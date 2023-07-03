import { ChangeEvent } from "react";
import CategoriesOptions from "../categoriesSelcetInput/CategoriesOptions";
import { boundSearchActions } from "../../../../hooks/useBindActionsToDispatch";
import { useSelector } from "react-redux";
import IState from "../../../../types/StateType";
import "./SearchInputs.scss";

const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  boundSearchActions.changeValue({ value: value });
};

const SearchInputs = () => {
  const searchInputValue = useSelector(
    (state: IState) => state.search.searchValue
  );
  return (
    <form className="form">
      <input
        className="form__input"
        value={searchInputValue}
        type="text"
        onChange={handleInputChange}
      />
      <CategoriesOptions />
    </form>
  );
};

export default SearchInputs;

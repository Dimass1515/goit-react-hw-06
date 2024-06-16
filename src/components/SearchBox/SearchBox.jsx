import css from "./SearchBox.module.css";

export default function SearchBox({ value, onSearch }) {
  return (
    <div className={css.searchBox}>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        type="text"
        id="searchBox"
      ></input>
    </div>
  );
}

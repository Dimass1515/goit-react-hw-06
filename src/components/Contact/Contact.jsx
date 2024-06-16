import css from "./Contact.module.css";

export default function Contact({ id, name, phone, onDelete }) {
  return (
    <>
      <div>
        <p className={css.contactName}>{name}</p>
        <p>{phone}</p>
      </div>
      <button
        type="button"
        className={css.deleteBtn}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </>
  );
}

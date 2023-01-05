export const Button = ({ onClick }) => {
  return (
    <div className="ButtonWrap">
      <button onClick={onClick} type="button" className="Button">
        Load more
      </button>
    </div>
  );
};
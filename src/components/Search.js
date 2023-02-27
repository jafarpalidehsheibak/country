export const Search = ({ searchHandler }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Serach for a Country..."
        onChange={(e) => searchHandler(e.target.value)}
      />
    </>
  );
};

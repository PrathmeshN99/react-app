function ListGroup() {
  const items = ["Mumbai", "Chennai", "Kolkata", "Delhi", "Pune"];

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <h1>Nothing found</h1>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => {
              console.log(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

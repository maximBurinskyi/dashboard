import './add.scss';

function Add(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="add">
      <div className="modal">
        <span onClick={() => props.setOpen(false)} className="close">
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field != 'id' && item.field != 'img')

            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field}></input>
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Add;

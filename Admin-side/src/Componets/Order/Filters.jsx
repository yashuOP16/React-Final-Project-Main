const Filters = () => {
    return (
      <div className="filters">
        <select>
          <option>Dispatch Date</option>
        </select>
        <select>
          <option>Order Date</option>
        </select>
        <div className="d-flex justify-content-end col-7">
        <input type="text" placeholder="SKU ID" />
        </div>
      </div>
    );
  };

export default Filters;
  
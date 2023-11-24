import "./MedicineForm.css";
const MedicineForm = () => {
  return (
    <div>
      <form>
        <label for="medicineName">Medicine Name</label>
        <input id="medicineName" type="text"></input>

        <label for="description">Description</label>
        <input id="description" type="text"></input>

        <label for="price">Price</label>
        <input id="price" type="text"></input>

        <label for="quantity">Quantity Available</label>
        <input id="quantity" type="number"></input>

        <button className="form-button">Add Product</button>
      </form>
    </div>
  );
};

export default MedicineForm;

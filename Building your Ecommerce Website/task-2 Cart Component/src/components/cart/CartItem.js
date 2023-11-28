import "./CartItem.css";

const CartItem = () => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  return (
    <div>
      {cartElements.map((item) => (
        <div className="cart-items" key={item.id}>
          <div className="cart-item-name">
            <img src={item.imageUrl} alt=""></img>
            <span className="title">{item.title}</span>
          </div>
          <div className="cart-items-price">{item.price}</div>
          <div className="cart-items-quantity">
            <input type="number" value={item.quantity}></input>
            <button onClick={() => {}}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;

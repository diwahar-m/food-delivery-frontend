import { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ foodItem: { _id, name, price, description, image } }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          src={url + "/images/" + image}
          alt=""
          className="food-item-image"
        />
        {!cartItems[_id] ? (
          <img
            className="add"
            alt=""
            src={assets.add_icon_white}
            onClick={() => addToCart(_id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              alt=""
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(_id)}
            />
            <p>{cartItems[_id]}</p>
            <img
              alt=""
              src={assets.add_icon_green}
              onClick={() => addToCart(_id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

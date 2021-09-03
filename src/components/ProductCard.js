import "./ProductCard.css";
import trashIcon from "../assets/icon-trash.svg";
import {  useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../actions/products";
import { setCurrentId } from "../actions/currentId";
import { showModal } from "../actions/modal";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.authData);
  
  const updateItem = () => {
    dispatch(setCurrentId(product._id));
    dispatch(showModal());
  }
  
  return (
    <div className="wrapper">
      <div className="product-img">
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="product-info">
        <div className="product-text">
          {user?.userId === product.userId ? (
            <img
              onClick={() => dispatch(deleteProduct(product._id))}
              src={trashIcon}
              className="product-delete-btn trash-icon"
              alt=""
            />
          ) : null}

          <h1>{product.title}</h1>
          <h2>by store</h2>
          <p>{product.description}</p>
        </div>
        <div className="product-price-btn">
          <p>
            <span>{product.price} </span>$
          </p>
          {user?.userId === product.userId ? <button onClick={updateItem}>update</button> : <button>buy now</button>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

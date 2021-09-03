import starySky from "../../assets/stary.png";
import ProductCard from "../../components/ProductCard";
import { getProducts } from "../../actions/products";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Modal from "../../components/Modal";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const currentId = useSelector(state => state.currentId.currentId);
  const products = useSelector((state) => state.products);
  const isOpen = useSelector((state) => state.modal.isOpen);
  
  useEffect(() => {
    if(products)dispatch(getProducts());
  }, [currentId, dispatch]);

  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={starySky} alt="hero-background" />
        <h1>Find everything you want!</h1>
        <div className="transition"></div>
      </div>
      <div className="cards-container">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {isOpen && <Modal />}
    </div>
  );
};

export default Home;

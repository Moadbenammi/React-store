import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentId } from "../actions/currentId";
import { hideModal } from "../actions/modal";
import { createProduct, updateProduct , getProducts} from "../actions/products";
import "./Modal.css";


const Modal = () => {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    userId: "",
    price: 0,
  });

  const dispatch = useDispatch();

  const currentId = useSelector((state) => state.currentId.currentId);

  const product = useSelector((state) =>
    currentId !== 0
      ? state.products.find((item) => item._id === currentId)
      : null
  );

  useEffect(() => {
    if (product) setProductData(product);
  }, []);

  const clear = () => {
    dispatch(setCurrentId(0));
    setProductData({
      title: "",
      description: "",
      imageUrl: "",
      userId: "",
      price: 0,
    });
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    const base64Image = await convertToBase64(image);
    setProductData({
      ...productData,
      imageUrl: base64Image,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createProduct({ ...productData })).then(() => dispatch(getProducts()))
    } else {
      dispatch(updateProduct(currentId, { ...productData })).then(() => dispatch(getProducts()))
    }
    close();
    
  };

  const close = () => {
    dispatch(hideModal());
    clear();
  };

  return (
    <div name="modal">
      <div className="modal-mask">
        <div className="modal-wrapper">
          <div className="modal-container">
            <div className="close-modal-btn" onClick={close}>
              &times;
            </div>
            <div className="modal-content">
              <h3>{currentId !== 0 ? "Update" : "Add"} Item</h3>
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <input
                    type="text"
                    required
                    name="title"
                    placeholder="Title"
                    onChange={(e) =>
                      setProductData({ ...productData, title: e.target.value })
                    }
                    value={productData.title}
                  />
                </div>
                <div className="input-container">
                  <textarea
                    wrap="hard"
                    rows="4"
                    required
                    maxLength="450"
                    name="description"
                    placeholder="Describe your product"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        description: e.target.value,
                      })
                    }
                    value={productData.description}
                  ></textarea>
                </div>
                <div id="imageInput" className="input-container">
                  <label htmlFor="image" className="label-file">
                    Choose product image
                  </label>
                  <input
                    id="image"
                    type="file"
                    name="image"
                    className="input-image"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e)}
                  />
                  <img
                    id="preview"
                    className="modal-preview-image"
                    src={productData.imageUrl}
                    alt=""
                  />
                </div>

                <div className="input-container">
                  <input
                    type="number"
                    step="0.01"
                    required
                    name="price"
                    min="1"
                    onChange={(e) =>
                      setProductData({ ...productData, price: e.target.value })
                    }
                    value={productData.price}
                  />
                </div>
                <div className="modal-form-btn-wrapper">
                  <input
                    id="modal-submit-btn"
                    className="modal-form-btn"
                    type="submit"
                    value={currentId === 0 ? "Create" : "Update"}
                  />
                  <input
                    type="button"
                    id="modal-discard-btn"
                    className="modal-form-btn"
                    value="Discard"
                    onClick={clear}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

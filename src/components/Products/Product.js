import React, { useState, useEffect } from "react";
//routerHooks
import { useHistory, useParams } from "react-router-dom";
//axios
import axios from "axios";
//skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

//store product actions
import { add } from "../../features/rootReducer/RootReducer";
//action and dispatch
import { useDispatch } from "react-redux";

function Product() {
  //state and apiCall
  let [product, setProduct] = useState([]);
  let [loading, setLoading] = useState(false);
  //router part
  let { id } = useParams();
  let history = useHistory();
  //store
  let dispatch = useDispatch();

  useEffect(() => {
    let apiCall = async () => {
      setLoading(true);
      let response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
      setLoading(false);
    };
    apiCall();
  }, [id]);

  //loader
  let LoadingStill = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={450} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
        </div>
      </>
    );
  };

  //single product data
  let SingleProduct = () => {
    return (
      <>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={product.image}
            alt={product.title}
            height="300px"
            width="300px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-black-60 text-uppercase">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            &nbsp;&nbsp;&nbsp;
            <i className="fa fa-star"></i>
          </p>
          <p>Viewed by {product.rating && product.rating.count} user</p>
          <h3 className="display-6 fw-bold my-4">
            {`$`}
            {product.price}
          </h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => dispatch(add(product))}
          >
            Add to cart
          </button>
          &nbsp;
          <Link to="/cart">
            <button className="btn btn-dark">Go to cart</button>
          </Link>
          &nbsp;
          <button
            className="btn btn-info"
            onClick={() => history.push("/products")}
          >
            Back to list
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container vh-100">
        <div className="row">
          {loading ? <LoadingStill /> : <SingleProduct />}
        </div>
        <br />
        <br />
        <hr />
      </div>
    </>
  );
}

export default Product;

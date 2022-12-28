import React from "react";

//store actions
import { remove } from "../../features/rootReducer/RootReducer";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  //store and dispatch
  let dispatch = useDispatch();
  let state = useSelector((state) => state.cart);
  let stateItem = state.cart.map((i) => i.payload);
  console.log(stateItem.length);

  // useEffect(() => {}, []);

  let NoCartItems = () => {
    return (
      <>
        <div className="container d-flex vh-100 justify-content-center align-items-center p-2 fw-bolder display-2 construction">
          Cart is empty, try adding and be a lucky winner, offer ends in next 2
          days...
        </div>
      </>
    );
  };

  let CartItems = () => {
    return (
      <div className="d-flex d-sm-flex d-sm-wrap">
        {state.cart.map((item) => (
          <div className="" key={item.payload.id}>
            <div className="card text-center p-5 mt-2" key={item.payload.id}>
              <img
                src={item.payload.image}
                className="card-img-top"
                alt={item.payload.title}
                height="300px"
                width="300px"
              />
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {item.payload.title.slice(0, 12)}
                </h5>
                <p className="card-text fw-bolder">
                  {`$`}
                  {item.payload.price}
                </p>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => dispatch(remove(item.payload.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return <>{stateItem.length === 0 ? <NoCartItems /> : <CartItems />}</>;
}

export default Cart;

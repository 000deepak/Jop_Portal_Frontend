import React from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector, useDispatch } from "react-redux";

import service from "../../services/jobServices";
import bookImage from "../../assets/Image 11.png";

import "./wishlist.scss";

export default function Wishlist(props) {
  //------------------------------------------redux

  //getting state values
  const wishlistArray = useSelector((state) => state.fetchWishlistBooks.books);
  console.log(wishlistArray, "redux wishlist");
  //replace props.books with this array to use redux

  //-------------------------------------------redux(END)

  React.useEffect(() => {
    props.getBooks();
  }, []);

  const handleCart = (item) => {
    console.log(item.bookId);
    props.addToCart(item.bookId);
  };

  const handleRemove = (item) => {
    console.log(item, "item");

    console.log(item.bookId, "removing from wishllist");
    service
      .updateWishlist(item.bookId)
      .then((res) => {
        console.log(res);
        props.getBooks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main-wishlist">
      <div className="wishlist-area">
        <h3 className="my-wishlist"> My Wishlist({props.bookArr.length})</h3>
        {/* wishlist items */}
        {props.bookArr.map((item) => (
          <div className="main-flex">
            <div className="wishlist-items">
              <div className="book-images">
                <img src={bookImage}></img>
              </div>
              <div className="details">
                <h4 style={{ height: ".1rem" }} className="book-name">
                  Sherlock Holmes{item.id}
                </h4>
                <div
                  className="author"
                  style={{ fontSize: "12px", color: "#878787", font: "Roboto" }}
                >
                  Arthur Conan Doyle
                </div>
                <div className="rating">
                  <div className="point">4.5*</div>
                  <div className="point-no" style={{ color: "#a03037" }}>
                    (20)
                  </div>
                </div>
                <div className="price">Rs.1500</div>
                <div className="add-book"></div>
              </div>
            </div>
            <div className="add-remove">
              <Button onClick={() => handleCart(item)} style={{ color: "#a03037" }}>
                <AddShoppingCartIcon />
              </Button>
              <Button onClick={() => handleRemove(item)} style={{ color: "#a03037" }}>
                <DeleteOutlineOutlinedIcon />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

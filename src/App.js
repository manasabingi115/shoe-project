import React from "react";
import { BiCaretRight } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RiHeart3Line } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function App() {

    let options = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
    return (
        <div>
            <div className="background-black">
                <h1 className="shoe-name">MIKE</h1>
                <FaFacebookF className="social-media-icons facebook" />
                <FaTwitter className="social-media-icons twitter" />
                <FaInstagram className="social-media-icons instagram" />
            </div>
            <div className="shoe-img"></div>
            <div className="info">
                <div className="header">
                    <input className="search" placeholder="Search"></input>
                    <FiSearch style={{ fontSize: "20px", marginLeft: "-38px" }} />
                    <div><FaShoppingCart style={{ fontSize: "30px", marginLeft: "100px" }} /></div><span className="cart-count">0</span>
                    <FiMenu style={{ fontSize: "30px", marginLeft: "60px" }} />
                </div><br />
                <div className="short-line">
                    <p>Man</p>
                    <BiCaretRight style={{ padding: "5px" }} />
                    <p>Shoes</p>
                    <BiCaretRight style={{ padding: "5px" }} />
                    <p style={{ color: "lightgray" }}>Gray Running Sneakers</p>
                </div>
                <h1 className="title">Black Running<br /><br /> Sneakers</h1>
                <div style={{ display: "flex", alignItems: "center", marginTop: "-15px" }}>
                    <FaStar style={{ padding: "3px", color: "orange" }} />
                    <FaStar style={{ padding: "3px", color: "orange" }} />
                    <FaStar style={{ padding: "3px", color: "orange" }} />
                    <FaStar style={{ padding: "3px", color: "orange" }} />
                    <FaStarHalf style={{ padding: "3px", color: "orange" }} />
                    <p style={{ color: "rgb(37, 136, 216)", textDecoration: "underline", fontWeight: "bold", paddingLeft: "10px" }}>18 votes</p>
                </div>
                <div className="price">
                    <h1 className="main-price">₹16,959.99</h1><h3 style={{ paddingLeft: "40px", textDecorationLine: "line-through", color: "lightgray" }}>₹20,069.99</h3>
                </div>
                <p style={{ marginTop: "-5px" }}>Neoprene and membrane boots. Rubber insert with lacing over foot and <br /><br />back on heel. Lining and insole of the membrane.</p>
                <div className="attributes-block">
                    <div className="parent-attribute">
                        <p>COLOR</p>
                        <div className="attributes" >
                            <IoIosCheckmarkCircle className="color" style={{ height: "28px", width: "28px" }} />
                            <div className="color" style={{ backgroundColor: "lightgray" }}></div>
                            <div className="color" style={{ backgroundColor: "rgb(94, 1, 94)" }}></div>
                        </div>
                    </div>
                    <div className="parent-attribute">
                        <p>SIZE</p>
                        <select className="option-attributes">
                            {options.map((opt) => (
                                <option value={opt} key={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="parent-attribute">
                        <p>QUANTITY</p>
                        <div className="attributes">
                            <div className="quantity-attribute" style={{ fontSize: "21px" }}>+</div>
                            <div className="quantity-attribute"><span>4</span></div>
                            <div className="quantity-attribute" style={{ width: "11px", height: "1.5px", backgroundColor: "black" }}></div>
                        </div>
                    </div>
                </div><br /><br /><br />
                <div style={{ display: "flex" }}>
                    <button><FaShoppingCart style={{ marginRight: "15px" }} />Add to Cart.</button>
                    <p style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "50px" }}><RiHeart3Line style={{ fontSize: "x-large", marginRight: "8px" }} />Save to Wishlist</p>
                </div><br />
                <p>Standard delivery in 2-4 days or Premium delivery in 2-4 hours.</p>
            </div>
        </div>

    )
}
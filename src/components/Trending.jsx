import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TrendingProducts() {
    const [activeTab, setActiveTab] = useState("all");

    const products = {
        all: [
            { id: 1, img: "images/thumb-bananas.png", title: "Sunstar Fresh Melon Juice", qty: "1 Unit", rating: 4.5, price: "$18.00", discount: "-30%" },
            { id: 2, img: "images/thumb-biscuits.png", title: "Sunstar Fresh Melon Juice", qty: "1 Unit", rating: 4.5, price: "$18.00" },
        ],
        fruits: [
            { id: 3, img: "images/thumb-cucumber.png", title: "Sunstar Fresh Melon Juice", qty: "1 Unit", rating: 4.5, price: "$18.00", discount: "-30%" },
            // { id: 4, img: "images/thumb-bananas.png", title: "Sunstar Fresh Melon Juice", qty: "1 Unit", rating: 4.5, price: "$18.00" },
        ],
        juices: [
            { id: 5, img: "images/thumb-cucumber.png", title: "Sunstar Fresh Melon Juice", qty: "1 Unit", rating: 4.5, price: "$18.00" },
            { id: 6, img: "images/thumb-bananas.png", title: "Sunstar Fresh Melon Juice", qty: "1 Unit", rating: 4.5, price: "$18.00" },
        ],
    };

    return (
        <section className="py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bootstrap-tabs product-tabs">
                            <div className="tabs-header d-flex justify-content-between border-bottom my-5">
                                <h3>Trending Products</h3>
                                <nav>
                                    <div className="nav nav-tabs" role="tablist">
                                        <button className={`nav-link text-uppercase fs-6 ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>All</button>
                                        <button className={`nav-link text-uppercase fs-6 ${activeTab === "fruits" ? "active" : ""}`} onClick={() => setActiveTab("fruits")}>Fruits & Veges</button>
                                        <button className={`nav-link text-uppercase fs-6 ${activeTab === "juices" ? "active" : ""}`} onClick={() => setActiveTab("juices")}>Juices</button>
                                    </div>
                                </nav>
                            </div>
                            <div className="tab-content">
                                <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                                    {products[activeTab].map((product) => (
                                        <div className="col" key={product.id}>
                                            <div className="product-item position-relative">
                                                {product.discount && <span className="badge bg-success position-absolute m-3">{product.discount}</span>}
                                                <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                                                <figure>
                                                    <a href="index.html" title={product.title}>
                                                        <img src={product.img} className="tab-image" alt={product.title} />
                                                    </a>
                                                </figure>
                                                <h3>{product.title}</h3>
                                                <span className="qty">{product.qty}</span>
                                                <span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> {product.rating}</span>
                                                <span className="price">{product.price}</span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="input-group product-qty">
                                                        <button type="button" className="quantity-left-minus btn btn-danger btn-number">-</button>
                                                        <input type="text" className="form-control input-number" value="1" readOnly />
                                                        <button type="button" className="quantity-right-plus btn btn-success btn-number">+</button>
                                                    </div>
                                                    <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"></iconify-icon></a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrendingProducts;

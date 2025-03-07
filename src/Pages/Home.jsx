import { Link } from "react-router-dom";
import BannerBlock from "../components/BannerBlock";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import backgroundPattern from "../assets/images/background-pattern.jpg";
import productThumb1 from "../assets/images/product-thumb-1.png";
import NewlyArrivedBrands from "../components/CategorySection";
import TrendingProducts from "../components/Trending";
import WelcomeSection from "../components/WelcomeSection";
import Footer from "../components/Footer";

const Home = () => {
    const categoryItems = [
        { img: "images/icon-vegetables-broccoli.png", title: "Fruits & Veges" },
        { img: "images/icon-bread-baguette.png", title: "Breads & Sweets" },
        { img: "images/icon-soft-drinks-bottle.png", title: "Soft Drinks" },
        { img: "images/icon-wine-glass-bottle.png", title: "Wines" },
        { img: "images/icon-animal-products-drumsticks.png", title: "Meats" },
        { img: "images/icon-bread-herb-flour.png", title: "Bakery" },
        { img: "images/icon-bread-herb-flour.png", title: "Bakery" }
    ];

    const visibleCategories = categoryItems.slice(0, 4);

    const features = [
        {
            icon: "M21.5 15a3 3 0 0 0-1.9-2.78l1.87-7a1 1 0 0 0-.18-.87A1 1 0 0 0 20.5 4H6.8l-.33-1.26A1 1 0 0 0 5.5 2h-2v2h1.23l2.48 9.26a1 1 0 0 0 1 .74H18.5a1 1 0 0 1 0 2h-13a1 1 0 0 0 0 2h1.18a3 3 0 1 0 5.64 0h2.36a3 3 0 1 0 5.82 1a2.94 2.94 0 0 0-.4-1.47A3 3 0 0 0 21.5 15Zm-3.91-3H9L7.34 6H19.2ZM9.5 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm8 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z",
            title: "Free delivery",
            text: "Lorem ipsum dolor sit amet, consectetur adipi elit."
        },
        {
            icon: "M19.63 3.65a1 1 0 0 0-.84-.2a8 8 0 0 1-6.22-1.27a1 1 0 0 0-1.14 0a8 8 0 0 1-6.22 1.27a1 1 0 0 0-.84.2a1 1 0 0 0-.37.78v7.45a9 9 0 0 0 3.77 7.33l3.65 2.6a1 1 0 0 0 1.16 0l3.65-2.6A9 9 0 0 0 20 11.88V4.43a1 1 0 0 0-.37-.78ZM18 11.88a7 7 0 0 1-2.93 5.7L12 19.77l-3.07-2.19A7 7 0 0 1 6 11.88v-6.3a10 10 0 0 0 6-1.39a10 10 0 0 0 6 1.39Zm-4.46-2.29l-2.69 2.7l-.89-.9a1 1 0 0 0-1.42 1.42l1.6 1.6a1 1 0 0 0 1.42 0L15 11a1 1 0 0 0-1.42-1.42Z",
            title: "100% secure payment",
            text: "Lorem ipsum dolor sit amet, consectetur adipi elit."
        },
        {
            icon: "M22 5H2a1 1 0 0 0-1 1v4a3 3 0 0 0 2 2.82V22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9.18A3 3 0 0 0 23 10V6a1 1 0 0 0-1-1Zm-7 2h2v3a1 1 0 0 1-2 0Zm-4 0h2v3a1 1 0 0 1-2 0ZM7 7h2v3a1 1 0 0 1-2 0Zm-3 4a1 1 0 0 1-1-1V7h2v3a1 1 0 0 1-1 1Zm10 10h-4v-2a2 2 0 0 1 4 0Zm5 0h-3v-2a4 4 0 0 0-8 0v2H5v-8.18a3.17 3.17 0 0 0 1-.6a3 3 0 0 0 4 0a3 3 0 0 0 4 0a3 3 0 0 0 4 0a3.17 3.17 0 0 0 1 .6Zm2-11a1 1 0 0 1-2 0V7h2ZM4.3 3H20a1 1 0 0 0 0-2H4.3a1 1 0 0 0 0 2Z",
            title: "Quality guarantee",
            text: "Lorem ipsum dolor sit amet, consectetur adipi elit."
        },
        {
            icon: "M12 8.35a3.07 3.07 0 0 0-3.54.53a3 3 0 0 0 0 4.24L11.29 16a1 1 0 0 0 1.42 0l2.83-2.83a3 3 0 0 0 0-4.24A3.07 3.07 0 0 0 12 8.35Zm2.12 3.36L12 13.83l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.41 0a1 1 0 0 0 1.42 0a1 1 0 0 1 1.41 0a1 1 0 0 1 0 1.42ZM12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20Z",
            title: "Guaranteed savings",
            text: "Lorem ipsum dolor sit amet, consectetur adipi elit."
        },
        {
            icon: "M18 7h-.35A3.45 3.45 0 0 0 18 5.5a3.49 3.49 0 0 0-6-2.44A3.49 3.49 0 0 0 6 5.5A3.45 3.45 0 0 0 6.35 7H6a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h1v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6h1a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3Zm-7 13H8a1 1 0 0 1-1-1v-6h4Zm0-9H5v-1a1 1 0 0 1 1-1h5Zm0-4H9.5A1.5 1.5 0 1 1 11 5.5Zm2-1.5A1.5 1.5 0 1 1 14.5 7H13ZM17 19a1 1 0 0 1-1 1h-3v-7h4Zm2-8h-6V9h5a1 1 0 0 1 1 1Z",
            title: "Daily offers",
            text: "Lorem ipsum dolor sit amet, consectetur adipi elit."
        }
    ];

    return (
        <>
            <WelcomeSection />
            <section className="py-3 home-section" style={{ backgroundImage: `url(${backgroundPattern})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-blocks">

                                <div className="banner-ad large bg-info block-1">
                                    <Swiper modules={[Pagination]} pagination={{ clickable: true }} className="swiper main-swiper">
                                        <SwiperSlide>
                                            <BannerBlock
                                                title="Fresh Smoothie & Summer Juice"
                                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                                category="100% natural"
                                                image={productThumb1}
                                                linkText="Shop Now"
                                                linkUrl="/shop"
                                            />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <BannerBlock
                                                title="Fresh Smoothie & Summer Juice"
                                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                                category="100% natural"
                                                image="/assets/product-thumb-1.png"
                                                linkText="Shop Collection"
                                                linkUrl="/shop"
                                            />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <BannerBlock
                                                title="Heinz Tomato Ketchup"
                                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                                category="100% natural"
                                                image="/assets/product-thumb-2.png"
                                                linkText="Shop Collection"
                                                linkUrl="/shop"
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>

                                <div className="banner-ad bg-success-subtle block-2" style={{ backgroundImage: "url('/assets/ad-image-1.png')", backgroundPosition: "right bottom" }}>
                                    <div className="row banner-content p-5">
                                        <div className="content-wrapper col-md-7">
                                            <div className="categories sale mb-3 pb-3">20% off</div>
                                            <h3 className="banner-title">Fruits & Vegetables</h3>
                                            <Link to="/shop" className="d-flex align-items-center nav-link">Shop Collection
                                                <svg width="24" height="24" viewBox="0 0 24 24">
                                                    <use xlinkHref="#arrow-right"></use>
                                                </svg>
                                            </Link>

                                        </div>
                                    </div>
                                </div>

                                <div className="banner-ad bg-danger block-3" style={{ backgroundImage: "url('/assets/ad-image-2.png')", backgroundPosition: "right bottom" }}>
                                    <div className="row banner-content p-5">
                                        <div className="content-wrapper col-md-7">
                                            <div className="categories sale mb-3 pb-3">15% off</div>
                                            <h3 className="item-title">Baked Products</h3>
                                            <Link to="/shop" className="d-flex align-items-center nav-link">Shop Collection
                                                <svg width="24" height="24" viewBox="0 0 24 24">
                                                    <use xlinkHref="#arrow-right"></use>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 overflow-hidden category-swiper-container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                                <h2 className="section-title">Category</h2>
                                <div className="d-flex align-items-center">
                                    <a href="#" className="btn-link text-decoration-none">
                                        View All Categories →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="category-carousel">
                                <Swiper
                                    slidesPerView="auto"
                                    spaceBetween={30}
                                    loop={false}
                                    className="category-swiper"
                                    breakpoints={{
                                        769: {
                                            direction: "horizontal",
                                        },
                                        0: {
                                            direction: "vertical",
                                            slidesPerView: "auto",
                                            spaceBetween: 20,
                                        }
                                    }}
                                >
                                    {visibleCategories.map((item, index) => (
                                        <SwiperSlide key={index} className="category-slide">
                                            <a href="index.html" className="nav-link category-item">
                                                <img src={item.img} alt="Category Thumbnail" />
                                                <h3 className="category-title">{item.title}</h3>
                                            </a>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <NewlyArrivedBrands />

            <TrendingProducts />

            <section className="py-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div
                                className="banner-ad bg-danger mb-3"
                                style={{
                                    background: "url('/images/ad-image-3.png') no-repeat right bottom",
                                }}
                            >
                                <div className="banner-content p-5">
                                    <div className="categories text-primary fs-3 fw-bold">Upto 25% Off</div>
                                    <h3 className="banner-title">Luxa Dark Chocolate</h3>
                                    <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
                                    <a href="#" className="btn btn-dark text-uppercase">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div
                                className="banner-ad bg-info"
                                style={{
                                    background: "url('/images/ad-image-4.png') no-repeat right bottom",
                                }}
                            >
                                <div className="banner-content p-5">
                                    <div className="categories text-primary fs-3 fw-bold">Upto 25% Off</div>
                                    <h3 className="banner-title">Creamy Muffins</h3>
                                    <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
                                    <a href="#" className="btn btn-dark text-uppercase">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container-fluid">
                    <div
                        className="bg-secondary py-5 my-5 rounded-5"
                        style={{ background: "url('images/bg-leaves-img-pattern.png') no-repeat" }}
                    >
                        <div className="container my-5">
                            <div className="row">
                                <div className="col-md-6 p-5">
                                    <div className="section-header">
                                        <h2 className="section-title display-4">
                                            Get <span className="text-primary">25% Discount</span> on your first purchase
                                        </h2>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa
                                        posuere maecenas. At tellus ut nunc amet vel egestas.
                                    </p>
                                </div>
                                <div className="col-md-6 p-5">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                name="name"
                                                id="name"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
                                                name="email"
                                                id="email"
                                                placeholder="abc@mail.com"
                                            />
                                        </div>
                                        <div className="form-check form-check-inline mb-3">
                                            <label className="form-check-label" htmlFor="subscribe">
                                                <input className="form-check-input" type="checkbox" id="subscribe" value="subscribe" />
                                                Subscribe to the newsletter
                                            </label>
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button type="submit" className="btn btn-dark btn-lg">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="latest-blog" className="py-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="section-header d-flex align-items-center justify-content-between my-5">
                            <h2 className="section-title">Our Recent Blog</h2>
                            <div className="btn-wrap align-right">
                                <a href="#" className="d-flex align-items-center nav-link">
                                    Read All Articles
                                    <svg width="24" height="24">
                                        <use xlinkHref="#arrow-right"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {[1, 2, 3].map((id) => (
                            <div className="col-md-4" key={id}>
                                <article className="post-item card border-0 shadow-sm p-3">
                                    <div className="image-holder zoom-effect">
                                        <a href="#">
                                            <img
                                                src={`images/post-thumb-${id}.jpg`}
                                                alt="post"
                                                className="card-img-top"
                                            />
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                                            <div className="meta-date">
                                                <svg width="16" height="16">
                                                    <use xlinkHref="#calendar"></use>
                                                </svg>
                                                {id === 1 ? "22 Aug 2021" : id === 2 ? "25 Aug 2021" : "28 Aug 2021"}
                                            </div>
                                            <div className="meta-categories">
                                                <svg width="16" height="16">
                                                    <use xlinkHref="#category"></use>
                                                </svg>
                                                {id === 1 ? "tips & tricks" : id === 2 ? "trending" : "inspiration"}
                                            </div>
                                        </div>
                                        <div className="post-header">
                                            <h3 className="post-title">
                                                <a href="#" className="text-decoration-none">
                                                    {id === 1
                                                        ? "Top 10 casual look ideas to dress up your kids"
                                                        : id === 2
                                                            ? "Latest trends of wearing street wears supremely"
                                                            : "10 Different Types of comfortable clothes ideas for women"}
                                                </a>
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt
                                                donec quam. A in arcu, hendrerit neque dolor morbi...
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5 my-5">
                <div className="container-fluid">
                    <div
                        className="bg-warning py-5 rounded-5"
                        style={{ background: "url('images/bg-pattern-2.png') no-repeat" }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <img
                                        src="images/phone.png"
                                        alt="phone"
                                        className="image-float img-fluid"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <h2 className="my-5">Shop faster with foodmart App</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
                                        sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere
                                        sit iaculis amet, ac urna. Adipiscing fames semper erat ac in
                                        suspendisse iaculis. Amet blandit tortor praesent ante vitae. A,
                                        enim pretiummi senectus magna. Sagittis sed ptibus
                                        liberolectus non et psryroin.
                                    </p>
                                    <div className="d-flex gap-2 flex-wrap">
                                        <img src="images/app-store.jpg" alt="app-store" />
                                        <img src="images/google-play.jpg" alt="google-play" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
                        {features.map((feature, index) => (
                            <div className="col" key={index}>
                                <div className="card mb-3 border-0">
                                    <div className="row">
                                        <div className="col-md-2 text-dark">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                                <path fill="currentColor" d={feature.icon} />
                                            </svg>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="card-body p-0">
                                                <h5>{feature.title}</h5>
                                                <p className="card-text">{feature.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function NewlyArrivedBrands() {
    const brandItems = [
        { img: "images/product-thumb-11.jpg", title: "Amber Jar", desc: "Honey best nectar you wish to get" },
        { img: "images/product-thumb-12.jpg", title: "Amber Jar", desc: "Honey best nectar you wish to get" },
        { img: "images/product-thumb-13.jpg", title: "Amber Jar", desc: "Honey best nectar you wish to get" },
        { img: "images/product-thumb-14.jpg", title: "Amber Jar", desc: "Honey best nectar you wish to get" },
        { img: "images/product-thumb-11.jpg", title: "Amber Jar", desc: "Honey best nectar you wish to get" },
        { img: "images/product-thumb-12.jpg", title: "Amber Jar", desc: "Honey best nectar you wish to get" },
    ];

    return (
        <section className="py-5 overflow-hidden brand-swiper-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                            <h2 className="section-title">Newly Arrived Brands</h2>
                            <div className="d-flex align-items-center">
                                <a href="#" className="btn-link text-decoration-none">View All Categories →</a>
                                <div className="swiper-buttons d-none d-md-flex">
                                    <button className="swiper-prev brand-carousel-prev btn btn-yellow">❮</button>
                                    <button className="swiper-next brand-carousel-next btn btn-yellow">❯</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="brand-carousel">
                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: ".brand-carousel-next",
                                    prevEl: ".brand-carousel-prev",
                                }}
                                slidesPerView="auto"
                                spaceBetween={30}
                                loop={false}
                                className="brand-swiper"
                            >
                                {brandItems.map((item, index) => (
                                    <SwiperSlide key={index} className="brand-slide">
                                        <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={item.img} className="img-fluid rounded" alt={item.title} />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body py-0">
                                                        <p className="text-muted mb-0">{item.title}</p>
                                                        <h5 className="card-title">{item.desc}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewlyArrivedBrands;

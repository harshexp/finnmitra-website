import { Link } from "react-router-dom";

const BannerBlock = ({ title, description, category, image, linkText, linkUrl }) => {
  return (
    <div className="swiper-slide">
        <div className="row banner-content p-5">
          <div className="content-wrapper col-md-7" style={{textAlign:"left"}}>
            <div className="categories my-3">{category}</div>
            <h3 className="display-4">{title}</h3>
            <p>{description}</p>
            <Link to={linkUrl} className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3">
              {linkText}
            </Link>
          </div>
          <div className="img-wrapper col-md-5">
            <img src={image} className="img-fluid" alt={title} />
          </div>
        </div>
    </div>
  );
};

export default BannerBlock;

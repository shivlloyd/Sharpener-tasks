import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = () => {
  const productImages = [
    {
      title: "Colors",
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const [fullImage, setFullImage] = useState(productImages[0].url);
  const [title, setTitle] = useState(productImages[0].title);

  const changeImageHandler = (imageURL, imageTitle) => {
    setFullImage(imageURL);
    setTitle(imageTitle);
  };

  return (
    <div className="product-page">
      <div className="product-images">
        <ul className="images-list">
          {productImages.map((image, index) => (
            <li key={index}>
              <img
                src={image.url}
                alt={image.title}
                onClick={() => changeImageHandler(image.url, image.title)}
              />
            </li>
          ))}
        </ul>
        <div className="full-image">
          <img src={fullImage} alt="" />
        </div>
      </div>
      <div className="product-details">
        <h1 className="product-name">{title}</h1>
        <p className="product-description">
          Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
          sorrows, hates no prosecutors will unfold in the enduring of which
          were born in it? Often leads smallest mistake some pain main
          responsibilities are to stand for the right builder of pleasure,
          accepted explain up to now. , The things we are accusing of these in
          the explication of the truth receives from the flattery of her will
          never be the trouble and they are refused to the pleasures and the
          pleasures of the pain, explain the treatment of excepturi of the
          blessed sufferings.
        </p>
        <div className="product-reviews">
          <h2>Reviews</h2>
          <h3>Steve Jobs</h3>
          <p>Apple is Shit buy Android.</p>
        </div>
        <Link to="/store">Back to Store</Link>
      </div>
    </div>
  );
};

export default ProductPage;

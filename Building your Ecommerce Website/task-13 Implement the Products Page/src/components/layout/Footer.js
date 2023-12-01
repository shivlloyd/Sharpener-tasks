import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-title">The Generics</div>
      <div className="footer-icons">
        <ul>
          <li>
            <a href="https://www.youtube.com/">
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="https://www.spotify.com/">
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com">
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;

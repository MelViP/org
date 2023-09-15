import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">

      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/master-melany/">
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/>
        </a>

        <a href="https://codepen.io/MelViP">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/external-Codepen-social-media-those-icons-lineal-those-icons.png"
            alt="external-Codepen-social-media-those-icons-lineal-those-icons"
          />
        </a>

        <a href="www.google.com">
        <img width="64" height="64" src="https://img.icons8.com/external-victoruler-solid-victoruler/64/external-girl-people-victoruler-solid-victoruler-4.png" alt="external-girl-people-victoruler-solid-victoruler-4"/>
        </a>
      </div>

      <img src="../../../public/img/Logo.png" alt="Org" />
      
      <strong>Desarrollado por Mel &#x1FAC0;</strong>
      
    </footer>
  );
};

export default Footer;

// components/Main/index.tsx
import { useState, useEffect } from "react";
import videoBgDesktop from "../../assets/ani02-3.mp4";
import videoBgMobile from "../../assets/ani-ipad2.mp4";
import videoBgTablet from "../../assets/ani-celular02.mp4";
import styles from "./styles.module.scss";
import AboutUs from "../AboutUs"; // Importe o componente AboutUs
import LogoUnityBranco from "../../assets/LogoUnity3db.png";
import LogoUnity from "../../assets/LogoUnity3d.png";

export const Main = () => {
  const [videoSrc, setVideoSrc] = useState(videoBgDesktop);
  const [logo, setLogo] = useState(LogoUnityBranco);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setVideoSrc(videoBgMobile);
      } else if (window.innerWidth <= 760) {
        setVideoSrc(videoBgTablet);
      } else {
        setVideoSrc(videoBgDesktop);
      }
    };

    const handleScroll = () => {
      const aboutUsSection = document.getElementById("about-us");
      const aboutUsTop = aboutUsSection?.getBoundingClientRect().top || 0;
      if (aboutUsTop <= 0) {
        // Altera para o logo padrão ao alcançar AboutUs
        setLogo(LogoUnity);
      } else {
        // Mantém o logo branco enquanto está acima do AboutUs
        setLogo(LogoUnityBranco);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.videoMain}>
        <img className={styles.logo} src={logo} alt="Logo Unity" />
        <video src={videoSrc} loop autoPlay muted></video>
      </div>
      <AboutUs />
    </>
  );
};
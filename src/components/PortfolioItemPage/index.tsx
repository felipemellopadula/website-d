import { useParams } from "react-router-dom";
import styles from "./PortfolioItemPage.module.scss";
import { IPortfolioItem, portfolioItemsData } from "./portfolio-items";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTimes } from "react-icons/fa";

export const PortfolioItemPage = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const [item, setItem] = useState<IPortfolioItem | null>(null);

  useEffect(() => {
    const foundItem = portfolioItemsData.find((i) => i.id === itemId);
    setItem(foundItem || null);
  }, [itemId]);

  if (!item) {
    return <div>Item não encontrado</div>;
  }

  const handleShare = (network: string) => {
    switch (network) {
      case "whatsapp":
        window.open(
          `https://api.whatsapp.com/send?text=${item.title}`,
          "_blank"
        );
        break;
      case "instagram":
        window.open(
          `https://www.instagram.com/share?url=${item.title}`,
          "_blank"
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${item.title}`,
          "_blank"
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.boxWhite}></div>
        <h1 className={styles.headerTitle}>{item.title}</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.item1}>
          <div className={styles.client}>
            <h4>CLIENTE</h4>
            <p>{item.client}</p>
          </div>
          <div className={styles.midia}>
            <h4>MÍDIA</h4>
            <p>{item.category}</p>
          </div>
          <div className={styles.share}>
            <h4>COMPARTILHE</h4>
            <div className={styles.shareIcons}>
              <FaWhatsapp
                className={styles.shareIcon}
                onClick={() => handleShare("whatsapp")}
              />
              <FaInstagram
                className={styles.shareIcon}
                onClick={() => handleShare("instagram")}
              />
              <FaFacebookF
                className={styles.shareIcon}
                onClick={() => handleShare("facebook")}
              />
              <FaTimes className={styles.shareIcon} />
            </div>
          </div>
        </div>
        <div className={styles.item2}>
          <p>{item.content}</p>
        </div>
        <div className={styles.item3}>
          {item.video1 && (
            <video controls width="100%" className={styles.video}>
              <source src={item.video1} type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          )}
          {item.video2 && (
            <video controls width="100%" className={styles.video}>
              <source src={item.video2} type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          )}
          {item.imageUrl && <img src={item.imageUrl} alt="Peça FPG" />}
          {item.imageUrl2 && (
            <img src={item.imageUrl2} alt="Outra versão da mesma peça" />
          )}
          {item.imageUrl3 &&
            Array.isArray(item.imageUrl3) &&
            item.imageUrl3.length > 0 &&
            item.imageUrl3.map((image, index) => (
              <img key={index} src={image} alt={`Imagem ${index + 1}`} />
            ))}
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";
import styles from "../page.module.css";
import CompanyCard from "../components/companyCard";

export default function Favourite() {
  return (
    <div className={styles.main}>
      <h2 className={styles.mainTitle}>Избранное</h2>
      <CompanyCard
        name="Q.Visit"
        rating="4.87"
        address="ул. Мира 32"
        phone="8-800-555-35-35"
        vk="vk: @iriturfu"
        image="/companyPhoto.jpg"
        desc="Потрясающий опыт, который превзошёл все ожидания! Сервис был на высшем уровне: всё сделано быстро, качественно и профессионально. Персонал вежливый и отзывчивый, готов помочь с любым вопросом. "
      ></CompanyCard>
      <CompanyCard
        name="Q.Visit"
        rating="4.87"
        address="ул. Мира 32"
        phone="8-800-555-35-35"
        vk="vk: @iriturfu"
        image="/companyPhoto.jpg"
        desc="Потрясающий опыт, который превзошёл все ожидания! Сервис был на высшем уровне: всё сделано быстро, качественно и профессионально. Персонал вежливый и отзывчивый, готов помочь с любым вопросом. "
      ></CompanyCard>
    </div>
  );
}

import Image from "next/image";
import styles from "../page.module.css";
import CompanyCard from "../components/companyCard";
import Order from "../components/order";

export default function MyOrders() {
  return (
    <div className={styles.main}>
      <h2 className={styles.mainTitle}>Мои записи</h2>
      <div className={styles.mainOrder}>
        <CompanyCard
          name="Q.Visit"
          rating="4.87"
          address="ул. Мира 32"
          phone="8-800-555-35-35"
          vk="vk: @iriturfu"
          image="/companyPhoto.jpg"
          desc="Потрясающий опыт, который превзошёл все ожидания! Сервис был на высшем уровне: всё сделано быстро, качественно и профессионально. Персонал вежливый и отзывчивый, готов помочь с любым вопросом. "
        ></CompanyCard>
        <Order
          name="Услуга 1"
          price="1000"
          date="13.01.24"
          time="16:30"
        ></Order>
      </div>
    </div>
  );
}

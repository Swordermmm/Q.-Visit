import Image from "next/image";
import styles from "./page.module.css";
import CompanyCard from "./components/companyCard";
import Link from "next/link";
import Dialog from "./components/modal";

export default function CompanyCatalogue() {
  async function onClose() {
    "use server";
    console.log("Modal has closed");
  }

  async function onOk() {
    "use server";
    console.log("Ok was clicked");
  }
  return (
    <div className={styles.main}>
      <Dialog title="Подтверждение записи" onClose={onClose} onOk={onOk}>
        <div>
          <div className={styles.modalInfo}>
            <a>Услуга 1</a>
            <a>1000 р.</a>
          </div>
          <hr />
        </div>
        <div className={styles.modalVariables}>
          <div className={styles.modalVariable}>
            <a>Дата</a>
            <a className={styles.modalValue}>Сегодня</a>
          </div>
          <div className={styles.modalVariable}>
            <a>Время</a>
            <a className={styles.modalValue}>16:30</a>
          </div>
        </div>
      </Dialog>
      <h2 className={styles.mainTitle}>Каталог услуг</h2>
      <CompanyCard
        name="Q.Visit"
        rating="4.87"
        address="ул. Мира 32"
        phone="8-800-555-35-35"
        vk="vk: @iriturfu"
        image="/companyPhoto.jpg"
        desc="Потрясающий опыт, который превзошёл все ожидания! Сервис был на высшем уровне: всё сделано быстро, качественно и профессионально. Персонал вежливый и отзывчивый, готов помочь с любым вопросом. "
      >
        <Link href="?showDialog=y">Запись</Link>
      </CompanyCard>
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

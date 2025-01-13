import Image from "next/image";
import "./style.css";
import Category from "./card";
import Navigation from "./navigation";

export default function Head() {
  return (
    <div className="head-container">
      <div className="head-logo wrap">
        <h1>Q. Visit</h1>
        <div className="head-wrapper">
          <a>г. Екатеринбург</a>
          <div className="head-buttons-container">
            <div className="head-register">
              <button>Вход</button>
              <button>Регистрация</button>
            </div>
            <button className="business">Для бизнеса</button>
          </div>
        </div>
      </div>
      <div className="search-bar-container wrap">
        <input placeholder="Поиск"></input>
        <Image src="/search.svg" alt="Поиск" width="16" height="17" />
      </div>
      <div className="categories wrap">
        <Category name="Красота" image="/beauty.svg" color="#F87CFF" />
        <Category name="Здоровье" image="/health.svg" color="#FF2F63" />
        <Category name="Спорт" image="/sport.svg" color="#52DBBB" />
        <Category name="Авто" image="/auto.svg" color="#5347FF" />
        <Category name="Животные" image="/animals.svg" color="#FFC524" />
        <Category
          name="Развлечения"
          image="/entertainment.svg"
          color="#2895A2"
        />
      </div>
      <Navigation />
    </div>
  );
}

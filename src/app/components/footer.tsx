import "./style.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <h2>О нас</h2>
      <div className="footer-info">
        <a>
          Добро пожаловать в нашу компанию! Мы предлагаем удобную возможность
          онлайн записи для получения наших услуг. Просто выберите нужную
          услугу, укажите удобное время, и мы позаботимся о вас. Экономьте время
          и получайте качественное обслуживание, не выходя из дома!
        </a>
        <div className="footer-info-group">
          <a>8-800-555-35-35</a>
          <a>irit.urfu@mail.ru</a>
        </div>
        <div className="footer-info-group">
          <a href="">Пользовательское соглашение</a>
          <a href="">Политика конфиденциальности</a>
        </div>
      </div>
    </div>
  );
}

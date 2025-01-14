import Image from "next/image";
import "./style.css";

interface OrderProps {
  name: string;
  price: string;
  date: string;
  time: string;
}

export default function Order({ name, price, date, time }: OrderProps) {
  return (
    <div className="order-container">
      <div className="order-info">
        <div className="order-titles">
          <a>Название:</a>
          <a>Цена:</a>
          <a>Дата:</a>
          <a>Время:</a>
        </div>
        <hr />
        <div className="order-details">
          <a>{name}</a>
          <a>{price} р.</a>
          <a>{date}</a>
          <a>{time}</a>
        </div>
      </div>
      <button>Оценить</button>
      <div className="order-buttons">
        <a>
          <Image src="/edit.svg" height={14} width={14} alt="delete"></Image>
        </a>
        <a>
          <Image src="/delete.svg" height={14} width={14} alt="delete"></Image>
        </a>
      </div>
    </div>
  );
}

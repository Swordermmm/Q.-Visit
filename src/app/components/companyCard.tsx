import Image from "next/image";
import "./style.css";

interface CompanyProps {
  name: string;
  desc: string;
  rating: string;
  address: string;
  phone: string;
  vk: string;
  image: string;
}

export default function CompanyCard({
  name,
  desc,
  rating,
  address,
  phone,
  image,
  vk,
}: CompanyProps) {
  return (
    <div className="company-container">
      <Image src={image} height={153} width={253} alt="company" />
      <div className="company-desc">
        <div style={{ display: "flex", gap: "20px" }}>
          <h2>{name}</h2>
          <h3>{rating}</h3>
        </div>
        <p>{desc}</p>
      </div>
      <div className="company-req">
        <a>{address}</a>
        <a>{phone}</a>
        <a>{vk}</a>
      </div>
      <div className="company-buttons">
        <Image src="/favourite.svg" height={12} width={14} alt="favourite" />
        <Image src="/arrow.svg" height={12} width={14} alt="arrow" />
      </div>
    </div>
  );
}

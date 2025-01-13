import Image from "next/image";

interface CategoryProps {
  name: string;
  image: string;
  color: string;
}

export default function Category({ name, image, color }: CategoryProps) {
  return (
    <div className="category-container">
      <Image
        src={image}
        height={0}
        width={0}
        style={{ height: "40px", width: "50px" }}
        alt="category"
      />
      <a style={{ color: color }}>{name}</a>
    </div>
  );
}

import "../styles/main.scss";

interface Props {
  item: any;
}
const Card = ({ item }: Props) => {
  const { name, price, imgUrl } = item;

  return (
    <div className="card-wrapper">
      <img src={imgUrl} className="product-img"></img>
      <section className="product-details">
        <p>{name}</p>
        <p>{price}</p>
      </section>
    </div>
  );
};

export default Card;

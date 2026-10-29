function GoodsCard(props) {
  return (
    <div className="goods-card">
      <img src={props.photo} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.price} грн</p>
    </div>
  );
}

export default GoodsCard;
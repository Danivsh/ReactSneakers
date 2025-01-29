function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/like.svg" alt="Like" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
      <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
      <div className="d-flex justify-between alighn-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;

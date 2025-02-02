function Headers(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="Logo" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="oppacity-5">Магазин лучших кросовок</p>
        </div>
      </div>

      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
          <span>1205 руб</span>
        </li>
        <li>
          <img
            className="mr-20 cu-p"
            width={18}
            height={18}
            src="/img/favorite.svg"
            alt="Favorite"
          />
          <span>Закладки</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
}

export default Headers;

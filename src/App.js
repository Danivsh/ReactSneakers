import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://679ca3c487618946e652e164.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://679ca3c487618946e652e164.mockapi.io/card').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const response = await axios.post('https://679ca3c487618946e652e164.mockapi.io/card', obj);

      setCartItems((prevCartItems) => [...prevCartItems, response.data]);
    } catch (error) {
      console.error('Ошибка при добавлении товара в корзину', error);
    }
  };

  const onRemoveItem = async (id) => {
    try {
      await axios.delete(`https://679ca3c487618946e652e164.mockapi.io/card/${id}`);

      const response = await axios.get('https://679ca3c487618946e652e164.mockapi.io/card');
      console.log(response.data);

      setCartItems(response.data);
    } catch (error) {
      console.error('Ошибка при удалении элемента', error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex" alt="Search">
            {searchValue && (
              <img
                className="clear cu-p"
                onClick={() => setSearchValue('')}
                src="/img/X.svg"
                alt="Close"
              />
            )}
            <img src="/img/search.svg" alt="Search" />
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item) => (
              <Card
                key={item.idS}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

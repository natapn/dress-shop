import { useState } from 'react';
import { data } from './data';
import './App.css';
import Sliders from './Sliders';
import Bag from './Bag';

function App() {
  const [bag, setBag] = useState([]);
  const [total, setTotal] = useState(0);
  const [dress, setDress] = useState(0);
  const { id, image, description, price } = data[dress];

  const previousPerson = () => {
    setDress(dress => {
      dress--;
      if (dress < 0) {
        dress = data.length - 1;
      }
      return dress;
    });
  }

  const nextPerson = () => {
    setDress(dress => {
      dress++;
      if (dress > data.length - 1) {
        dress = 0;
      }
      return dress;
    });
  }

  const addToBag = () => {
    setBag([...bag, { name: description, sum: price }]);
    let newTotal = total + price;
    setTotal(newTotal);
  }

  return (
    <div>
      <h1>DRESS SHOP</h1>
      <div className="container">
        <div className="catalog">
          <Sliders image={image} previousPerson={previousPerson} nextPerson={nextPerson}/>
          <h2>{id} - {description}</h2>
          <p className="price">${price}</p>
          <button className="add" onClick={addToBag}>ADD TO BAG</button>
        </div>
        <Bag bag={bag} setBag={setBag} total={total} setTotal={setTotal}/>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { data } from './data';
import './App.css';

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

  const removeItem = (item, sum) => {
    let newBag = bag.filter((bag, index) => index !== item);
    setBag(newBag);
    let newTotal = total - sum;
    setTotal(newTotal);
  }

  const deleteAll = () => {
    setBag([]);
    setTotal(0);
  }

  return (
    <div>
      <h1>DRESS SHOP</h1>
      <div className="container">
        <div className="catalog">
          <div className="scroll">
            <button className="btn" onClick={previousPerson}>{"<"}</button>
            <img src={image} alt="dress" width="350px" height="520px" />
            <button className="btn" onClick={nextPerson}>{">"}</button>
          </div>
          <h2>{id} - {description}</h2>
          <p className="price">${price}</p>
          <button className="add" onClick={addToBag}>ADD TO BAG</button>
        </div>
        <div className="bag">
          <h3>shopping bag ({bag.length}) points:</h3>
          {bag.map((element, index) => {
            const { name, sum } = element;
            return (
              <div key={index} className="item">
                <p className="name">{name}</p>
                <p className="sum">${sum}</p>
                <button className="delete" onClick={() => removeItem(index, sum)}>✕</button>
              </div>
            )
          })}
          <div className="footer-bag">
            <h3>total: ${total}</h3>
            <button className="delete-all" onClick={deleteAll}>DELETE ALL</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

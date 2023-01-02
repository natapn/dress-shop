function Bag(props) {

    const removeItem = (item, sum) => {
        let newBag = props.bag.filter((bag, index) => index !== item);
        props.setBag(newBag);
        let newTotal = props.total - sum;
        props.setTotal(newTotal);
    }

    const deleteAll = () => {
        props.setBag([]);
        props.setTotal(0);
    }

    return (
        <div className="bag">
            <h3>shopping bag ({props.bag.length}) points:</h3>
            {props.bag.map((element, index) => {
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
                <h3>total: ${props.total}</h3>
                <button className="delete-all" onClick={deleteAll}>DELETE ALL</button>
            </div>
        </div>
    )
}

export default Bag;
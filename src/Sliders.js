function Sliders(props) {
    return (
        <div className="scroll">
            <button className="btn" onClick={props.previousPerson}>{"<"}</button>
            <img src={props.image} alt="dress" width="350px" height="520px" />
            <button className="btn" onClick={props.nextPerson}>{">"}</button>
        </div>
    )
}

export default Sliders;
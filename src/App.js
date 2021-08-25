import "./styles.css";
import Footer from "./Footer";
import { useState } from "react";
const App = () => {
  const [initprice, setInitprice] = useState(0);
  const [currprice, setCurrprice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [res, setRes] = useState("");
  // const [backgroundColor, setBackgroundColor] = useState("");

  function funcInitPrice(e) {
    setInitprice(Number(e.target.value));
  }
  function funcQuantity(e) {
    setQuantity(Number(e.target.value));
  }
  function funcCurrPrice(e) {
    setCurrprice(Number(e.target.value));
  }
  function clickHandler() {
    var cp = initprice * quantity;
    var sp = currprice * quantity;
    if (cp < sp) {
      //profit
      var profperc = ((sp - cp) / cp) * 100;
      setRes(
        `Percentage Gain: ${profperc}% and Total Profit: ₹${sp - cp} 🤑🥳`
      );
    } else if (cp > sp) {
      //loss
      var lossperc = ((cp - sp) / cp) * 100;
      setRes(`Percentage Loss: ${lossperc}% and Total Loss: ₹${cp - sp} 😞😞`);
      if (lossperc >= 50) {
        // setBackgroundColor("#EF5354");
        document.body.style.backgroundColor = "#EF5354";
      }
    } else {
      setRes("Neutral, No Loss, No Gain!");
    }
  }
  return (
    <div className="App" style={{ backgroundColor: "" }}>
      <div className="container mt-5">
        <h3 className="font-weight-bold ">
          Stock Profile & Loss Calculator 💹
        </h3>
      </div>
      <div className="container mt-4">
        <div className="font-weight-bold" style={{ fontSize: "30px" }}>
          Enter the Initial Price:
        </div>
        <input className="mt-3 ip" type="text" onChange={funcInitPrice} />
      </div>
      <div className="container mt-2">
        <div className="font-weight-bold" style={{ fontSize: "30px" }}>
          Enter the Quantity of Stocks:
        </div>
        <input className="mt-3 ip" type="text" onChange={funcQuantity} />
      </div>
      <div className="container mt-2">
        <div className="font-weight-bold" style={{ fontSize: "30px" }}>
          Enter the Current Price:
        </div>
        <input className="mt-3 ip" type="text" onChange={funcCurrPrice} />
      </div>
      <div className="container mt-4">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={clickHandler}
        >
          <span className="h4">Calculate 🖩</span>
        </button>
      </div>
      <div className="container mt-4">
        <p className="font-weight-bold" id="res" style={{ fontSize: "30px" }}>
          {res}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default App;

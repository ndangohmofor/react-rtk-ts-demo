import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
  const [value, setValue] = useState<number>(1);
  const dispatch = useAppDispatch();
  const numOfIcecreams = useAppSelector(
    (state) => state.iceCream.numOfIcecreams
  );
  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <div>
        <button onClick={() => dispatch(ordered())}>Order ice creams</button>
      </div>
      <div>
        <div>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
          />
        </div>
        <button onClick={() => dispatch(restocked(value))}>
          Restock ice creams
        </button>
      </div>
    </div>
  );
};

export default IcecreamView;

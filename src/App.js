import { observer } from "mobx-react-lite";
import React from "react";
import { useProductContext } from "./mobx/context";
const App = observer(() => {
  const data = useProductContext();

  console.log(data?.product);
  return (
    <div>
      <h1>{data.count}</h1>
      <button onClick={data.addNum}>add</button>

      {/* {data.product.map((item, index) => {
        return <h2 key={index}>{item}</h2>;
      })} */}
      {data?.product.map((productArray) => {
        const { id, category } = productArray;
        return <h1 key={id}>{category}</h1>;
      })}

      <button onClick={data.fetchProduct}>fetch</button>
    </div>
  );
});

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import "./Components/style.css";

function App() {
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);

  console.log(size);
  // let colorSize = [...color, ...size];
  // console.log(colorSize);
  // for (let i in color) {
  //   console.log(color[i]);
  // }
  const result = color.flatMap((d) => size.map((v) => d + "/" + v));
  console.log(result);

  // const getCombination = (array) => {
  //   if (color.length > 0 && size.length > 0) {
  //     console.log("got");
  //     var result = [].concat(...array.map((v, i) => array.slice(i + 1)));
  //     return result;
  //   }
  //   return [];
  // };

  // const result = getCombination(colorSize);
  const deleteColor = (id) => {
    // let deletsize = size.splice(id,1)
    let deletecolor = color.filter((s) => {
      console.log(s);
      return s !== color[id];
    });
    setColor(deletecolor);
  };
  const deleteSize = (id) => {
    // let deletsize = size.splice(id,1)
    let deletsize = size.filter((s) => {
      console.log(s);
      return s !== size[id];
    });
    setSize(deletsize);
  };

  const submitForm = () => {};
  return (
    <div className=" product-container ">
      <h1>Create prduct</h1>
      <form action="" className="row form-container" onSubmit={submitForm}>
        <div class="col-6 input-filed">
          <input type="text" placeholder="product name" name="" id="" />
          <input type="text" placeholder="product Sku" name="" id="" />

          <textarea type="text" placeholder="description" name="" id="" />
          <input type="text" placeholder="product image url" name="" id="" />
        </div>
        <div class="col-6">
          <div class="varients">
            <div class="row p-2">
              <h5>option</h5>
              <div class="col-3">
                <select
                  class="form-select "
                  onChange={(e) => {
                    color.indexOf(e.target.value) === -1
                      ? setColor([...color, e.target.value])
                      : alert(`${e.target.value} already inserted`);
                  }}
                >
                  <option selected>Color</option>
                  <option value="green">green</option>
                  <option value="red">red</option>
                  <option value="black">black</option>
                </select>
              </div>
              <div class="col-9 color d-flex">
                {color.map((c, i) => (
                  <span>
                    {c} &nbsp;{" "}
                    <span onClick={() => deleteColor(i)} className="x">
                      x
                    </span>{" "}
                  </span>
                ))}
              </div>
             
            </div>
            <span className="btn m-3 btn-info" onClick={()=>setColor([])} >
              remove
            </span>
            <div class="row p-2">
              <h5>option</h5>
              <div class="col-3">
                <select
                  class="form-select"
                  onChange={(e) => {
                    console.log(e.target.value);
                    e.target.value == "Size"
                      ? console.log(e.target.value)
                      : size.indexOf(e.target.value) === -1
                      ? setSize([...size, e.target.value])
                      : alert(`${e.target.value} already inserted`);
                  }}
                >
                  <option selected>Size</option>
                  <option value="XL">XL</option>
                  <option value="X">X</option>
                  <option value="L">L</option>
                </select>
              </div>
              <div class="col-9 color">
                {size.map((s, i) => (
                  <span>
                    {s} &nbsp;{" "}
                    <span onClick={() => deleteSize(i)} className="x">
                      x
                    </span>{" "}
                  </span>
                ))}
              </div>
            </div>
            <span className="btn m-3 btn-info" onClick={()=>setSize([])} >
              remove
            </span>
          </div>

          <div class="preview mt-3 p-4">
            <div className="row preview-header">
              <div class="col-2">Varient</div>
              <div class="col-5">Price</div>
              <div class="col-5">Stock</div>
            </div>

            {result.map((colorsize, index) => (
              <div key={index} className="row preview-input p-2">
                <div class="col-2">{colorsize}</div>
                <div class="col-5 ">
                  <input type="text" placeholder="0" />
                </div>
                <div class="col-5 ">
                  <input type="text" placeholder="0" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <input type="submit" value="submit" className="submit" />

       
      </form>
    </div>
  );
}

export default App;

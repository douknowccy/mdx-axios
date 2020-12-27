import axios from "axios";
const url = "https://course-api.com/react-store-products";
export function productstore() {
  return {
    product: [],
    count: 0,
    addNum() {
      this.count += 1;
    },
    async fetchProduct() {
      // console.log("fetchData");
      const response = await axios.get(url);
      // console.log(response);
      const products = response.data;
      // console.log(products);
      this.product = products;
      // this.product.push("5566");
    },
  };
}

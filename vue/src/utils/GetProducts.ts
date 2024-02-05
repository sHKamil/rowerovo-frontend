import axios from "axios";
import { GetBackendUrl } from "./GetBackendUrl";

type ProductType = {
  id: number,
  name: string,
  type: string,
  size: number,
  color: string,
  image: string,
  quantity: number,
  available: number,
  wheel_size: number,
  price: number,
}

export async function GetProducts() : Promise<ProductType[]> {
  let products: ProductType[] = [];
  const backend_domain = GetBackendUrl();
  const data = await axios.get(backend_domain + '/vehicles');
        data.data.forEach((product: ProductType) => {
          products.push(product);
        });

  return products;
}

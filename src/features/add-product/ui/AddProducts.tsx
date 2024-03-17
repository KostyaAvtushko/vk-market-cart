import { CellButton } from "@vkontakte/vkui";
import { ProductState, useCartStore } from "../../../entites/cart";
import { Icon16Add } from "@vkontakte/icons";


export function AddProduct({ product }: { product: ProductState }) {
  const addProduct = useCartStore(state => state.addProduct);

  return (
    <CellButton onClick={() => addProduct(product)} style={{ width: "50px"}} disabled={product.count === 10}>
      <Icon16Add />
    </CellButton>
  );
}
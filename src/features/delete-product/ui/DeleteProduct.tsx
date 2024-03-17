import { CellButton } from "@vkontakte/vkui";
import { ProductState, useCartStore } from "../../../entites/cart";
import { Icon16DeleteOutline } from "@vkontakte/icons";

export function DeleteProduct({ product }: { product: ProductState }) {
  const deleteProduct = useCartStore(state => state.deleteProduct);

  return (
    <CellButton onClick={() => deleteProduct(product)} style={{ width: "50px"}} >
      <Icon16DeleteOutline />
    </CellButton>
  );
}
import { CellButton } from "@vkontakte/vkui";
import { ProductState, useCartStore } from "../../../entites/cart";
import { Icon16Minus } from "@vkontakte/icons";

export function SubtractProduct({ product }: { product: ProductState }) {
  const subtractProduct = useCartStore(state => state.subtractProduct);

  return (
    <CellButton onClick={() => subtractProduct(product)} style={{ width: "50px"}}>
      <Icon16Minus />
    </CellButton>
  );
}
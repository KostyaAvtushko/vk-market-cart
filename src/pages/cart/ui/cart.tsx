import { Group } from "@vkontakte/vkui";
import { ProductState, useCartStore } from "../../../entites/cart";
import { Product } from "../../../widgets/product";
import { FinalPricing } from "../../../widgets/final-pricing";

export function Cart(){
  const products = useCartStore(state => state.products);
  return (
    <Group style={{ display: "flex", flexDirection: "row"}} mode="plain">
      <Group mode="plain" style={{ display: "flex", gap: "15px", flexDirection: "column", width: "75%"}}>
        {products && products.map((product: ProductState) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
            category={product.category}
            rating={product.rating}
            count={product.count}
          />
        ))}
      </Group>
      <FinalPricing />
    </Group>
  )
}
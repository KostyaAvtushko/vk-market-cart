import { Card, Group, Text, Title } from "@vkontakte/vkui";
import { useCartStore } from "../../../entites/cart";

export function FinalPricing() {
  const products = useCartStore(state => state.products);

  return (
    <Card mode="outline" style={{ width: "25%", height: "fit-content", padding: "18px" }}>
      <Title weight="1" style={{ textAlign: "center" }}>Total Pricing</Title>
      <Group style={{ display: "flex", gap: "8px", flexDirection: "column", marginTop: "15px" }} mode="plain">
        {products.map(product => 
          <PricingLine 
            start={product.title} 
            end={(product.count * product.price).toFixed(2)}
            isTotal={false}
            count={product.count}
            key={crypto.randomUUID()}
          />
        )}
      </Group>
      <PricingLine 
        start="Total" 
        end={`${products.reduce((acc, product) => acc + (+(product.price * product.count)), 0).toFixed(2)}`} 
        isTotal
      />
    </Card>
  );
}

function PricingLine({start, end, isTotal, count}: {start: string, end: string, isTotal?: boolean, count?: number}) {
  return (
    <Group 
      style={{ 
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-between", 
      }} 
      mode="plain"
      separator="hide"
    >
      <Text weight={isTotal ? "1" : "3"}>{start}{!isTotal && ` x${count}`}</Text>
      <Text weight={isTotal ? "1" : "3"}>{end}$</Text>
    </Group>
  );
}

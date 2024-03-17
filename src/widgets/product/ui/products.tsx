import { Group, RichCell, Text, Image } from "@vkontakte/vkui";
import { ProductState } from "../../../entites/cart";
import { AddProduct } from "../../../features/add-product/ui/AddProducts";
import { SubtractProduct } from "../../../features/substract-product";
import { DeleteProduct } from "../../../features/delete-product";
import { Icon12Favorite } from "@vkontakte/icons";


export function Product(props: ProductState) {

  return (
    <Group mode="plain" separator="hide">
      <RichCell
        before={<Image src={props.image} size={120}/>}
        text={props.description}
        caption={<ProductRating rating={props.rating.rate} reviewsCount={props.rating.count}/>}
        after={`${props.price * props.count} $`}
        actions={
          <Group 
            style={{display: "flex", flexDirection: "row", alignItems: "center"}}
            mode="plain"
          >
            <AddProduct product={props}/>
            <Text>{props.count}</Text>
            <SubtractProduct product={props}/>
            <DeleteProduct product={props}/>
          </Group>
        }
      >
        {props.title}
      </RichCell>
    </Group>
  );
}

function ProductRating({rating, reviewsCount}: {rating: number, reviewsCount: number}) {
  return (
    <Group mode="plain" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
      <Text style={{fontSize: "12px"}}>{rating}</Text>
      <Icon12Favorite />
      <Text style={{marginLeft: "5px", fontSize: "12px"}}>{reviewsCount} {reviewsCount === 1 ? "review" : "reviews"}</Text>
    </Group>
  )
}
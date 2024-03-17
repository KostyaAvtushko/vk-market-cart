import { useCartStore } from "../entites/cart";
import { Cart } from "../pages/cart"
import { useQueries } from "@tanstack/react-query";
import { Spinner } from "@vkontakte/vkui";

const pr = new Array<number>(10);

for (let i = 0; i < 10; i++) {
  pr[i] = Math.floor(Math.random() * 19  + 1);
}

async function fetchProducts(id: number) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

function App() {
  
  const addProdust = useCartStore(state => state.addProduct);
  const results = useQueries({
    queries: pr.map((id) => ({
      queryKey: ['post', id],
      queryFn: () => fetchProducts(id),
    })),
  })

  const isLoading = results.some(result => result.isLoading)
  const isSuccess = results.every(result => result.isSuccess)

  if (isLoading) {
    return <Spinner size="medium" />
  }

  if (isSuccess) {
    results.map((result) => addProdust({...result.data, count: 1 }));
  }

  return (
    <>
      {isSuccess && <Cart />}
    </>
  )
}

export default App

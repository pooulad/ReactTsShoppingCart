import { useCartContext } from "../context/CartContext";
import productItems from "../data/products.json";
import { Stack } from "react-bootstrap";

type CartItemProps = {
  id: number;
  qty: number;
};

function CartItem({ id, qty }: CartItemProps) {
  const { removeItem } = useCartContext();
  const product = productItems.find((item) => item.id === id);
  if (product == null) {
    return null;
  }
  return (
    <Stack direction="horizontal" gap={2}>
      <img
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        src={product.imageUrl}
        alt={product.imageUrl}
      />
    </Stack>
  );
}

export default CartItem;

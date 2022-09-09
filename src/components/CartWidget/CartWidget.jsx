import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../Context/CartContext';

export default function CartWidget() {
  const {items} = useContext(CartContext)
  return (
    <Button variant="dark">
        <i className="bi bi-cart"></i>
        {!!items.length && <span>{items.reduce((pv, cv) => pv + cv.quantity ,0)} </span>}
    </Button>
  )
}

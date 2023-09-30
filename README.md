# Product Card

## Ejemplo de uso

```jsx
import {
  ProductCard
  ProductImage,
  ProductTitle,
  ProductButtons
} from 'product-card-react-patterns'
```

```jsx
  <ProductCard
    product={product}
    initialValues={{
      count: 7,
      maxCount: 10,
    }}
  >
  {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
    <>
      <ProductCard.Image />
      <ProductCard.Title />
      <ProductCard.Buttons />
    </>
  )}
  </ProductCard>
```

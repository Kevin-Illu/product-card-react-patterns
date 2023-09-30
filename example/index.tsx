import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffe Mug',
  img: './coffee-mug.png',
};

const App = () => {
  return (
    <div>
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
            <ProductCard.Title className="text-center font-bold" />
            <ProductCard.Buttons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

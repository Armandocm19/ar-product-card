import React, { CSSProperties, createContext } from 'react';

import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHanlders } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product,
  // children?: ReactElement | ReactElement[],
  children: ( args: ProductCardHanlders ) => JSX.Element,
  className?: string,
  style?: CSSProperties,
  onChange?: ( args: onChangeArgs ) => void,
  value?: number,
  initialValues?: InitialValues
}

export const ProductCard = ({ children,  product, className, style, onChange, initialValues }: Props) => {
  
  const { counter, increaseBy, MaxCount, isMaxCountReached, reset } = useProduct({ onChange, product, initialValues });

  return ( //Proveemos los datos que se van a compartir entre componentes hijos
    <Provider value={{ 
        counter, 
        increaseBy,
        product,
        MaxCount
    }}>
      <div 
        className={ `${styles.productCard} ${className}` }
        style={ style }
      >

        { 
          children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,

            increaseBy,
            reset
        }) 
        }

      </div>
    </Provider>
  )
}

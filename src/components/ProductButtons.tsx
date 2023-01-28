import React, { CSSProperties, useCallback, useContext } from 'react'
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard'

export interface Props {
  className?: string;
  style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {

    const { increaseBy, counter, MaxCount } = useContext( ProductContext )

    const isMaxReached = useCallback(
      () => !!MaxCount && counter === MaxCount,
      [counter, MaxCount],
    )

    return (
      <div 
        className={ `${styles.buttonsContainer} ${className}` }
        style={ style }
      >
          <button className={ styles.buttonMinus } onClick={() => increaseBy( -1 )} >-</button>
          <div className={ styles.countLabel }>{counter}</div>
          <button 
            className={ `${ styles.buttonAdd } ${isMaxReached() && styles.disabled }` } 
            onClick={() => increaseBy( +1 ) }
            disabled={isMaxReached()}
            >
              +
            </button>
      </div>
    )
  }
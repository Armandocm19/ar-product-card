import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {
    const [counter, setCounter] = useState<number>( initialValues?.count || value );
    const isMounted = useRef(false)

    const isControlled = useRef( !!onChange )
    // console.log(isControlled)
    const increaseBy = ( value: number ) => {

        if( isControlled.current ){
            return onChange!({ count: value, product })
        }

        const newValue = Math.max( counter + value, 0 );

        if( initialValues?.maxCount && newValue > initialValues.maxCount ) return;

        setCounter(newValue)        

        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    useEffect(() => {
      if( !isMounted.current ) return;

      setCounter( initialValues?.count || value )
    }, [value])
    
    useEffect(() => {
        isMounted.current = true;
    }, [])
    

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        MaxCount: initialValues?.maxCount,
        
        reset,
        increaseBy,
    }
}
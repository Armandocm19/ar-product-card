# DO-Product-Card

Este es un paqueta de pruebas de despliegue en NPM.

### ArmandoCode

## Ejemplo

```
import {ProductCard, ProductTitle, ProductImage, ProductButtons} from 'ar-product-card'
```

```
<ProductCard 
   product={ product }
   initialValues={{
     count: 6,
     maxCount: 10
   }}
 >
   {
     ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
       <>
          < ProductCard.Image />
          < ProductCard.Title />
          < ProductCard.Buttons />
       </>
     )
   }
</ProductCard>
```
import Cart from '../Cart/Cart'
import { ModalRadix } from '../ModalRadix/ModalRadix'
import { Posts } from '../posts/Posts'
import s from './Header.module.css'

export default function Header() {
  return (
    <div className={s.headerWrapper}>
  <div className={s.container}>
        <div>logotip</div>
        <Cart/>
    </div>
    </div>
  
  )
}

import { useState } from 'react'
import { Modal } from '../Modal/Modal'

export default function Cart() {
    const [showModal, setShowModal] = useState(false)
  return (
    <div>
        <button onClick={()=>setShowModal(true)}>CART</button>
        
        <Modal open={showModal} onClose={()=>setShowModal(false)} modalTitle={'CART'}>
            <ul>
              <li>1 товар</li>
              <li>2 товар</li>
              <li>3 товар</li>
            </ul>
        </Modal>
    </div>
  )
}

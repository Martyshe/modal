import { Button } from "../button/Button"
import { ModalRadix } from "../ModalRadix/ModalRadix"

type Props = {
  open: boolean
  onClose: () => void
}


 
export const DeletePostModal = ({  open, onClose }: Props) => {
  return (
    <ModalRadix open={open} onClose={onClose} modalTitle={'Delete Post'} size="lg">
      Are you sure you want to delete this post?
      <div>
        {/*Будем использовать обычные кнопки*/}
        <Button onClick={onClose} variant="primary" asChild>Yes
        </Button>
        <Button onClick={onClose} variant="secondary" >No</Button>
      </div>
    </ModalRadix>
  )
}
import { Meta, StoryObj } from "@storybook/react-vite"
import { ModalRadix, ModalRadixProps } from "./ModalRadix"
import { Button } from "../button/Button"
import { useState } from "react"

const meta = {
  component: ModalRadix,
  tags: ["autodocs"],
} satisfies Meta<typeof ModalRadix>

export default meta

type Story = StoryObj<typeof ModalRadix>

function Render(args: ModalRadixProps)  {
    const [showModal, setShowModal] = useState(false)
 
    const openModalHandler = () => {
      setShowModal(true)
    }
 
    const closeModalHandler = () => {
      setShowModal(false)
    }
 
    return (
      <>
        <Button variant={"primary"} onClick={openModalHandler}>
          Open modal
        </Button>
        <ModalRadix {...args} open={showModal} onClose={closeModalHandler} />
      </>
    )
  }

/** Primary variant. Used as 'default'*/
export const BaseModal: Story = {
  args: {
    modalTitle: "modalTitle",
    children: (
      <div>
        Lorem lor sit amet, consectetur adipisicing elit. Veritatis soluta quos dolore aspernatur molestias ad,
      </div>
    ),
    // size: 'md'

  },
  render: Render
}
  
  


export const SmallModal: Story = {
  args: {
    ...BaseModal.args,
    size: 'sm',
  },
  render: Render
}

export const LargeModal: Story = {
  args: {
    ...BaseModal.args,
    size: 'lg',
  },
  render: Render
}

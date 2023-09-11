
type Props = {
  children: React.ReactNode
  open: boolean
}

export const Dialog = ({ children, open }: Props) => (
  <dialog className="modal z-10" open={open}>
    <div className="modal-box">
      {children}
    </div>
  </dialog>
)
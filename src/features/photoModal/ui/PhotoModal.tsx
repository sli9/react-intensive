import { Modal } from "@/shared/ui/modal"
import s from "./PhotoModal.module.css"
import type { ModalContextType } from "@/shared/lib/modal"
import type { Photo } from "@/widgets/photosList"

type PhotoModalProps = {
  photo: Photo
  context: ModalContextType
}

export const PhotoModal = ({ photo, context }: PhotoModalProps) => {
  return (
    <Modal context={context}>
      <Modal.Content>
        <Modal.Header>
          <div className={s.sectionTitle}>
            <h3>{photo.title}</h3>
            <Modal.Toggle>
              <button>x</button>
            </Modal.Toggle>
          </div>
        </Modal.Header>

        <Modal.Body>
          <img src={photo.url} alt="photo" />
        </Modal.Body>
      </Modal.Content>
    </Modal>
  )
}

import { Modal } from "@/shared/ui/modal/Modal.tsx"
import s from "./AboutModal.module.css"
import { SparklesIcon } from "@/shared/icons/sparklesIcon/SparklesIcon.tsx"

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const AboutModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal open={isOpen} onClose={onClose} modalTitle="О проекте">
      <div className={s.section}>
        <h3 className={`flex-container ${s.sectionTitle}`}>
          <SparklesIcon className={s.sectionIcon} />
          Добро пожаловать в Project
        </h3>
        <p className={s.description}>
          Project — это современное, многофункциональное приложение для постов, разработанное для демонстрации новейших
          технологий веб-разработки. Создано с учетом производительности, доступности и пользовательского опыта.
        </p>
      </div>
    </Modal>
  )
}

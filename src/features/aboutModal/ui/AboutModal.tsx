import s from "./AboutModal.module.css"
import { Button } from "@/shared/ui/button"
import { Modal } from "@/shared/ui/modal"

export const AboutModal = () => {
  return (
    <Modal>
      <Modal.Toggle>
        <Button fitContent>About</Button>
      </Modal.Toggle>

      <Modal.Content>
        <Modal.Header>
          <div className={s.sectionTitle}>
            Добро пожаловать в Project
            <Modal.Toggle>
              <Button variant="rounded" size="sm">
                x
              </Button>
            </Modal.Toggle>
          </div>
        </Modal.Header>

        <Modal.Body>
          <p className={s.description}>
            Project — это современное, многофункциональное приложение для постов, разработанное для демонстрации
            новейших технологий веб-разработки. Создано с учетом производительности, доступности и пользовательского
            опыта.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <p className={s.footerText}>Made with ❤️ using modern web technologies</p>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

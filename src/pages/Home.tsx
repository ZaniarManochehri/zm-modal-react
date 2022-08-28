import { useState } from "react";
import { Button, Modal, ModalContent } from "components";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);
  const [showFullScreenModal, setShowFullScreenModal] =
    useState<boolean>(false);

  return (
    <div className="home-container">
      <Button width={220} type="primary" onClick={() => setShowModal(true)}>
        Modal
      </Button>
      <Button width={220} onClick={() => setShowBottomSheet(true)}>
        Bottom Sheet
      </Button>
      <Button
        width={220}
        type="secondary"
        onClick={() => setShowFullScreenModal(true)}
      >
        Full Screen Modal
      </Button>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        defaultHeader
        title="Modal"
      >
        <ModalContent
          type="Modal"
          handleClose={() => setShowModal(false)}
          closeButtonType="primary"
        />
      </Modal>
      <Modal
        show={showBottomSheet}
        onClose={() => setShowBottomSheet(false)}
        defaultHeader
        title="Modal"
        isBottomSheet
      >
        <ModalContent
          type="Bottom Sheet"
          handleClose={() => setShowBottomSheet(false)}
          closeButtonType="color"
        />
      </Modal>
      <Modal
        show={showFullScreenModal}
        onClose={() => setShowFullScreenModal(false)}
        defaultHeader
        title="Modal"
        fullScreen
      >
        <ModalContent
          type="Full Screen Modal"
          handleClose={() => setShowFullScreenModal(false)}
          closeButtonType="secondary"
        />
      </Modal>
    </div>
  );
};

export default Home;

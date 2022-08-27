import { useState } from "react";
import { Button, Modal, ModalContent } from "components";

type buttonType =
  | "link"
  | "color"
  | "primary"
  | "secondary"
  | "outline"
  | "danger"
  | undefined;
const Home: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);
  const [showFullScreenModal, setShowFullScreenModal] =
    useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const [closeModalButtonType, setCloseModalButtonType] = useState<buttonType>();

  const handleShowModal = () => {
    setShowModal(true);
    setModalMessage("Modal");
    setCloseModalButtonType("primary");
  };

  const handleShowBottomSheet = () => {
    setShowBottomSheet(true);
    setModalMessage("Bottom Sheet");
    setCloseModalButtonType("color");
  };

  const handleShowFullScreenModal = () => {
    setShowFullScreenModal(true);
    setModalMessage("Full Screen Modal");
    setCloseModalButtonType("secondary");
  };

  const handleCloseModal = () => {
    if (showModal) {
      setShowModal(false);
    } else if (showBottomSheet) {
      setShowBottomSheet(false);
    } else {
      setShowFullScreenModal(false);
    }
  };

  return (
    <div className="home-container">
      <Button width={220} type="primary" onClick={handleShowModal}>
        Modal
      </Button>
      <Button width={220} onClick={handleShowBottomSheet}>
        Bottom Sheet
      </Button>
      <Button width={220} type="secondary" onClick={handleShowFullScreenModal}>
        Full Screen Modal
      </Button>

      <Modal
        show={showModal || showBottomSheet || showFullScreenModal}
        onClose={handleCloseModal}
        defaultHeader
        title="Modal"
        isBottomSheet={showBottomSheet}
        fullScreen={showFullScreenModal}
      >
        <ModalContent
          message={modalMessage}
          handleClose={handleCloseModal}
          closeButtonType={closeModalButtonType}
        />
      </Modal>
    </div>
  );
};

export default Home;

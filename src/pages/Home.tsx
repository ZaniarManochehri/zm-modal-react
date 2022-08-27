import { useState } from "react";
import { Button, Modal } from "components";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="home_container">
      <Button width={220} type="primary" onClick={() => setShowModal(true)}>
        Modal
      </Button>
      <Button width={220}>Bottom Sheet</Button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div>a</div>
      </Modal>
    </div>
  );
};

export default Home;

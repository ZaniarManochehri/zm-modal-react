import { Button } from "components";

type Props = {
  handleClose: () => void;
  type: "Modal" | "Bottom Sheet" | "Full Screen Modal";
  closeButtonType:
    | "link"
    | "color"
    | "primary"
    | "secondary"
    | "outline"
    | "danger"
    | undefined;
};
const ModalContent: React.FC<Props> = (props) => {
  const { handleClose, type, closeButtonType } = props;
  return (
    <div className="modal-content">
      <span>{`Hi ${String.fromCodePoint(0x1f44b)}, This is a ${type}!`}</span>
      <Button width={120} onClick={handleClose} type={closeButtonType}>
        <span>Close</span>
      </Button>
    </div>
  );
};

export default ModalContent;

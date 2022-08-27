import React from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  canceledOnTouchOutside?: boolean;
  canceledOnTouchInside?: boolean;
  children: React.ReactNode;
  contentStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  isBottomSheet?: boolean;
  defaultHeader?: boolean;
  title?: string;
  fullScreen?: boolean;
  showNavigation?: boolean;
}

const Modal: React.FC<ModalProps> = (props) => {
  const {
    show,
    onClose,
    canceledOnTouchOutside = true,
    canceledOnTouchInside = false,
    children,
    contentStyle = {},
    headerStyle = {},
    footerStyle = {},
    header = null,
    footer = null,
    isBottomSheet = false,
    defaultHeader = false,
    title = "",
    fullScreen = false,
  } = props;

  return (
    <div
      className={`${styles.modal} ${show ? styles.show : ""}`}
      onClick={canceledOnTouchOutside ? onClose : () => null}
      style={isBottomSheet ? { alignItems: "flex-end" } : {}}
    >
      <div
        className={`${styles.content} ${fullScreen ? styles.fullScreen : ""}`}
        onClick={
          canceledOnTouchInside ? () => null : (e) => e.stopPropagation()
        }
        style={{
          ...contentStyle,
          ...(isBottomSheet
            ? {
                width: "100%",
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
              }
            : null),
        }}
      >
        <div
          className="header"
          style={headerStyle}
          onClick={(e) => e.stopPropagation()}
        >
          {defaultHeader ? (
            <DefaultHeader title={title} onClose={onClose} />
          ) : (
            header
          )}
        </div>
        <div
          style={{ height: defaultHeader ? "calc(100% - 46px)" : "100%" }}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
        <div
          className="footer"
          style={footerStyle}
          onClick={(e) => e.stopPropagation()}
        >
          {footer}
        </div>
      </div>
    </div>
  );
};

const DefaultHeader: React.FC<{ title: string; onClose: () => void }> = (
  props
) => {
  return (
    <div className={styles.header}>
      <div className={styles.iconContainer} onClick={props.onClose}>
        <i className="fa-regular fa-xmark"></i>
      </div>
      <div>
        <span>{props.title}</span>
      </div>
      <div className={styles.iconContainer}>
        <i className="fa-regular fa-xmark" style={{ visibility: "hidden" }}></i>
      </div>
    </div>
  );
};

export default Modal;

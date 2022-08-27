type Props = {
    children: React.ReactNode;
    type?: "color" | "primary" | "secondary" | "outline" | "danger" | "link";
    backgroundColor?: string;
    color?: string;
    disabled?: boolean;
    height?: number | string;
    width?: number | string;
    onClick?: () => void;
    className?: string;
  };
  
  const Button: React.FC<Props> = (props) => {
    const {
      children,
      type = "color",
      backgroundColor,
      color,
      disabled = false,
      height,
      width,
      onClick,
      className,
    } = props;
    return (
      <button
        onClick={onClick}
        style={{ height, width, backgroundColor, color }}
        disabled={disabled}
        className={`btn btn_${type} ${className ? className : ""}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  
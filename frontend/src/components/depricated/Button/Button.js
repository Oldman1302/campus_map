import classes from "./Button.module.css";

export default function Button({ children, onClick, isActive, ...props }) {
    console.log("Button component render");

    return (
        <button {...props} className={isActive ? `${classes.button} ${classes.isActive}` : classes.button} onClick={onClick}>
            {children}
        </button>
    );
}
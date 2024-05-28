import { useEffect, useState } from "react";
import "../styles/main.scss";

interface Props {
  showDialog: boolean;
  closeDialog: () => void;
}

const Theme = ({ showDialog, closeDialog }: Props) => {
  const [theme, setTheme] = useState<string | null>(null);
  const handleThemeSelection = (val: any) => {
    setTheme(val.target.id);
    localStorage.setItem("color-theme", val.target.id);
  };

  useEffect(() => {
    const theme = localStorage.getItem("color-theme");
    setTheme(theme ?? "grey");
  }, []);

  return (
    <dialog open={showDialog} onClose={closeDialog}>
      <form className="color-picker">
        <fieldset>
          <legend>Change Theme:</legend>
          <input
            type="radio"
            id="grey"
            onClick={handleThemeSelection}
            checked={theme === "grey"}
          ></input>
          <input
            type="radio"
            id="dark"
            onClick={handleThemeSelection}
            checked={theme === "dark"}
          ></input>
          <input
            type="radio"
            id="pink"
            onClick={handleThemeSelection}
            checked={theme === "pink"}
          ></input>
          <input
            type="radio"
            id="blue"
            onClick={handleThemeSelection}
            checked={theme === "blue"}
          ></input>
        </fieldset>
      </form>
    </dialog>
  );
};

export default Theme;

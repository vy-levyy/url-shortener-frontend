import { FC } from "react";
import { useClasses } from "../../hooks";
import { Button, Input } from "../../ui";
import { useUrlShortenerForm } from "./hooks";
import "./UrlShortenerForm.style.scss";

interface IProps {
  className?: string;
}

export const UrlShortenerForm: FC<IProps> = ({ className }) => {
  const { url, onUrlChange, onSubmit, error, ref } = useUrlShortenerForm();

  const classNames = useClasses('url-form', className)

  return (
    <form className={classNames} onSubmit={onSubmit}>
      <span className="url-form__input-title">Введите ссылку</span>
      <div className="url-form__input-line">
        <Input className="url-form__input" value={url} onChange={onUrlChange} ref={ref} />
        <Button className="url-form__submit-button">Сократить</Button>
      </div>
      {error && <span className="url-form__error">{error}</span>}
    </form>
  );
};

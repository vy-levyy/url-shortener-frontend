import { Button, Input } from "../../ui";
import { useUrlShortenerForm } from "./hooks";
import "./UrlShortenerForm.style.scss";

export const UrlShortenerForm = () => {
  const { url, onUrlChange, onSubmit, error } = useUrlShortenerForm();

  return (
    <form className="url-form" onSubmit={onSubmit}>
      <span className="url-form__input-title">Введите ссылку</span>
      <div className="url-form__input-line">
        <Input className="url-form__input" value={url} onChange={onUrlChange} />
        <Button className="url-form__submit-button">Сократить</Button>
      </div>
      {error && <span className="url-form__error">{error}</span>}
    </form>
  );
};

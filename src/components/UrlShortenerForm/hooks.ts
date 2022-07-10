import { ChangeEvent, FormEvent, RefObject, useCallback, useRef, useState } from "react";
import { validateUrl } from "../../helpers";
import { useAppDispatch } from "../../redux/store";
import { shortenUrl } from "../../redux/thunks";

interface IReturn {
  url: string;
  onUrlChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent) => void;
  error?: string;
  ref: RefObject<HTMLInputElement>,
}

export const useUrlShortenerForm = (): IReturn => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLInputElement>(null);

  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const onUrlChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);

    if (error) {
      setError('');
    }
  }, [error]);

  const onSubmit = (event: FormEvent) => {
    console.log('### -> event');
    if (validateUrl(url)) {
      setUrl('');
      dispatch(shortenUrl({ url }));
      ref.current?.focus();
    } else {
      setError('Невалидная ссылка');
    }

    event.preventDefault();
  }

  return {
    url,
    onUrlChange,
    onSubmit,
    error,
    ref
  }
}
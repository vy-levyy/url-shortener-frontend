import { useState } from "react";
import { ChangeEvent, FormEvent, useCallback } from "react";

interface IReturn {
  url: string;
  onUrlChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent) => void;
  error?: string;
}

export const useUrlShortenerForm = (): IReturn => {
  const [url, setUrl] = useState('');
  const error = 'Текст ошибки';

  const onUrlChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  }, []);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
  }

  return {
    url,
    onUrlChange,
    onSubmit,
    error
  }
}
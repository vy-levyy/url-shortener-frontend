import { useMemo } from "react";
import { parseClasses } from "../helpers/parseClasses";

export const useClasses = (...args: (string | false | undefined | null)[]) => {
  const classNames = useMemo(() => {
    return parseClasses(...args);
  }, [JSON.stringify(args)]);

  return classNames;
}
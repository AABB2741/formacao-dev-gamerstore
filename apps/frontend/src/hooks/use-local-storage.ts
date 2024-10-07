import { useCallback } from "react";

export default function useLocalStorage() {
  const saveItem = useCallback((key: string, valor: any) => {
    localStorage.setItem(key, JSON.stringify(valor));
  }, []);

  const getItem = useCallback((key: string) => {
    const valor = localStorage.getItem(key);
    return valor ? JSON.parse(valor) : null;
  }, []);

  const removeItem = useCallback((key: string) => {
    localStorage.removeItem(key);
  }, []);

  return { saveItem, getItem, removeItem };
}

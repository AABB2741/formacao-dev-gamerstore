import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback } from "react";

export function useLocalStorage() {
  const getItem = useCallback(async (key: string) => {
    const localValue = await AsyncStorage.getItem(key);
    return localValue ? JSON.parse(localValue) : null;
  }, []);

  const saveItem = useCallback(async (key: string, valor: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(valor));
  }, []);

  return { getItem, saveItem };
}

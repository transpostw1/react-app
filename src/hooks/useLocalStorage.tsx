import { useEffect, useState } from "react";

// function allAreNull(arr: any) {
//   return arr.every((element:any) => element !== null)
// }

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  
  useEffect(() => {
    // let result = JSON.parse(localStorage.getItem(key) || "[]");
    // console.log("value:", typeof value);
    // if (Array.isArray(result) && Array.isArray(value) && value){
    //   result?.push(Array.isArray(value) && value[0]);
    //   result = (result.filter((element: any) => element !== null));
      
    // }

    // console.log("result:", result);

    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}

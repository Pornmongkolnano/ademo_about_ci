import { useCallback, useState } from "react";

type UseCounter = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  val: number;                  // ✅ เพิ่ม
  setVal: (n: number) => void;  // ✅ เพิ่ม
};

export default function useCounter(): UseCounter {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((c) => c + 1), []);
  const decrement = useCallback(() => setCount((c) => Math.max(0, c - 1)), []);
  const reset = useCallback(() => setCount(0), []);
  const setVal = useCallback((n: number) => setCount(n), []); // ✅ เพิ่ม

  // ✅ คืนค่าครบทั้ง 6 ตัว
  return { count, increment, decrement, reset, val: count, setVal };
}
import { useCallback, useState } from "react";

type UseCounter = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  val: number;
  setVal: (n: number) => void;
};

// ✅ เพิ่มพารามิเตอร์ initialValue = 0
export default function useCounter(initialValue: number = 0): UseCounter {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount((c) => c + 1), []);
  // ✅ เอา Math.max ออก เพื่อให้ลดต่ำกว่า 0 ได้
  const decrement = useCallback(() => setCount((c) => c - 1), []);
  const reset = useCallback(() => setCount(0), []);
  const setVal = useCallback((n: number) => setCount(n), []);

  return { count, increment, decrement, reset, val: count, setVal };
}
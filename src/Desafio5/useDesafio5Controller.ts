import { useState, useCallback, useMemo } from "react";

export const useDesafio5Controller = () => {
  const [list, setList] = useState<number[]>([]);
  const addItem = useCallback(
    () => setList((currentState) => [...currentState, currentState.length]),
    [],
  );
  const numero = useMemo(() => list.length + 1, [list]);
  const parOuImpar = useCallback(
    (valor: number) => (valor % 2 === 0 ? "Par" : "Impar"),
    [],
  );

  return { list, addItem, parOuImpar, numero };
};

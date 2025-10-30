"use client";

import { useCallback, useState } from "react";

import { ItemSelector } from "@/lib/item_selector";

/**
 * React用のカスタムフック。
 * クラスを内部で保持し、再描画をトリガーする。
 *
 * @param {number} maxSelection - 最大選択数（デフォルト: 4）
 */
export function useItemSelector(maxSelection = 4) {
  const [selector] = useState(() => new ItemSelector(maxSelection));
  const [selections, setSelections] = useState<(number | null)[]>(
    selector.selections,
  );

  const toggle = useCallback(
    (index: number) => {
      selector.toggle(index);
      setSelections([...selector.selections]);
    },
    [selector],
  );

  const reset = useCallback(() => {
    selector.reset();
    setSelections([...selector.selections]);
  }, [selector]);

  return {
    selections,
    toggle,
    reset,
    isSelected: (index: number) => selector.isSelected(index),
    isFull: selector.isFull.bind(selector),
  };
}

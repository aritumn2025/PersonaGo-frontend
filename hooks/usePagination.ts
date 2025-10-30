import { useCallback, useMemo, useState } from "react";

import { PaginationManager } from "@/utils/pagination_manager";

/**
 * usePagination フック
 * PaginationManagerクラスをReactで扱いやすくするラッパー
 *
 * @param totalItems 総アイテム数
 * @param itemsPerPage 1ページあたりのアイテム数
 */
function usePagination(totalItems: number, itemsPerPage: number) {
  // PaginationManagerインスタンスをメモ化（依存が変わらない限り同一インスタンス）
  const paginator = useMemo(
    () => new PaginationManager(totalItems, itemsPerPage),
    [totalItems, itemsPerPage],
  );

  // 現在ページをReactの状態でも管理
  const [page, setPageState] = useState<number>(paginator.getPage());

  /** ページを更新する関数 */
  const setPage = useCallback(
    (newPage: number) => {
      try {
        paginator.setPage(newPage);
        setPageState(paginator.getPage());
      } catch (err) {
        console.warn(err);
      }
    },
    [paginator],
  );

  /** 次のページに進む */
  const nextPage = useCallback(() => {
    paginator.nextPage();
    setPageState(paginator.getPage());
  }, [paginator]);

  /** 前のページに戻る */
  const prevPage = useCallback(() => {
    paginator.prevPage();
    setPageState(paginator.getPage());
  }, [paginator]);

  /** 現在ページのアイテムインデックス配列 */
  const items = useMemo(() => paginator.getCurrentItems(), [paginator, page]);

  return {
    /** 状態 */
    page,
    items,

    /** ページ制御関数 */
    setPage,
    nextPage,
    prevPage,

    /** 状態取得関数 */
    totalPages: paginator.totalPages(),
    isFirstPage: paginator.isFirstPage(),
    isLastPage: paginator.isLastPage(),
  };
}

export { usePagination };

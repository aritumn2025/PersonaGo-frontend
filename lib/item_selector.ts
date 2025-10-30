/**
 * アイテム選択を順序付きで管理するクラス
 *
 * - 最大 `maxSelection` 件まで選択可能
 * - 選択順を保持(解除しても前詰めはしない)
 * - トグル操作で選択・解除を切り替え
 * - インデックス(number)で管理するため、アイテム情報構造が大きい場合にも効率的
 */
class ItemSelector {
  private maxSelection: number;
  private selectedIndexes: (number | null)[];

  /**
   * @param {number} maxSelection - 最大選択数(デフォルト: 4)
   */
  constructor(maxSelection: number = 4) {
    this.maxSelection = maxSelection;
    this.selectedIndexes = Array(maxSelection).fill(null);
  }

  /**
   * 現在の選択状態(null は未選択)
   * @returns {(number | null)[]}
   */
  get selections() {
    return [...this.selectedIndexes];
  }

  /**
   * 指定インデックスが選択済みかどうか
   * @param {number} index - 対象インデックス
   * @returns {boolean}
   */
  isSelected(index: number): boolean {
    return this.selectedIndexes.includes(index);
  }

  /**
   * 指定インデックスが選択されている位置を取得
   * @param {number} index - 対象インデックス
   * @returns {number} - 選択位置(未選択なら -1)
   */
  getIndex(index: number): number {
    return this.selectedIndexes.findIndex((v) => v === index);
  }

  /**
   * インデックスをトグル(選択 ↔ 解除)する
   * - 空きがなければ追加不可
   * @param {number} index - 対象インデックス
   */
  toggle(index: number) {
    const current = this.getIndex(index);

    // すでに選択済み → 解除
    if (current !== -1) {
      this.selectedIndexes[current] = null;
      return;
    }

    // 空きがなければ無視
    if (this.isFull()) return;

    // 最初の空きスロットに追加
    const empty = this.selectedIndexes.findIndex((v) => v === null);
    if (empty !== -1) {
      this.selectedIndexes[empty] = index;
    }
  }

  /**
   * 選択をリセット(全解除)
   */
  reset() {
    this.selectedIndexes = Array(this.maxSelection).fill(null);
  }

  /**
   * 選択数が上限に達しているか
   * @returns {boolean}
   */
  isFull(): boolean {
    return this.selectedIndexes.every((v) => v !== null);
  }
}

export { ItemSelector };

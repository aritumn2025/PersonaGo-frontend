import random
from typing import List, Optional

SwapMap = List[tuple[int, int]]

def main():
    size = 16  # 配列の要素数
    seed = 42  # シード値
    swap_map = generate_swap_map(size, seed)
    ts_formatted = convert_swap_map_for_ts(swap_map)
    print(ts_formatted)

def generate_swap_map(
    size: int,
    seed: int,
    swap_count: Optional[int] = None
) -> SwapMap:
    """
    Generate a swap map for shuffling an array.

    Args:
        size (int): array size
        seed (int): seed value
        swap_count (Optional[int]): swap count.
            If None, automatically set to size * 3 (approx).
    Returns:
        List[tuple[int, int]]: (i, j) pairs representing swaps
    """
    random.seed(seed)
    if swap_count is None:
        swap_count = max(size * 3, 1)  # autoモード: 要素数の3倍くらい

    swaps = []
    for _ in range(swap_count):
        i = random.randrange(size)
        j = random.randrange(size)
        if i != j:
            swaps.append((i, j))
    return swaps


def convert_swap_map_for_ts(swap_map: SwapMap) -> str:
    """Convert to TypeScript format and print
    Args:
        swap_map (List[tuple[int, int]]): List of (i, j) pairs representing swaps.
    Returns:
        str: A string representing the swap map in TypeScript array format.
    """
    formatted = "[" + ", ".join(f"[{i},{j}]" for i, j in swap_map) + "]"
    return formatted


if __name__ == "__main__":
    main()

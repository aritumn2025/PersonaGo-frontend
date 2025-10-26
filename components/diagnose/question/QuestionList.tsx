/**
 * 質問リストコンポーネント郡
 */
import type {
  ContinuousQuestion,
  DiscreteQuestion,
  Question,
} from "@/lib/diagnose";
import { cn } from "@/lib/utils";

interface ContinuousButtonProps {
  index: number;
  total: number;
  active: boolean;
  onClick: () => void;
}

/**
 * 連続型の選択肢ボタン
 * @param index ボタンのインデックス
 * @param total ボタンの総数
 * @param active 選択されているかどうか
 * @param onClick クリック時のハンドラ
 */
function ContinuousButton({
  index,
  total,
  active,
  onClick,
}: ContinuousButtonProps) {
  const getPosition = (
    i: number,
  ): {
    section: "left" | "center" | "right";
    scale: number;
    maxScale: number;
  } => {
    // totalが奇数の場合、中央が center, 左右が left と right
    // totalが偶数の場合、中央がないので left と right の2分割
    if (total % 2 === 1) {
      const center = Math.floor(total / 2);
      if (i === center)
        return { section: "center", scale: 0, maxScale: center };
      return i < center
        ? { section: "left", scale: center - i, maxScale: center }
        : { section: "right", scale: i - center, maxScale: center };
    } else {
      const border = Math.floor(total / 2) - 1;
      return i <= border
        ? { section: "left", scale: border - i + 1, maxScale: border + 1 }
        : { section: "right", scale: i - border, maxScale: border + 1 };
    }
  };
  const { section, scale, maxScale } = getPosition(index);
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border-2 px-4 py-2 transition",
        section === "center"
          ? "border-gray-500 bg-gray-500"
          : section === "right"
            ? "border-cyan-500 bg-cyan-500"
            : "border-rose-400 bg-rose-400",
        !active ? "bg-white hover:bg-gray-100" : "",
      )}
      style={{
        width: `calc(25px + (20px * ${scale / maxScale}))`,
        aspectRatio: "1 / 1",
        opacity: active ? 1 : 0.6,
      }}
    />
  );
}

interface DiscreteButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

/**
 * 離散型の選択肢ボタン
 * @param label ボタンのラベル
 * @param active 選択されているかどうか
 * @param onClick クリック時のハンドラ
 */
function DiscreteButton({ label, active, onClick }: DiscreteButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-md w-full rounded-lg border px-4 py-3 text-center transition",
        active
          ? "border-rose-400 bg-rose-400 text-white"
          : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100",
      )}
    >
      {label}
    </button>
  );
}

interface ContinuousOptionsProps {
  options: ContinuousQuestion["options"];
  selected: number | null;
  onSelect: (index: number) => void;
}

/**
 * 連続型の選択肢
 * @param options 選択肢オブジェクト
 * @param selected 選択されているインデックス
 * @param onSelect 選択時のハンドラ
 */
function ContinuousOptions({
  options,
  selected,
  onSelect,
}: ContinuousOptionsProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center justify-between gap-2">
        {Array.from({ length: options.count }).map((_, i) => (
          <ContinuousButton
            key={i}
            index={i}
            total={options.count}
            active={selected === i}
            onClick={() => onSelect(i)}
          />
        ))}
      </div>
      <div className="text-md flex w-full justify-between">
        <span className="text-rose-400">{options.left}</span>
        <span className="text-cyan-500">{options.right}</span>
      </div>
    </div>
  );
}

interface DiscreteOptionsProps {
  options: DiscreteQuestion["options"];
  selected: number | null;
  onSelect: (index: number) => void;
}

/** 離散型の選択肢
 * @param options 選択肢オブジェクト
 * @param selected 選択されているインデックス
 * @param onSelect 選択時のハンドラ
 */
function DiscreteOptions({
  options,
  selected,
  onSelect,
}: DiscreteOptionsProps) {
  return (
    <div className="flex flex-col gap-3">
      {options.map((option, i) => (
        <DiscreteButton
          key={i}
          label={option.text}
          active={selected === i}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
}

interface QuestionItemProps {
  question: Question;
  answer: number | null;
  onAnswer: (value: number) => void;
}

/** 質問項目
 * @param question 質問オブジェクト
 * @param answer 選択されている回答のインデックス
 * @param onAnswer 回答選択時のハンドラ
 */
function QuestionItem({ question, answer, onAnswer }: QuestionItemProps) {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-4 border-b border-gray-400 p-6 last:border-0">
      <h2 className="text-xl font-semibold text-gray-800">{question.text}</h2>
      {question.kind === "continuous" ? (
        <ContinuousOptions
          options={question.options}
          selected={answer}
          onSelect={onAnswer}
        />
      ) : (
        <DiscreteOptions
          options={question.options}
          selected={answer}
          onSelect={onAnswer}
        />
      )}
    </div>
  );
}

interface QuestionListProps {
  questions: Question[];
  answers: (number | null)[];
  onAnswer: (qIndex: number, value: number) => void;
}

/** 質問リスト
 * @param questions 質問オブジェクトの配列
 * @param answers 各質問に対する回答のインデックス配列
 * @param onAnswer 回答選択時のハンドラ
 */
function QuestionList({ questions, answers, onAnswer }: QuestionListProps) {
  return (
    <div className="flex flex-col items-center gap-0">
      {questions.map((q, i) => (
        <QuestionItem
          key={q.index}
          question={q}
          answer={answers[i]}
          onAnswer={(val) => onAnswer(q.index, val)}
        />
      ))}
    </div>
  );
}

export { QuestionList };

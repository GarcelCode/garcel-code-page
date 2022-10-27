import { ICardButtonProps } from "../Types/ICardButtonProps";

export default function CardButton({ text, action }: ICardButtonProps) {
  return (
    <button onClick={action} className="border-2 border-gc-titles p-1 rounded-md text-gc-text hover:bg-gc-titles hover:text-gc-primary min-w-[7rem] duration-500">
      {text}
    </button>
  );
}
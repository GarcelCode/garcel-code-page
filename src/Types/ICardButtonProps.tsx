import { MouseEventHandler } from "react";

export interface ICardButtonProps{
    text: String,
    action: MouseEventHandler<HTMLButtonElement>
}
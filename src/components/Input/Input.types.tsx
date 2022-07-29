import { GeneralStylesProps } from "shared/styles";

export type InputRangeVariationType =  'default';

export interface InputProps  extends GeneralStylesProps{
    variation: InputRangeVariationType,
    value?: string,
    placeholder?: string,
    disabled?: boolean,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
}
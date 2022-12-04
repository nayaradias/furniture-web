import { GeneralStylesProps } from "types/styles.typings";

export interface ToggleSwitchProps  extends GeneralStylesProps{
    disabled?: boolean,
    isActive?: boolean,
    onPress?: () => void;
}

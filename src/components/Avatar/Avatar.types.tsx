import { GeneralStylesProps } from "types/styles.typings";

export interface AvatarProps  extends GeneralStylesProps{
    icon?: React.ReactNode,
    imageUrl?: string, 
    size?: number,
}

export interface SnackBarProps {
    loading?: boolean,
    imageUrl?: string, 
    title?: string,
    text?: string,
    rightIcon?: boolean,
    rightText?: string,
    rightButton?: string,
    rightOnClick?: () => void,
}

export interface CardProps {
    id: number,
    img: string,
    title: string,
    price: number,
    text: string,
    quantity: number 
}

export interface Props extends CardProps {
    onAddToCart?: () => void;
    onLiked?: () => void;
    unLiked?: () => void;
  }
import { Button } from './styles';

export interface FavoriteButtonProps {
  favorited: boolean;
  handleUpdateFavoriteList: (id: number) => void;
  id: number;
}

export const FavoriteButton = ({ favorited, handleUpdateFavoriteList, id }: FavoriteButtonProps) => {

 return (
  <Button 
    favorited={favorited}
    onClick={() => handleUpdateFavoriteList(id)}
  />
 );
}
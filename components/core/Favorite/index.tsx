import { useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';


type Props = {
  size: 18 | 24 | 36 | 48;
  color: "dark" | "light" | "primary" | "info" | "warning" | "success" | "danger";
}

const Favorite = ({ size=18, color="dark" }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div 
      onClick={() => setIsFavorite(!isFavorite)}
      className={`flex flex-x-center flex-y-center text-${color}`}
      style={{cursor: 'pointer'}}
    >
      {isFavorite ? <MdFavorite size={size} /> : <MdFavoriteBorder size={size} />}
    </div>
  )
}


export default Favorite;
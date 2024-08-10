import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

export function Stars({ rating, ...rest }) {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
        stars.push(<IoIosStar key={i} />);
    }
    rating *= 10;
    if (rating % 10 >= 5) {
        stars.push(<IoIosStarHalf key={rating} />);
    }
    return <div {...rest}>{stars}</div>;
};
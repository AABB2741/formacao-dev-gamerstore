import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";
import type { ReactElement } from "react";
import React from "react";

interface RatingReviewProps {
  rating: number;
  size?: number;
}

export function RatingReview({ rating, size }: RatingReviewProps) {
  function getStars(rating: number) {
    const stars: ReactElement[] = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<IconStarFilled size={size ?? 12} />);
      } else if (rating >= i - 0.5) {
        stars.push(<IconStarHalfFilled size={size ?? 12} />);
      } else {
        stars.push(<IconStar size={size ?? 12} />);
      }
    }

    return stars;
  }

  return (
    <div className="flex gap-0 5 text-emerald-400">
      {getStars(rating).map((star, index) => (
        <React.Fragment key={index}>{star}</React.Fragment>
      ))}
    </div>
  );
}

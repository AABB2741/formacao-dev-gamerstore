import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export interface ReviewRatingProps {
  rating: number;
  size?: number;
}

export function ReviewRating({ rating, size }: ReviewRatingProps) {
  function getStars(rating: number) {
    const stars: any[] = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(
          <Ionicons key={i} name="star" size={16} style={styles.icone} />,
        );
      } else if (rating >= i - 0.5) {
        stars.push(
          <Ionicons key={i} name="star-half" size={16} style={styles.icone} />,
        );
      } else {
        stars.push(
          <Ionicons
            key={i}
            name="star-outline"
            size={16}
            style={styles.icone}
          />,
        );
      }
    }
    return stars;
  }

  return <View style={styles.container}>{getStars(rating)}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 0.5,
    color: "#34d399",
  },
  icone: {
    color: "#34d399",
  },
});

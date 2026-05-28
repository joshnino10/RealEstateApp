import { useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function Onboarding() {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const steps = [
    {
      id: "1",
      image: require("../../assets/images/onboarding 1.png"),
      title: [
        { text: "Welcome to\n ", color: "#1A934E" },
        "HomeConnect NG",
      ],
      subtitle:
        "Find verified apartments, secured & trusted practitioners across Nigeria.",
    },

    {
      id: "2",
      image: require("../../assets/images/onboarding 2.png"),
      title: [
        "Find ",
        { text: "verified\n ", color: "#1A934E" },
        "Apartments & Trusted Practitioners",
      ],
      subtitle:
        "Access Nigeria’s most reliable property marketplace. Every listing is vetted for your peace of mind.",
    },

    {
      id: "3",
      image: require("../../assets/images/onboarding 3.png"),
      title: [
        "Search, inspect\n and ",
        { text: "secure", color: "#1A934E" },
      ],
      subtitle:
        "Transparent listings designed for smooth decision making. Easy buying and renting.",
    },

    {
      id: "4",
      image: require("../../assets/images/onboarding 4.png"),
      title: [
        "Flexible ",
        { text: "Mortgages\n ", color: "#1A934E" },
        "Your path to\n Homeownership",
      ],
      subtitle:
        "Access affordable mortgage plans with trusted financial partners.",
    },

    {
      id: "5",
      image: require("../../assets/images/onboarding 5.png"),
      title: "Smart AI Builder",
      subtitle:
        "Design your dream home or apartment. Describe your preferences and let our AI find the perfect match.",
    },
  ];

  const handleNext = () => {
    if (currentIndex < steps.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
      });
    } else {
      setLoading(true);

      setTimeout(() => {
        router.replace("/auth/signin");
      }, 3000);
    }
  };

  const renderTitle = (title) => {
    if (Array.isArray(title)) {
      return title.map((item, index) =>
        typeof item === "string" ? (
          <Text key={index}>{item}</Text>
        ) : (
          <Text key={index} style={{ color: item.color }}>
            {item.text}
          </Text>
        )
      );
    }

    return title;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>

      <FlatList
        ref={flatListRef}
        data={steps}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / width
          );

          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />

            <Text style={styles.title}>
              {renderTitle(item.title)}
            </Text>

            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        )}
      />

      {/* Pagination */}
      <View style={styles.pagination}>
        {steps.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleNext}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <>
            <Text style={styles.buttonText}>
              {currentIndex === steps.length - 1
                ? "Get Started"
                : "Next"}
            </Text>

            <Ionicons
              name="arrow-forward-outline"
              size={24}
              color="white"
              style={{ marginLeft: 8 }}
            />
          </>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  skip: {
    textAlign: "right",
    paddingHorizontal: 16,
    color: "#B9B9B9",
    fontSize: 18,
    marginTop: 10,
  },

  slide: {
    width,
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
  },

  image: {
    width: width * 0.9,
    height: "75%",
    resizeMode: "contain",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#666",
    marginTop: 20,
    lineHeight: 24,
    paddingHorizontal: 10,
  },

  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  dot: {
    marginTop:20,
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 5,
  },

  activeDot: {
    width: 41,
    height: 7,
    backgroundColor: "#1A934E",
  },

  button: {
    flexDirection: "row",
    backgroundColor: "#1A934E",
    marginHorizontal: 20,
    marginBottom: 40,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
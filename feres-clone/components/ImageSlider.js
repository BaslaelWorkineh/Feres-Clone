import React, { useState, useEffect, useRef } from 'react';
import { View, Dimensions, Image, Animated } from 'react-native';
import friedChicken from '../assets/friedChicken.png';
import kitfo from '../assets/kitfo.jpg';
import shawarma from '../assets/shawarma.png';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [friedChicken, kitfo, shawarma]; // Array of imported images
  const vw = Dimensions.get('window').width;

  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 0.1,
          useNativeDriver: true,
        }).start();
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View >
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image
          style={{ width: vw - 20, height: 200, borderRadius: 10 }}
          source={images[currentIndex]}
        />
      </Animated.View>
    </View>
  );
};

export default ImageSlider;

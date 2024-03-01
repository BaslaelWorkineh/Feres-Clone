import React, { useState, useEffect } from 'react';
import { View, Dimensions, Image, Animated } from 'react-native';
import friedChicken from '../assets/friedChicken.png';
import kitfo from '../assets/kitfo.jpg';
import shawarma from '../assets/shawarma.png';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [friedChicken, kitfo, shawarma, shawarma, shawarma]; // Array of imported images
  const vw = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1

      );
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  useEffect(() => {
    Animated.spring(scrollX, {
      toValue: currentIndex * vw,
      useNativeDriver: true,
    }).start();
  }, [currentIndex, vw]);

  return (
    <View style={{ width: vw - 20, height: 200, borderRadius: 10, overflow: 'hidden' }}>
      <Animated.View
        style={{
          flexDirection: 'row',
          width: vw * images.length,
          transform: [{ translateX: Animated.multiply(scrollX, -1) }],
        }}
      >
        {images.map((image, index) => (
          <View style={{ width: vw, height: 200 }} key={index}>
            <Image
              source={image}
              style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

export default ImageSlider;

import React, { useState, useRef } from 'react';
import { View, PanResponder, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const backgroundColor = '#f0f0f0'; // Light gray background color
const eraseColor = '#f0f0f0'; // Same as background color for eraser

interface PathObject {
  path: string;
  color: string;
  strokeWidth: number;
}

const DrawingComponent = () => {
  const [currentPath, setCurrentPath] = useState<string>('');
  const [paths, setPaths] = useState<PathObject[]>([]);
  const [color, setColor] = useState<string>('black');
  const [strokeWidth, setStrokeWidth] = useState<number>(4);

  const svgRef = useRef(null);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (e) => {
      const { locationX, locationY } = e.nativeEvent;
      setCurrentPath(`M${locationX},${locationY}`);
    },
    onPanResponderMove: (e) => {
      const { locationX, locationY } = e.nativeEvent;
      setCurrentPath((currentPath) => `${currentPath} L${locationX},${locationY}`);
    },
    onPanResponderRelease: () => {
      setPaths((paths) => [...paths, { path: currentPath, color, strokeWidth }]);
      setCurrentPath('');
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={() => setStrokeWidth(2)}>
          <Text>Thin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setStrokeWidth(4)}>
          <Text>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setStrokeWidth(6)}>
          <Text>Thick</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setColor('black')}>
          <Text>Black</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setColor('red')}>
          <Text>Red</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setColor(eraseColor)}>
          <Text>Erase</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.drawingArea} {...panResponder.panHandlers}>
        <Svg ref={svgRef} style={{ width: screenWidth, height: screenHeight - 160 }}>
          {paths.map((path, index) => (
            <Path key={index} d={path.path} stroke={path.color} strokeWidth={path.strokeWidth} fill="none" />
          ))}
          <Path d={currentPath} stroke={color} strokeWidth={strokeWidth} fill="none" />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ddd',
    paddingVertical: 20,
    marginTop: 30, // Add margin at the top to lower the buttons
  },
  button: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  drawingArea: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    margin: 10,
  },
});

export default DrawingComponent;

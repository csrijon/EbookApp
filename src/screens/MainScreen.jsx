// MainScreen.jsx

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// Importing the hook to handle safe area (top notch, punch hole etc.)
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Dummy data for books
const booksTrending = [
  { id: 1, title: '7 Habits', image: require('../assets/image 7 (2).png') },
  { id: 2, title: 'Zero to One', image: require('../assets/image 7 (2).png') },
];

const booksFavourites = [
  { id: 3, title: 'Think and Grow Rich', image: require('../assets/image 7 (2).png') },
  { id: 4, title: '365 Days', image: require('../assets/image 7 (2).png') },
];

// Functional Component
const MainScreen = () => {
  // Using the hook to get the top & bottom padding
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.menuIcon}>☰</Text> {/* Menu icon */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ReadLink</Text>
        <TouchableOpacity>
          <Image source={require('../assets/image 7 (2).png')} style={styles.profileIcon} /> {/* Profile image */}
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scroll}>
        {/* Trending Books Section */}
        <Text style={styles.sectionTitle}>Trending Books</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {booksTrending.map((book) => (
            <View key={book.id} style={styles.bookCard}>
              <Image source={book.image} style={styles.bookImage} />
              {/* You can also show title if needed */}
              {/* <Text>{book.title}</Text> */}
            </View>
          ))}
        </ScrollView>

        {/* Favourites Section */}
        <View style={styles.favHeader}>
          <Text style={styles.sectionTitle}>Your Favourites</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {booksFavourites.map((book) => (
            <View key={book.id} style={styles.bookCard}>
              <Image source={book.image} style={styles.bookImage} />
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.navItem}>Explore</Text>
        <Text style={styles.navItem}>Library</Text>
      </View>
    </View>
  );
};

export default MainScreen;

// ✅ Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Main background
  },
  scroll: {
    paddingHorizontal: 16, // Padding on left/right
  },
  header: {
    height: 60,
    backgroundColor: '#4B2BAA', // Purple header
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    color: '#fff',
    fontSize: 24,
  },
  profileIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  bookCard: {
    backgroundColor: '#E7DFFF',
    borderRadius: 20,
    marginRight: 12,
    padding: 10,
    alignItems: 'center',
  },
  bookImage: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  favHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewAll: {
    color: '#6A00FF',
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#4B2BAA',
  },
  navItem: {
    color: '#fff',
    fontWeight: '500',
  },
});

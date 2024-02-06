import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexboxExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.sidebar}>
          <Text style={styles.sidebarText}>Sidebar</Text>
        </View>
        <View style={styles.mainContent}>
          <Text>Main Content</Text>
          <Text>Main Content</Text>
          <Text>Main Content</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex:1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 2,
    flexDirection: 'row',
  },
  sidebar: {
    flex: 2,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sidebarText: {
    fontSize: 16,
  },
  mainContent: {
    flex: 3,
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex : 1,
    backgroundColor: 'lightcoral',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 18,
  },
});

export default FlexboxExample;

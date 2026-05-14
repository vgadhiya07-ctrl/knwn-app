import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../theme/tokens';

export default function UniverseScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Universe</Text>
      <Text style={styles.body}>Your circle awaits.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  heading: {
    fontFamily: fonts.oswald700,
    fontSize: 28,
    color: colors.text,
    letterSpacing: 4,
    marginBottom: spacing.sm,
  },
  body: {
    fontFamily: fonts.cormorant400,
    fontSize: 18,
    color: colors.textMuted,
  },
});

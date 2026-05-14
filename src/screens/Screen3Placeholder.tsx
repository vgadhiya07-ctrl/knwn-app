import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useUser } from '../context/UserContext';
import { colors, fonts, spacing } from '../theme/tokens';

export default function Screen3Placeholder() {
  const { name, oneLiner } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Coming soon</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.liner}>{oneLiner}</Text>
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
  label: {
    fontFamily: fonts.dmSans300,
    fontSize: 12,
    color: colors.textMuted,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: spacing.lg,
  },
  name: {
    fontFamily: fonts.oswald700,
    fontSize: 28,
    color: colors.text,
    letterSpacing: 4,
    marginBottom: spacing.sm,
  },
  liner: {
    fontFamily: fonts.cormorant300,
    fontSize: 18,
    color: colors.textMuted,
    textAlign: 'center',
  },
});

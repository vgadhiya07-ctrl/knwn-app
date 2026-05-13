import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { colors, fonts, spacing } from '../theme/tokens';

const { width } = Dimensions.get('window');

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>KNWN*</Text>

        <Text style={styles.tagline}>
          This is a circle, not a network.
        </Text>

        <Text style={styles.subtitle}>
          Built for the relationships that actually move your career.
        </Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Create your Me Card</Text>
        </TouchableOpacity>
      </View>
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
  content: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 360,
  },
  logo: {
    fontFamily: fonts.oswald700,
    fontSize: 42,
    color: colors.text,
    letterSpacing: 6,
    marginBottom: spacing.xl,
    textTransform: 'uppercase',
  },
  tagline: {
    fontFamily: fonts.cormorant300,
    fontSize: 22,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 32,
    marginBottom: spacing.md,
  },
  subtitle: {
    fontFamily: fonts.dmSans300,
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: spacing.xxl,
    maxWidth: 280,
  },
  button: {
    backgroundColor: colors.gold,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: fonts.dmSans500,
    fontSize: 14,
    color: colors.background,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});

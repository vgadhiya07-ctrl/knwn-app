import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useUser } from '../context/UserContext';
import { colors, fonts, spacing } from '../theme/tokens';

type Props = NativeStackScreenProps<RootStackParamList, 'MeCardCreation'>;

export default function MeCardCreationScreen({ navigation }: Props) {
  const { name, oneLiner, setName, setOneLiner } = useUser();
  const [nameFocused, setNameFocused] = useState(false);
  const [linerFocused, setLinerFocused] = useState(false);

  const canProceed = name.trim().length > 0 && oneLiner.trim().length > 0;

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo */}
        <View style={styles.logoRow}>
          <Text style={styles.logoText}>
            KNWN<Text style={styles.logoAsterisk}>*</Text>
          </Text>
        </View>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Let's start with you</Text>
          <Text style={styles.subtitle}>Two things. That's it.</Text>
        </View>

        {/* Inputs */}
        <View style={styles.form}>
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Your name</Text>
            <TextInput
              style={[styles.input, nameFocused && styles.inputFocused]}
              placeholder="Your first name"
              placeholderTextColor={colors.textMuted}
              value={name}
              onChangeText={setName}
              maxLength={30}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              returnKeyType="next"
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>One-liner</Text>
            <TextInput
              style={[styles.input, linerFocused && styles.inputFocused]}
              placeholder="How you'd describe yourself in a few words"
              placeholderTextColor={colors.textMuted}
              value={oneLiner}
              onChangeText={setOneLiner}
              maxLength={60}
              onFocus={() => setLinerFocused(true)}
              onBlur={() => setLinerFocused(false)}
              returnKeyType="done"
            />
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={[styles.button, !canProceed && styles.buttonDisabled]}
          onPress={() => navigation.navigate('Screen3')}
          disabled={!canProceed}
          activeOpacity={0.85}
        >
          <Text style={[styles.buttonText, !canProceed && styles.buttonTextDisabled]}>
            Next
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
  },
  logoRow: {
    marginBottom: spacing.xxl,
  },
  logoText: {
    fontFamily: fonts.oswald700,
    fontSize: 16,
    color: colors.text,
    letterSpacing: 5,
  },
  logoAsterisk: {
    color: colors.gold,
  },
  header: {
    marginBottom: spacing.xxl,
  },
  title: {
    fontFamily: fonts.cormorant600,
    fontSize: 22,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontFamily: fonts.dmSans300,
    fontSize: 13,
    color: colors.textMuted,
  },
  form: {
    gap: spacing.lg,
    marginBottom: spacing.xxl,
  },
  fieldGroup: {
    gap: spacing.xs,
  },
  label: {
    fontFamily: fonts.dmSans400,
    fontSize: 12,
    color: colors.textMuted,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: 'rgba(201,168,76,0.08)',
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontFamily: fonts.dmSans400,
    fontSize: 15,
    color: colors.text,
  },
  inputFocused: {
    borderColor: 'rgba(201,168,76,0.25)',
  },
  button: {
    backgroundColor: colors.gold,
    paddingVertical: spacing.md,
    alignItems: 'center',
    borderRadius: 0,
  },
  buttonDisabled: {
    backgroundColor: 'rgba(201,168,76,0.25)',
  },
  buttonText: {
    fontFamily: fonts.oswald500,
    fontSize: 14,
    color: colors.background,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  buttonTextDisabled: {
    color: 'rgba(13,10,20,0.4)',
  },
});

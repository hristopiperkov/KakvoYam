import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import Screen, { screenStyles } from '../../components/Screen';
import { Colors, Radius, Spacing } from '../../constants/theme';

export default function HomeScreen() {
  return (
    <Screen
      eyebrow="KAKVOYAM"
      title="Your food diary"
      subtitle="A simple way to record what you eat over three days."
    >
      <View style={styles.heroCard}>
        <Text style={styles.heroEyebrow}>YOUR THREE-DAY DIARY</Text>
        <Text style={styles.heroTitle}>Small details make a clearer picture.</Text>
        <Text style={styles.heroText}>
          Record your meals, snacks and drinks. Your nutritionist can review the diary after you submit it.
        </Text>
        <Pressable
          accessibilityRole="button"
          onPress={() => router.push('/(tabs)/diary')}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        >
          <Text style={styles.buttonText}>Open my diary</Text>
        </Pressable>
      </View>

      <View>
        <Text style={screenStyles.sectionTitle}>How it works</Text>
        <View style={styles.stepRow}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>1</Text>
          </View>
          <View style={styles.stepCopy}>
            <Text style={styles.stepTitle}>Record what you eat</Text>
            <Text style={screenStyles.muted}>Add meals, snacks, drinks and quantities.</Text>
          </View>
        </View>
        <View style={styles.stepRow}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>2</Text>
          </View>
          <View style={styles.stepCopy}>
            <Text style={styles.stepTitle}>Complete three days</Text>
            <Text style={screenStyles.muted}>Save your progress as you go.</Text>
          </View>
        </View>
        <View style={styles.stepRow}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>3</Text>
          </View>
          <View style={styles.stepCopy}>
            <Text style={styles.stepTitle}>Submit for review</Text>
            <Text style={screenStyles.muted}>Your nutritionist will review the information.</Text>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    backgroundColor: Colors.surfaceMuted,
    borderColor: Colors.border,
    borderRadius: Radius.xl,
    borderWidth: 1,
    gap: Spacing.md,
    padding: Spacing.xl,
  },
  heroEyebrow: {
    color: Colors.primaryDark,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  heroTitle: {
    color: Colors.text,
    fontSize: 23,
    fontWeight: '800',
    lineHeight: 29,
  },
  heroText: {
    color: Colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: Colors.primary,
    borderRadius: Radius.pill,
    marginTop: Spacing.sm,
    paddingHorizontal: Spacing.xl,
    paddingVertical: 13,
  },
  buttonPressed: {
    opacity: 0.82,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  stepRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.lg,
  },
  stepNumber: {
    alignItems: 'center',
    backgroundColor: Colors.accent,
    borderRadius: Radius.pill,
    height: 32,
    justifyContent: 'center',
    width: 32,
  },
  stepNumberText: {
    color: Colors.primaryDark,
    fontSize: 14,
    fontWeight: '800',
  },
  stepCopy: {
    flex: 1,
    gap: 3,
  },
  stepTitle: {
    color: Colors.text,
    fontSize: 15,
    fontWeight: '700',
  },
});

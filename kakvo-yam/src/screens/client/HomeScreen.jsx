import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Screen, { screenStyles } from '../../components/common/Screen';
import { Colors, Radius, Spacing } from '../../constants/theme';

const steps = [
  {
    number: '01',
    title: 'Record what you eat',
    description: 'Add meals, snacks, drinks and quantities.',
  },
  {
    number: '02',
    title: 'Complete three days',
    description: 'Save your progress as you go.',
  },
  {
    number: '03',
    title: 'Submit for review',
    description: 'Your nutritionist can review your diary.',
  },
];

export default function HomeScreen() {
  return (
    <Screen
      eyebrow="KAKVOYAM  /  FOOD DIARY"
      title="Fuel your body."
      subtitle="Track what you eat. Build a clearer picture of your everyday habits."
    >
      <View style={styles.heroCard}>
        <View style={styles.heroTopRow}>
          <Text style={styles.heroEyebrow}>YOUR THREE-DAY DIARY</Text>
          <View style={styles.liveDot} />
        </View>

        <Text style={styles.heroTitle}>Small details. Clearer picture.</Text>
        <Text style={styles.heroText}>
          Record your meals, snacks and drinks. Your nutritionist can review
          everything after you submit it.
        </Text>

        <View style={styles.progressHeader}>
          <Text style={styles.progressLabel}>DIARY PROGRESS</Text>
          <Text style={styles.progressValue}>0 / 3 DAYS</Text>
        </View>
        <View style={styles.progressTrack}>
          <View style={styles.progressSegment} />
          <View style={styles.progressSegment} />
          <View style={styles.progressSegment} />
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push('/client/diary')}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        >
          <Text style={styles.buttonText}>Open my diary</Text>
          <Ionicons name="arrow-forward" size={18} color={Colors.black} />
        </Pressable>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>MEALS LOGGED</Text>
          <Text style={styles.statValue}>0</Text>
          <Text style={styles.statHint}>Across all days</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>DAYS COMPLETED</Text>
          <Text style={[styles.statValue, styles.greenValue]}>0/3</Text>
          <Text style={styles.statHint}>Three-day diary</Text>
        </View>
      </View>

      <View style={styles.stepsSection}>
        <View style={styles.sectionHeader}>
          <Text style={screenStyles.sectionTitle}>HOW IT WORKS</Text>
          <Text style={styles.sectionHint}>3 SIMPLE STEPS</Text>
        </View>

        {steps.map((step) => (
          <View key={step.number} style={styles.stepRow}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{step.number}</Text>
            </View>
            <View style={styles.stepCopy}>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={screenStyles.muted}>{step.description}</Text>
            </View>
          </View>
        ))}
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
  heroTopRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heroEyebrow: {
    color: Colors.primary,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.4,
  },
  liveDot: {
    backgroundColor: Colors.primary,
    borderRadius: Radius.pill,
    height: 8,
    width: 8,
  },
  heroTitle: {
    color: Colors.text,
    fontSize: 25,
    fontWeight: '900',
    letterSpacing: -0.5,
    lineHeight: 31,
  },
  heroText: {
    color: Colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
  },
  progressHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.sm,
  },
  progressLabel: {
    color: Colors.textMuted,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  progressValue: {
    color: Colors.text,
    fontSize: 11,
    fontWeight: '800',
  },
  progressTrack: {
    flexDirection: 'row',
    gap: 6,
  },
  progressSegment: {
    backgroundColor: '#41434A',
    borderRadius: Radius.pill,
    flex: 1,
    height: 7,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: Colors.primary,
    borderRadius: Radius.pill,
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.sm,
    paddingHorizontal: Spacing.xl,
    paddingVertical: 14,
  },
  buttonPressed: {
    opacity: 0.78,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: '900',
  },
  statsRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  statCard: {
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
    borderRadius: Radius.lg,
    borderWidth: 1,
    flex: 1,
    gap: Spacing.xs,
    padding: Spacing.lg,
  },
  statLabel: {
    color: Colors.textMuted,
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  statValue: {
    color: Colors.text,
    fontSize: 29,
    fontWeight: '900',
    letterSpacing: -0.8,
  },
  greenValue: {
    color: Colors.primary,
  },
  statHint: {
    color: Colors.textMuted,
    fontSize: 11,
  },
  stepsSection: {
    gap: Spacing.md,
  },
  sectionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionHint: {
    color: Colors.textMuted,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  stepRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Spacing.md,
  },
  stepNumber: {
    alignItems: 'center',
    backgroundColor: Colors.accent,
    borderColor: '#48502E',
    borderRadius: Radius.md,
    borderWidth: 1,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  stepNumberText: {
    color: Colors.primary,
    fontSize: 12,
    fontWeight: '900',
  },
  stepCopy: {
    flex: 1,
    gap: 3,
  },
  stepTitle: {
    color: Colors.text,
    fontSize: 15,
    fontWeight: '800',
  },
});

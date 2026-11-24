import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import Screen, { screenStyles } from '../../components/Screen';
import { Colors, Radius, Spacing } from '../../constants/theme';

const diaryDays = [
  { number: '01', title: 'Day 1', subtitle: 'Breakfast · Lunch · Dinner · Snacks' },
  { number: '02', title: 'Day 2', subtitle: 'Breakfast · Lunch · Dinner · Snacks' },
  { number: '03', title: 'Day 3', subtitle: 'Breakfast · Lunch · Dinner · Snacks' },
];

export default function DiaryScreen() {
  return (
    <Screen
      eyebrow="YOUR FOOD LOG"
      title="Three days. One picture."
      subtitle="Record what you eat across three days. Your progress can be saved as you go."
    >
      <View style={styles.summaryCard}>
        <View style={styles.summaryTop}>
          <Text style={styles.summaryLabel}>DIARY STATUS</Text>
          <View style={styles.statusPill}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>NOT STARTED</Text>
          </View>
        </View>
        <View style={styles.summaryBottom}>
          <View>
            <Text style={styles.summaryValue}>0<Text style={styles.summaryTotal}> / 3</Text></Text>
            <Text style={styles.summaryCaption}>DAYS COMPLETED</Text>
          </View>
          <Ionicons name="calendar-outline" size={34} color={Colors.primary} />
        </View>
        <View style={styles.progressTrack}>
          <View style={styles.progressSegment} />
          <View style={styles.progressSegment} />
          <View style={styles.progressSegment} />
        </View>
      </View>

      <View style={styles.daysSection}>
        <View style={styles.sectionHeader}>
          <Text style={screenStyles.sectionTitle}>YOUR DIARY DAYS</Text>
          <Text style={styles.sectionHint}>3 DAYS</Text>
        </View>

        {diaryDays.map((day) => (
          <View key={day.number} style={styles.dayCard}>
            <View style={styles.dayNumber}>
              <Text style={styles.dayNumberText}>{day.number}</Text>
            </View>
            <View style={styles.dayCopy}>
              <Text style={styles.dayTitle}>{day.title}</Text>
              <Text style={styles.daySubtitle}>{day.subtitle}</Text>
            </View>
            <View style={styles.dayStatus}>
              <View style={styles.smallStatusDot} />
              <Text style={styles.dayStatusText}>PENDING</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.tipCard}>
        <Ionicons name="information-circle-outline" size={20} color={Colors.primary} />
        <Text style={styles.tipText}>
          Include meals, snacks, drinks and approximate quantities. Every detail helps create a clearer food diary.
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  summaryCard: {
    backgroundColor: Colors.surfaceMuted,
    borderColor: Colors.border,
    borderRadius: Radius.xl,
    borderWidth: 1,
    gap: Spacing.lg,
    padding: Spacing.xl,
  },
  summaryTop: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryLabel: {
    color: Colors.textMuted,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.1,
  },
  statusPill: {
    alignItems: 'center',
    backgroundColor: '#30332A',
    borderRadius: Radius.pill,
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  statusDot: {
    backgroundColor: Colors.textMuted,
    borderRadius: Radius.pill,
    height: 6,
    width: 6,
  },
  statusText: {
    color: Colors.textMuted,
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.6,
  },
  summaryBottom: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryValue: {
    color: Colors.primary,
    fontSize: 38,
    fontWeight: '900',
    letterSpacing: -1,
  },
  summaryTotal: {
    color: Colors.textMuted,
    fontSize: 21,
  },
  summaryCaption: {
    color: Colors.textMuted,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
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
  daysSection: {
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
  dayCard: {
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
    borderRadius: Radius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    gap: Spacing.md,
    padding: Spacing.lg,
  },
  dayNumber: {
    alignItems: 'center',
    backgroundColor: Colors.accent,
    borderColor: '#48502E',
    borderRadius: Radius.md,
    borderWidth: 1,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  dayNumberText: {
    color: Colors.primary,
    fontSize: 13,
    fontWeight: '900',
  },
  dayCopy: {
    flex: 1,
    gap: 5,
  },
  dayTitle: {
    color: Colors.text,
    fontSize: 15,
    fontWeight: '800',
  },
  daySubtitle: {
    color: Colors.textMuted,
    fontSize: 10,
    lineHeight: 15,
  },
  dayStatus: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  smallStatusDot: {
    backgroundColor: Colors.textMuted,
    borderRadius: Radius.pill,
    height: 5,
    width: 5,
  },
  dayStatusText: {
    color: Colors.textMuted,
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 0.4,
  },
  tipCard: {
    alignItems: 'flex-start',
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
    borderRadius: Radius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    gap: Spacing.md,
    padding: Spacing.lg,
  },
  tipText: {
    color: Colors.textMuted,
    flex: 1,
    fontSize: 12,
    lineHeight: 19,
  },
});

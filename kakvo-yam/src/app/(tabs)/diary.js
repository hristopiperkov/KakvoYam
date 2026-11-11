import { StyleSheet, Text, View } from 'react-native';
import Screen, { screenStyles } from '../../components/Screen';
import { Colors, Radius, Spacing } from '../../constants/theme';

const diaryDays = ['Day 1', 'Day 2', 'Day 3'];

export default function DiaryScreen() {
  return (
    <Screen
      eyebrow="MY DIARY"
      title="Three days of food"
      subtitle="Your diary will be organised by day. You can save your progress as you go."
    >
      <View style={styles.notice}>
        <Text style={styles.noticeTitle}>Your diary is not started yet</Text>
        <Text style={screenStyles.muted}>
          The next step will let you create a diary and add meals to each day.
        </Text>
      </View>

      <View style={styles.dayList}>
        {diaryDays.map((day, index) => (
          <View key={day} style={styles.dayCard}>
            <View style={styles.dayNumber}>
              <Text style={styles.dayNumberText}>{index + 1}</Text>
            </View>
            <View style={styles.dayCopy}>
              <Text style={styles.dayTitle}>{day}</Text>
              <Text style={styles.daySubtitle}>Breakfast · Lunch · Dinner · Snacks</Text>
            </View>
            <Text style={styles.status}>Not started</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  notice: {
    backgroundColor: Colors.surfaceMuted,
    borderColor: Colors.border,
    borderRadius: Radius.lg,
    borderWidth: 1,
    gap: Spacing.sm,
    padding: Spacing.lg,
  },
  noticeTitle: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  dayList: {
    gap: Spacing.md,
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
    borderRadius: Radius.pill,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  dayNumberText: {
    color: Colors.primaryDark,
    fontSize: 15,
    fontWeight: '800',
  },
  dayCopy: {
    flex: 1,
    gap: 4,
  },
  dayTitle: {
    color: Colors.text,
    fontSize: 15,
    fontWeight: '700',
  },
  daySubtitle: {
    color: Colors.textMuted,
    fontSize: 11,
  },
  status: {
    color: Colors.textMuted,
    fontSize: 11,
    fontWeight: '600',
  },
});

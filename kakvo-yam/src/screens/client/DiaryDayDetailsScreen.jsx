import { StyleSheet, Text, View } from 'react-native';
import Screen from '../../components/common/Screen';
import { Colors, Radius, Spacing } from '../../constants/theme';

export default function DiaryDayDetailsScreen({ dayId }) {
  const dayNumber = Number(dayId);
  const title = Number.isInteger(dayNumber) && dayNumber >= 1 && dayNumber <= 3
    ? `Day ${dayNumber}`
    : 'Diary day';

  return (
    <Screen
      eyebrow="YOUR FOOD LOG"
      title={`${title}.`}
      subtitle="Your meals and food entries for this day will appear here."
    >
      <View style={styles.card}>
        <Text style={styles.label}>DAY DETAILS</Text>
        <Text style={styles.text}>Food entry management is the next development step.</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: Colors.surface, borderColor: Colors.border, borderRadius: Radius.lg, borderWidth: 1, gap: Spacing.sm, padding: Spacing.xl },
  label: { color: Colors.primary, fontSize: 11, fontWeight: '900', letterSpacing: 1 },
  text: { color: Colors.textMuted, fontSize: 14, lineHeight: 21 },
});

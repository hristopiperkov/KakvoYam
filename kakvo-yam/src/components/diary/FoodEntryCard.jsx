import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors, Radius, Spacing } from '../../constants/theme';

export default function FoodEntryCard({ entry, onPress }) {
  const content = (
    <View style={styles.card}>
      <View style={styles.copy}>
        <Text style={styles.name}>{entry.food_name}</Text>
        <Text style={styles.meta}>{entry.meal_type?.replace(/_/g, ' ')}</Text>
      </View>
      <Text style={styles.quantity}>{entry.quantity} {entry.unit}</Text>
    </View>
  );

  if (!onPress) return content;
  return <Pressable onPress={onPress}>{content}</Pressable>;
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
    borderRadius: Radius.md,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Spacing.md,
  },
  copy: { flex: 1, gap: 4 },
  name: { color: Colors.text, fontSize: 14, fontWeight: '700' },
  meta: { color: Colors.textMuted, fontSize: 11, textTransform: 'capitalize' },
  quantity: { color: Colors.primary, fontSize: 13, fontWeight: '800' },
});

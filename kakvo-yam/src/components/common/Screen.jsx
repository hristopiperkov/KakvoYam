import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Spacing } from '../../constants/theme';

export default function Screen({ eyebrow, title, subtitle, children }) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
        <View style={styles.heading}>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

export const screenStyles = StyleSheet.create({
  sectionTitle: {
    color: Colors.text,
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 0.1,
    marginBottom: Spacing.md,
  },
  muted: {
    color: Colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
  },
  card: {
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
    borderRadius: 20,
    borderWidth: 1,
    padding: Spacing.xl,
  },
});

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  content: {
    flexGrow: 1,
    gap: Spacing.xl,
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
    paddingBottom: 48,
  },
  eyebrow: {
    color: Colors.primary,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.8,
  },
  heading: {
    gap: Spacing.sm,
  },
  title: {
    color: Colors.text,
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: -0.8,
    lineHeight: 38,
  },
  subtitle: {
    color: Colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
});

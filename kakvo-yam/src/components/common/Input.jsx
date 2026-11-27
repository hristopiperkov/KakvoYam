import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors, Radius, Spacing } from '../../constants/theme';

export default function Input({ label, error, style, ...inputProps }) {
  return (
    <View style={[styles.container, style]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        placeholderTextColor={Colors.textMuted}
        selectionColor={Colors.primary}
        style={[styles.input, error && styles.inputError]}
        {...inputProps}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: Spacing.xs },
  label: {
    color: Colors.textMuted,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
    borderRadius: Radius.md,
    borderWidth: 1,
    color: Colors.text,
    fontSize: 15,
    minHeight: 50,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  inputError: { borderColor: Colors.danger },
  error: { color: Colors.danger, fontSize: 12 },
});

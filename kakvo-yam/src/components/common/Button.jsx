import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { Colors, Radius, Spacing } from '../../constants/theme';

export default function Button({
  title,
  onPress,
  loading = false,
  disabled = false,
  variant = 'primary',
  style,
}) {
  const isSecondary = variant === 'secondary';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: disabled || loading }}
      disabled={disabled || loading}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isSecondary && styles.secondary,
        pressed && styles.pressed,
        (disabled || loading) && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={isSecondary ? Colors.primary : Colors.black} />
      ) : (
        <Text style={[styles.label, isSecondary && styles.secondaryLabel]}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: Radius.pill,
    minHeight: 50,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
  },
  secondary: {
    backgroundColor: Colors.surfaceMuted,
    borderColor: Colors.border,
    borderWidth: 1,
  },
  label: { color: Colors.black, fontSize: 14, fontWeight: '900' },
  secondaryLabel: { color: Colors.text },
  pressed: { opacity: 0.82 },
  disabled: { opacity: 0.55 },
});

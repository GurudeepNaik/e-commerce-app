const tintColorLight = "#0FA4AF"; // Light teal as primary tint color
const tintColorDark = "#AFDDE5"; // Very light teal for dark mode tint

export const Colors = {
  light: {
    tint: tintColorLight, // Light teal as primary tint
    icon: "#024950", // Blue-green for icons
    tabIconDefault: "#024950", // Blue-green for unselected tab icons
    tabIconSelected: tintColorLight, // Light teal for selected tab icons
    text: "#003135", // Dark teal for text in light mode

    primary: "#003135", // Dark teal
    secondary: "#024950", // Blue-green
    accent: "#964734", // Reddish brown
    neutral: "#0FA4AF", // Light teal
    background: "#AFDDE5", // Very light teal
    muted: "#024950", // Blue-green
    primaryForeground: "#AFDDE5", // Light teal (Foreground for primary)
    secondaryForeground: "#AFDDE5", // Light teal (Foreground for secondary)
    accentForeground: "#AFDDE5", // Light teal (Foreground for accent)
    mutedForeground: "#AFDDE5", // Light teal (Foreground for muted)
    neutralForeground: "#003135", // Dark teal (Foreground for neutral)
    headerBackground: "#003135", // Dark teal (Header background)
    headerText: "#AFDDE5", // Light teal (Header text)
  },
  dark: {
    tint: tintColorDark, // Very light teal for primary tint in dark mode
    icon: "#964734", // Reddish brown for icons in dark mode
    tabIconDefault: "#964734", // Reddish brown for unselected tab icons
    tabIconSelected: tintColorDark, // Very light teal for selected tab icons
    text: "#AFDDE5", // Very light teal for text in dark mode

    primary: "#AFDDE5", // Very light teal
    secondary: "#003135", // Dark teal
    accent: "#964734", // Reddish brown
    neutral: "#0FA4AF", // Light teal
    background: "#003135", // Dark teal for background in dark mode
    muted: "#024950", // Blue-green
    primaryForeground: "#003135", // Dark teal (Foreground for primary)
    secondaryForeground: "#AFDDE5", // Light teal (Foreground for secondary)
    accentForeground: "#AFDDE5", // Light teal (Foreground for accent)
    mutedForeground: "#AFDDE5", // Light teal (Foreground for muted)
    neutralForeground: "#AFDDE5", // Light teal (Foreground for neutral)
    headerBackground: "#003135", // Dark teal (Header background)
    headerText: "#AFDDE5", // Light teal (Header text)
  },
};

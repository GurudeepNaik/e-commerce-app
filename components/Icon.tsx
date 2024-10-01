import { cn } from "@/utils/cn";
import FeatherIcons from "@expo/vector-icons/Feather";
import IonIcons from "@expo/vector-icons/Ionicons";
import { type ComponentProps } from "react";
import { ClassNameValue } from "tailwind-merge";

type FeatherIconProps = ComponentProps<typeof FeatherIcons>;
type IonIconProps = ComponentProps<typeof IonIcons>;

interface CustomIconProps {
  family?: "Feather" | "Ionicons";
  name: FeatherIconProps["name"] | IonIconProps["name"]; // Union of both families' names
  size?: number;
  style?: any;
  color?: string;
  className?: ClassNameValue;
}

export function Icon({
  family = "Ionicons",
  name,
  size = 28,
  style,
  color,
  className,
  ...rest
}: CustomIconProps) {
  const IconComponent = family === "Ionicons" ? IonIcons : FeatherIcons;

  return (
    <IconComponent
      name={name as any}
      size={size}
      style={[{ marginBottom: -3 }, style]}
      color={color}
      className={cn(className)}
      {...rest}
    />
  );
}

import React, { ReactNode } from "react";
import { ThemedView } from "./ThemedView";
import { cn } from "@/utils/cn";
import { ClassNameValue } from "tailwind-merge";

export const Screen = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: ClassNameValue;
}) => {
  return (
    <ThemedView className={cn("flex-1 items-center justify-center", className)}>
      {children}
    </ThemedView>
  );
};

import React from "react";
import {
  Clock,
  Brain,
  ShieldPlus,
  HeartPulse,
  Activity,
  UserCheck,
  Utensils,
  Pill,
  Home,
  Users,
  Sparkles,
  HelpCircle,
} from "lucide-react";

// Map text strings from Contentful to actual Lucide Icon components
const ICON_MAP: Record<string, React.ElementType> = {
  Clock,
  Brain,
  ShieldPlus,
  HeartPulse,
  Activity,
  UserCheck,
  Utensils,
  Pill,
  Home,
  Users,
  Sparkles,
};

interface ServiceIconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function ServiceIcon({
  name,
  size = 26,
  className = "",
}: ServiceIconProps) {
  const IconComponent = ICON_MAP[name] || HelpCircle;
  return <IconComponent size={size} strokeWidth={1.75} className={className} />;
}

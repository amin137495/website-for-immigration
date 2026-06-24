import {
  GraduationCap,
  Briefcase,
  FileCheck2,
  Home,
  Phone,
  Clock,
  MapPin,
  Globe,
  CheckCircle2,
  Star,
  Heart,
  Award,
  type LucideIcon,
} from 'lucide-react'

export const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Briefcase,
  FileCheck2,
  Home,
  Phone,
  Clock,
  MapPin,
  Globe,
  CheckCircle2,
  Star,
  Heart,
  Award,
}

export const iconOptions = Object.keys(iconMap)

export function resolveIcon(name: string): LucideIcon {
  return iconMap[name] ?? Globe
}

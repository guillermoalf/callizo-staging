import {
  Banknote, Users, Package, Filter, Sparkles, TrendingUp, TrendingDown, Minus,
  FileCheck, FlaskConical, AlertTriangle, Lightbulb, RefreshCw, LayoutDashboard,
  Settings, HelpCircle, Search, Calendar, Bell, Command, CheckCircle2, Target,
  Clock, Truck, Shield, Zap, BarChart3, Activity, Newspaper, Factory, Download,
  Plus, MoreHorizontal, Eye, MessageSquare, Send, UserX, History, Receipt,
  UserPlus, FileText, Percent, MessageSquareDashed, CalendarClock, Scale, Flag,
  Award, RotateCcw, Banknote as BanknoteAlt, Flame, PhoneOff, Package2,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the reference's Tabler icon keys (sans the `ti-` prefix) to lucide-react
 * equivalents, so data modules can stay icon-library-agnostic.
 */
const ICONS: Record<string, LucideIcon> = {
  // shell / nav
  "layout-dashboard": LayoutDashboard,
  users:              Users,
  "user-off":         UserX,
  history:            History,
  "chart-funnel":     Filter,
  "file-invoice":     FileText,
  "user-plus":        UserPlus,
  receipt:            Receipt,
  flask:              FlaskConical,
  package:            Package,
  sparkles:           Sparkles,
  settings:           Settings,
  help:               HelpCircle,
  search:             Search,
  calendar:           Calendar,
  bell:               Bell,
  command:            Command,
  // kpis / deltas
  cash:               Banknote,
  "cash-off":         BanknoteAlt,
  "circle-check":     CheckCircle2,
  refresh:            RefreshCw,
  "rotate-2":         RotateCcw,
  "alert-triangle":   AlertTriangle,
  target:             Target,
  "clock-pause":      Clock,
  "clock-exclamation":Clock,
  "calendar-due":     CalendarClock,
  clock:              Clock,
  "truck-delivery":   Truck,
  "shield-half":      Shield,
  bolt:               Zap,
  "trending-up":      TrendingUp,
  "trending-down":    TrendingDown,
  minus:              Minus,
  percentage:         Percent,
  award:              Award,
  scale:              Scale,
  flag:               Flag,
  flame:              Flame,
  "phone-off":        PhoneOff,
  "message-off":      MessageSquareDashed,
  "package-2":        Package2,
  // activity / insights / automations
  "file-check":           FileCheck,
  bulb:                   Lightbulb,
  "report-analytics":     BarChart3,
  "chart-arrows":         Activity,
  "refresh-dot":          RefreshCw,
  news:                   Newspaper,
  "building-factory-2":   Factory,
  "trending-down-2":      TrendingDown,
  // buttons
  filter:   Filter,
  download: Download,
  plus:     Plus,
  dots:     MoreHorizontal,
  eye:      Eye,
  message:  MessageSquare,
  send:     Send,
};

export function Icon({
  name,
  className,
  size,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  const Cmp = ICONS[name] ?? HelpCircle;
  return <Cmp className={className} size={size} strokeWidth={strokeWidth} aria-hidden />;
}

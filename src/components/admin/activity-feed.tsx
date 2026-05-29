import { ACTIVITY, type ActivityColor } from "@/content/admin/activity";
import { Icon } from "./icon";

const ICON_TONE: Record<ActivityColor, string> = {
  blue: "bg-admin-blue-50 text-admin-blue",
  green: "bg-admin-green-50 text-admin-green",
  amber: "bg-admin-amber-50 text-admin-amber",
  red: "bg-admin-red-50 text-admin-red",
  purple: "bg-admin-purple-50 text-admin-purple",
};

export function ActivityFeed() {
  return (
    <div className="flex flex-col">
      {ACTIVITY.map((a, i) => (
        <div
          key={i}
          className="flex items-start gap-3 border-b-[0.5px] border-admin-border py-3 last:border-b-0"
        >
          <div className={`flex size-[30px] flex-shrink-0 items-center justify-center rounded-lg ${ICON_TONE[a.color]}`}>
            <Icon name={a.icon} size={15} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-medium text-admin-gray-800">{a.title}</div>
            <div className="mt-0.5 text-[11.5px] text-admin-gray-500">{a.meta}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

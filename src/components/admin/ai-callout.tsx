import { Icon } from "./icon";

export function AiCallout({
  title,
  children,
  action,
}: {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 rounded-[10px] border-[0.5px] border-[#b9d5ee] bg-admin-blue-50 px-4 py-3.5">
      <div className="flex size-7 flex-shrink-0 items-center justify-center rounded-lg bg-admin-blue text-white">
        <Icon name="sparkles" size={16} />
      </div>
      <div className="flex-1">
        <div className="mb-[3px] text-[12px] font-bold uppercase tracking-[0.08em] text-admin-blue">
          {title}
        </div>
        <div className="text-[13px] italic text-admin-gray-700">{children}</div>
      </div>
      {action}
    </div>
  );
}

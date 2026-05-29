import { Card } from "./card";
import { Icon } from "./icon";

export function StubView({ icon, title }: { icon: string; title: string }) {
  return (
    <Card className="flex flex-col items-center gap-3 py-16 text-center">
      <div className="flex size-12 items-center justify-center rounded-xl bg-admin-gray-100 text-admin-gray-500">
        <Icon name={icon} size={22} />
      </div>
      <div className="text-[15px] font-semibold">{title}</div>
      <div className="max-w-[42ch] text-[13px] text-admin-gray-500">
        Esta vista se completará en la próxima iteración. El layout, la navegación y los datos ya
        están conectados.
      </div>
    </Card>
  );
}

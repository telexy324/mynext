import { DashboardNav } from "@/components/dashboard-nav";
import { cn } from "@/lib/utils";
import {getPayloadClient} from "@/get-payload";

export default async function Sidebar() {
  const payload = await getPayloadClient()

  const parsedQueryOpts: Record<
    string,
    { equals: string }
  > = {}

  const {
    docs: items,
  } = await payload.find({
    collection: 'navItems',
  })

  return (
    <nav
      className={cn(`relative hidden h-screen border-r pt-16 md:block w-72`)}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Overview
            </h2>
            <DashboardNav items={items} />
          </div>
        </div>
      </div>
    </nav>
  );
}

import { DesktopSidebar } from "./desktop-sidebar";
import MobileFooter from "./mobile-footer";

export async function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

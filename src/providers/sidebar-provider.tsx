import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import {
  SidebarInset,
  SidebarProvider as Sidebar,
} from "@/components/ui/sidebar";
import { SidebarProviderProps } from "@/interfaces";
import { primaryFontClassName, secondaryFont } from "@/lib/fonts";

export default function SidebarProvider({ children }: SidebarProviderProps) {
  return (
    <Sidebar
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div
            className={`@container/main flex flex-1 flex-col gap-2 ${primaryFontClassName} 
            ${secondaryFont.variable} `}
          >
            {children}
          </div>
        </div>
      </SidebarInset>
    </Sidebar>
  );
}

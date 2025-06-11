import * as React from "react";
import { IconInnerShadowTop } from "@tabler/icons-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import sidebarLib from "@/lib/sidebar.lib";
import { NavPrimary } from "./nav-primary";
import { NavSecondary } from "./nav-secondary";
import { NavDefault } from "./nav-default";
import { NavUser } from "./nav-user";
import { primaryFontClassName } from "@/lib/fonts";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="offcanvas"
      {...props}
      className={primaryFontClassName}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <div>
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base tracking-widest font-semibold">
                  MODULITH
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavPrimary items={sidebarLib.primary} />
        <NavSecondary items={sidebarLib.secondary} />
        <NavDefault items={sidebarLib.default} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            avatar:
              "https://i1.sndcdn.com/avatars-000379127990-n57xxv-t1080x1080.jpg",
            email: "info@modulith.com",
            name: "Modulith",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}

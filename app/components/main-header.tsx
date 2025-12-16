import { SquareArrowOutUpRightIcon } from "lucide-react";
import { Link, useMatch } from "react-router";

import { Container } from "@/components/common/container";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function MainHeader() {
  const matchedExamplePage = useMatch("/examples/*");

  if (matchedExamplePage) {
    return null;
  }

  return (
    <div className="border-border bg-background border-b">
      <Container className="flex h-16 items-center">
        <p className="text-accent-foreground/90 mr-auto text-xl font-semibold">
          <Link to="/">Emiro UI</Link>
        </p>
        <NavigationMenu className="hidden lg:block" viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/docs/getting-started/">Getting started</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/docs/components/">Components</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/docs/examples/">Examples</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href="https://github.com/ukasyah-dev/emiro-ui"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source code
                  <SquareArrowOutUpRightIcon className="text-accent-foreground/70 -mb-0.5 size-3.5 stroke-2" />
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Container>
    </div>
  );
}

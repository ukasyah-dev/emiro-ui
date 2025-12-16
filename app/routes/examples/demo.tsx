import { useState } from "react";
import { sentenceCase } from "change-case";
import fs from "fs/promises";
import { ArrowLeftIcon, CodeXmlIcon, EyeIcon } from "lucide-react";
import { data, useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { Route } from "./+types/demo";
import { highlighter } from "../../../highlighter";
import { Container } from "@/components/common/container";

export async function loader({ params }: Route.LoaderArgs) {
  const folderPath = `./app/examples/${params.group}/${params.slug}`;
  const files: { name: string; content: string }[] = [];

  try {
    const filePaths = await fs.readdir(folderPath);

    for (const filePath of filePaths) {
      const file = await fs.readFile(`${folderPath}/${filePath}`, "utf-8");
      const content = file
        .replace(`"@"`, `"emiro-ui"`)
        .replaceAll("\t", "  ")
        .trimEnd();

      files.push({
        name: filePath,
        content: highlighter.codeToHtml(content, {
          lang: "tsx",
          theme: "github-light",
        }),
      });
    }
  } catch (err) {
    console.error(err);
  }

  return { files };
}

export async function clientLoader({
  serverLoader,
  params,
}: Route.ClientLoaderArgs) {
  const serverData = await serverLoader();

  const filePath = `/app/examples/${params.group}/${params.slug}/index.tsx`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const examples: any = import.meta.glob("/app/examples/**/index.tsx");

  for (const path in examples) {
    if (path === filePath) {
      const parts = path.split("/");
      const doc = await examples[path]();
      const Component = doc.default;
      return {
        name: sentenceCase(parts[parts.length - 2]),
        component: Component,
        ...serverData,
      };
    }
  }

  throw data(null, { status: 404 });
}
clientLoader.hydrate = true as const;

export default function Demo({ loaderData }: Route.ComponentProps) {
  const Component = "component" in loaderData ? loaderData.component : null;
  const files = loaderData.files;
  const navigate = useNavigate();
  const [displayTabs, setDisplayTabs] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      {tabIndex === 0 && Component && <Component />}
      {tabIndex === 1 && (
        <Container className="h-full max-w-3xl py-12">
          <Tabs defaultValue={files.length > 0 ? files[0].name : undefined}>
            <TabsList className="mb-2">
              {files.map((file) => (
                <TabsTrigger key={file.name} value={file.name}>
                  {file.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {files.map((file) => (
              <TabsContent key={file.name} value={file.name}>
                <div
                  className="prose prose-headings:font-semibold prose-pre:border prose-pre:border-border/50 prose-pre:bg-accent/50! relative w-full max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: file.content,
                  }}
                ></div>
              </TabsContent>
            ))}
          </Tabs>
        </Container>
      )}

      <div
        className={cn(
          "border-border bg-background fixed top-1/2 z-10 -translate-y-1/2 rounded-r-md border p-1",
          "transition-all",
          displayTabs && "left-0",
          !displayTabs && "-left-10",
        )}
        onPointerEnter={() => setDisplayTabs(true)}
        onPointerLeave={() => setDisplayTabs(false)}
      >
        <div className="flex flex-col gap-0.5">
          <Button size="icon" variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeftIcon />
          </Button>
          <Button size="icon" variant="ghost" onClick={() => setTabIndex(0)}>
            <EyeIcon />
          </Button>
          <Button size="icon" variant="ghost" onClick={() => setTabIndex(1)}>
            <CodeXmlIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

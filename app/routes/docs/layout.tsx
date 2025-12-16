import { Outlet } from "react-router";

export default function DocsLayout() {
  return (
    <div className="prose prose-slate prose-headings:font-semibold prose-pre:border prose-pre:border-border/50 prose-pre:bg-accent/50! prose-a:underline-offset-2 mx-auto w-full max-w-3xl py-12">
      <Outlet />
    </div>
  );
}

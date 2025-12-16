import { sentenceCase } from "change-case";
import { Link } from "react-router";

import type { Route } from "./+types/examples";

export function loader() {
  const imports = import.meta.glob("/app/examples/**/index.tsx");
  const examples = [];

  for (const path in imports) {
    const parts = path.split("/");
    const group = parts[parts.length - 3];
    const slug = parts[parts.length - 2];

    examples.push({ slug: `${group}/${slug}`, name: sentenceCase(slug) });
  }

  return {
    examples,
  };
}

export default function Examples({ loaderData }: Route.ComponentProps) {
  const { examples } = loaderData;

  return (
    <>
      <h1>Examples</h1>

      <ul>
        {examples.map(({ name, slug }, i) => (
          <li key={i}>
            <Link to={`/examples/${slug}/`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

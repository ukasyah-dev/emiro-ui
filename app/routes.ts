import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    ...prefix("docs", [
      layout("routes/docs/layout.tsx", [
        route("getting-started", "routes/docs/getting-started.mdx"),
        route("components", "routes/docs/components.tsx"),
        route("examples", "routes/docs/examples.tsx"),
      ]),
    ]),
    route("examples/:group/:slug", "routes/examples/demo.tsx"),
  ]),
] satisfies RouteConfig;

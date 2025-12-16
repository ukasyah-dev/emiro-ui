import { Container } from "@/components/common/container";
import { SquareGridPattern } from "@/components/pattern/square-grid-pattern";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Container className="relative">
      <SquareGridPattern className="absolute left-1/2 -z-10 -mt-24 w-5/6 -translate-x-1/2" />

      {/* Hero */}
      <div className="py-40 text-center">
        <h1 className="text-5xl leading-14 font-semibold">
          Reusable component library for React
        </h1>
        <p className="text-muted-foreground mx-auto mt-4.5 max-w-3/5 text-xl leading-8">
          Now you can focus on building great things and turning ideas into
          reality without ever worrying about the UI.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button size="lg" asChild>
            <Link to="/docs/getting-started/">Get started</Link>
          </Button>
          <Button size="lg" variant="outline">
            Browse components
          </Button>
        </div>
      </div>
    </Container>
  );
}

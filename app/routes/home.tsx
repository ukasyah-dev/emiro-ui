import { Button } from "@/components/ui/button";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <p>Welcome to emiro-ui!</p>
      <Button>Hello Button</Button>
    </>
  );
}

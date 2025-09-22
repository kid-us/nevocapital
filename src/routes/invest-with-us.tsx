import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/invest-with-us")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/invest-with-us"!</div>;
}

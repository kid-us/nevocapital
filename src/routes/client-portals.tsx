import ComingSoon from "@/components/ComingSoon";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/client-portals")({
  component: ClientPortalsPage,
});

function ClientPortalsPage() {
  return <ComingSoon />;
}

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/aboute')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/aboute"!</div>
}

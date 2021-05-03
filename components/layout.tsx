import { Container } from '@material-ui/core';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

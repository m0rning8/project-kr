import React, { PropsWithChildren } from "react";
import { AppShell, Burger, Group, Skeleton, Title } from "@mantine/core";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm" }}
      padding="md"
    >
      <AppShell.Header>
      <Group h="100%" px="md">
          <Burger opened={false} onClick={() => {}} size="sm" />
          <Title order={1}>AutoRia Clone</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        123123
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default Layout;

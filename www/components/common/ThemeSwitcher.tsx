import { Button, Icon, useTheme } from "@interchain-ui/react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      intent="secondary"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <Icon name="moonLine" /> : <Icon name="sunLine" />}
    </Button>
  );
};

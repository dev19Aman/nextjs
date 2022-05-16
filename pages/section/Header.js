import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
import { Moon, Sun } from "heroicons-react";
import { useTheme } from "next-themes";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <Sun
          className="w-7 h-7 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <Moon
          className="w-7 h-7 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <header className="border-b border-gray-100 dark:boder-gray-700">
      <div className="container mx-auto px-4 sm:px-6 py-6 flex justify-between items-center">
        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Header;

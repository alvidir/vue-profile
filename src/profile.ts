const localStorageThemeKey = "color-palette";

enum Theme {
  Light = "theme-light",
  Dark = "theme-dark",
}

interface Profile {
  name?: string;
  theme?: Theme;
  picture?: string;
}

const store = (profile: Profile) => {
  const theme = profile.theme?.toString();
  if (theme) localStorage.setItem(localStorageThemeKey, theme);
  else localStorage.removeItem(localStorageThemeKey);
};

const load = (): Profile => {
  const localStorageTheme = localStorage.getItem(localStorageThemeKey);
  const isValid = Object.values(Theme).includes(localStorageTheme as Theme);
  const theme = isValid ? (localStorageTheme as Theme) : undefined;

  return {
    theme: theme,
  };
};

const apply = (profile: Profile) => {
  if (profile.theme) {
    const classList = document.getElementsByTagName("body")[0].classList;
    Object.values(Theme).forEach((key: string) => {
      classList.remove(key);
    });

    classList.add(profile.theme);
  }
};

export { Profile, Theme, store, load, apply };

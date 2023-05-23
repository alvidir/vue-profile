const localStorageProfileKey = "user-profile";

enum Theme {
  Light = "theme-light",
  Dark = "theme-dark",
}

interface Profile {
  name?: string;
  theme?: Theme;
  picture?: string;
}

const newProfile = (): Profile => {
  return {
    theme: window.matchMedia("(prefers-color-scheme: dark)").matches
      ? Theme.Dark
      : Theme.Light,
  };
};

const store = (profile: Profile) => {
  localStorage.setItem(localStorageProfileKey, JSON.stringify(profile));
};

const load = (): Profile => {
  const localStorageProfile = localStorage.getItem(localStorageProfileKey);
  if (!localStorageProfile) return newProfile();
  return JSON.parse(localStorageProfile);
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

const storeAndApply = (profile: Profile) => {
  store(profile);
  apply(profile);
};

export { Profile, Theme, store, load, apply, storeAndApply };

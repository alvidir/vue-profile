const localStorageProfileKey = "user-profile";

enum ColorPalette {
  Light = "theme-light",
  Dark = "theme-dark",
}

interface Profile {
  name: string;
  palette: ColorPalette;
  picture: string;
}

const newProfile = (): Profile => {
  return {
    name: "",
    picture: "",
    palette: window.matchMedia("(prefers-color-scheme: dark)").matches
      ? ColorPalette.Dark
      : ColorPalette.Light,
  };
};

const store = (profile: Profile) => {
  localStorage.setItem(localStorageProfileKey, JSON.stringify(profile));
};

const remove = () => {
  localStorage.removeItem(localStorageProfileKey);
};

const load = (): Profile => {
  const localStorageProfile = localStorage.getItem(localStorageProfileKey);
  if (!localStorageProfile) return newProfile();
  return JSON.parse(localStorageProfile);
};

const apply = (profile: Profile) => {
  console.log(profile);
  if (profile.palette) {
    const classList = document.getElementsByTagName("body")[0].classList;
    Object.values(ColorPalette).forEach((key: string) => {
      classList.remove(key);
    });

    classList.add(profile.palette);
  }
};

const storeAndApply = (profile: Profile) => {
  store(profile);
  apply(profile);
};

const switchColorPalette = (profile: Profile) => {
  const next = {
    [ColorPalette.Dark]: ColorPalette.Light,
    [ColorPalette.Light]: ColorPalette.Dark,
  };

  profile.palette = next[profile.palette];
};

export {
  Profile,
  ColorPalette,
  store,
  remove,
  load,
  apply,
  storeAndApply,
  switchColorPalette,
};

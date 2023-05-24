import { App } from "vue";
import ProfileMenu from "./ProfileMenu.vue";
import * as profile from "./profile";

function include(app: App): App {
  return app.component("profile-menu", ProfileMenu);
}

export default include;
export { ProfileMenu, profile };

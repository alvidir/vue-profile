import { App } from "vue";
import ProfileMenu from "./ProfileMenu.vue";

function include(app: App): App {
  return app.component("profile-menu", ProfileMenu);
}

export default include;
export { ProfileMenu };

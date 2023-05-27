<script setup lang="ts">
import { SwitchButton } from "vue-buttons/src/main";
import { RegularMenu } from "vue-menus/src/main";
import {
  Profile,
  ColorPalette,
  switchColorPalette,
  storeAndApply,
} from "./profile";
import { computed } from "vue";

interface Props {
  profile: Profile;
}

const props = defineProps<Props>();

interface Events {
  (e: "signout", payload: MouseEvent): void;
  (e: "signup", payload: MouseEvent): void;
  (e: "edit", payload: MouseEvent): void;
}

const emit = defineEmits<Events>();

const onSwitchColorPalette = () => {
  switchColorPalette(props.profile);
  storeAndApply(props.profile);
};

const isDarkTheme = computed({
  get: (): boolean => props.profile.palette == ColorPalette.Dark,
  set: () => onSwitchColorPalette(),
});
</script>

<template>
  <regular-menu>
    <div class="header item no-hover">
      <div class="username">
        <small>Signed in as</small>
        <strong v-if="profile.name">{{ profile.name }}</strong>
        <strong v-else>Guest user</strong>
      </div>
      <i class="bx bxs-cog" @click="emit('edit', $event)"></i>
    </div>
    <span>Appearance</span>
    <div class="option item no-hover">
      Dark theme
      <switch-button
        v-model="isDarkTheme"
        @switch="onSwitchColorPalette"
      ></switch-button>
    </div>
    <span></span>
    <button v-if="profile.name" @click="emit('signout', $event)">
      <i class="bx bx-log-out"></i>
      <span>Sign out</span>
    </button>
    <button v-else @click="emit('signup', $event)">
      <i class="bx bx-log-in"></i>
      <span>Create an account</span>
    </button>
  </regular-menu>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "fibonacci-styles";

.header {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between !important;

  & > i {
    color: var(--color-text-disabled);
    transition: opacity $faster-fade, color $medium-fade;
    box-sizing: border-box;
    padding-right: $fib-4 * 1px;

    &:hover {
      color: var(--color-text-secondary);
    }
  }

  &:not(:hover) i {
    pointer-events: none;
    opacity: 0%;
  }
}

.username {
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;

  strong {
    margin-top: $fib-3 * 1px;
  }
}

.option {
  justify-content: space-between !important;
  color: var(--color-text-primary) !important;
  font-weight: 500 !important;
  font-size: smaller;
}
</style>

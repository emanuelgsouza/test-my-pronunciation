<template>
  <button class="base-button" :class="classes" v-bind="$attrs">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  GHOST = "ghost",
}

export default defineComponent({
  name: "BaseButton",

  props: {
    label: {
      type: String,
      default: "",
    },
    variant: {
      type: String as () => ButtonVariants,
      default: "primary",
    },
  },

  setup(props) {
    const variantClass = computed(() => `base-button--${props.variant}`);
    const classes = computed(() => [variantClass.value]);

    return {
      variantClass,
      classes,
    };
  },
});
</script>

<style>
.base-button {
  display: block;
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
  max-width: 250px;
  opacity: 0.2s;

  @apply px-8 py-4 border;
}

.base-button:hover {
  box-shadow: none;
}

.base-button--primary {
  box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.2);

  @apply bg-primary text-light border-primary;
}

.base-button--ghost {
  @apply text-primary border-primary;
}

.base-button--secondary {
  box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.2);

  @apply bg-secondary text-light border-secondary;
}
</style>

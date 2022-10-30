<script lang="ts" setup>
const props = withDefaults(defineProps<{
  /** fixed布局的层级 */
  zIndex?: number
  /** 宽度 */
  width?: number
  /** 顶部内边距 */
  paddingTop?: number
  /** 动画过渡时间 */
  transitionDuration?: number
  /** 动画过渡时间 */
  transitionTimingFunction?: string
}>(), {
  zIndex: 1002,
  collapse: false,
  width: 200,
  paddingTop: 0,
  transitionDuration: 300,
  transitionTimingFunction: 'ease-in-out',
})
const style = computed(() => {
  const { zIndex, width, paddingTop, transitionDuration, transitionTimingFunction } = props
  return `z-index:${zIndex};width:${width}px;padding-top:${paddingTop}px;transition-duration:${transitionDuration}ms;transition-timing-function:${transitionTimingFunction};`
})
</script>

<template>
  <aside class="admin-layout__sider" style="style">
    <slot />
  </aside>
</template>

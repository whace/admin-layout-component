<script setup lang="ts">
const props = withDefaults(defineProps<{
  /** 开启fixed布局 */
  fixed?: boolean
  /** fixed布局的层级 */
  zIndex?: number
  /** 是否启用最小宽度的布局 */
  useMinWidthLayout?: boolean
  /** 最小宽度 */
  minWidth?: number
  /** 高度 */
  height?: number
  /** 左侧内边距 */
  paddingLeft?: number
  /** 动画过渡时间 */
  transitionDuration?: number
  /** 动画过渡时间 */
  transitionTimingFunction?: string
}>(), {
  fixed: true,
  zIndex: 999,
  minWidth: 1200,
  height: 56,
  paddingLeft: 0,
  transitionDuration: 300,
  transitionTimingFunction: 'ease-in-out',
})

defineOptions({ name: 'LayoutFooter' })

const style = computed(() => {
  const { fixed, zIndex, minWidth, height, paddingLeft, transitionDuration, transitionTimingFunction, useMinWidthLayout } = props
  const position = fixed ? 'fixed' : 'static'
  const minWidthStyle = useMinWidthLayout ? `min-width:${minWidth}px;` : ''
  return `position:${position};z-index:${zIndex};${minWidthStyle}height:${height}px;padding-left:${paddingLeft}px;transition-duration:${transitionDuration}ms;transition-timing-function:${transitionTimingFunction};`
})
</script>

<template>
  <footer class="admin-layout__footer" :style="style">
    <slot />
  </footer>
</template>

<style>
.admin-layout__footer {
  left: 0;
  bottom: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  transition-property: padding-left;
}
</style>

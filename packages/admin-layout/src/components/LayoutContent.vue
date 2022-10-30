<script lang="ts" setup>
const props = withDefaults(defineProps<{
  /** 顶部内边距 */
  paddingTop?: number
  /** 底部内边距 */
  paddingBottom?: number
  /** 左侧内边距 */
  paddingLeft?: number
  /** 是否禁止溢出 */
  overflowHidden?: boolean
  /** 动画过渡时间 */
  transitionDuration?: number
  /** 动画过渡时间 */
  transitionTimingFunction?: string
}>(), {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  transitionDuration: 300,
  transitionTimingFunction: 'ease-in-out',
})

defineOptions({ name: 'LayoutContent' })

const style = computed(() => {
  const { paddingTop, paddingBottom, paddingLeft, transitionDuration, transitionTimingFunction, overflowHidden } = props
  const overflowStyle = `overflow:${overflowHidden ? 'hidden' : 'visible'}`
  return `padding-top:${paddingTop}px;padding-bottom:${paddingBottom}px;padding-left:${paddingLeft}px;${overflowStyle}transition-duration:${transitionDuration}ms;transition-timing-function:${transitionTimingFunction};`
})
</script>

<template>
  <main :style="style" class="admin-layout__content" />
</template>

<style>
.admin-layout__content{
  flex-grow: 1;
  box-sizing: 'border-box';
  width: 100%;
  transition-property: 'padding-left';
}
</style>

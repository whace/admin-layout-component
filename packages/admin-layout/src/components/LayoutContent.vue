<script lang="ts" setup>
const props = withDefaults(defineProps<Props>(), {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  transitionDuration: 300,
  transitionTimingFunction: 'ease-in-out',
})
defineOptions({ name: 'content' })
interface Props {
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
}

const d = props.paddingBottom
</script>

<template>
  <main :style="style" class="admin-layout__content" />
</template>

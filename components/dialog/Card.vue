<script setup lang="ts">
const props = defineProps<{
  leftAvatar?: string
  leftContent?: string
  rightAvatar?: string
  rightContent?: string
}>()
</script>

<template>
  <div class="box-border w-full">
    <div v-if="props.rightContent" class="grid grid-cols-6 p-2">
      <!-- eslint-disable vue/html-self-closing -->
      <div class="h-0 w-0"></div>
      <div class="col-span-4 mt-2 rounded-4 rounded-tr-[1px] bg-blue/[.1]">
        <div class="p-4 text-sm text-gray-500">
          {{ props.rightContent }}
        </div>
      </div>
      <van-image
        v-if="props.rightAvatar" class="col-span-1 m-2 mr-auto" round width="2.8rem" height="2.8rem"
        :src="props.rightAvatar" />
      <Icon
        v-else class="col-span-1 m-2 mr-auto rounded-full bg-sky-1/[0.2] p-2 text-sky-500"
        name="logos:pinia" size="32" />
    </div>
    <div v-if="props.leftContent" class="grid grid-cols-6 p-2">
      <van-image
        v-if="props.leftAvatar" class="col-span-1 m-2 ml-auto" round width="2.8rem" height="2.8rem"
        :src="props.leftAvatar" />
      <Icon
        v-else class="col-span-1 m-2 ml-auto rounded-full bg-sky-1/[0.2] p-2 text-sky-500"
        name="logos:github-octocat" size="32" />
      <div class="col-span-4 mt-2 rounded-4 rounded-tl-[1px] bg-sky/[.1]">
        <div class="p-4 text-sm text-gray-500">
          {{ props.leftContent }}
        </div>
      </div>
    </div>
  </div>
</template>

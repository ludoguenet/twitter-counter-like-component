<template>
        <span
            :class="{'text-red-500': tooMany}"
        >
            {{ textCount }}
        </span>
       <textarea
           v-model="text"
           name="message"
           placeholder="What's on your mind?"
           class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
       ></textarea>
</template>

<script setup>
    import { ref, computed, watch } from "vue";

    const text = ref('');
    const tooMany = ref(false);

    const textCount = computed(() => {
        return text.value.length;
    })

    watch(text, (newValue, oldValue) => {
        tooMany.value = newValue.length > 280;
    })
</script>

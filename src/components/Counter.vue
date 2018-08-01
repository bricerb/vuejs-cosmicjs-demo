<template>
    <div>
        <div> Counter: {{counter}} </div>
        <button @click="counter++"> Go Up</button>
    </div>
</template>

<script>
export default {
    data: () => ({
        counter = 0
    })
}
</script>

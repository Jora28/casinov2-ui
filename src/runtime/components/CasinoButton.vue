<template>
    <div class="deposit-button">
        <span>{{ text }}</span>
    </div>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        default: true
    }
})
</script>

<style scoped>
.deposit-button {
    position: relative;
    padding: 8px 30px;
    font-size: 16px;
    font-weight: bold;
    color: black;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 3px 0 0 #0000001A inset, 0 6px 15px 0 #FFE60026;
    @apply bg-primary active:bg-[#5d5cfd] w-full border-transparent text-center border
}

.deposit-button::after {
    content: "";
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-55%);
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    border-radius: 10px;
    pointer-events: none;
    @apply bg-gradient-to-t from-primary from-50% to-50% to-white;
}

.deposit-button:disabled {
    background: #2B3038;
    box-shadow: unset;
}

.deposit-button:disabled+p {
    color: #B5BEC6;
    font-weight: 500;
}

.deposit-button:disabled::after {
    background: #2B3038;
}

@media screen and (max-width: 768px) {
    .deposit-button {
        padding: 8px 25px;
    }

    .deposit-button::after {
        top: 50%;
        transform: translateY(-50%);
    }

    .deposit-button:disabled::after {
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>

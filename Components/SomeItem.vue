<template>
    <div>
        This is vue component test. Message is: {{message}}
    </div>
</template>
<script>
    export default {
        name: "someitem",
        data: function () {
            return {
                message: 'Hello from vue component!'
            }
        }
    }
</script>
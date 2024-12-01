<template>

    <!-- group: Group -->
    <div class="group timeline">
        <!-- rect: Rectangle -->
        <div class="shape rect rectangle-2c43b97b4548">
        </div>
        <!-- rect: Rectangle -->
        <div class="shape rect rectangle-2c4f8b69fbc6">
        </div>
        <!-- rect: Rectangle -->
        <div class="shape rect rectangle-2c4f8c4fba3f">
        </div>
    </div>

</template>

<script>
export default {
    name: 'TimeLine',
}

</script>

<style>


/* Group */
.timeline {
    position: relative;
    left: 50%;
    top: 300px;
    width: 248px;
    height: 2240.5px;
}

/* Rectangle */
.rectangle-2c4f8c4fba3f {
    position: absolute;
    left: 228px;
    top: 1048px;
    width: 20px;
    height: 1192.5px;
    background: #B1B2B5;
    border-radius: 12px;
}

/* Rectangle */
.rectangle-2c4f8b69fbc6 {
    position: absolute;
    left: 112.12px;
    top: 809.08px;
    width: 20px;
    height: 300px;
    transform: matrix(-0.64, 0.77, -0.77, -0.64, -0.00, -0.00);
    background: #B1B2B5;
    border-radius: 8.08px;
}

/* Rectangle */
.rectangle-2c43b97b4548 {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 20px;
    height: 1192.5px;
    background: #B1B2B5;
    border-radius: 12px;
}
</style>
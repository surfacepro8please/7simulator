<template>
    <body class="bg-green-300 h-screen flex justify-center items-center p-8">

        <div class="bg-green-400 w-full max-w-4xl p-8 border-t-8 border-yellow-300 rounded-lg">
            <h2 class="text-4xl mb-6">受講する項目を選んでください</h2>

            <div class="grid grid-cols-2 gap-6">
                <button @click="() => $router.push({ path: '/ButtonStage' })"
                    class="bg-orange-500 text-white text-3xl font-bold rounded-lg py-2 px-3">0: 各ボタンの機能を見てみよう</button>
                <button @click="Simulation(1)" class="bg-orange-500 text-white rounded-lg py-2 px-3 text-3xl font-bold">1:
                    一連の流れをやってみよう</button>
                <button @click="Simulation(2)" class="bg-orange-500 text-white rounded-lg py-2 px-3 text-3xl font-bold">2:
                    お酒のたばこの販売をしてみよう</button>
                <button @click="Simulation(3)" class="bg-orange-500 text-white rounded-lg py-2 px-3 text-3xl font-bold">3:
                    フライヤーや中華まん、雑誌の販売をしてみよう</button>
                <button @click="Simulation(4)" class="bg-orange-500 text-white rounded-lg py-2 px-3 text-3xl font-bold">4:
                    取消作業をしてみよう</button>
                <button @click="Simulation(5)" class="bg-orange-500 text-white rounded-lg py-2 px-3 text-3xl font-bold">5:
                    (準備中)公共料金の支払いやチケットの発券をしてみよう</button>
            </div>
        </div>
        <button @click="() => $router.push({ path: '/' })"
            class="absolute bg-orange-500 text-white rounded-lg font-bold text-4xl left-0 top-0 py-2 px-3">トップページに戻る</button>
    </body>
</template>

<script>
export default {
    methods: {
        Simulation(stageNumber) {
            this.$router.push({ name: 'SimulatorRegi', params: { stage: stageNumber } })
        }
    },
}

</script>
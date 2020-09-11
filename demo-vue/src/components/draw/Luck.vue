<template>
    <div>
        <LuckDraw
                ref="luckDraw"
                v-model="currIndex"
                :awards="awards"
                :async="true"
                @before-start="handleBeforeStart"
                @start="handleStart"
                @end="handleEnd"></LuckDraw>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currIndex: 0, // 奖品的索引
                awards: [     // 奖品
                    {name: '刘佳鑫', color: '#f9e3bb'},
                    {name: '聂成才', color: '#f8d384'},
                    {name: '谷任朋', color: '#f9e3bb'},
                    {name: '刘琴', color: '#f8d384'},
                    {name: '李明伟', color: '#f9e3bb'},
                    {name: '明磊', color: '#f8d384'},
                    {name: '袁泉', color: '#f9e3bb'},
                    {name: '李明伟', color: '#f8d384'},
                    {name: '王新群', color: '#f9e3bb'},
                    {name: '钟超', color: '#f8d384'},
                    {name: '唐善波', color: "#f9e3bb"},
                    {name: '徐岳豪', color: '#f8d384'}
                ],
            }
        },
        methods: {
            handleBeforeStart() { // 新增异步抽奖
                setTimeout(() => {
                    let cursor = parseInt(Math.random() * (this.awards.length));
                    console.log("cursor:", cursor);
                    this.$refs.luckDraw.play(cursor);
                });
            },
            handleStart() {
                console.log('开始抽奖')
            },
            handleEnd() {
                alert('凯泉战队腋毛最粗的人：' + this.awards[this.currIndex].name);
                console.log(this.awards[this.currIndex].name);
            }
        }
    }
</script>

import { ref, onMounted, onUnmounted } from 'vue'
import moment from 'moment'


export function getCurrentTime() {

    // 时间
    const hh = ref("h")
    // 分钟
    const mm = ref("m")
    // 秒钟
    const ss = ref("s")
    // 格式化时间
    const formatTime = ref("")
    // 定时
    let timer: any = null;
    // 更新时间
    function updateTimer() {
        if (timer) {
            // 已经设置了定时，直接返回即可
            return timer;
        }
        // 设置时间循环
        timer = setInterval(() => {
            // 获取当前时间
            const currentTime = moment();
            // 获取格式化的时间
            formatTime.value = currentTime.format("YYYY-MM-DD HH:mm:ss");
            // 获取小时
            hh.value = currentTime.format("HH");
            // 获取分钟
            mm.value = currentTime.format("mm");
            // 获取秒钟
            ss.value = currentTime.format("ss");
        }, 500);
    }
    // 取消监听
    function destoryTimer() {
        return timer && clearInterval(timer);
    }

    // 挂载函数
    onMounted(updateTimer)

    // 取消挂载函数
    onUnmounted(destoryTimer)

    return { hh, mm, ss, formatTime }
}
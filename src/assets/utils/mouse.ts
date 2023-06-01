import { ref } from 'vue'
import { useEventListener } from './useEventListener';

export function useMouse(domId?: string) {
    // 被组合式函数封装和管理的状态
    const x = ref(0);
    const y = ref(0);
    // 鼠标移入事件
    const isMouseEnter = ref(false);
    // 鼠标移出事件
    const isMouseOut = ref(false);

    // 组合式函数可以随时更改状态
    function mousemove(event: any) {
        x.value = event.offsetX;
        y.value = event.offsetY;
    }

    // 鼠标移入事件
    function mouseover() {
        isMouseEnter.value = true;
        isMouseOut.value = false;
    }

    // 鼠标移出事件
    function mouseout() {
        isMouseEnter.value = false;
        isMouseOut.value = true;
    }

    // 鼠标事件映射
    const eventsMap: any = {
        // 鼠标移动
        mousemove: (event: any) => { mousemove(event); },
        // 鼠标移入
        mouseover: () => { mouseover() },
        // 鼠标移出
        mouseout: () => { mouseout() }
    }

    for (const key in eventsMap) {
        // 添加事件监听
        useEventListener(domId ? domId : window, key, eventsMap[key]);
    }

    // 返回返回值暴露所管理的状态
    return { x, y, isMouseEnter, isMouseOut };
}
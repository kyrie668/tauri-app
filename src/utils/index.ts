/**
 * @description 函数防抖
 * @param func 需要进行防抖的函数
 * @param delay 时间间隔（毫秒）
 * @returns 返回一个防抖后的函数
 */
export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timer: NodeJS.Timeout | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  } as T;
}

/**
 * @description 函数节流
 * @param func 需要进行节流的函数
 * @param delay 时间间隔（毫秒）
 * @returns 返回一个节流后的函数
 */
export function throttle<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let lastExecTime = 0;
  let timer: NodeJS.Timeout | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const currentTime = Date.now();
    const elapsedTime = currentTime - lastExecTime;

    if (!timer || elapsedTime >= delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - elapsedTime);
    }
  } as T;
}

export const deleteCookie = (name: string) => {
  // 设置Cookie的过期时间为过去的时间
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
};


// 判断是否为数组
export const isArray = (arr: any) => {
  return Object.prototype.toString.call(arr) === '[object Array]';
};

// 判断是否为对象
export const isObject = (obj: any) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

// 判断是否为函数
export const isFunction = (fn: any) => {
  return Object.prototype.toString.call(fn) === '[object Function]';
};

// 判断是否为字符串
export const isString = (str: any) => {
  return Object.prototype.toString.call(str) === '[object String]';
};

// 判断是否为数字
export const isNumber = (num: any) => {
  return Object.prototype.toString.call(num) === '[object Number]';
};


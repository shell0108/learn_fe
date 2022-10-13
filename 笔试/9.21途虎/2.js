// 括号匹配
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param str string字符串 
 * @return bool布尔型
 */
 function isValid( str ) {
    // write code here
    const map = new Map([
        ['(',')'],
        ['[',']'],
        ['{','}']
    ])
    //遍历一遍，碰到左括号就入栈，碰到右括号则弹栈，看是否匹配
    //最后栈为空则是完美字符串
    let stack = [];
    for(let it of str) {
        if(it === '(' || it === '[' || it === '{') {
            stack.push(it);
        }else {
            if(stack.length > 0 && it === map.get(stack.pop())) continue;
            return false;
        }
    }
    return stack.length === 0;
}
module.exports = {
    isValid : isValid
};
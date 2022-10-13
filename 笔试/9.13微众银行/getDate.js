//闰年的计算规则为被4的倍数且不是100的倍数，或者是400的倍数
//1, 3, 5, 7, 8, 10, 12 月是31天， 4，6，9，11 月是30天，非闰年2月是28天，闰年2月是29天
function getVaildDate(date) {
    const isRui = (year) => {
        //判断是否是闰年
        return (year%4 === 0 && year%100 !== 0) || year % 400 === 0;
    }  
    const day31 = new Set([1, 3, 5, 7, 8, 10, 12]), day30 = new Set([4, 6, 9, 11]);
    let ans = [], [start, end] = date.split('~');
    let [start_year, start_mon, start_day] = start.split('-').map(Number), [end_year, end_mon, end_day] = end.split('-').map(Number);
    let [cur_year, cur_mon, cur_day] = [start_year, start_mon, start_day];
    while(cur_year <= end_year || cur_mon <= end_mon || cur_day <= end_day) {
        ans.push([String(cur_year)+'-'+String(cur_mon)+'-'+String(cur_day)])
        if(cur_year === end_year && cur_mon === end_mon && cur_day === end_day) break;
        cur_day++;
        if((day31.has(cur_mon) && cur_day === 32) || (day30.has(cur_mon) && cur_day === 31) || cur_mon === 2 && ((cur_day === 29 && !isRui(cur_year) ) || (cur_day === 30 && isRui(cur_year)))) {
            cur_day = 1;
            cur_mon++;//下一月
            if(cur_mon === 13) {
                cur_mon = 1;
                cur_year++;//下一年
            }
        }
    }
    return ans;
}

console.log(getVaildDate('2022-09-12~2022-10-2'))
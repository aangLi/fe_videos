// total / num * 2 抢的公平
const arr = [];
function hongbao(total, num) {

    let restAmout = total;

    while (num--) {

        if (num == 0) {
            arr.push(restAmout.toFixed(2));
            return arr;
        }
        let amount = parseFloat(Math.random() * (restAmout / (num + 1)) * 2).toFixed(2); // 永远不会超过总钱数
        restAmout -= amount;
        arr.push(amount);

    }
}

console.log(hongbao(100, 10));
// ctx：Canvas绘图环境
// fromX, fromY：起点坐标（也可以换成p1，只不过它是一个数组）
// toX, toY：终点坐标 (也可以换成p2，只不过它是一个数组)
// theta：三角斜边一直线夹角
// headlen：三角斜边长度
// width：箭头线宽度
// color：箭头颜色


function drawArrow(ctx, fromX, fromY, toX, toY, theta, headlen, width, color,isCircle) {

    theta = typeof (theta) != 'undefined' ? theta : 30;
    headlen = typeof (theta) != 'undefined' ? headlen : 10;
    width = typeof (width) != 'undefined' ? width : 1;
    color = typeof (color) != 'color' ? color : '#000';

    // 计算各角度和对应的P2,P3坐标
    var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
        angle1 = (angle + theta) * Math.PI / 180,
        angle2 = (angle - theta) * Math.PI / 180,
        topX = headlen * Math.cos(angle1),
        topY = headlen * Math.sin(angle1),
        botX = headlen * Math.cos(angle2),
        botY = headlen * Math.sin(angle2);


    ctx.save();
    ctx.beginPath();

    var arrowX = fromX - topX,
        arrowY = fromY - topY;
    ctx.moveTo(arrowX, arrowY);
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    arrowX = toX + topX;
    arrowY = toY + topY;
    ctx.moveTo(arrowX, arrowY);
    ctx.lineTo(toX, toY);
    arrowX = toX + botX;
    arrowY = toY + botY;
    ctx.lineTo(arrowX, arrowY);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.restore();
}



// function drawArrow(ctx, fromX, fromY, toX, toY, theta, headlen, width, color) {
//     theta = typeof (theta) != 'undefined' ? theta : 30;
//     headlen = typeof (theta) != 'undefined' ? headlen : 10;
//     width = typeof (width) != 'undefined' ? width : 1;
//     color = typeof (color) != 'color' ? color : '#000';

//     var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
//         angle1 = (angle + theta) * Math.PI / 180,
//         angle2 = (angle - theta) * Math.PI / 180,
//         topX = headlen * Math.cos(angle1),
//         topY = headlen * Math.sin(angle1),
//         botX = headlen * Math.cos(angle2),
//         botY = headlen * Math.sin(angle2);


//     ctx.save();
//     ctx.beginPath();

//     var arrowX = fromX - topX,
//         arrowY = fromY - topY;
//     ctx.moveTo(arrowX, arrowY);
//     ctx.lineTo(fromX, fromY);
//     arrowX = fromX - botX;
//     arrowY = fromY - botY;
//     ctx.lineTo(arrowX, arrowY);
//     ctx.moveTo(fromX, fromY);
//     ctx.lineTo(toX, toY);

//     // Reverse length on the other side
//     arrowX = toX + topX;
//     arrowY = toY + topY;
//     ctx.moveTo(arrowX, arrowY);
//     ctx.lineTo(toX, toY);
//     arrowX = toX + botX;
//     arrowY = toY + botY;
//     ctx.lineTo(arrowX, arrowY);
//     ctx.strokeStyle = color;
//     ctx.lineWidth = width;
//     ctx.stroke();
//     ctx.restore();
// }

export default drawArrow
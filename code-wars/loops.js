//1.
//A ball falls from the height h, bounces back up at bounce and is observed at the level window. Write a formula to calculate how many time will the ball be seen from window as it falls and bounces. Conditions:
//Float parameter "h" in meters must be greater than 0
//Float parameter "bounce" must be greater than 0 and less than 1
//Float parameter "window" must be less than h.

//My solution
function bouncingBall(h, bounce, window) {
    if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
        let n = 1;
        for (let i = h; i > window; i = i * bounce) {
            if (i * bounce > window) n += 2;
        }
        return n;
    } else return -1;
}

//Better solution (refctored)
function bouncingBall1(h, bounce, window) {
    var rebounds = -1;
    if (bounce > 0 && bounce < 1)
        while (h > window) rebounds += 2, h *= bounce;
    return rebounds;
}
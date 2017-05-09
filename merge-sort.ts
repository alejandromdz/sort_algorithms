function merge_sort(a: Array<number>) {
    if (a.length <= 1) return a;
    let mid = Math.ceil(a.length / 2);
    let left = a.slice(0, mid);
    let right = a.slice(mid);
    left = merge_sort(left);
    right = merge_sort(right);
    return merge(left, right);

}

function merge(left: Array<number>, right: Array<number>): Array<number> {

    let result = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0])
            result.push(left.shift());
        else
            result.push(right.shift());
    }
    while (left.length > 0)
        result.push(left.shift());
    while (right.length > 0)
        result.push(right.shift());

    return result;

}


let res=merge_sort([4,2,5,7,3,2,6,9,4,3,0,6,5,8]);
console.log(res);
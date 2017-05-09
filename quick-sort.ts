function quickSort(a:Array<number>) {
    if (a.length <= 1) return a;
    
    var pivot = a[0];
    var wall = 1;
    for (var i = wall; i < a.length; i++) {
        if (a[i] < pivot) {
            var temp = a[i];
            a[i] = a[wall];
            a[wall] = temp;
            wall++;
        }
    }
    wall--;
    var temp = a[0];
    a[0] = a[wall];
    a[wall] = temp;

    var left = a.slice(0, wall);
    var right = a.slice(wall + 1);

    left = quickSort(left);
    right = quickSort(right);


    return [...left,a[wall],...right];
}


let res2=quickSort([4,2,5,7,3,2,6,9,4,3,0,6,5,8]);
console.log(res2);
module.exports = function check(str, bracketsConfig) {
    if (str == '') { return true; }
    str = str.split('');
    let a = 0;
    if (str.length % 2 != 0) { return false; }
    let opened = [];
    let closed = [];
    for (let i of bracketsConfig) {
        opened.push(i[0]);
        closed.push(i[1]);
    }
    let j = 0;
    let example = '';
    while (j < str.length) {
        if (str[j] == str[j + 1] && (str[j] == '|' || str[j] == '7' || str[j] == '8')) {
            example += String(str[j]) + String(str[j + 1]) + ' ';
            str.splice(j, 2);
            j = 0;
        } else if (closed.includes(str[j]) && !opened.includes(str[j])) {
            if ((opened.indexOf(str[j - 1]) != closed.indexOf(str[j]))) {
                return false;
            } else {
                example += String(str[j - 1]) + String(str[j]) + ' ';
                str.splice(j - 1, 2);
                j = 0;
            }
        } else {
            j++;
        }
    }
    if (str.length != 0) { return false; }
    return true;
}
/* 

helpers - librarie JS cu functii utile in procesul de dezvoltare a unei pagini web

Obs: Contine urmatoarele functii:
1. getCookie(cookie_name) - cauta in cookies dupa variabila cookie_name, returnand-o
2. deleteAllCookies - sterge toate cookies din pagina web
3. urlParam(name) - extrage din adresa URL a paginii variabila cu numele (name)
4. zerofill(number, length, char) - creaza un string tip ZEROFILL(folosit adesea in bazele de date), utilizand (number) ca numarul de transformat, (lenght) ca lungimea string-ului final si optionalul (char) ca "umplutura"
5. capitalize(string) - transforma primul caracter in majuscula, restul fiind minuscula
6. Levenshtein(a,b) - calculeaza distanta Levenshtein dintre string-ul (a) si sting-ul (b)
Obs: Functia zerofill(number, length, char) foloseste ca "umplutura" pentru formarea string-ului final 0, in absenta variabilei (char).

*/

function getCookie(cookie_name){
    var name = cookie_name + "=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i <cookies.length; i++){
        var actual = cookies[i];
        while (actual.charAt(0)==' '){
            actual = actual.substring(1);
        }
        if (actual.indexOf(name) == 0){
            return actual.substring(name.length, actual.length);
        }
    }
    return "";
}
function deleteAllCookies(){
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++){
        var cookie = cookies[i];
        var equalPos = cookie.indexOf("=");
        var name = equalPos > -1 ? cookie.substr(0, equalPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
function urlParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}
function zerofill(number, length, char){
    var zerofill_char = typeof char !== 'undefined' ? char : '0';
    var zero = new Array(1 + length).join(zerofill_char);
    return (zero + number).slice(-zero.length);
}
function capitalize(string){
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function Levenshtein(a,b){
    if (a.length === 0) return b.length; 
    if (b.length === 0) return a.length; 
    var matrix = [];
    var i;
    for (i = 0; i <= b.length; i++){
        matrix[i] = [i];
    }
    var j;
    for (j = 0; j <= a.length; j++){
        matrix[0][j] = j;
    }
    for (i = 1; i <= b.length; i++){
        for (j = 1; j <= a.length; j++){
            if (b.charAt(i-1) == a.charAt(j-1)){
                matrix[i][j] = matrix[i-1][j-1];
            } 
            else{
                matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, Math.min(matrix[i][j-1] + 1, matrix[i-1][j] + 1));
            }
        }
    }
    return matrix[b.length][a.length];
}
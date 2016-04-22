var view = {
    "title": "Pascal: Siruri de caractere",
    "time": "60 minute",
    "lang":[{"text":"C++","href":"tutorial.html?name=string-tutorial&lang=cpp"},{"text":"Pascal","href":"tutorial.html?name=string-tutorial&lang=pascal"}],
    "sections":[
        {"href":"#description", "id_scrollspy":"scrollspylink0", "id":"description", "content":"Introducere"},
        {"href":"#section1", "id_scrollspy":"scrollspylink1", "id":"section1", "content":"Citirea si afisarea"},
        {"href":"#section2", "id_scrollspy":"scrollspylink2", "id":"section2", "content":"Parcurgerea string"},
        {"href":"#section3", "id_scrollspy":"scrollspylink3", "id":"section3", "content":"Functii specifice"},
        {"href":"#section4", "id_scrollspy":"scrollspylink4", "id":"section4", "content":"Proceduri specifice"},
        {"href":"#section5", "id_scrollspy":"scrollspylink5", "id":"section5", "content":"Exercitii propuse"},
        {"href":"#celebrate", "id_scrollspy":"scrollspylink6", "id":"celebrate", "content":"Felicitari!"},
    ],
    "celebrate": ["ce sunt string-urile;", "cum se declara, citesc si scriu acestea;", "cum sa folosesti functii importante din diferite biblioteci;"],
    "bibliografie": ["profesor Mihai Chelariu, cu ajutorul website-ului personal;", "editura LS-INFOMAT, cu ajutorul cartii 'Fundamentele programarii.'"]
}
var description = "<p>Cu sirurile de caractere ne-am intalnit inca de la instructiunea WRITE, cand afisam mesaje de genul 'Variabila este egala cu '.  Acestea sunt exemple de constante sir de caractere. Termenul englezesc pentru sir de caractere este <strong>STRING</strong>. Limbajul Pascal nu necesita utilizarea unei biblioteci speciale pentru implementarea sirurilor de caractere<p>Declararea se aseamana cu declararea unui vector.</p><code>var sir:string; //maxim 250 de caractere</code>";
var one = "<p>Citirea se face cu ajutorul <strong>READ</strong>: </p><code>read(sir);</code><p>Afisarea se face cu ajutorul <strong>WRITE</strong>: </p><code>write(sir);</code>";
var two = "<p>Pentru ca numarul de caractere nu este stabilit la citire, putem folosi o functie specifica pentru a determina lungimea string-ului, functia <strong>LENGTH</strong> (string length). Deoarece primul caracter din cele n se gaseste in pozitia 0, deducem ca ultimul se va gasi in pozitia n-1.</p><code>n=length(sir); </code><br><code>for i:=0 to n do begin</code><br><code>//prelucrare sir</code><br><code>end</code>";
var three = "<ul class='with'><li><strong>LENGTH(sir)</strong><br>Efect: returneaza lungimea unui sir de caractere</li><li><strong>ORD si CHR</strong><br>Efect: ORD(caracter) returneaza codul ASCII al caracterului. CHR(numar) returneaza caracterul corespunzator codului ASCII<blockquote>Sfat: Relatia de legatura intre codul ASCII al caracterelor mari si codul ASCII al caracterelor mici: Cod ASCII(caracter mare) + 32 = Cod ASCII(caracter mic)</blockquote></li><li><strong>POS(sir1, sir2)</strong><br>Efect: verifica daca sirul 1 se situeaza in sirul 2 si returneaza pozitia de inceput in sirul 2 daca exista sau 0 daca sirul 1 nu se afla in sirul 2.</li><li><strong>COPY(sir, poz, nr)</strong><br>Efect: extrage un subsir al primului sir, incepand de la pozitia poz si avand un numar nr de caractere.</li>";
var four = 	"<ul class='with'><li><strong>DELETE(sir, poz, nr)</strong><br>Efect: sterge din primul sir incepand cu pozitia poz, un numar nr de caractere</li><li><strong>INSERT(subsir, sir, poz)</strong><br>Efect: insereaza subsirul dat in sirul sir incepand din pozitia poz.</li><li><strong>STR(numar, sir)</strong><br>Efect:Transforma variabila 'numar' intr-un sir de caractere.</li><li><strong>VAL(sir, numar, eroare)</strong><br>Efect: Incearca sa transforme sirul de caractere 'sir' intr-un numar real.<blockquote>Daca reuseste atunci parametrul eroare va avea valoarea 0, daca nu reuseste valoarea parametrului 'numar' = 0, 'eroare' va avea pozitia de unde incepe nereusita.</blockquote></li></ul>";
var five = 	"<p>Fie o propozitie memorata intr-un sir de caractere <strong>sir</strong>:</p><ul class='with'><li>cate cifre, litere mici, litere mari si semne speciale sunt in propozitie;</li><li>de cate ori apare caracterul ‘ ‘(SPACE);</li><li>afisarea tuturor prefixelor al primului cuvant din propozitie.</li>";

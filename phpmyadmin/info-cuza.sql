-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 11, 2016 at 09:20 
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `info-cuza`
--

-- --------------------------------------------------------

--
-- Table structure for table `General`
--

CREATE TABLE `General` (
  `id` int(11) NOT NULL,
  `titlu` text NOT NULL,
  `tip` int(11) NOT NULL,
  `materie` int(11) NOT NULL,
  `descriere` longtext NOT NULL,
  `timp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `General`
--

INSERT INTO `General` (`id`, `titlu`, `tip`, `materie`, `descriere`, `timp`) VALUES
(1111, 'Siruri de caractere', 1, 1, 'Un sir de caractere este, in mod traditional, o secventa de caractere declarata ca o constanta sau ca o variabila. Aceasta din urma permite elementelor sale sa fie mutate, modificate si sa i se modifice lungimea. String-urile, asa cum mai sunt numite, reprezinta de fapt vectori ce retin pe pozitiile lor codurile ASCII ale caracterelor.', 60),
(1201, 'Pagini web', 1, 2, 'O pagina web este o resursa aflata in spatiul web din Internet, de obicei in format HTML si avand hyperlinkuri pentru navigarea simpla de la o pagina sau sectiune de pagina la alta. Pagina web se numeste astfel deoarece ea se poate afisa pe un monitor sau ecran de calculator si se aseamana intr-o oarecare masura cu o pagina de ziar.', 60),
(2111, 'Siruri de caractere', 2, 1, 'Un sir de caractere este, in mod traditional, o secventa de caractere declarata ca o constanta sau ca o variabila. Aceasta din urma permite elementelor sale sa fie mutate, modificate si sa i se modifice lungimea. String-urile, asa cum mai sunt numite, reprezinta de fapt vectori ce retin pe pozitiile lor codurile ASCII ale caracterelor.', 30),
(2201, 'Pagini web', 2, 2, 'O pagina web este o resursa aflata in spatiul web din Internet, de obicei in format HTML si avand hyperlinkuri pentru navigarea simpla de la o pagina sau sectiune de pagina la alta. Pagina web se numeste astfel deoarece ea se poate afisa pe un monitor sau ecran de calculator si se aseamana intr-o oarecare masura cu o pagina de ziar.', 30);

-- --------------------------------------------------------

--
-- Table structure for table `Quiz`
--

CREATE TABLE `Quiz` (
  `id` int(11) NOT NULL,
  `intrebare_1` longtext NOT NULL,
  `raspuns_1` longtext NOT NULL,
  `intrebare_2` longtext NOT NULL,
  `raspuns_2` longtext NOT NULL,
  `intrebare_3` longtext NOT NULL,
  `raspuns_3` longtext NOT NULL,
  `intrebare_4` longtext NOT NULL,
  `raspuns_4` longtext NOT NULL,
  `intrebare_5` longtext NOT NULL,
  `raspuns_5` longtext NOT NULL,
  `output_1` longtext NOT NULL,
  `code_output_1` longtext NOT NULL,
  `output_2` longtext NOT NULL,
  `code_output_2` longtext NOT NULL,
  `output_3` longtext NOT NULL,
  `code_output_3` longtext NOT NULL,
  `drag_code` longtext NOT NULL,
  `drag_var` longtext NOT NULL,
  `correct` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Quiz`
--

INSERT INTO `Quiz` (`id`, `intrebare_1`, `raspuns_1`, `intrebare_2`, `raspuns_2`, `intrebare_3`, `raspuns_3`, `intrebare_4`, `raspuns_4`, `intrebare_5`, `raspuns_5`, `output_1`, `code_output_1`, `output_2`, `code_output_2`, `output_3`, `code_output_3`, `drag_code`, `drag_var`, `correct`) VALUES
(2111, 'Ce reprezinta sirurile de caractere(string-uri)?', 'a:3:{i:0;s:46:"vectori ce retin codul ASCII ale caracterelor;";i:1;s:38:"tip de date, independent de celelalte;";i:2;s:47:"vector ce retine codul UNICODE al caracterelor.";}', 'Ce reprezinta sirurile de caractere(string-uri)?', 'a:3:{i:0;s:46:"vectori ce retin codul ASCII ale caracterelor;";i:1;s:38:"tip de date, independent de celelalte;";i:2;s:47:"vector ce retine codul UNICODE al caracterelor.";}', 'Ce reprezinta sirurile de caractere(string-uri)?', 'a:3:{i:0;s:46:"vectori ce retin codul ASCII ale caracterelor;";i:1;s:38:"tip de date, independent de celelalte;";i:2;s:47:"vector ce retine codul UNICODE al caracterelor.";}', 'Ce reprezinta sirurile de caractere(string-uri)?', 'a:3:{i:0;s:46:"vectori ce retin codul ASCII ale caracterelor;";i:1;s:38:"tip de date, independent de celelalte;";i:2;s:47:"vector ce retine codul UNICODE al caracterelor.";}', 'Ce reprezinta sirurile de caractere(string-uri)?', 'a:3:{i:0;s:46:"vectori ce retin codul ASCII ale caracterelor;";i:1;s:38:"tip de date, independent de celelalte;";i:2;s:47:"vector ce retine codul UNICODE al caracterelor.";}', 'Ce se va afisa in urma executarii urmatoarei secvente de instructiuni?', '<code>x= ''dimineata'';</code><br>\r\n<code>a = ''Primavara'';</code><br>\r\n<code>for (int i=l;i&lt;=3;i++)</code><br>\r\n<code>strcpy(a+1,a+2);</code><br>', 'Ce se va afisa in urma executarii urmatoarei secvente de instructiuni?', '<code>x= ''dimineata'';</code><br>\r\n<code>a = ''Primavara'';</code><br>\r\n<code>for (int i=l;i&lt;=3;i++)</code><br>\r\n<code>strcpy(a+1,a+2);</code><br>', 'Ce se va afisa in urma executarii urmatoarei secvente de instructiuni?', '<code>x= ''dimineata'';</code><br>\r\n<code>a = ''Primavara'';</code><br>\r\n<code>for (int i=l;i&lt;=3;i++)</code><br>\r\n<code>strcpy(a+1,a+2);</code><br>', '<code class="">#include &lt;iostream.h&gt;</code>\n<code class="">#include &lt;stdio.h&gt;</code>\n<code class="">#include &lt;string.h&gt;</code>\n<code class="">int main(){</code>\n<code class="">string cuv;</code>\n<code class="">int n,i;</code>\n<code class="">cout &lt;&lt; ''Cuvantul este:'';</code>\n<code class="">cin &gt;&gt; cuv;</code>\n<code class="droppable1 ui-droppable"></code>\n<code class="">for (i=0; i<=n; i++){</code>\n<code class="droppable2 ui-droppable"></code>\n<code class="">cin &gt;&gt; endl;</code>\n<code class="">}</code>', '<code class="ui-draggable ui-draggable-handle" style="position: relative;">n:=length(cuv);</code>\n<code class="ui-draggable ui-draggable-handle" style="position: relative;">n=strlen(cuv);</code>\n<code class="ui-draggable ui-draggable-handle" style="position: relative;">writeln(copy(cuv,1,i));</code>\n<code class="ui-draggable ui-draggable-handle" style="position: relative;">cout >> strcpy(cuv,n,i);</code>', '[1,1,1,1,1,"string","string","string","n=strlen(cuv);","cout >> strcpy(cuv,n,i);"]'),
(2121, 'Ce reprezinta sirurile de caractere(string-uri)?', 'a:3:{i:0;s:46:"vectori ce retin codul ASCII ale caracterelor;";i:1;s:38:"tip de date, independent de celelalte;";i:2;s:47:"vector ce retine codul UNICODE al caracterelor.";}', 'Ce reprezinta sirurile de caractere(string-uri)?', 'a:3:{i:0;s:46:"vectori ce retin codul ASCII ale caracterelor;";i:1;s:38:"tip de date, independent de celelalte;";i:2;s:47:"vector ce retine codul UNICODE al caracterelor.";}', 'Ce reprezinta sirurile de caractere(string-uri)?', 'a:3:{i:0;s:46:"vectori ce retin codul ASCII ale caracterelor;";i:1;s:38:"tip de date, independent de celelalte;";i:2;s:47:"vector ce retine codul UNICODE al caracterelor.";}', 'Ce reprezinta sirurile de caractere(string-uri)?', 'a:3:{i:0;s:46:"vectori ce retin codul ASCII ale caracterelor;";i:1;s:38:"tip de date, independent de celelalte;";i:2;s:47:"vector ce retine codul UNICODE al caracterelor.";}', 'Ce reprezinta sirurile de caractere(string-uri)?', 'a:3:{i:0;s:46:"vectori ce retin codul ASCII ale caracterelor;";i:1;s:38:"tip de date, independent de celelalte;";i:2;s:47:"vector ce retine codul UNICODE al caracterelor.";}', 'Ce se va afisa in urma executarii urmatoarei secvente de instructiuni?', '<code>s:=''Primavara'';</code><br><code>for i:=1 to 3 do</code><br><code>delete(s,2,1);</code><br><code>writeln(a);</code><br>', 'Ce se va afisa in urma executarii urmatoarei secvente de instructiuni?', '<code>s:=''Primavara'';</code><br><code>for i:=1 to 3 do</code><br><code>delete(s,2,1);</code><br><code>writeln(a);</code><br>', 'Ce se va afisa in urma executarii urmatoarei secvente de instructiuni?', '<code>s:=''Primavara'';</code><br><code>for i:=1 to 3 do</code><br><code>delete(s,2,1);</code><br><code>writeln(a);</code><br>', '<code class="">var cuv:string;</code><code class="">n,i:integer;</code><code class="">begin</code>\n<code class="">write(''Cuvantul este:'''');</code><code class="">readln(cuv);</code><code class="droppable1 ui-droppable"></code><code class="">for i:= 1 to n do</code><code class="droppable2 ui-droppable"></code><code class="">readln;</code><code class="">end.</code>', '<code style="position: relative;" class="ui-draggable ui-draggable-handle">n:=length(cuv);</code>\n<code style="position: relative;" class="ui-draggable ui-draggable-handle">n=strlen(cuv);</code>\n<code style="position: relative;" class="ui-draggable ui-draggable-handle">writeln(copy(cuv,1,i));</code>\n<code style="position: relative;" class="ui-draggable ui-draggable-handle">cout >> strcpy(cuv,n,i);</code>', '[1,1,1,1,1,"string","string","string","n:=length(cuv);","writeln(copy(cuv,1,i));"]');

-- --------------------------------------------------------

--
-- Table structure for table `Tutorial`
--

CREATE TABLE `Tutorial` (
  `id` int(11) NOT NULL,
  `nume_categorie_1` tinytext NOT NULL,
  `nume_categorie_2` tinytext NOT NULL,
  `nume_categorie_3` tinytext NOT NULL,
  `nume_categorie_4` tinytext NOT NULL,
  `introducere` longtext NOT NULL,
  `categorie_1` longtext NOT NULL,
  `categorie_2` longtext NOT NULL,
  `categorie_3` longtext NOT NULL,
  `categorie_4` longtext NOT NULL,
  `celebrate_1` text NOT NULL,
  `celebrate_2` text NOT NULL,
  `celebrate_3` text NOT NULL,
  `exercitii` longtext NOT NULL,
  `editor_1` text NOT NULL,
  `editor_2` text NOT NULL,
  `editor_3` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Tutorial`
--

INSERT INTO `Tutorial` (`id`, `nume_categorie_1`, `nume_categorie_2`, `nume_categorie_3`, `nume_categorie_4`, `introducere`, `categorie_1`, `categorie_2`, `categorie_3`, `categorie_4`, `celebrate_1`, `celebrate_2`, `celebrate_3`, `exercitii`, `editor_1`, `editor_2`, `editor_3`) VALUES
(1111, 'Citirea si afisarea', 'Parcurgerea string', 'Biblioteca string.h', 'Biblioteca stdlib.h', '<p>Cu sirurile de caractere ne-am intalnit inca de la instructiunea COUT, cand afisam mesaje de genul ''Variabila este egala cu ''.  Acestea sunt exemple de constante sir de caractere. Termenul englezesc pentru sir de caractere este <strong>STRING</strong>. Daca lucram cu string-uri trebuie sa declaram utilizarea bibliotecii (colectie de functii specializate).</p><code>#include string.h;</code><p>Declararea se aseamana cu declararea unui vector.</p><code>char sir[50]; //maxim 50 de caractere</code>', '<p>Exista mai multe metode pentru citirea unui string: </p><ul class=''with''><li><code>cin.getline(sir, 50);</code></li><li><code>cin >> sir;</code></li></ul><blockquote>Sfat: Se recomanda folosirea <strong>cin.getline</strong> deoarece se citeste string-ul pana la intalnirea ENTER, in timp ce <strong>cout</strong> citeste pana la intalnirea SPACE.</blockquote>Afisarea se realizeaza astfel:<br> <code>cout << string;</code>', '<p>Pentru ca numarul de caractere nu este stabilit la citire, putem folosi o functie specifica pentru a determina lungimea string-ului, functia <strong>STRLEN</strong> (string length). Deoarece primul caracter din cele n se gaseste in pozitia 0, deducem ca ultimul se va gasi in pozitia n-1.</p><code>n = strlen(sir); </code><br><code>for (int i=0; i&lt;n; i++){</code><br><code>//prelucrare sir</code><br><code>}</code>', '<ul class=''with''><li><strong>unsigned int strlen(char *sir);</strong><br>Efect: returneaza numarul de caractere al unui sir de caractere, fara a lua in considerare caracterul nul de la sfarsitul sirului</li><li><strong>char *strcpy(char *dest,char *sursa);</strong><br>Efect: copiaza sirul de la adresa sursa la adresa destinatie. Copierea se termina la intalnirea caracterului nul. Functia returneaza adresa sirului destinatie. Simuleaza operatia de atribuire a=b</li><li><strong>char *strncpy(char *dest,char *sursa,unsigned int n);</strong><br>Efect: copiaza primii n octeti din sirul de la adresa sursa la adresa destinatie, fara a adauga caracterul nul. Functia returneaza adresa sirului destinatie. Sirul sursa ramane nemodificat</li><li><strong>char *strcat(char *dest,char *sursa);</strong><br>Efect: adauga sirului de la adresa destinatie, inaintea caracterului nul sirul de la adresa sursa. Sirul de la adresa sursa ramane nemodificat. Operatia se numeste concatenare. La adresa destinatie vom avea sirul destinatie urmat de sirul sursa. Sirul destinatie are lungimea egala cu suma lungimilor sirurilor</li></ul>', '<ul class=''with''><li><strong>int atoi(char *s)</strong><br>Efect: transforma un sir de carcatere intr-un intreg (int)</li><li><strong>long atol(char *s)</strong><br>Efect: transforma un sir de carcatere intr-un intreg (long)</li></ul>', 'ce sunt string-urile;', 'cum se declara, citesc si scriu acestea;', 'cum sa folosesti functii importante din diferite biblioteci;', '<p>Fie o propozitie memorata intr-un sir de caractere <strong>sir</strong>:</p><ul class=''with''><li>cate cifre, litere mici, litere mari si semne speciale sunt in propozitie;</li><li>de cate ori apare caracterul SPACE;</li><li>afisarea tuturor prefixelor al primului cuvant din propozitie.</li></ul>', 'profesor Mihai Chelariu, cu ajutorul website-ului personal;', 'editura LS-INFOMAT, cu ajutorul cartii ''Fundamentele programarii'';', 'profesori Paun Roxana si Balajel Ana Maria.'),
(1121, 'Citirea si afisarea', 'Parcurgerea string', 'Functii specifice', 'Proceduri specifice', '<p>Cu sirurile de caractere ne-am intalnit inca de la instructiunea WRITE, cand afisam mesaje de genul ''Variabila este egala cu ''.  Acestea sunt exemple de constante sir de caractere. Termenul englezesc pentru sir de caractere este <strong>STRING</strong>. Limbajul Pascal nu necesita utilizarea unei biblioteci speciale pentru implementarea sirurilor de caractere<p>Declararea se aseamana cu declararea unui vector.</p><code>var sir:string; //maxim 250 de caractere</code>', '<p>Citirea se face cu ajutorul <strong>READ</strong>: </p><code>read(sir);</code><p>Afisarea se face cu ajutorul <strong>WRITE</strong>: </p><code>write(sir);</code>', '<p>Pentru ca numarul de caractere nu este stabilit la citire, putem folosi o functie specifica pentru a determina lungimea string-ului, functia <strong>LENGTH</strong> (string length). Deoarece primul caracter din cele n se gaseste in pozitia 0, deducem ca ultimul se va gasi in pozitia n-1.</p><code>n:=length(sir); </code><br><code>for i:=0 to n do begin</code><br><code>//prelucrare sir</code><br><code>end</code>', '<ul class=''with''><li><strong>LENGTH(sir)</strong><br>Efect: returneaza lungimea unui sir de caractere</li><li><strong>ORD si CHR</strong><br>Efect: ORD(caracter) returneaza codul ASCII al caracterului. CHR(numar) returneaza caracterul corespunzator codului ASCII<blockquote>Sfat: Relatia de legatura intre codul ASCII al caracterelor mari si codul ASCII al caracterelor mici: Cod ASCII(caracter mare) + 32 = Cod ASCII(caracter mic)</blockquote></li><li><strong>POS(sir1, sir2)</strong><br>Efect: verifica daca sirul 1 se situeaza in sirul 2 si returneaza pozitia de inceput in sirul 2 daca exista sau 0 daca sirul 1 nu se afla in sirul 2.</li><li><strong>COPY(sir, poz, nr)</strong><br>Efect: extrage un subsir al primului sir, incepand de la pozitia poz si avand un numar nr de caractere.</li></ul>', '<ul class=''with''><li><strong>DELETE(sir, poz, nr)</strong><br>Efect: sterge din primul sir incepand cu pozitia poz, un numar nr de caractere</li><li><strong>INSERT(subsir, sir, poz)</strong><br>Efect: insereaza subsirul dat in sirul sir incepand din pozitia poz.</li><li><strong>STR(numar, sir)</strong><br>Efect:Transforma variabila ''numar'' intr-un sir de caractere.</li><li><strong>VAL(sir, numar, eroare)</strong><br>Efect: Incearca sa transforme sirul de caractere ''sir'' intr-un numar real.<blockquote>Daca reuseste atunci parametrul eroare va avea valoarea 0, daca nu reuseste valoarea parametrului ''numar'' = 0, ''eroare'' va avea pozitia de unde incepe nereusita.</blockquote></li></ul>', 'ce sunt string-urile;', 'cum se declara, citesc si scriu acestea;', 'cum sa folosesti functii importante din diferite biblioteci.', '<p>Fie o propozitie memorata intr-un sir de caractere <strong>sir</strong>:</p><ul class=''with''><li>cate cifre, litere mici, litere mari si semne speciale sunt in propozitie;</li><li>de cate ori apare caracterul SPACE;</li><li>afisarea tuturor prefixelor al primului cuvant din propozitie.</li></ul>', 'profesor Mihai Chelariu, cu ajutorul website-ului personal;', 'editura LS-INFOMAT, cu ajutorul cartii ''Fundamentele programarii.''', 'profesori Paun Roxana si Balajel Ana Maria.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `General`
--
ALTER TABLE `General`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `Quiz`
--
ALTER TABLE `Quiz`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `Tutorial`
--
ALTER TABLE `Tutorial`
  ADD UNIQUE KEY `id` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

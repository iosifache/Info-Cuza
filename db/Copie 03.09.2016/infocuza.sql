-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 03, 2016 at 09:57 
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `infocuza`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `user` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`user`, `password`) VALUES
('georgeiosif@live.com', '$2y$12$am/37DLayfhglYyRQQgFFe1E6DybJcvJ95kXaWJzJSxdsrpiynovW'),
('georgeiosif@hotmail.com', '$2y$12$jIkr91M6T/3nhQCaf1mSnuIcmnCMLeKh6wZ1F5kCn9wJo4pq6xowW');

-- --------------------------------------------------------

--
-- Table structure for table `animation`
--

CREATE TABLE `animation` (
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `animation`
--

INSERT INTO `animation` (`type`) VALUES
(0);

-- --------------------------------------------------------

--
-- Table structure for table `background`
--

CREATE TABLE `background` (
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `background`
--

INSERT INTO `background` (`type`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `judet`
--

CREATE TABLE `judet` (
  `location` text NOT NULL,
  `name` text NOT NULL,
  `number` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `judet`
--

INSERT INTO `judet` (`location`, `name`, `number`, `id`) VALUES
('DJ', 'Dolj', 51, 1),
('BC', 'Bacau', 26, 2),
('HR', 'Harghita', 76, 3),
('BN', 'Bistrita-Nasaud', 3, 4),
('DB', 'Dambovita', 85, 5),
('SV', 'Suceava', 17, 6),
('BT', 'Botosani', 29, 7),
('BV', 'Brasov', 92, 8),
('B', 'Bucuresti', 195, 9),
('BR', 'Braila', 90, 10),
('HD', 'Hunedoara', 32, 11),
('TR', 'Teleorman', 85, 12),
('CV', 'Covasna', 32, 13),
('TL', 'Tulcea', 2, 14),
('TM', 'Timis', 13, 15),
('BZ', 'Buzau', 57, 16),
('PH', 'Prahova', 721, 17),
('IF', 'Ilfov', 64, 18),
('NT', 'Neamt', 78, 19),
('CJ', 'Cluj', 1, 20),
('AB', 'Alba', 66, 21),
('GR', 'Giurgiu', 31, 22),
('AG', 'Arges', 52, 23),
('CL', 'Calarasi', 67, 24),
('BH', 'Bihor', 79, 25),
('IS', 'Iasi', 93, 26),
('VL', 'Valcea', 29, 27),
('VN', 'Vrancea', 65, 28),
('AR', 'Arad', 37, 29),
('IL', 'Ialomita', 87, 30),
('CS', 'Caras-Severin', 27, 31),
('GL', 'Galati', 73, 32),
('GJ', 'Gorj', 84, 33),
('CT', 'Constanta', 99, 34),
('SM', 'Satu Mare', 46, 35),
('MM', 'Maramures', 31, 36),
('MH', 'Mehedinti', 17, 37),
('SJ', 'Salaj', 87, 38),
('VS', 'Vaslui', 88, 39),
('MS', 'Mures', 81, 40),
('SB', 'Sibiu', 38, 41),
('OT', 'Olt', 46, 42);

-- --------------------------------------------------------

--
-- Table structure for table `lectii`
--

CREATE TABLE `lectii` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `lang` text NOT NULL,
  `nume_sectiune_1` text NOT NULL,
  `nume_sectiune_2` text NOT NULL,
  `nume_sectiune_3` text NOT NULL,
  `nume_sectiune_4` text NOT NULL,
  `nume_sectiune_5` text NOT NULL,
  `introducere` longtext NOT NULL,
  `sectiune_1` longtext NOT NULL,
  `sectiune_2` longtext NOT NULL,
  `sectiune_3` longtext NOT NULL,
  `sectiune_4` longtext NOT NULL,
  `sectiune_5` longtext NOT NULL,
  `aplicare` longtext NOT NULL,
  `exercitii` longtext NOT NULL,
  `felicitari` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lectii`
--

INSERT INTO `lectii` (`id`, `lang`, `nume_sectiune_1`, `nume_sectiune_2`, `nume_sectiune_3`, `nume_sectiune_4`, `nume_sectiune_5`, `introducere`, `sectiune_1`, `sectiune_2`, `sectiune_3`, `sectiune_4`, `sectiune_5`, `aplicare`, `exercitii`, `felicitari`) VALUES
(000001, 'CPP', 'Citirea si afisarea', 'Parcurgerea string', 'Biblioteca string.h', 'Biblioteca stdlib.h', '', '<p>Cu sirurile de caractere ne-am intalnit inca de la instructiunea COUT, cand afisam mesaje de genul "Variabila este egala cu: ". Acestea sunt exemple de constante sir de caractere. Termenul englezesc pentru sir de caractere este <strong>STRING</strong>. Daca lucram cu string-uri trebuie sa declaram utilizarea bibliotecii(colectie de functii specializate).</p><p><code>#include string.h;</code></p><p>Declararea se aseamana cu declararea unui vector.</p><p><code>char sir[50]; //maxim 50 de caractere</code></p>', '<p>Exista mai multe metode pentru citirea unui string:</p><ul class="with"><li><code>cin.getline(sir, 50);</code></li><li><code>cin &gt;&gt; sir;</code></li></ul><blockquote>Sfat: Se recomanda folosirea <strong>cin.getline</strong> deoarece se citeste string-ul pana la intalnirea ENTER, in timp ce <strong>cout</strong> citeste pana la intalnirea SPACE.</blockquote><p>Afisarea se realizeaza astfel:<br> <code>cout &lt;&lt; string;</code></p>', '<p>Pentru ca numarul de caractere nu este stabilit la citire, putem folosi o functie specifica pentru a determina lungimea string-ului, functia <strong>STRLEN</strong> (string length). Deoarece primul caracter din cele n se gaseste in pozitia 0, deducem ca ultimul se va gasi in pozitia n-1.</p><p><code>n = strlen(sir); </code><br><code>for (int i=0; i&lt;n; i++){</code><br><code>//prelucrare sir</code><br><code>}</code></p>', '<ul class="with"><li><strong>unsigned int strlen(char *sir);</strong><br>Efect: returneaza numarul de caractere al unui sir de caractere, fara a lua in considerare caracterul nul de la sfarsitul sirului</li><li><strong>char *strcpy(char *dest,char *sursa);</strong><br>Efect: copiaza sirul de la adresa sursa la adresa destinatie. Copierea se termina la intalnirea caracterului nul. Functia returneaza adresa sirului destinatie. Simuleaza operatia de atribuire a=b</li><li><strong>char *strncpy(char *dest,char *sursa,unsigned int n);</strong><br>Efect: copiaza primii n octeti din sirul de la adresa sursa la adresa destinatie, fara a adauga caracterul nul. Functia returneaza adresa sirului destinatie. Sirul sursa ramane nemodificat</li><li><strong>char *strcat(char *dest,char *sursa);</strong><br>Efect: adauga sirului de la adresa destinatie, inaintea caracterului nul sirul de la adresa sursa. Sirul de la adresa sursa ramane nemodificat. Operatia se numeste concatenare. La adresa destinatie vom avea sirul destinatie urmat de sirul sursa. Sirul destinatie are lungimea egala cu suma lungimilor sirurilor</li></ul>', '<ul class="with"><li><strong>int atoi(char *s)</strong><br>Efect: transforma un sir de carcatere intr-un intreg (int)</li><li><strong>long atol(char *s)</strong><br>Efect: transforma un sir de carcatere intr-un intreg (long)</li></ul>', '', '<p>Sirurile de caractere au o mare aplicabilitate in viata reala, fiind implementati de obicei cu ajutorul programarii dinamice. Cu ajutorul acestora se poate realizeaza interconexiunea dintre masina si om.</p>', '<p>Fie o propozitie memorata intr-un sir de caractere <strong>sir</strong>:</p><ul class="with"><li>cate cifre, litere mici, litere mari si semne speciale sunt in propozitie;</li><li>de cate ori apare caracterul SPACE;</li><li>afisarea tuturor prefixelor al primului cuvant din propozitie.</li></ul>', '<p>In acesta lectie ai invatat:</p><ul class="with"><li>ce sunt string-urile;</li><li>cum se declara, citesc si scriu acestea;</li><li>cum sa folosesti functii importante din diferite biblioteci;</li></ul><p>Multumim urmatorilor editori pentru furnizarea informatiilor:</p><ul class="with"><li>profesor Mihai Chelariu, cu ajutorul website-ului personal;</li><li>editura LS-INFOMAT, cu ajutorul cartii "Fundamentele programarii";</li><li>profesori Paun Roxana si Balajel Ana Maria.</li></ul>'),
(000001, 'PAS', 'Citirea si afisarea', 'Parcurgerea string', 'Functii specifice', 'Proceduri specifice', '', '<p>Cu sirurile de caractere ne-am intalnit inca de la instructiunea WRITE, cand afisam mesaje de genul "Variabila este egala cu: ". Acestea sunt exemple de constante sir de caractere. Termenul englezesc pentru sir de caractere este <strong>STRING</strong>. Limbajul Pascal nu necesita utilizarea unei biblioteci speciale pentru implementarea sirurilor de caractere</p><p>Declararea se aseamana cu declararea unui vector.</p><p><code>var sir:string; //maxim 250 de caractere</code></p>', '<p>Citirea se face cu ajutorul <strong>READ</strong>:</p><p><code>read(sir);</code></p><p>Afisarea se face cu ajutorul <strong>WRITE</strong>:</p><p><code>write(sir);</code></p>', '<p>Pentru ca numarul de caractere nu este stabilit la citire, putem folosi o functie specifica pentru a determina lungimea string-ului, functia <strong>LENGTH</strong> (string length). Deoarece primul caracter din cele n se gaseste in pozitia 0, deducem ca ultimul se va gasi in pozitia n-1.</p><p><code>n:=length(sir); </code><br><code>for i:=1 to n do begin</code><br><code>//prelucrare sir</code><br><code>end</code></p>', '<ul class="with"><li><strong>LENGTH(sir)</strong><br>Efect: returneaza lungimea unui sir de caractere</li><li><strong>ORD si CHR</strong><br>Efect: ORD(caracter) returneaza codul ASCII al caracterului. CHR(numar) returneaza caracterul corespunzator codului ASCII<blockquote>Sfat: Relatia de legatura intre codul ASCII al caracterelor mari si codul ASCII al caracterelor mici: Cod ASCII(caracter mare) + 32 = Cod ASCII(caracter mic)</blockquote></li><li><strong>POS(sir1, sir2)</strong><br>Efect: verifica daca sirul 1 se situeaza in sirul 2 si returneaza pozitia de inceput in sirul 2 daca exista sau 0 daca sirul 1 nu se afla in sirul 2.</li><li><strong>COPY(sir, poz, nr)</strong><br>Efect: extrage un subsir al primului sir, incepand de la pozitia poz si avand un numar nr de caractere.</li></ul>', '<ul class="with"><li><strong>DELETE(sir, poz, nr)</strong><br>Efect: sterge din primul sir incepand cu pozitia poz, un numar nr de caractere</li><li><strong>INSERT(subsir, sir, poz)</strong><br>Efect: insereaza subsirul dat in sirul sir incepand din pozitia poz.</li><li><strong>STR(numar, sir)</strong><br>Efect:Transforma variabila "numar" intr-un sir de caractere.</li><li><strong>VAL(sir, numar, eroare)</strong><br>Efect: Incearca sa transforme sirul de caractere "sir" intr-un numar real.<blockquote>Daca reuseste atunci parametrul eroare va avea valoarea 0, daca nu reuseste valoarea parametrului "numar" = 0, "eroare" va avea pozitia de unde incepe nereusita.</blockquote></li></ul>', '', '<p>Sirurile de caractere au o mare aplicabilitate in viata reala. Cu ajutorul acestora se poate realizeaza interconexiunea dintre masina si om.</p>', '<p>Fie o propozitie memorata intr-un sir de caractere <strong>sir</strong>:</p><ul class="with"><li>cate cifre, litere mici, litere mari si semne speciale sunt in propozitie;</li><li>de cate ori apare caracterul SPACE;</li><li>afisarea tuturor prefixelor al primului cuvant din propozitie.</li></ul>', '<p>In acesta lectie ai invatat:</p><ul class="with"><li>ce sunt string-urile;</li><li>cum se declara, citesc si scriu acestea;</li><li>cum sa folosesti functii importante din diferite biblioteci;</li></ul><p>Multumim urmatorilor editori pentru furnizarea informatiilor:</p><ul class="with"><li>profesor Mihai Chelariu, cu ajutorul website-ului personal;</li><li>editura LS-INFOMAT, cu ajutorul cartii "Fundamentele programarii";</li><li>profesori Paun Roxana si Balajel Ana Maria.</li></ul>');

-- --------------------------------------------------------

--
-- Table structure for table `materiale`
--

CREATE TABLE `materiale` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `date` date NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `views` int(11) NOT NULL,
  `likes` int(11) NOT NULL,
  `tip` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `materiale`
--

INSERT INTO `materiale` (`id`, `date`, `title`, `description`, `views`, `likes`, `tip`) VALUES
(000001, '2016-06-01', 'Siruri de caractere', 'Sirurile de caractere reprezinta, practic, un vector ce retine codul ASCII al fiecarui caracter. Aceasta structura este una dintre cele mai folosite si utile in domeniul informaticii.', 1486, 112, 'Lectie'),
(000002, '2015-06-05', 'Siruri de caractere', 'Sirurile de caractere reprezinta, practic, un vector ce retine codul ASCII al fiecarui caracter. Aceasta structura este una dintre cele mai folosite si utile in domeniul informaticii.', 1769, 128, 'Test'),
(000003, '2016-06-10', 'Backtracking', 'Aceasta metoda se aplica problemelor in care solutia se poate reprezenta sub forma unui vector. Pentru fiecare sunt date anumite relatii intre componentele vectorului numite conditii interne.', 0, 0, 'Test'),
(000004, '2015-06-15', 'Metoda Greedy', 'Algoritmii Greedy sunt in general simpli si sunt folositi la probleme de optimizare deoarece determina o singura solutie, asigurand un optim local, dar nu intotdeauna si global.', 0, 0, 'Lectie'),
(000005, '2016-08-25', 'Adunare', 'Problema problema este destinata incepatorilor absoluti, reprezentand o metoda de a obtine suma a doua numere.', 127, 4, 'Problema');

-- --------------------------------------------------------

--
-- Table structure for table `probleme`
--

CREATE TABLE `probleme` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `descriereProblema` text NOT NULL,
  `descriereInput` text NOT NULL,
  `descriereOutput` text NOT NULL,
  `precizari` text NOT NULL,
  `teste` text NOT NULL,
  `restrictieTimp` int(11) NOT NULL,
  `restrictieSpatiu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `probleme`
--

INSERT INTO `probleme` (`id`, `descriereProblema`, `descriereInput`, `descriereOutput`, `precizari`, `teste`, `restrictieTimp`, `restrictieSpatiu`) VALUES
(000005, 'Aceasta problema reprezinta o simpla adunare.', '<p>Datele de intrare se citesc astfel:</p><ul class="with"><li>pe prima linie un numar intreg <code>a</code></li><li>pe a doua linie un numar intreg <code>b</code></li></ul>', '<p>Datele de iesire se tiparesc astfel:</p><ul class="with"><li>pe prima linie: suma celor doua numere</li></ul>', '<p>Sunt prezente urmatoarele restrictii: <b>o secunda</b> ca timp de executare si <b>4MB</b> ca spatiu de stocare.</p>', 'a:3:{i:0;a:2:{s:5:"input";s:3:"1 2";s:6:"output";s:1:"3";}i:1;a:2:{s:5:"input";s:4:"20 6";s:6:"output";s:2:"26";}i:2;a:2:{s:5:"input";s:9:"1184 1816";s:6:"output";s:4:"3000";}}', 1, 4048);

-- --------------------------------------------------------

--
-- Table structure for table `tari`
--

CREATE TABLE `tari` (
  `id` int(11) NOT NULL,
  `code` text NOT NULL,
  `name` text NOT NULL,
  `number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tari`
--

INSERT INTO `tari` (`id`, `code`, `name`, `number`) VALUES
(1, 'AD', 'Andorra', 26),
(2, 'AE', 'United Arab Emirates', 15),
(3, 'AF', 'Afghanistan', 94),
(4, 'AG', 'Antigua and Barbuda', 28),
(5, 'AI', 'Anguilla', 53),
(6, 'AL', 'Albania', 82),
(7, 'AM', 'Armenia', 52),
(8, 'AO', 'Angola', 14),
(9, 'AQ', 'Antarctica', 10),
(10, 'AR', 'Argentina', 9),
(11, 'AS', 'American Samoa', 14),
(12, 'AT', 'Austria', 40),
(13, 'AU', 'Australia', 60),
(14, 'AW', 'Aruba', 81),
(15, 'AX', 'Aland Islands', 26),
(16, 'AZ', 'Azerbaijan', 85),
(17, 'BA', 'Bosnia and Herzegovina', 46),
(18, 'BB', 'Barbados', 75),
(19, 'BD', 'Bangladesh', 37),
(20, 'BE', 'Belgium', 56),
(21, 'BF', 'Burkina Faso', 72),
(22, 'BG', 'Bulgaria', 90),
(23, 'BH', 'Bahrain', 36),
(24, 'BI', 'Burundi', 9),
(25, 'BJ', 'Benin', 34),
(26, 'BL', 'Saint Barthelemy', 44),
(27, 'BM', 'Bermuda', 18),
(28, 'BN', 'Brunei Darussalam', 54),
(29, 'BO', 'Bolivia', 19),
(30, 'BQ', 'Caribbean Netherlands ', 31),
(31, 'BR', 'Brazil', 96),
(32, 'BS', 'Bahamas', 87),
(33, 'BT', 'Bhutan', 50),
(34, 'BV', 'Bouvet Island', 87),
(35, 'BW', 'Botswana', 86),
(36, 'BY', 'Belarus', 67),
(37, 'BZ', 'Belize', 76),
(38, 'CA', 'Canada', 78),
(39, 'CC', 'Cocos (Keeling) Islands', 63),
(40, 'CD', 'Congo, Democratic Republic of', 78),
(41, 'CF', 'Central African Republic', 5),
(42, 'CG', 'Congo', 85),
(43, 'CH', 'Switzerland', 14),
(44, 'CI', 'Cote d''Ivoire', 14),
(45, 'CK', 'Cook Islands', 24),
(46, 'CL', 'Chile', 78),
(47, 'CM', 'Cameroon', 22),
(48, 'CN', 'China', 70),
(49, 'CO', 'Colombia', 85),
(50, 'CR', 'Costa Rica', 15),
(51, 'CU', 'Cuba', 18),
(52, 'CV', 'Cape Verde', 45),
(53, 'CW', 'Curacao', 70),
(54, 'CX', 'Christmas Island', 17),
(55, 'CY', 'Cyprus', 71),
(56, 'CZ', 'Czech Republic', 6),
(57, 'DE', 'Germany', 15),
(58, 'DJ', 'Djibouti', 56),
(59, 'DK', 'Denmark', 36),
(60, 'DM', 'Dominica', 10),
(61, 'DO', 'Dominican Republic', 39),
(62, 'DZ', 'Algeria', 64),
(63, 'EC', 'Ecuador', 5),
(64, 'EE', 'Estonia', 32),
(65, 'EG', 'Egypt', 45),
(66, 'EH', 'Western Sahara', 29),
(67, 'ER', 'Eritrea', 9),
(68, 'ES', 'Spain', 57),
(69, 'ET', 'Ethiopia', 56),
(70, 'FI', 'Finland', 11),
(71, 'FJ', 'Fiji', 84),
(72, 'FK', 'Falkland Islands', 88),
(73, 'FM', 'Micronesia, Federated States of', 90),
(74, 'FO', 'Faroe Islands', 86),
(75, 'FR', 'France', 59),
(76, 'GA', 'Gabon', 36),
(77, 'GB', 'United Kingdom', 2),
(78, 'GD', 'Grenada', 97),
(79, 'GE', 'Georgia', 85),
(80, 'GF', 'French Guiana', 32),
(81, 'GG', 'Guernsey', 3),
(82, 'GH', 'Ghana', 16),
(83, 'GI', 'Gibraltar', 71),
(84, 'GL', 'Greenland', 9),
(85, 'GM', 'Gambia', 27),
(86, 'GN', 'Guinea', 11),
(87, 'GP', 'Guadeloupe', 69),
(88, 'GQ', 'Equatorial Guinea', 16),
(89, 'GR', 'Greece', 70),
(90, 'GS', 'South Georgia and the South Sandwich Islands', 3),
(91, 'GT', 'Guatemala', 2),
(92, 'GU', 'Guam', 99),
(93, 'GW', 'Guinea-Bissau', 93),
(94, 'GY', 'Guyana', 69),
(95, 'HK', 'Hong Kong', 62),
(96, 'HM', 'Heard and McDonald Islands', 4),
(97, 'HN', 'Honduras', 31),
(98, 'HR', 'Croatia', 43),
(99, 'HT', 'Haiti', 22),
(100, 'HU', 'Hungary', 79),
(101, 'ID', 'Indonesia', 29),
(102, 'IE', 'Ireland', 10),
(103, 'IL', 'Israel', 57),
(104, 'IM', 'Isle of Man', 59),
(105, 'IN', 'India', 23),
(106, 'IO', 'British Indian Ocean Territory', 35),
(107, 'IQ', 'Iraq', 6),
(108, 'IR', 'Iran', 22),
(109, 'IS', 'Iceland', 92),
(110, 'IT', 'Italy', 97),
(111, 'JE', 'Jersey', 9),
(112, 'JM', 'Jamaica', 52),
(113, 'JO', 'Jordan', 32),
(114, 'JP', 'Japan', 3),
(115, 'KE', 'Kenya', 18),
(116, 'KG', 'Kyrgyzstan', 80),
(117, 'KH', 'Cambodia', 50),
(118, 'KI', 'Kiribati', 6),
(119, 'KM', 'Comoros', 78),
(120, 'KN', 'Saint Kitts and Nevis', 76),
(121, 'KP', 'North Korea', 44),
(122, 'KR', 'South Korea', 92),
(123, 'KW', 'Kuwait', 29),
(124, 'KY', 'Cayman Islands', 66),
(125, 'KZ', 'Kazakhstan', 46),
(126, 'LA', 'Lao People''s Democratic Republic', 28),
(127, 'LB', 'Lebanon', 4),
(128, 'LC', 'Saint Lucia', 32),
(129, 'LI', 'Liechtenstein', 50),
(130, 'LK', 'Sri Lanka', 52),
(131, 'LR', 'Liberia', 11),
(132, 'LS', 'Lesotho', 96),
(133, 'LT', 'Lithuania', 50),
(134, 'LU', 'Luxembourg', 58),
(135, 'LV', 'Latvia', 40),
(136, 'LY', 'Libya', 27),
(137, 'MA', 'Morocco', 13),
(138, 'MC', 'Monaco', 82),
(139, 'MD', 'Moldova', 75),
(140, 'ME', 'Montenegro', 28),
(141, 'MF', 'Saint-Martin (France)', 14),
(142, 'MG', 'Madagascar', 84),
(143, 'MH', 'Marshall Islands', 81),
(144, 'MK', 'Macedonia', 54),
(145, 'ML', 'Mali', 23),
(146, 'MM', 'Myanmar', 53),
(147, 'MN', 'Mongolia', 96),
(148, 'MO', 'Macau', 21),
(149, 'MP', 'Northern Mariana Islands', 15),
(150, 'MQ', 'Martinique', 10),
(151, 'MR', 'Mauritania', 4),
(152, 'MS', 'Montserrat', 88),
(153, 'MT', 'Malta', 32),
(154, 'MU', 'Mauritius', 94),
(155, 'MV', 'Maldives', 76),
(156, 'MW', 'Malawi', 96),
(157, 'MX', 'Mexico', 53),
(158, 'MY', 'Malaysia', 76),
(159, 'MZ', 'Mozambique', 22),
(160, 'NA', 'Namibia', 79),
(161, 'NC', 'New Caledonia', 29),
(162, 'NE', 'Niger', 9),
(163, 'NF', 'Norfolk Island', 54),
(164, 'NG', 'Nigeria', 46),
(165, 'NI', 'Nicaragua', 68),
(166, 'NL', 'The Netherlands', 2),
(167, 'NO', 'Norway', 3),
(168, 'NP', 'Nepal', 7),
(169, 'NR', 'Nauru', 28),
(170, 'NU', 'Niue', 15),
(171, 'NZ', 'New Zealand', 93),
(172, 'OM', 'Oman', 20),
(173, 'PA', 'Panama', 17),
(174, 'PE', 'Peru', 26),
(175, 'PF', 'French Polynesia', 76),
(176, 'PG', 'Papua New Guinea', 5),
(177, 'PH', 'Philippines', 94),
(178, 'PK', 'Pakistan', 57),
(179, 'PL', 'Poland', 1),
(180, 'PM', 'St. Pierre and Miquelon', 33),
(181, 'PN', 'Pitcairn', 61),
(182, 'PR', 'Puerto Rico', 9),
(183, 'PS', 'Palestine, State of', 56),
(184, 'PT', 'Portugal', 54),
(185, 'PW', 'Palau', 2),
(186, 'PY', 'Paraguay', 45),
(187, 'QA', 'Qatar', 22),
(188, 'RE', 'Reunion', 71),
(189, 'RO', 'Romania', 2119),
(190, 'RS', 'Serbia', 37),
(191, 'RU', 'Russian Federation', 16),
(192, 'RW', 'Rwanda', 65),
(193, 'SA', 'Saudi Arabia', 78),
(194, 'SB', 'Solomon Islands', 94),
(195, 'SC', 'Seychelles', 37),
(196, 'SD', 'Sudan', 2),
(197, 'SE', 'Sweden', 96),
(198, 'SG', 'Singapore', 79),
(199, 'SH', 'Saint Helena', 4),
(200, 'SI', 'Slovenia', 79),
(201, 'SJ', 'Svalbard and Jan Mayen Islands', 86),
(202, 'SK', 'Slovakia', 93),
(203, 'SL', 'Sierra Leone', 6),
(204, 'SM', 'San Marino', 49),
(205, 'SN', 'Senegal', 27),
(206, 'SO', 'Somalia', 85),
(207, 'SR', 'Suriname', 47),
(208, 'SS', 'South Sudan', 78),
(209, 'ST', 'Sao Tome and Principe', 51),
(210, 'SV', 'El Salvador', 21),
(211, 'SX', 'Sint Maarten (Dutch part)', 49),
(212, 'SY', 'Syria', 80),
(213, 'SZ', 'Swaziland', 56),
(214, 'TC', 'Turks and Caicos Islands', 37),
(215, 'TD', 'Chad', 15),
(216, 'TF', 'French Southern Territories', 63),
(217, 'TG', 'Togo', 73),
(218, 'TH', 'Thailand', 76),
(219, 'TJ', 'Tajikistan', 60),
(220, 'TK', 'Tokelau', 72),
(221, 'TL', 'Timor-Leste', 80),
(222, 'TM', 'Turkmenistan', 83),
(223, 'TN', 'Tunisia', 75),
(224, 'TO', 'Tonga', 25),
(225, 'TR', 'Turkey', 97),
(226, 'TT', 'Trinidad and Tobago', 14),
(227, 'TV', 'Tuvalu', 76),
(228, 'TW', 'Taiwan', 39),
(229, 'TZ', 'Tanzania', 64),
(230, 'UA', 'Ukraine', 6),
(231, 'UG', 'Uganda', 34),
(232, 'UM', 'United States Minor Outlying Islands', 51),
(233, 'US', 'United States', 55),
(234, 'UY', 'Uruguay', 21),
(235, 'UZ', 'Uzbekistan', 40),
(236, 'VA', 'Vatican', 35),
(237, 'VC', 'Saint Vincent and the Grenadines', 55),
(238, 'VE', 'Venezuela', 71),
(239, 'VG', 'Virgin Islands (British)', 88),
(240, 'VI', 'Virgin Islands (U.S.)', 27),
(241, 'VN', 'Vietnam', 70),
(242, 'VU', 'Vanuatu', 70),
(243, 'WF', 'Wallis and Futuna Islands', 38),
(244, 'WS', 'Samoa', 80),
(245, 'YE', 'Yemen', 88),
(246, 'YT', 'Mayotte', 98),
(247, 'ZA', 'South Africa', 28),
(248, 'ZM', 'Zambia', 42),
(249, 'ZW', 'Zimbabwe', 26);

-- --------------------------------------------------------

--
-- Table structure for table `teste`
--

CREATE TABLE `teste` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `lang` text NOT NULL,
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
  `drag_enunt` longtext NOT NULL,
  `drag_code` longtext NOT NULL,
  `drag_var` longtext NOT NULL,
  `correct` longtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teste`
--

INSERT INTO `teste` (`id`, `lang`, `intrebare_1`, `raspuns_1`, `intrebare_2`, `raspuns_2`, `intrebare_3`, `raspuns_3`, `intrebare_4`, `raspuns_4`, `intrebare_5`, `raspuns_5`, `output_1`, `code_output_1`, `output_2`, `code_output_2`, `output_3`, `code_output_3`, `drag_enunt`, `drag_code`, `drag_var`, `correct`) VALUES
(000002, 'CPP', 'Ce reprezinta sirurile de caractere(string-uri)?', 'a:3:{i:0;s:46:"vectori ce retin codul ASCII ale caracterelor;";i:1;s:38:"tip de date, independent de celelalte;";i:2;s:47:"vector ce retine codul UNICODE al caracterelor.";}', 'Ce biblioteca este necesara a fi utilizata cand se folosesc string-urile?', 'a:3:{i:0;s:9:"string.h;";i:1;s:11:"iostream.h;";i:2;s:7:"math.h.";}', 'Citirea si scrierea string-urilor se face cu:', 'a:3:{i:0;s:17:"readln si writeln";i:1;s:14:"cin si writeln";i:2;s:11:"cin si cout";}', 'La ce este folosita functia strlen?', 'a:3:{i:0;s:25:"copierea dintr-un string;";i:1;s:29:"aflarea lungimii unui string;";i:2;s:29:"concatenarea unor string-uri.";}', 'La ce este folosita functia strcpy?', 'a:3:{i:0;s:25:"copierea dintr-un string;";i:1;s:29:"concatenarea unor string-uri;";i:2;s:29:"aflarea lungimii unui string.";}', 'Ce se va afisa in urma executarii urmatoarei secvente de instructiuni?', '<p><code>a = "Primavara";</code><br> <code>for (int i=l;i&lt;=3;i++) strcpy(a+1,a+2);</code><br> <code>cout &lt;&lt; a;</code><br></p>', 'Ce se va afisa in urma executarii urmatoarei secvente de instructiuni?', '<p><code>x = "Mama";</code><br> <code>y = "Macara";</code><br> <code>if (strcmp(x,y)&gt;0) then cout &lt;&lt; y</code><br> <code>else if (x=y) then cout &lt;&lt; "Incorect"</code><br> <code>else cout &lt;&lt; x;</code><br></p>', 'Ce se va afisa in urma executarii urmatoarei secvente de instructiuni?', '<p><code>s = "MacarA";</code><br> <code>for (i=0; i&lt;strlen(s)/2; i++){</code><br> <code>char x = s[i];</code><br> <code>s[i] = s[strlen(s)-i-1];</code><br> <code>s[strlen(s)-i-1] = x;</code><br> <code>}</code><br> <code>cout &lt;&lt; s;</code><br></p>', 'Sa se afiseze toate prefixele unui cuvant.', '<p><code>#include &lt;iostream.h&gt; </code> <code>#include &lt;string.h&gt;</code><code>int main(){</code> <code>string cuv;</code> <code>int n,i;</code> <code>cout &lt;&lt; "Cuvantul este:";</code> <code>cin &gt;&gt; cuv;</code> <code class="droppable1 ui-droppable"></code> <code>for (i=0; i&lt;=n; i++){</code> <code class="droppable2 ui-droppable"></code> <code>cin &gt;&gt; endl;</code> <code>}</code></p>', '<p><code class="ui-draggable ui-draggable-handle">n:=length(cuv);</code> <code class="ui-draggable ui-draggable-handle">n = strlen(cuv);</code> <code class="ui-draggable ui-draggable-handle">writeln(copy(cuv,1,i));</code> <code class="ui-draggable ui-draggable-handle">cout &lt;&lt; strcpy(cuv,n,i);</code></p>', '["1","1","3","2","1","Pavara","Mama","AracaM","n = strlen(cuv);","cout << strcpy(cuv,n,i);"]'),
(000002, 'PAS', 'Ce reprezinta sirurile de caractere(string-uri)?', 'a:3:{i:0;s:46:"vectori ce retin codul ASCII ale caracterelor;";i:1;s:38:"tip de date, independent de celelalte;";i:2;s:47:"vector ce retine codul UNICODE al caracterelor.";}', 'Ce biblioteca este necesara a fi utilizata cand se folosesc string-urile?', 'a:3:{i:0;s:71:"limbajul Pascal nu necesita o biblioteca pentru a implemeta string-uri;";i:1;s:10:"iostream.h";i:2;s:8:"string.h";}', 'Citirea si scrierea string-urilor se face cu:', 'a:3:{i:0;s:17:"readln si writeln";i:1;s:14:"cin si writeln";i:2;s:11:"cin si cout";}', 'La ce este folosita functia length()?', 'a:3:{i:0;s:29:"concatenarea unor string-uri;";i:1;s:25:"copierea dintr-un string;";i:2;s:29:"aflarea lungimii unui string.";}', 'La ce este folosita functia copy()?', 'a:3:{i:0;s:25:"copierea dintr-un string;";i:1;s:29:"concatenarea unor string-uri;";i:2;s:29:"aflarea lungimii unui string.";}', 'Ce se va afisa in urma executarii urmatoarei secvente de instructiuni?', '<p><code>s:="Primavara";</code><br> <code>for i:=1 to 3 do</code><br> <code>delete(s,2,1);</code><br> <code>writeln(a);</code><br></p>', 'Ce se va afisa in urma executarii urmatoarei secvente de instructiuni?', '<p><code>x:="Mama";</code><br> <code>y:="Macara";</code><br> <code>if (x&gt;y) then writeln(x)</code><br> <code>else if (x=y) then writeln("Incorect")</code><br> <code>else writeln(y);</code><br></p>', 'Ce se va afisa in urma executarii urmatoarei secvente de instructiuni?', '<p><code>s:="MacarA";</code><br> <code>x:="";</code><br> <code>for i:=1 to 6 do begin</code><br> <code>x:=s[i];</code><br> <code>s[i]:=s[7-i];</code><br> <code>s[7-i]:=x;</code><br> <code>end;</code><br> <code>writeln(s);</code><br></p>', 'Sa se afiseze toate prefixee unui cuvant.', '<p><code>var cuv:string;</code> <code>n,i:integer;</code> <code>begin</code> <code>write("Cuvantul este: ");</code> <code>readln(cuv);</code> <code class="droppable1 ui-droppable"></code> <code>for i:= 1 to n do</code> <code class="droppable2 ui-droppable"></code> <code>readln;</code> <code>end.</code></p>', '<p><code class="ui-draggable ui-draggable-handle">n:=length(cuv);</code> <code class="ui-draggable ui-draggable-handle">n:=cuv.lenght();</code> <code class="ui-draggable ui-draggable-handle">writeln(copy(cuv,1,i));</code> <code class="ui-draggable ui-draggable-handle">writeln(delete(cuv,1,i);</code></p>', '["1","1","1","3","1","Pavara","Mama","AracaM","n:=length(cuv);","writeln(copy(cuv,1,i));"]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `materiale`
--
ALTER TABLE `materiale`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tari`
--
ALTER TABLE `tari`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `materiale`
--
ALTER TABLE `materiale`
  MODIFY `id` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `tari`
--
ALTER TABLE `tari`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=250;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

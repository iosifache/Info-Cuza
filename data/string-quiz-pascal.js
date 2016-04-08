var view = {
    "title": "Quiz Pascal: Siruri de caractere",
    "time": "30 minute",
    "lang":[{"text":"C++","href":"quiz.html?name=string-quiz&lang=cpp"},{"text":"Pascal","href":"quiz.html?name=string-quiz&lang=pascal"}],
    "question-one":[
        {
            "text":"1. Ce reprezinta sirurile de caractere(string-uri)?",
            "answers":[{"text":"vectori ce retin codul ASCII ale caracterelor;","value":"1"},{"text":"tip de date, independent de celelalte;","value":"2"},{"text":"vector ce retine codul UNICODE al caracterelor.","value":"3"}],
            "name":"1"
        },
        {
            "text":"2. Ce biblioteca este necesara a fi utilizata cand se folosesc string-urile?",
            "answers":[{"text":"limbajul Pascal nu necesita o biblioteca pentru a implemeta string-uri;","value":"1"},{"text":"iostream.h;","value":"2"},{"text":"string.h.","value":"3"}],
            "name":"2"
        },
        {
            "text":"3. Citirea si scrierea sctring-urilor se face cu:?",
            "answers":[{"text":"readln si writeln;","value":"1"},{"text":"cin.get si writeln;","value":"2"},{"text":"cin si cout.","value":"3"}],
            "name":"3"
        },
        {
            "text":"4. La ce este folosita functia length()?",
            "answers":[{"text":"copierea dintr-un string;","value":"1"},{"text":"aflarea lungimii unui string;","value":"2"},{"text":"concatenarea unor string-urile.","value":"3"}],
            "name":"4"
        },
        {
            "text":"5. La ce este folosita functia copy()?",
            "answers":[{"text":"copierea dintr-un string;","value":"1"},{"text":"concatenarea unor string-uri;","value":"2"},{"text":"aflarea lungimii unui string.","value":"3"}],
            "name":"5"
        }
    ],
    "question-two":[
        {
            "text":"1. Ce se va afisa în urma executarii urmatoarei secvente de instructiuni?",
            "code":[{"text":"s:='Primavara';"},{"text":"for i:=1 to 3 do"},{"text":"delete(s,2,1);"},{"text":"writeln(a);"}]
        },
        {
            "text":"2. Ce se va afisa în urma executarii urmatoarei secvente de instructiuni?",
            "code":[{"text":"x:='Mama';"},{"text":"y:='Macara';"},{"text":"if x<y then write(y)"},{"text":"else writeln('Incorect');"}]
        },
        {
            "text":"3. Considerând cã variabila x este de tip char*, ce se va afisa în urma executarii urmatoarei secvente de instructiuni?",
            "code":[{"text":"s:='MacarA';"},{"text":"x:=' ';"},{"text":"for i:=1 to 6 do x:=s[i]+x;"},{"text":"s:=x;"},{"text":"writeln(s);"}]
        }
    ],
    "question-three":{
        "complete":[
            {
                "code":"var cuv:string;"
            },
            {
                "code":"n,i:integer;"
            },
            {
                "code":"begin"
            },
            {
                "code":"write('Cuvantul este:'');"
            },
            {
                "code":"readln(cuv);"
            },
            {
                "code":"",
                "class":"droppable1"
            },
            {
                "code":"for i:= 1 to n do"
            },
            {
                "code":"",
                "class":"droppable2"
            },
            {
                "code":"readln;"
            },
            {
                "code":"end."
            }
        ],
        "drag":[{"code":"n:=length(cuv);"},{"code":"n:=cuv.lenght();"},{"code":"writeln(copy(cuv,1,i));"},{"code":"writeln(delete(cuv,1,i);"}]
    },
    "correct":[1,1,1,2,1,"string","string","string","n:=length(cuv);","writeln(copy(cuv,1,i));"],
    "messages":["Uhh. Nu stapanesti foarte bine notiunea de string. Sfatul nostru este sa reparcurgi teoria si sa refaci quiz-ul.","Scorul tau este unul mediu. Incearca sa intelegi mai bine lectia urmatoare!","Felicitari, te-ai descurcat onorabil. Ai dat dovada ca stapanesti bine notiunea de string."]
}

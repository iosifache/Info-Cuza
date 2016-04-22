var view = {
    "title": "Quiz C++: Siruri de caractere",
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
            "answers":[{"text":"string.h;","value":"1"},{"text":"iostream.h;","value":"2"},{"text":"math.h.","value":"3"}],
            "name":"2"
        },
        {
            "text":"3. Citirea si scrierea string-urilor se face cu:",
            "answers":[{"text":"readln si writeln;","value":"1"},{"text":"cin.get si writeln;","value":"2"},{"text":"cin si cout.","value":"3"}],
            "name":"3"
        },
        {
            "text":"4. La ce este folosita functia strlen?",
            "answers":[{"text":"copierea dintr-un string;","value":"1"},{"text":"aflarea lungimii unui string;","value":"2"},{"text":"concatenarea unor string-urile.","value":"3"}],
            "name":"4"
        },
        {
            "text":"5. La ce este folosita functia strcpy?",
            "answers":[{"text":"copierea dintr-un string;","value":"1"},{"text":"concatenarea unor string-uri;","value":"2"},{"text":"aflarea lungimii unui string.","value":"3"}],
            "name":"5"
        }
    ],
    "question-two":[
        {
            "text":"1. Ce se va afisa în urma executarii urmatoarei secvente de instructiuni?",
            "code":[{"text":"x= 'dimineata';"},{"text":"a = 'Primavara';"},{"text":"for (int i=l;i<=3;i++)"},{"text":"strcpy(a+1,a+2);"}]
        },
        {
            "text":"2. Ce se va afisa în urma executarii urmatoarei secvente de instructiuni?",
            "code":[{"text":"x = 'Mama';"},{"text":"y = 'Macara';"},{"text":"if (strcmp(x,y)>0) cout«x;"},{"text":"else if (strcmp(x,y)==0) cout<< *Incorect';"},{"text":"else cout<<y;"}]
        },
        {
            "text":"3. Ce se va afisa în urma executarii urmatoarei secvente de instructiuni?",
            "code":[{"text":"s = 'MacarA'"},{"text":"for (i=0; i<strlen(s)/2; i++){"},{"text":"char x = s[i];"},{"text":"s[i] = s[strlen(s)-i-1]; "},{"text":"s[strlen(s)-i-1] = x;"},{"text":"}"}]
        }
    ],
    "question-three":{
        "complete":[
            {
                "code":"#include <iostream.h>"
            },
            {
                "code":"#include <stdio.h>"
            },
            {
                "code":"#include <string.h>"
            },
            {
                "code":"int main(){"
            },
            {
                "code":"string cuv;"
            },
            {
                "code":"int n,i;"
            },
            {
                "code":"cout << 'Cuvantul este:';"
            },
            {
                "code":"cin >> cuv;"
            },
            {
                "code":"",
                "class":"droppable1"
            },
            {
                "code":"for (i=0; i<=n; i++){"
            },
            {
                "code":"",
                "class":"droppable2"
            },
            {
                "code":"cin >> endl;"
            },
            {
                "code":"}"
            }
        ],
        "drag":[{"code":"n:=length(cuv);"},{"code":"n=strlen(cuv);"},{"code":"writeln(copy(cuv,1,i));"},{"code":"cout >> strcpy(cuv,n,i);"}]
    },
    "correct":[1,1,3,2,1,"string","string","string","n=strlen(cuv);","cout >> strcpy(cuv,n,i);"],
    "messages":["Uhh. Nu stapanesti foarte bine notiunea de string. Sfatul nostru este sa reparcurgi teoria si sa refaci quiz-ul.","Scorul tau este unul mediu. Incearca sa intelegi mai bine lectia urmatoare!","Felicitari, te-ai descurcat onorabil. Ai dat dovada ca stapanesti bine notiunea de string."]
}
const historyData = [
    { 
        id: "1", 
        title: "access sth", 
        titleKeywords: ["access", "dostęp", "mieć dostęp"],
        desc: "mieć dostęp do czegoś[cite: 1] <span style='color: #FFD700;'>(dostęp)</span>", 
        descKeywords: ["dostęp", "mieć dostęp do czegoś"]
    },
    { 
        id: "2", 
        title: "at the wave of a hand", 
        titleKeywords: ["wave of a hand", "machnięcie ręką", "skinienie ręką"],
        desc: "na machnięcie / skinienie ręką[cite: 1] <span style='color: #FFD700;'>(skinienie ręką)</span>", 
        descKeywords: ["machnięcie ręką", "skinienie ręką"]
    },
    { 
        id: "3", 
        title: "bionic hand", 
        titleKeywords: ["bionic hand", "proteza ręki"],
        desc: "bioniczna proteza ręki[cite: 1] <span style='color: #FFD700;'>(bioniczna proteza)</span>", 
        descKeywords: ["bioniczna proteza", "ręka"]
    },
    { 
        id: "4", 
        title: "blueberry", 
        titleKeywords: ["blueberry", "borówka"],
        desc: "borówka[cite: 1] <span style='color: #FFD700;'>(owoc)</span>", 
        descKeywords: ["borówka"]
    },
    { 
        id: "5", 
        title: "broadband", 
        titleKeywords: ["broadband", "szerokopasmowy"],
        desc: "szerokopasmowy[cite: 1] <span style='color: #FFD700;'>(internet / łącze)</span>", 
        descKeywords: ["szerokopasmowy"]
    },
    { 
        id: "6", 
        title: "cutting-edge", 
        titleKeywords: ["cutting-edge", "pionierski", "nowatorski"],
        desc: "pionierski, nowatorski[cite: 1] <span style='color: #FFD700;'>(nowatorski)</span>", 
        descKeywords: ["pionierski", "nowatorski"]
    },
    { 
        id: "7", 
        title: "defective", 
        titleKeywords: ["defective", "wadliwy"],
        desc: "wadliwy[cite: 1] <span style='color: #FFD700;'>(uszkodzony)</span>", 
        descKeywords: ["wadliwy"]
    },
    { 
        id: "8", 
        title: "detect", 
        titleKeywords: ["detect", "wykryć"],
        desc: "wykryć[cite: 1] <span style='color: #FFD700;'>(wykrywanie)</span>", 
        descKeywords: ["wykryć"]
    },
    { 
        id: "9", 
        title: "domestic appliance", 
        titleKeywords: ["domestic appliance", "urządzenie domowe", "agd"],
        desc: "urządzenie domowe[cite: 1] <span style='color: #FFD700;'>(AGD)</span>", 
        descKeywords: ["urządzenie domowe", "agd"]
    },
    { 
        id: "10", 
        title: "driverless car", 
        titleKeywords: ["driverless car", "samochód autonomiczny"],
        desc: "samochód autonomiczny[cite: 1] <span style='color: #FFD700;'>(auto bez kierowcy)</span>", 
        descKeywords: ["samochód autonomiczny"]
    },
    { 
        id: "11", 
        title: "efficient", 
        titleKeywords: ["efficient", "wydajny"],
        desc: "wydajny[cite: 1] <span style='color: #FFD700;'>(efektywny)</span>", 
        descKeywords: ["wydajny"]
    },
    { 
        id: "12", 
        title: "electrical tube", 
        titleKeywords: ["electrical tube", "rurka osłonowa"],
        desc: "rurka osłonowa na przewody elektryczne[cite: 1] <span style='color: #FFD700;'>(rurka na kable)</span>", 
        descKeywords: ["rurka osłonowa", "przewody elektryczne"]
    },
    { 
        id: "13", 
        title: "embedded", 
        titleKeywords: ["embedded", "wbudowany", "osadzony"],
        desc: "wbudowany, osadzony[cite: 1] <span style='color: #FFD700;'>(wbudowany)</span>", 
        descKeywords: ["wbudowany", "osadzony"]
    },
    { 
        id: "14", 
        title: "emotionally interactive", 
        titleKeywords: ["emotionally interactive", "interaktywny emocjonalnie"],
        desc: "interaktywny emocjonalnie[cite: 1] <span style='color: #FFD700;'>(emocje)</span>", 
        descKeywords: ["interaktywny emocjonalnie"]
    },
    { 
        id: "15", 
        title: "faulty", 
        titleKeywords: ["faulty", "uszkodzony"],
        desc: "uszkodzony[cite: 1] <span style='color: #FFD700;'>(wadliwy)</span>", 
        descKeywords: ["uszkodzony"]
    },
    { 
        id: "16", 
        title: "feasible", 
        titleKeywords: ["feasible", "wykonalny", "realny"],
        desc: "wykonalny, realny[cite: 1] <span style='color: #FFD700;'>(możliwy do zrealizowania)</span>", 
        descKeywords: ["wykonalny", "realny"]
    },
    { 
        id: "17", 
        title: "host", 
        titleKeywords: ["host", "posiadać hosting", "zapewniać sprzęt"],
        desc: "zapewniać sprzęt i oprogramowanie pozwalające istnieć stronie internetowej[cite: 1] <span style='color: #FFD700;'>(hosting)</span>", 
        descKeywords: ["zapewniać sprzęt", "strona internetowa"]
    },
    { 
        id: "18", 
        title: "intriguing", 
        titleKeywords: ["intriguing", "intrygujący"],
        desc: "intrygujący[cite: 1] <span style='color: #FFD700;'>(ciekawy)</span>", 
        descKeywords: ["intrygujący"]
    },
    { 
        id: "19", 
        title: "limitation", 
        titleKeywords: ["limitation", "ograniczenie"],
        desc: "ograniczenie[cite: 1] <span style='color: #FFD700;'>(limit)</span>", 
        descKeywords: ["ograniczenie"]
    },
    { 
        id: "20", 
        title: "microchip implant", 
        titleKeywords: ["microchip implant", "biochip"],
        desc: "biochip[cite: 1] <span style='color: #FFD700;'>(implant mikroczipu)</span>", 
        descKeywords: ["biochip", "mikroczip"]
    },
    { 
        id: "21", 
        title: "mute", 
        titleKeywords: ["mute", "wyciszyć"],
        desc: "wyciszyć[cite: 1] <span style='color: #FFD700;'>(bez dźwięku)</span>", 
        descKeywords: ["wyciszyć"]
    },
    { 
        id: "22", 
        title: "operate sth", 
        titleKeywords: ["operate", "obsługiwać coś"],
        desc: "obsługiwać coś[cite: 1] <span style='color: #FFD700;'>(obsługa)</span>", 
        descKeywords: ["obsługiwać coś"]
    },
    { 
        id: "23", 
        title: "outdated", 
        titleKeywords: ["outdated", "przestarzały"],
        desc: "przestarzały[cite: 1] <span style='color: #FFD700;'>(starego typu)</span>", 
        descKeywords: ["przestarzały"]
    },
    { 
        id: "24", 
        title: "underprivileged", 
        titleKeywords: ["underprivileged", "nieuprzywilejowany", "pokrzywdzony"],
        desc: "nieuprzywilejowany, pokrzywdzony (przez los)[cite: 1] <span style='color: #FFD700;'>(wykluczony)</span>", 
        descKeywords: ["nieuprzywilejowany", "pokrzywdzony"]
    },
    { 
        id: "25", 
        title: "unfollow", 
        titleKeywords: ["unfollow", "przestać obserwować"],
        desc: "przestać obserwować[cite: 1] <span style='color: #FFD700;'>(rezygnacja z obserwacji)</span>", 
        descKeywords: ["przestać obserwować"]
    },
    { 
        id: "26", 
        title: "user-friendly", 
        titleKeywords: ["user-friendly", "przyjazny dla użytkownika"],
        desc: "przyjazny dla użytkownika[cite: 1] <span style='color: #FFD700;'>(intuicyjny)</span>", 
        descKeywords: ["przyjazny dla użytkownika"]
    },
    { 
        id: "27", 
        title: "virtual assistant", 
        titleKeywords: ["virtual assistant", "wirtualny asystent"],
        desc: "wirtualny asystent[cite: 1] <span style='color: #FFD700;'>(bot / asystent)</span>", 
        descKeywords: ["wirtualny asystent"]
    },
    { 
        id: "28", 
        title: "warring", 
        titleKeywords: ["warring", "wojujący"],
        desc: "wojujący[cite: 1] <span style='color: #FFD700;'>(prowadzący wojnę)</span>", 
        descKeywords: ["wojujący"]
    },
    { 
        id: "29", 
        title: "advance", 
        titleKeywords: ["advance", "iść do przodu"],
        desc: "iść do przodu[cite: 2] <span style='color: #FFD700;'>(postęp)</span>", 
        descKeywords: ["iść do przodu"]
    },
    { 
        id: "30", 
        title: "attempt", 
        titleKeywords: ["attempt", "próbować", "usiłować"],
        desc: "próbować, usiłować[cite: 2] <span style='color: #FFD700;'>(próba)</span>", 
        descKeywords: ["próbować", "usiłować"]
    },
    { 
        id: "31", 
        title: "decent", 
        titleKeywords: ["decent", "porządny", "sympatyczny"],
        desc: "porządny, sympatyczny[cite: 2] <span style='color: #FFD700;'>(przyzwoity)</span>", 
        descKeywords: ["porządny", "sympatyczny"]
    },
    { 
        id: "32", 
        title: "fortune-teller", 
        titleKeywords: ["fortune-teller", "wróżka"],
        desc: "wróżka[cite: 2] <span style='color: #FFD700;'>(przepowiadanie przyszłości)</span>", 
        descKeywords: ["wróżka"]
    },
    { 
        id: "33", 
        title: "STEM", 
        titleKeywords: ["stem", "nauka", "technologia", "inżynieria", "matematyka"],
        desc: "STEM (nauka, technologia, inżynieria i matematyka)[cite: 2] <span style='color: #FFD700;'>(kierunki ścisłe)</span>", 
        descKeywords: ["nauka", "technologia", "inżynieria", "matematyka"]
    },
    { 
        id: "34", 
        title: "affordable", 
        titleKeywords: ["affordable", "przystępny cenowo"],
        desc: "przystępny cenowo[cite: 2] <span style='color: #FFD700;'>(tani)</span>", 
        descKeywords: ["przystępny cenowo"]
    },
    { 
        id: "35", 
        title: "artificial", 
        titleKeywords: ["artificial", "sztuczny"],
        desc: "sztuczny[cite: 2] <span style='color: #FFD700;'>(nie naturalny)</span>", 
        descKeywords: ["sztuczny"]
    },
    { 
        id: "36", 
        title: "cancer", 
        titleKeywords: ["cancer", "rak", "nowotwór"],
        desc: "rak, nowotwór złośliwy[cite: 2] <span style='color: #FFD700;'>(choroba)</span>", 
        descKeywords: ["rak", "nowotwór"]
    },
    { 
        id: "37", 
        title: "enhance", 
        titleKeywords: ["enhance", "zwiększyć", "wzmocnić", "poprawić"],
        desc: "zwiększyć, wzmocnić, poprawić[cite: 2] <span style='color: #FFD700;'>(ulepszyć)</span>", 
        descKeywords: ["zwiększyć", "wzmocnić", "poprawić"]
    },
    { 
        id: "38", 
        title: "facial muscles", 
        titleKeywords: ["facial muscles", "mięśnie twarzy"],
        desc: "mięśnie twarzy[cite: 2] <span style='color: #FFD700;'>(mimika)</span>", 
        descKeywords: ["mięśnie twarzy"]
    },
    { 
        id: "39", 
        title: "headset", 
        titleKeywords: ["headset", "zestaw słuchawkowy"],
        desc: "zestaw słuchawkowy[cite: 2] <span style='color: #FFD700;'>(słuchawki z mikrofonem)</span>", 
        descKeywords: ["zestaw słuchawkowy"]
    },
    { 
        id: "40", 
        title: "in (general) use", 
        titleKeywords: ["in general use", "powszechne użycie"],
        desc: "w powszechnym użyciu[cite: 2] <span style='color: #FFD700;'>(używane ogólnie)</span>", 
        descKeywords: ["powszechne użycie"]
    },
    { 
        id: "41", 
        title: "link up", 
        titleKeywords: ["link up", "łączyć", "podłączać"],
        desc: "łączyć, podłączać[cite: 2] <span style='color: #FFD700;'>(połączenie)</span>", 
        descKeywords: ["łączyć", "podłączać"]
    },
    { 
        id: "42", 
        title: "make strides", 
        titleKeywords: ["make strides", "robić postępy"],
        desc: "robić postępy[cite: 2] <span style='color: #FFD700;'>(rozwój)</span>", 
        descKeywords: ["robić postępy"]
    },
    { 
        id: "43", 
        title: "merge", 
        titleKeywords: ["merge", "połączyć"],
        desc: "połączyć[cite: 2] <span style='color: #FFD700;'>(scalenie)</span>", 
        descKeywords: ["połączyć"]
    },
    { 
        id: "44", 
        title: "mind reading", 
        titleKeywords: ["mind reading", "czytanie w myślach"],
        desc: "czytanie w myślach[cite: 2] <span style='color: #FFD700;'>(telepatia myśli)</span>", 
        descKeywords: ["czytanie w myślach"]
    },
    { 
        id: "45", 
        title: "mouth", 
        titleKeywords: ["mouth", "usta"],
        desc: "powiedzieć bezgłośnie / usta[cite: 2] <span style='color: #FFD700;'>(mowa ciała)</span>", 
        descKeywords: ["usta", "mówić bezgłośnie"]
    },
    { 
        id: "46", 
        title: "pick up", 
        titleKeywords: ["pick up", "odebrać"],
        desc: "odebrać (sygnał)[cite: 2] <span style='color: #FFD700;'>(wyłapać)</span>", 
        descKeywords: ["odebrać", "sygnał"]
    },
    { 
        id: "47", 
        title: "purchase", 
        titleKeywords: ["purchase", "zakup"],
        desc: "zakup[cite: 2] <span style='color: #FFD700;'>(kupowanie)</span>", 
        descKeywords: ["zakup"]
    },
    { 
        id: "48", 
        title: "telepathy", 
        titleKeywords: ["telepathy", "telepatia"],
        desc: "telepatia[cite: 2] <span style='color: #FFD700;'>(łączność mentalna)</span>", 
        descKeywords: ["telepatia"]
    },
    { 
        id: "49", 
        title: "wearable", 
        titleKeywords: ["wearable", "nadający się do noszenia"],
        desc: "nadający się do noszenia[cite: 2] <span style='color: #FFD700;'>(elektronika ubieralna)</span>", 
        descKeywords: ["nadający się do noszenia", "ubieralny"]
    }
];

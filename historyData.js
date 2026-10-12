const historyData = [
    { 
        id: "1", 
        title: "access sth", 
        titleKeywords: ["access", "dostęp", "mieć dostęp"],
        desc: "mieć dostęp do czegoś", 
        descKeywords: ["dostęp", "mieć dostęp do czegoś"]
    },
    { 
        id: "2", 
        title: "at the wave of a hand", 
        titleKeywords: ["wave of a hand", "machnięcie ręką", "skinienie ręką"],
        desc: "na machnięcie / skinienie ręką", 
        descKeywords: ["machnięcie ręką", "skinienie ręką"]
    },
    { 
        id: "3", 
        title: "bionic hand", 
        titleKeywords: ["bionic hand", "proteza ręki"],
        desc: "bioniczna proteza ręki", 
        descKeywords: ["bioniczna proteza", "ręka"]
    },
    { 
        id: "4", 
        title: "blueberry", 
        titleKeywords: ["blueberry", "borówka"],
        desc: "borówka", 
        descKeywords: ["borówka"]
    },
    { 
        id: "5", 
        title: "broadband", 
        titleKeywords: ["broadband", "szerokopasmowy"],
        desc: "szerokopasmowy", 
        descKeywords: ["szerokopasmowy"]
    },
    { 
        id: "6", 
        title: "cutting-edge", 
        titleKeywords: ["cutting-edge", "pionierski", "nowatorski"],
        desc: "pionierski, nowatorski", 
        descKeywords: ["pionierski", "nowatorski"]
    },
    { 
        id: "7", 
        title: "defective", 
        titleKeywords: ["defective", "wadliwy"],
        desc: "wadliwy", 
        descKeywords: ["wadliwy"]
    },
    { 
        id: "8", 
        title: "detect", 
        titleKeywords: ["detect", "wykryć"],
        desc: "wykryć", 
        descKeywords: ["wykryć"]
    },
    { 
        id: "9", 
        title: "domestic appliance", 
        titleKeywords: ["domestic appliance", "urządzenie domowe", "agd"],
        desc: "urządzenie domowe", 
        descKeywords: ["urządzenie domowe", "agd"]
    },
    { 
        id: "10", 
        title: "driverless car", 
        titleKeywords: ["driverless car", "samochód autonomiczny"],
        desc: "samochód autonomiczny", 
        descKeywords: ["samochód autonomiczny"]
    },
    { 
        id: "11", 
        title: "efficient", 
        titleKeywords: ["efficient", "wydajny"],
        desc: "wydajny", 
        descKeywords: ["wydajny"]
    },
    { 
        id: "12", 
        title: "electrical tube", 
        titleKeywords: ["electrical tube", "rurka osłonowa"],
        desc: "rurka osłonowa na przewody elektryczne", 
        descKeywords: ["rurka osłonowa", "przewody elektryczne"]
    },
    { 
        id: "13", 
        title: "embedded", 
        titleKeywords: ["embedded", "wbudowany", "osadzony"],
        desc: "wbudowany, osadzony", 
        descKeywords: ["wbudowany", "osadzony"]
    },
    { 
        id: "14", 
        title: "emotionally interactive", 
        titleKeywords: ["emotionally interactive", "interaktywny emocjonalnie"],
        desc: "interaktywny emocjonalnie", 
        descKeywords: ["interaktywny emocjonalnie"]
    },
    { 
        id: "15", 
        title: "faulty", 
        titleKeywords: ["faulty", "uszkodzony"],
        desc: "uszkodzony", 
        descKeywords: ["uszkodzony"]
    },
    { 
        id: "16", 
        title: "feasible", 
        titleKeywords: ["feasible", "wykonalny", "realny"],
        desc: "wykonalny, realny", 
        descKeywords: ["wykonalny", "realny"]
    },
    { 
        id: "17", 
        title: "host", 
        titleKeywords: ["host", "posiadać hosting", "zapewniać sprzęt"],
        desc: "zapewniać sprzęt i oprogramowanie pozwalające istnieć stronie internetowej", 
        descKeywords: ["zapewniać sprzęt", "strona internetowa"]
    },
    { 
        id: "18", 
        title: "intriguing", 
        titleKeywords: ["intriguing", "intrygujący"],
        desc: "intrygujący", 
        descKeywords: ["intrygujący"]
    },
    { 
        id: "19", 
        title: "limitation", 
        titleKeywords: ["limitation", "ograniczenie"],
        desc: "ograniczenie", 
        descKeywords: ["ograniczenie"]
    },
    { 
        id: "20", 
        title: "microchip implant", 
        titleKeywords: ["microchip implant", "biochip"],
        desc: "biochip", 
        descKeywords: ["biochip", "mikroczip"]
    },
    { 
        id: "21", 
        title: "mute", 
        titleKeywords: ["mute", "wyciszyć"],
        desc: "wyciszyć", 
        descKeywords: ["wyciszyć"]
    },
    { 
        id: "22", 
        title: "operate sth", 
        titleKeywords: ["operate", "obsługiwać coś"],
        desc: "obsługiwać coś", 
        descKeywords: ["obsługiwać coś"]
    },
    { 
        id: "23", 
        title: "outdated", 
        titleKeywords: ["outdated", "przestarzały"],
        desc: "przestarzały", 
        descKeywords: ["przestarzały"]
    },
    { 
        id: "24", 
        title: "underprivileged", 
        titleKeywords: ["underprivileged", "nieuprzywilejowany", "pokrzywdzony"],
        desc: "nieuprzywilejowany, pokrzywdzony (przez los)", 
        descKeywords: ["nieuprzywilejowany", "pokrzywdzony"]
    },
    { 
        id: "25", 
        title: "unfollow", 
        titleKeywords: ["unfollow", "przestać obserwować"],
        desc: "przestać obserwować", 
        descKeywords: ["przestać obserwować"]
    },
    { 
        id: "26", 
        title: "user-friendly", 
        titleKeywords: ["user-friendly", "przyjazny dla użytkownika"],
        desc: "przyjazny dla użytkownika", 
        descKeywords: ["przyjazny dla użytkownika"]
    },
    { 
        id: "27", 
        title: "virtual assistant", 
        titleKeywords: ["virtual assistant", "wirtualny asystent"],
        desc: "wirtualny asystent", 
        descKeywords: ["wirtualny asystent"]
    },
    { 
        id: "28", 
        title: "warring", 
        titleKeywords: ["warring", "wojujący"],
        desc: "wojujący", 
        descKeywords: ["wojujący"]
    },
    { 
        id: "29", 
        title: "advance", 
        titleKeywords: ["advance", "iść do przodu"],
        desc: "iść do przodu", 
        descKeywords: ["iść do przodu"]
    },
    { 
        id: "30", 
        title: "attempt", 
        titleKeywords: ["attempt", "próbować", "usiłować"],
        desc: "próbować, usiłować", 
        descKeywords: ["próbować", "usiłować"]
    },
    { 
        id: "31", 
        title: "decent", 
        titleKeywords: ["decent", "porządny", "sympatyczny"],
        desc: "porządny, sympatyczny", 
        descKeywords: ["porządny", "sympatyczny"]
    },
    { 
        id: "32", 
        title: "fortune-teller", 
        titleKeywords: ["fortune-teller", "wróżka"],
        desc: "wróżka", 
        descKeywords: ["wróżka"]
    },
    { 
        id: "33", 
        title: "STEM", 
        titleKeywords: ["stem", "nauka", "technologia", "inżynieria", "matematyka"],
        desc: "STEM (nauka, technologia, inżynieria i matematyka)", 
        descKeywords: ["nauka", "technologia", "inżynieria", "matematyka"]
    },
    { 
        id: "34", 
        title: "affordable", 
        titleKeywords: ["affordable", "przystępny cenowo"],
        desc: "przystępny cenowo", 
        descKeywords: ["przystępny cenowo"]
    },
    { 
        id: "35", 
        title: "artificial", 
        titleKeywords: ["artificial", "sztuczny"],
        desc: "sztuczny", 
        descKeywords: ["sztuczny"]
    },
    { 
        id: "36", 
        title: "cancer", 
        titleKeywords: ["cancer", "rak", "nowotwór"],
        desc: "rak, nowotwór złośliwy", 
        descKeywords: ["rak", "nowotwór"]
    },
    { 
        id: "37", 
        title: "enhance", 
        titleKeywords: ["enhance", "zwiększyć", "wzmocnić", "poprawić"],
        desc: "zwiększyć, wzmocnić, poprawić", 
        descKeywords: ["zwiększyć", "wzmocnić", "poprawić"]
    },
    { 
        id: "38", 
        title: "facial muscles", 
        titleKeywords: ["facial muscles", "mięśnie twarzy"],
        desc: "mięśnie twarzy", 
        descKeywords: ["mięśnie twarzy"]
    },
    { 
        id: "39", 
        title: "headset", 
        titleKeywords: ["headset", "zestaw słuchawkowy"],
        desc: "zestaw słuchawkowy", 
        descKeywords: ["zestaw słuchawkowy"]
    },
    { 
        id: "40", 
        title: "in (general) use", 
        titleKeywords: ["in general use", "powszechne użycie"],
        desc: "w (powszechnym) użyciu", 
        descKeywords: ["powszechne użycie"]
    },
    { 
        id: "41", 
        title: "link up", 
        titleKeywords: ["link up", "łączyć", "podłączać"],
        desc: "łączyć, podłączać", 
        descKeywords: ["łączyć", "podłączać"]
    },
    { 
        id: "42", 
        title: "make strides", 
        titleKeywords: ["make strides", "robić postępy"],
        desc: "robić postępy", 
        descKeywords: ["robić postępy"]
    },
    { 
        id: "43", 
        title: "merge", 
        titleKeywords: ["merge", "połączyć"],
        desc: "połączyć", 
        descKeywords: ["połączyć"]
    },
    { 
        id: "44", 
        title: "mind reading", 
        titleKeywords: ["mind reading", "czytanie w myślach"],
        desc: "czytanie w myślach", 
        descKeywords: ["czytanie w myślach"]
    },
    { 
        id: "45", 
        title: "mouth", 
        titleKeywords: ["mouth", "powiedzieć bezgłośnie"],
        desc: "powiedzieć bezgłośnie", 
        descKeywords: ["powiedzieć bezgłośnie"]
    },
    { 
        id: "46", 
        title: "pick up", 
        titleKeywords: ["pick up", "odebrać"],
        desc: "odebrać (sygnał)", 
        descKeywords: ["odebrać", "sygnał"]
    },
    { 
        id: "47", 
        title: "purchase", 
        titleKeywords: ["purchase", "zakup"],
        desc: "zakup", 
        descKeywords: ["zakup"]
    },
    { 
        id: "48", 
        title: "telepathy", 
        titleKeywords: ["telepathy", "telepatia"],
        desc: "telepatia", 
        descKeywords: ["telepatia"]
    },
    { 
        id: "49", 
        title: "wearable", 
        titleKeywords: ["wearable", "nadający się do noszenia"],
        desc: "nadający się do noszenia", 
        descKeywords: ["nadający się do noszenia"]
    }
];

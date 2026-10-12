const historyData = [
    { 
        id: "1", 
        title: "access sth", 
        titleKeywords: ["access sth"],
        desc: "mieć dostęp do czegoś", 
        descKeywords: ["mieć dostęp do czegoś"]
    },
    { 
        id: "2", 
        title: "at the wave of a hand", 
        titleKeywords: ["at the wave of a hand"],
        desc: "na machnięcie / skinienie ręką", 
        descKeywords: ["na machnięcie / skinienie ręką"]
    },
    { 
        id: "3", 
        title: "bionic hand", 
        titleKeywords: ["bionic hand"],
        desc: "bioniczna proteza ręki", 
        descKeywords: ["bioniczna proteza ręki"]
    },
    { 
        id: "4", 
        title: "blueberry", 
        titleKeywords: ["blueberry"],
        desc: "borówka", 
        descKeywords: ["borówka"]
    },
    { 
        id: "5", 
        title: "broadband", 
        titleKeywords: ["broadband"],
        desc: "szerokopasmowy", 
        descKeywords: ["szerokopasmowy"]
    },
    { 
        id: "6", 
        title: "cutting-edge", 
        titleKeywords: ["cutting-edge"],
        desc: "pionierski, nowatorski", 
        descKeywords: ["pionierski, nowatorski"]
    },
    { 
        id: "7", 
        title: "defective", 
        titleKeywords: ["defective"],
        desc: "wadliwy", 
        descKeywords: ["wadliwy"]
    },
    { 
        id: "8", 
        title: "detect", 
        titleKeywords: ["detect"],
        desc: "wykryć", 
        descKeywords: ["wykryć"]
    },
    { 
        id: "9", 
        title: "domestic appliance", 
        titleKeywords: ["domestic appliance"],
        desc: "urządzenie domowe", 
        descKeywords: ["urządzenie domowe"]
    },
    { 
        id: "10", 
        title: "driverless car", 
        titleKeywords: ["driverless car"],
        desc: "samochód autonomiczny", 
        descKeywords: ["samochód autonomiczny"]
    },
    { 
        id: "11", 
        title: "efficient", 
        titleKeywords: ["efficient"],
        desc: "wydajny", 
        descKeywords: ["wydajny"]
    },
    { 
        id: "12", 
        title: "electrical tube", 
        titleKeywords: ["electrical tube"],
        desc: "rurka osłonowa na przewody elektryczne", 
        descKeywords: ["rurka osłonowa na przewody elektryczne"]
    },
    { 
        id: "13", 
        title: "embedded", 
        titleKeywords: ["embedded"],
        desc: "wbudowany, osadzony", 
        descKeywords: ["wbudowany, osadzony"]
    },
    { 
        id: "14", 
        title: "emotionally interactive", 
        titleKeywords: ["emotionally interactive"],
        desc: "interaktywny emocjonalnie", 
        descKeywords: ["interaktywny emocjonalnie"]
    },
    { 
        id: "15", 
        title: "faulty", 
        titleKeywords: ["faulty"],
        desc: "uszkodzony", 
        descKeywords: ["uszkodzony"]
    },
    { 
        id: "16", 
        title: "feasible", 
        titleKeywords: ["feasible"],
        desc: "wykonalny, realny", 
        descKeywords: ["wykonalny, realny"]
    },
    { 
        id: "17", 
        title: "host", 
        titleKeywords: ["host"],
        desc: "zapewniać sprzęt i oprogramowanie pozwalające istnieć stronie internetowej", 
        descKeywords: ["zapewniać sprzęt i oprogramowanie pozwalające istnieć stronie internetowej"]
    },
    { 
        id: "18", 
        title: "intriguing", 
        titleKeywords: ["intriguing"],
        desc: "intrygujący", 
        descKeywords: ["intrygujący"]
    },
    { 
        id: "19", 
        title: "limitation", 
        titleKeywords: ["limitation"],
        desc: "ograniczenie", 
        descKeywords: ["ograniczenie"]
    },
    { 
        id: "20", 
        title: "microchip implant", 
        titleKeywords: ["microchip implant"],
        desc: "biochip", 
        descKeywords: ["biochip"]
    },
    { 
        id: "21", 
        title: "mute", 
        titleKeywords: ["mute"],
        desc: "wyciszyć", 
        descKeywords: ["wyciszyć"]
    },
    { 
        id: "22", 
        title: "operate sth", 
        titleKeywords: ["operate sth"],
        desc: "obsługiwać coś", 
        descKeywords: ["obsługiwać coś"]
    },
    { 
        id: "23", 
        title: "outdated", 
        titleKeywords: ["outdated"],
        desc: "przestarzały", 
        descKeywords: ["przestarzały"]
    },
    { 
        id: "24", 
        title: "underprivileged", 
        titleKeywords: ["underprivileged"],
        desc: "nieuprzywilejowany, pokrzywdzony (przez los)", 
        descKeywords: ["nieuprzywilejowany, pokrzywdzony (przez los)"]
    },
    { 
        id: "25", 
        title: "unfollow", 
        titleKeywords: ["unfollow"],
        desc: "przestać obserwować", 
        descKeywords: ["przestać obserwować"]
    },
    { 
        id: "26", 
        title: "user-friendly", 
        titleKeywords: ["user-friendly"],
        desc: "przyjazny dla użytkownika", 
        descKeywords: ["przyjazny dla użytkownika"]
    },
    { 
        id: "27", 
        title: "virtual assistant", 
        titleKeywords: ["virtual assistant"],
        desc: "wirtualny asystent", 
        descKeywords: ["wirtualny asystent"]
    },
    { 
        id: "28", 
        title: "warring", 
        titleKeywords: ["warring"],
        desc: "wojujący", 
        descKeywords: ["wojujący"]
    },
    { 
        id: "29", 
        title: "advance", 
        titleKeywords: ["advance"],
        desc: "iść do przodu", 
        descKeywords: ["iść do przodu"]
    },
    { 
        id: "30", 
        title: "attempt", 
        titleKeywords: ["attempt"],
        desc: "próbować, usiłować", 
        descKeywords: ["próbować, usiłować"]
    },
    { 
        id: "31", 
        title: "decent", 
        titleKeywords: ["decent"],
        desc: "porządny, sympatyczny", 
        descKeywords: ["porządny, sympatyczny"]
    },
    { 
        id: "32", 
        title: "fortune-teller", 
        titleKeywords: ["fortune-teller"],
        desc: "wróżka", 
        descKeywords: ["wróżka"]
    },
    { 
        id: "33", 
        title: "STEM", 
        titleKeywords: ["STEM"],
        desc: "STEM (nauka, technologia, inżynieria i matematyka)", 
        descKeywords: ["STEM (nauka, technologia, inżynieria i matematyka)"]
    },
    { 
        id: "34", 
        title: "affordable", 
        titleKeywords: ["affordable"],
        desc: "przystępny cenowo", 
        descKeywords: ["przystępny cenowo"]
    },
    { 
        id: "35", 
        title: "artificial", 
        titleKeywords: ["artificial"],
        desc: "sztuczny", 
        descKeywords: ["sztuczny"]
    },
    { 
        id: "36", 
        title: "cancer", 
        titleKeywords: ["cancer"],
        desc: "rak, nowotwór złośliwy", 
        descKeywords: ["rak, nowotwór złośliwy"]
    },
    { 
        id: "37", 
        title: "enhance", 
        titleKeywords: ["enhance"],
        desc: "zwiększyć, wzmocnić, poprawić", 
        descKeywords: ["zwiększyć, wzmocnić, poprawić"]
    },
    { 
        id: "38", 
        title: "facial muscles", 
        titleKeywords: ["facial muscles"],
        desc: "mięśnie twarzy", 
        descKeywords: ["mięśnie twarzy"]
    },
    { 
        id: "39", 
        title: "headset", 
        titleKeywords: ["headset"],
        desc: "zestaw słuchawkowy", 
        descKeywords: ["zestaw słuchawkowy"]
    },
    { 
        id: "40", 
        title: "in (general) use", 
        titleKeywords: ["in (general) use"],
        desc: "w (powszechnym) użyciu", 
        descKeywords: ["w (powszechnym) użyciu"]
    },
    { 
        id: "41", 
        title: "link up", 
        titleKeywords: ["link up"],
        desc: "łączyć, podłączać", 
        descKeywords: ["łączyć, podłączać"]
    },
    { 
        id: "42", 
        title: "make strides", 
        titleKeywords: ["make strides"],
        desc: "robić postępy", 
        descKeywords: ["robić postępy"]
    },
    { 
        id: "43", 
        title: "merge", 
        titleKeywords: ["merge"],
        desc: "połączyć", 
        descKeywords: ["połączyć"]
    },
    { 
        id: "44", 
        title: "mind reading", 
        titleKeywords: ["mind reading"],
        desc: "czytanie w myślach", 
        descKeywords: ["czytanie w myślach"]
    },
    { 
        id: "45", 
        title: "mouth", 
        titleKeywords: ["mouth"],
        desc: "powiedzieć bezgłośnie", 
        descKeywords: ["powiedzieć bezgłośnie"]
    },
    { 
        id: "46", 
        title: "pick up", 
        titleKeywords: ["pick up"],
        desc: "odebrać (sygnał)", 
        descKeywords: ["odebrać (sygnał)"]
    },
    { 
        id: "47", 
        title: "purchase", 
        titleKeywords: ["purchase"],
        desc: "zakup", 
        descKeywords: ["zakup"]
    },
    { 
        id: "48", 
        title: "telepathy", 
        titleKeywords: ["telepathy"],
        desc: "telepatia", 
        descKeywords: ["telepatia"]
    },
    { 
        id: "49", 
        title: "wearable", 
        titleKeywords: ["wearable"],
        desc: "nadający się do noszenia", 
        descKeywords: ["nadający się do noszenia"]
    }
];

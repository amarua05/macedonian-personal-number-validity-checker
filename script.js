
document.getElementById("submit").onclick = function(){
    let thePrompt = document.getElementById("numberInput").value;
    if (thePrompt.length < 13){
        document.getElementById("errorMessage").innerHTML = ("ERROR: Prompt too short, must be 13 characters");
    }
    else if (thePrompt.length > 13){
        document.getElementById("errorMessage").innerHTML = ("ERROR: Prompt too long, must be 13 characters.");
    }
    else{
        let a=parseInt(thePrompt[0]);
        let b=parseInt(thePrompt[1]);
        let c=parseInt(thePrompt[2]);
        let d=parseInt(thePrompt[3]);
        let e=parseInt(thePrompt[4]);
        let f=parseInt(thePrompt[5]);
        let g=parseInt(thePrompt[6]);
        let h=parseInt(thePrompt[7]);
        let i=parseInt(thePrompt[8]);
        let j=parseInt(thePrompt[9]);
        let k=parseInt(thePrompt[10]);
        let l=parseInt(thePrompt[11]);
        let m=parseInt(thePrompt[12]);
        
        let MM = c * 10 + d;
        let monthName;
        switch (MM) {
            case 1:
                monthName = "January";
                break;
            case 2:
                monthName = "February";
                break;
            case 3:
                monthName = "March";
                break;
            case 4:
                monthName = "April";
                break;
            case 5:
                monthName = "May";
                break;
            case 6:
                monthName = "June";
                break;
            case 7:
                monthName = "July";
                break;
            case 8:
                monthName = "August";
                break;
            case 9:
                monthName = "September";
                break;
            case 10:
                monthName = "October";
                break;
            case 11:
                monthName = "November";
                break;
            case 12:
                monthName = "December";
                break;
            default:
                monthName = "Invalid Month";
        }
        let DD = a * 10 + b;
        if (DD > 28 && MM != 2){
            if(DD > 30){
                if(DD > 31){
                    document.getElementById("errorMessage").innerHTML = ("ERROR: Wrong input, date over 31!");
                }
                if(MM == 3 || MM == 5 || MM == 9 || MM == 11){
                    document.getElementById("errorMessage").innerHTML = ('ERROR: Wrong input, ' + monthName + ' can only have 30 days!');
                }
            }
        }
        if (DD > 28 && MM == 2){
            document.getElementById("errorMessage").innerHTML = ("ERROR: Wrong input, february can only have 28 days!");
        }
        let YYY = e * 100 + f * 10 + g;
        if(YYY < 900 && YYY > 99){
            document.getElementById("errorMessage").innerHTML = ("ERROR: Year must be between 1900 & 2099");
            }
            
        
        let millenia;
        if(YYY >= 900 && YYY <= 999){
            millenia = 1000;
        }
        if(YYY >= 0 && YYY <= 99){
            millenia = 2000;
            }

        let RR = h*10 + i;
        let region;

        switch (RR) {
        case 0:
            region="Foreigner"
            break;
        case 1:
            region = "Foreigners in Bosnia and Herzegovina";
            break;
        case 2:
            region = "Foreigners in Montenegro";
            break;
        case 3:
            region = "Foreigners in Croatia";
            break;
        case 4:
            region = "Foreigners in Macedonia";
            break;
        case 5:
            region = "Foreigners in Slovenia";
            break;
        case 6:
            region = "Foreigners in Central Serbia";
            break;
        case 7:
            region = "Foreigners in Vojvodina";
            break;
        case 8:
            region = "Foreigners in Kosovo";
            break;
        case 9:
            region = "Naturalized citizens with no republican citizenship";
            break;
        case 10:
            region = "Banja Luka, Bosnia and Herzegovina";
            break;
        case 11:
            region = "Bihać, Bosnia and Herzegovina";
            break;
        case 12:
            region = "Doboj, Bosnia and Herzegovina";
            break;
        case 13:
            region = "Goražde, Bosnia and Herzegovina";
            break;
        case 14:
            region = "Livno, Bosnia and Herzegovina";
            break;
        case 15:
            region = "Mostar, Bosnia and Herzegovina";
            break;
        case 16:
            region = "Prijedor, Bosnia and Herzegovina";
            break;
        case 17:
            region = "Sarajevo, Bosnia and Herzegovina";
            break;
        case 18:
            region = "Tuzla, Bosnia and Herzegovina";
            break;
        case 19:
            region = "Zenica, Bosnia and Herzegovina";
            break;
        case 20:
            region = "(Not in use)";
            break;
        case 21:
            region = "Podgorica, Danilovgrad, Kolašin, Montenegro";
            break;
        case 22:
            region = "Bar, Ulcinj, Montenegro";
            break;
        case 23:
            region = "Budva, Kotor, Tivat, Montenegro";
            break;
        case 24:
            region = "Herceg Novi, Montenegro";
            break;
        case 25:
            region = "Cetinje, Montenegro";
            break;
        case 26:
            region = "Nikšić, Plužine, Šavnik, Montenegro";
            break;
        case 27:
            region = "Berane, Rožaje, Plav, Andrijevica, Montenegro";
            break;
        case 28:
            region = "Bijelo Polje, Mojkovac, Montenegro";
            break;
        case 29:
            region = "Pljevlja, Žabljak, Montenegro";
            break;
        case 30:
            region = "Osijek, Slavonia region, Croatia";
            break;
        case 31:
            region = "Bjelovar, Virovitica, Koprivnica, Pakrac, Podravina region, Croatia";
            break;
        case 32:
            region = "Varaždin, Međimurje region, Croatia";
            break;
        case 33:
            region = "Zagreb, Croatia";
            break;
        case 34:
            region = "Karlovac, Kordun region, Croatia";
            break;
        case 35:
            region = "Gospić, Lika region, Croatia";
            break;
        case 36:
            region = "Rijeka, Pula, Gorski kotar, Istria and Croatian Littoral regions, Croatia";
            break;
        case 37:
            region = "Sisak, Banovina region, Croatia";
            break;
        case 38:
            region = "Split, Zadar, Šibenik, Dubrovnik, Dalmatia region, Croatia";
            break;
        case 39:
            region = "Hrvatsko Zagorje and mixed, Croatia";
            break;
        case 41:
            region = "Bitola, Macedonia";
            break;
        case 42:
            region = "Kumanovo, Macedonia";
            break;
        case 43:
            region = "Ohrid, Macedonia";
            break;
        case 44:
            region = "Prilep, Macedonia";
            break;
        case 45:
            region = "Skopje, Macedonia";
            break;
        case 46:
            region = "Strumica, Macedonia";
            break;
        case 47:
            region = "Tetovo, Macedonia";
            break;
        case 48:
            region = "Veles, Macedonia";
            break;
        case 49:
            region = "Štip, Macedonia";
            break;
        case 50:
            region = "Slovenia";
            break;
        case 60:
            region = "(Citizens with temporary residence)";
            break;
        case 70:
            region = "Serbian citizens registered abroad at a Serbian diplomatic/consular post, Central Serbia";
            break;
        case 71:
            region = "Belgrade region (City of Belgrade), Central Serbia";
            break;
        case 72:
            region = "Šumadija and Pomoravlje regions (Šumadija District and Pomoravlje District), Central Serbia";
            break;
        case 73:
            region = "Niš region (Nišava District, Pirot District and Toplica District), Central Serbia";
            break;
        case 74:
            region = "Southern Morava region (Jablanica District and Pčinja District), Central Serbia";
            break;
        case 75:
            region = "Zaječar region (Zaječar District and Bor District), Central Serbia";
            break;
        case 76:
            region = "Podunavlje region (Podunavlje District and Braničevo District), Central Serbia";
            break;
        case 77:
            region = "Podrinje and Kolubara regions (Mačva District and Kolubara District), Central Serbia";
            break;
        case 78:
            region = "Kraljevo region (Raška District, Moravica District and Rasina District), Central Serbia";
            break;
        case 79:
            region = "Užice region (Zlatibor District), Central Serbia";
            break;
        case 80:
            region = "Novi Sad region (South Bačka District), Vojvodina";
            break;
        case 81:
            region = "Sombor region (West Bačka District), Vojvodina";
            break;
        case 82:
            region = "Subotica region (North Bačka District), Vojvodina";
            break;
        case 84:
            region = "Kikinda region (North Banat District), Vojvodina";
            break;
        case 85:
            region = "Zrenjanin region (Central Banat District), Vojvodina";
            break;
        case 86:
            region = "Pančevo region (South Banat District), Vojvodina";
            break;
        case 87:
            region = "Vršac region (South Banat District), Vojvodina";
            break;
        case 88:
            region = "Ruma region (part of Syrmia District), Vojvodina";
            break;
        case 89:
            region = "Sremska Mitrovica region (part of Syrmia District), Vojvodina";
            break;
        case 90:
            region = "Priština region (Kosovo District), Kosovo";
            break;
        case 91:
            region = "Kosovska Mitrovica region (Kosovska Mitrovica District), Kosovo";
            break;
        case 93:
            region = "Peć region (part of Peć District), Kosovo";
            break;
        case 94:
            region = "Đakovica region (part of Peć District), Kosovo";
            break;
        case 95:
            region = "Prizren region (Prizren District), Kosovo";
            break;
        case 96:
            region = "Gnjilane region (Kosovo-Pomoravlje District), Kosovo";
            break;
        default:
            region = "Invalid region code";
        }
        let BBB = j * 100 + k*10 + l;
        let doe;
        let gender;
        if(BBB < 500){
            gender = "Male";
            doe = "John Doe";
        }
        if(BBB <= 999 && BBB > 499){
            gender = "Female";
            doe = "Jane Doe";
        }
        else if (BBB > 999){
            document.getElementById("errorMessage").innerHTML = ("ERROR: Numbers invalid");
        }
        let checksum;
        let validity;
        checksum = 11 - ((7 * (a + g) + 6 * (b + h) + 5 * (c + i) + 4 * (d + j) + 3 * (e + k) + 2 * (f + l)) % 11);
        if(checksum == 11 || checksum == 10){
            checksum == 0;
        }
        if(checksum == m){
            document.getElementById("errorMessage").innerHTML = (" ");
            colorOfValidity = document.getElementById("validity");
            colorOfValidity.style.color="green"
            document.getElementById("gender").innerHTML = `Gender: ${gender}`;
            document.getElementById("name").innerHTML = `Name: ${doe}`;
            document.getElementById("age").innerHTML = `Age: ${2023 - (millenia + YYY)}`
            document.getElementById("validity").innerHTML = "Validity: Valid";;
            document.getElementById("birthday").innerHTML = (`Birthday: ${DD} ${monthName} ${millenia + YYY}`);
            document.getElementById("region").innerHTML = (`Region: ${region}`);
            

        }
        if(checksum != m){
            colorOfValidity = document.getElementById("validity");
            colorOfValidity.style.color="red"
            document.getElementById("validity").innerHTML = "Validity: Invalid";
            document.getElementById("gender").innerHTML = ` `;
            document.getElementById("name").innerHTML = ` `;
            document.getElementById("age").innerHTML = ` `;
            document.getElementById("birthday").innerHTML = ` `;
            document.getElementById("region").innerHTML = ` `;
        }
    }    
    }
// Postać gracza

    var postac_gracza = function (rasa, klasa, plec, wzrost, wiek, waga, wlosy, skora, oczy){

        // Podstawowe atrybuty

            this.rasa = rasa;
            this.plec = plec;
            this.wzrost = wzrost;
            this.wiek = wiek;
            this.wlosy = wlosy;
            this.skora = skora;
            this.oczy = oczy;
            this.klasa = klasa;
        
        // Statystki nadawane tylko przez przedmioty
        
            this.pancerz = 0;
            this.pancerz_magiczny = 0;

        // Zmienne przechowujące dane o buffach do statystyk (np. przedmioty, zdolności itp.)

            this.buff_atak = 0;
            this.buff_szybkosc = 0;
            this.buff_zycie = 0;
            this.buff_liczba_czarow = 0;
            this.buff_szansa_krytyk = 0;

        //Tworzenie podstawowych statystyk na podstawie rasy

            if(this.rasa == "czlowiek"){

                this.sila = 5;
                this.zrecznosc = 5;
                this.zywotnosc = 5;

                this.percepcja = 5;
                this.sila_woli = 5;
                this.charyzma = 5;

            }
            else if(this.rasa == "krasnolud"){

                this.sila = 7;
                this.zrecznosc = 4;
                this.zywotnosc = 5;

                this.percepcja = 4;
                this.sila_woli = 3;
                this.charyzma = 7;
            }
            else if(this.rasa == "ork"){

                this.sila = 8;
                this.zrecznosc = 5;
                this.zywotnosc = 5;

                this.percepcja = 5;
                this.sila_woli = 3;
                this.charyzma = 4;
            }
            else if(this.rasa == "troll"){

                this.sila = 6;
                this.zrecznosc = 6;
                this.zywotnosc = 5;

                this.percepcja = 5;
                this.sila_woli = 4;
                this.charyzma = 4;
            }
            else if(this.rasa == "mroczny_elf"){

                this.sila = 5;
                this.zrecznosc = 7;
                this.zywotnosc = 4;

                this.percepcja = 6;
                this.sila_woli = 4;
                this.charyzma = 4;
            }
            else if(this.rasa == "wysoki_elf"){

                this.sila = 4;
                this.zrecznosc = 7;
                this.zywotnosc = 4;

                this.percepcja = 6;
                this.sila_woli = 5;
                this.charyzma = 4;
            }
            else {

                this.sila = 6;
                this.zrecznosc = 6;
                this.zywotnosc = 4;

                this.percepcja = 6;
                this.sila_woli = 6;
                this.charyzma = 2;
            }

        //tworzenie podstawowych mnożników  w zależności od klasy

            if(this.klasa == "wojownik"){
                this.mnoznik_atak = 1.3;
                this.mnoznik_szybkosc = 0.7;
            }
            else if(this.klasa == "lotrzyk"){
                this.mnoznik_atak = 0.7;
                this.mnoznik_szybkosc = 1.3;
            }
            else if(this.klasa == "mag"){
                
                this.mnoznik_atak = 0.5;
                this.mnoznik_szybkosc = 1.0;
            }

        // tworzenie statystyk pochodnych

            this.max_atak = Math.round((this.sila * this.mnoznik_atak) + this.buff_atak);
            this.szybkosc = Math.round((this.zrecznosc * this.mnoznik_szybkosc) + this.buff_szybkosc);
            this.zycie = (this.zywotnosc * 2) + this.buff_zycie;
            this.liczba_czarow = Math.round((this.sila_woli/3) + this.buff_liczba_czarow);
            this.szansa_krytyk = (this.percepcja * 2) + this.buff_szansa_krytyk;


    }



(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.ar = {
            uploading: 'الرجاء الإنتظار.... يتم الرفع',
            loadingInfo: '...تحميل المعلومات',
            errors: {
                "default": 'خطأ',
                baddata: 'قيمة غير صحيحة',
                size: 'ملف كبير جدا',
                upload: 'لا يمكن تحميل',
                user: ' إلغاء التحميل',
                info: 'لا يمكن تحميل معلومات',
                image: 'مسموح بالصور فقط',
                createGroup: 'لا يمكن إنشاء مجموعة ملفات',
                deleted: 'تم حذف ملف'
            },
            draghere: 'إفلت الملف هنا',
            file: {
                zero: '%1 ملفات',
                one: '%1 ملف',
                two: '%1 ملفات',
                few: '%1 ملفات',
                many: '%1 ملفات',
                other: '%1 ملفات'
            },
            buttons: {
                cancel: 'إلغاء',
                remove: 'إزالة',
                choose: {
                    files: {
                        one: 'اختر ملف',
                        other: 'اختر ملفات'
                    },
                    images: {
                        one: 'اختر صورة',
                        other: 'اختر صور'
                    }
                }
            },
            dialog: {
                done: 'منجز',
                showFiles: 'إظهار الملفات',
                tabs: {
                    names: {
                        preview: 'معاينة',
                        file: 'الملفات المحلية',
                        url: 'روابط التعسفية',
                        camera: 'كاميرا'
                    },
                    file: {
                        drag: 'إفلات الملف هنا',
                        nodrop: 'تحميل الملفات من جهاز الكمبيوتر الخاص بك',
                        cloudsTip: 'المخازن السحابية<br>والخدمات الاجتماعية',
                        or: 'أو',
                        button: 'اختر ملف محلي',
                        also: 'يمكنك أيضا اختيار من'
                    },
                    url: {
                        title: 'الملفات من الويب',
                        line1: 'اختر على أي ملف من الويب',
                        line2: 'قم بتقديم الارتباط',
                        input: 'الصق الرابط الخاص بك هنا ...',
                        button: 'تحميل'
                    },
                    camera: {
                        capture: 'إلتقط صورة',
                        mirror: 'مرآة',
                        retry: 'إعادة طلب الأذونات',
                        pleaseAllow: {
                            title: 'الرجاء السماح بتشغيل كميرتك ',
                            text: 'لقد تم السماح للكاميرا بالوصول لهذا الموقع. ' + 'لكي تلتقط الصور بكاميرتك، يجب السماح لهذا الطلب '
                        },
                        notFound: {
                            title: 'لم يتم العثور على كاميرا ',
                            text: 'يبدو أنه لا يوجد كاميرا موصولة بهذا الجهاز'
                        }
                    },
                    preview: {
                        unknownName: 'غير معروف',
                        change: 'إلغاء',
                        back: 'العودة',
                        done: 'إضافة',
                        unknown: {
                            title: 'جاري التحميل .. الرجاء الانتظار للمعاينة.',
                            done: 'تخطي المعاينة، واقبل'
                        },
                        regular: {
                            title: 'إضافة هذا الملف؟',
                            line1: 'أنت على وشك إضافة الملف أعلاه.',
                            line2: 'يرجى تأكيد.'
                        },
                        image: {
                            title: 'إضافة هذه الصورة؟',
                            change: 'إلغاء'
                        },
                        crop: {
                            title: 'قص وإضافة هذه الصورة',
                            done: 'تم',
                            free: 'حرر'
                        },
                        error: {
                            "default": {
                                title: 'عفوا!',
                                text: 'حدث خطأ أثناء تحميل.',
                                back: 'يرجى المحاولة مرة أخرى'
                            },
                            image: {
                                title: 'فقط ملفات الصور مقبولة.',
                                text: 'يرجى المحاولة مرة أخرى مع ملف آخر.',
                                back: 'اختيار صورة'
                            },
                            size: {
                                title: 'الملف الذي حددته يتجاوز الحد.',
                                text: 'يرجى المحاولة مرة أخرى مع ملف آخر.'
                            },
                            loadImage: {
                                title: 'خطأ',
                                text: 'لا يمكن تحميل صورة'
                            }
                        },
                        multiple: {
                            title: 'لقد أخترت %files%',
                            question: 'هل ترغب في إضافة كل من هذه الملفات?',
                            tooManyFiles: 'لقد اخترت العديد من الملفات. %max% is الحد الأقصى.',
                            tooFewFiles: 'لقد أخترت %files%. على الأقل %min% مطلوب.',
                            clear: 'إزالة جميع',
                            done: 'تم'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.ar = function(n) {
            var mod;
            if (n === 0) {
                return 'zero';
            }
            if (n === 1) {
                return 'one';
            }
            if (n === 2) {
                return 'two';
            }
            mod = n % 100;
            if ((3 <= mod && mod <= 10)) {
                return 'few';
            }
            if ((11 <= mod && mod <= 99)) {
                return 'many';
            }
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.az = {
            uploading: 'Yüklənilir... Lütfən, gözləyin.',
            loadingInfo: 'İnfo yüklənilir...',
            errors: {
                "default": 'Xəta',
                baddata: 'Yanlış dəyər',
                size: 'Fayl çox böyükdür',
                upload: 'Yüklənilə bilmədi',
                user: 'Yükləmə ləğv edildi',
                info: 'İnfo yüklənə bilmədi',
                image: 'Yalnız təsvirlərə icazə verilir',
                createGroup: 'Fayl qrupu yaradıla bilmir',
                deleted: 'Fayl silindi'
            },
            draghere: 'Faylı bura atın',
            file: {
                one: '%1 fayl',
                other: '%1 fayl'
            },
            buttons: {
                cancel: 'Ləğv edin',
                remove: 'Silin',
                choose: {
                    files: {
                        one: 'Fayl seçin',
                        other: 'Fayllar seçin'
                    },
                    images: {
                        one: 'Təsvir seçin',
                        other: 'Təsvirlər seçin'
                    }
                }
            },
            dialog: {
                done: 'Hazırdır',
                showFiles: 'Faylları göstərin',
                tabs: {
                    names: {
                        'empty-pubkey': 'Xoş gəlmisiniz',
                        preview: 'Önbaxış',
                        file: 'Lokal Fayllar',
                        url: 'İxtiyari linklər',
                        camera: 'Kamera',
                        gdrive: 'Google Disk'
                    },
                    file: {
                        drag: 'Faylı bura atın',
                        nodrop: 'Kompüterinizdən faylları yükləyin',
                        cloudsTip: 'Bulud yaddaşlar <br>və sosial xidmətlər',
                        or: 'or',
                        button: 'Lokal fayl seçin',
                        also: 'Həmçinin, buradan seçə bilərsiniz'
                    },
                    url: {
                        title: 'Vebdən fayllar',
                        line1: 'Vebdən istənilən faylı götürün.',
                        line2: 'Sadəcə, link verin.',
                        input: 'Linkinizi bura yerləşdirin...',
                        button: 'Yükləyin'
                    },
                    camera: {
                        capture: 'Şəkil çəkin',
                        mirror: 'Güzgü',
                        retry: 'Yenidən icazə sorğusu göndərin.',
                        pleaseAllow: {
                            title: 'Lütfən, kameranıza giriş hüququ verin',
                            text: 'Bu saytdan kameranıza daxil olmaq icazəsi verildi. ' + 'Kameranız ilə şəkil çəkmək üçün bu sorğunu təsdiq etməlisiniz.'
                        },
                        notFound: {
                            title: 'Kamera aşkar edilmədi',
                            text: 'Görünür, bu cihaza kamera qoşulmayıb.'
                        }
                    },
                    preview: {
                        unknownName: 'naməlum',
                        change: 'Ləğv edin',
                        back: 'Geri',
                        done: 'Əlavə edin',
                        unknown: {
                            title: 'Yüklənilir... Lütfən, önbaxış üçün gözləyin.',
                            done: 'Önbaxışı ötürün və qəbul edin'
                        },
                        regular: {
                            title: 'Bu fayl əlavə edilsin?',
                            line1: 'Yuxarıdakı faylı əlavə etmək üzrəsiniz.',
                            line2: 'Lütfən, təsdiq edin.'
                        },
                        image: {
                            title: 'Bu təsvir əlavə edilsin?',
                            change: 'Ləğv edin'
                        },
                        crop: {
                            title: 'Bu təsviri kəsin və əlavə edin',
                            done: 'Hazırdır',
                            free: 'pulsuz'
                        },
                        error: {
                            "default": {
                                title: 'Ups!',
                                text: 'Yükləmə zamanı nəsə xəta baş verdi.',
                                back: 'Lütfən, y enidən cəhd edin.'
                            },
                            image: {
                                title: 'Yaınız təsvir faylları qəbul olunur.',
                                text: 'Lütfən, başqa fayl ilə cəhd edin.',
                                back: 'Təsvir seçin'
                            },
                            size: {
                                title: 'Seçdiyiniz fayl limiti keçir.',
                                text: 'Lütfən, başqa fayl ilə cəhd edin.'
                            },
                            loadImage: {
                                title: 'Xəta',
                                text: 'Təsvir yüklənilə bilmir'
                            }
                        },
                        multiple: {
                            title: '%files% fayl seçdiniz.',
                            question: 'Bütün bu faylları əlavə etmək istəyirsiniz?',
                            tooManyFiles: 'Həddindən çox fayl seçdiniz. %max% maksimumdur.',
                            tooFewFiles: '%files% fayl seçdiniz. Ən azı %min% tələb olunur.',
                            clear: 'Hamısını silin',
                            done: 'Hazırdır'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.az = function(n) {
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.ca = {
            uploading: 'Carregant... Si us plau esperi.',
            loadingInfo: 'Carregant informació...',
            errors: {
                "default": 'Error',
                baddata: 'Valor incorrecte',
                size: 'Massa gran',
                upload: 'No s\'ha pogut carregar',
                user: 'Carrega cancel·lada',
                info: 'No s\'ha pogut carregar la informació',
                image: 'Només es permeten imatges',
                createGroup: 'No es pot crear el grup d\'arxius',
                deleted: 'Fitxer eliminat'
            },
            draghere: 'Arrossega els fitxers fins aquí',
            file: {
                one: '%1 fitxer',
                other: '%1 fitxers'
            },
            buttons: {
                cancel: 'Cancel·lar',
                remove: 'Eliminar',
                choose: {
                    files: {
                        one: 'Escull un fitxer',
                        other: 'Escull fitxers'
                    },
                    images: {
                        one: 'Escull una imatge',
                        other: 'Escull imatges'
                    }
                }
            },
            dialog: {
                done: 'Fet',
                showFiles: 'Mostra fitxers',
                tabs: {
                    names: {
                        'empty-pubkey': 'Benvingut',
                        preview: 'Avanci',
                        file: 'Ordinador',
                        url: 'Enllaços arbitraris',
                        camera: 'Càmera'
                    },
                    file: {
                        drag: 'Arrossega un fitxer aquí',
                        nodrop: 'Carrega fitxers des del teu ordinador',
                        cloudsTip: 'Emmagatzematge al núvol<br>i xarxes socials',
                        or: 'o',
                        button: 'Escull un fitxer des del teu ordinador',
                        also: 'També pots seleccionar-lo de'
                    },
                    url: {
                        title: 'Fitxers de la web',
                        line1: 'Selecciona qualsevol fitxer de la web.',
                        line2: 'Només proporcioni el link.',
                        input: 'Copiï el link aquí...',
                        button: 'Pujar'
                    },
                    camera: {
                        capture: 'Realitza una foto',
                        mirror: 'Mirall',
                        retry: 'Demanar permisos una altra vegada',
                        pleaseAllow: {
                            title: 'Si us plau, permet accés a la teva càmera',
                            text: 'Aquest lloc t\'ha demanat de permetre accés a la càmera. ' + 'Per tal de realitzar imatges amb la teva càmera has d\'acceptar aquesta petició.'
                        },
                        notFound: {
                            title: 'No s\'ha detectat cap càmera',
                            text: 'Sembla que no tens cap càmera connectada a aquest dispositiu.'
                        }
                    },
                    preview: {
                        unknownName: 'desconegut',
                        change: 'Cancel·lar',
                        back: 'Endarrere',
                        done: 'Pujar',
                        unknown: {
                            title: 'Carregant. Si us plau esperi per la visualització prèvia.',
                            done: 'Saltar visualització prèvia i acceptar'
                        },
                        regular: {
                            title: 'Vols pujar aquest fitxer?',
                            line1: 'Estàs a punt de pujar el fitxer superior.',
                            line2: 'Confirmi, si us plau.'
                        },
                        image: {
                            title: 'Vols pujar aquesta imatge?',
                            change: 'Cancel·lar'
                        },
                        crop: {
                            title: 'Tallar i pujar aquesta imatge',
                            done: 'Fet',
                            free: 'lliure'
                        },
                        error: {
                            "default": {
                                title: 'La pujada ha fallat!',
                                text: 'S\'ha produït un error durant la pujada.',
                                back: 'Si us plau, provi-ho de nou.'
                            },
                            image: {
                                title: 'Només s\'accepten fitxers d\'imatges.',
                                text: 'Si us plau, provi-ho de nou amb un altre fitxer.',
                                back: 'Escull imatge'
                            },
                            size: {
                                title: 'La mida del fitxer que has seleccionat sobrepassa el límit.',
                                text: 'Si us plau, provi-ho de nou amb un altre fitxer.'
                            },
                            loadImage: {
                                title: 'Error',
                                text: 'No s\'ha pogut carregar la imatge'
                            }
                        },
                        multiple: {
                            title: 'N\'has escollit %files%',
                            question: 'Vols afegir tots aquests fitxers?',
                            tooManyFiles: 'Has escollit massa fitxers. %max% és el màxim.',
                            tooFewFiles: 'Has escollit %files%. Com a mínim en calen %min%.',
                            clear: 'Eliminar-los tots',
                            done: 'Fet'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.ca = function(n) {
            if (n === 1) {
                return 'one';
            }
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.cs = {
            uploading: 'Nahrávám... Malý moment.',
            loadingInfo: 'Nahrávám informace...',
            errors: {
                "default": 'Chyba',
                baddata: 'Neplatná hodnota',
                size: 'Soubor je příliš velký',
                upload: 'Nelze nahrát',
                user: 'Nahrávání zrušeno',
                info: 'Nelze nahrát informace',
                image: 'Lze nahrát pouze obrázky',
                createGroup: 'Nelze vytvořit adresář',
                deleted: 'Soubor byl smazán'
            },
            draghere: 'Přetáhněte soubor sem',
            file: {
                one: '%1 soubor',
                few: '%1 soubory',
                many: '%1 souborů'
            },
            buttons: {
                cancel: 'Zrušit',
                remove: 'Odstranit',
                choose: {
                    files: {
                        one: 'Vyberte soubor',
                        other: 'Vyberte soubory'
                    },
                    images: {
                        one: 'Vyberte obrázek',
                        other: 'Vyberte obrázky'
                    }
                }
            },
            dialog: {
                done: 'Hotovo',
                showFiles: 'Zobrazit soubory',
                tabs: {
                    names: {
                        'empty-pubkey': 'Vítejte',
                        preview: 'Náhled',
                        file: 'Soubor z počítače',
                        url: 'Soubor z internetu',
                        camera: 'Webkamera',
                        facebook: 'Facebook',
                        dropbox: 'Dropbox',
                        gdrive: 'Google Drive',
                        instagram: 'Instagram',
                        vk: 'VK',
                        evernote: 'Evernote',
                        box: 'Box',
                        skydrive: 'OneDrive',
                        flickr: 'Flickr',
                        huddle: 'Huddle'
                    },
                    file: {
                        drag: 'Přetáhněte soubor sem',
                        nodrop: 'Nahrajte soubory z vašeho počítače',
                        cloudsTip: 'Cloudové úložiště<br>a sociální sítě',
                        or: 'nebo',
                        button: 'Vyberte soubor z počítače',
                        also: 'Můžete také nahrát soubor z'
                    },
                    url: {
                        title: 'Soubory z internetu',
                        line1: 'Nahrajte jakýkoliv soubor z internetu.',
                        line2: 'Stačí vložit odkaz.',
                        input: 'Odkaz vložte zde...',
                        button: 'Nahrát'
                    },
                    camera: {
                        capture: 'Pořídit fotografii',
                        mirror: 'Zrcadlo',
                        retry: 'Znovu požádat o povolení',
                        pleaseAllow: {
                            title: 'Prosím povolte přístup k webkameře',
                            text: 'Byl(a) jste požádán(a) o přístup k webkameře. ' + 'Abyste mohl(a) pořídit fotografii, musíte přístup povolit.'
                        },
                        notFound: {
                            title: 'Nebyla nalezena webkamera',
                            text: 'Zdá se, že k tomuto zařízení není připojena žádná webkamera.'
                        }
                    },
                    preview: {
                        unknownName: 'neznámý',
                        change: 'Zrušit',
                        back: 'Zpět',
                        done: 'Přidat',
                        unknown: {
                            title: 'Nahrávám... Prosím vyčkejte na náhled.',
                            done: 'Přeskočit náhled a odeslat'
                        },
                        regular: {
                            title: 'Přidat tento soubor?',
                            line1: 'Tímto přidáte výše vybraný soubor.',
                            line2: 'Prosím potvrďte.'
                        },
                        image: {
                            title: 'Přidat tento obrázek?',
                            change: 'Zrušit'
                        },
                        crop: {
                            title: 'Oříznout a přidat tento obrázek',
                            done: 'Hotovo',
                            free: 'zdarma'
                        },
                        error: {
                            "default": {
                                title: 'Jejda!',
                                text: 'Něco se v průběhu nahrávání nepodařilo.',
                                back: 'Zkuste to prosím znovu.'
                            },
                            image: {
                                title: 'Lze nahrávat pouze obrázky.',
                                text: 'Zkuste to prosím s jiným souborem.',
                                back: 'Vyberte obrázek'
                            },
                            size: {
                                title: 'Soubor přesahuje povolenou velikost.',
                                text: 'Prosím zkuste to s jiným souborem.'
                            },
                            loadImage: {
                                title: 'Chyba',
                                text: 'Nelze nahrát obrázek'
                            }
                        },
                        multiple: {
                            title: 'Bylo vybráno %files% souborů',
                            question: 'Chcete přidat všechny tyto soubory?',
                            tooManyFiles: 'Bylo vybráno moc souborů. Maximum je %max%',
                            tooFewFiles: 'Bylo vybráno %files% souborů. Musíte vybrat minimálně %min%',
                            clear: 'Odstranit vše',
                            done: 'Hotovo'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.cs = function(n) {
            if (n === 1) {
                return 'one';
            } else if ((2 <= n && n <= 4)) {
                return 'few';
            } else {
                return 'many';
            }
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.da = {
            uploading: 'Uploader... Vent venligst.',
            loadingInfo: 'Henter information...',
            errors: {
                "default": 'Fejl',
                baddata: 'Forkert værdi',
                size: 'Filen er for stor',
                upload: 'Kan ikke uploade / sende fil',
                user: 'Upload fortrudt',
                info: 'Kan ikke hente information',
                image: 'Kun billeder er tilladt',
                createGroup: 'Kan ikke oprette fil gruppe',
                deleted: 'Filen blev slettet'
            },
            draghere: 'Drop en fil her',
            file: {
                one: '%1 fil',
                other: '%1 filer'
            },
            buttons: {
                cancel: 'Annuller',
                remove: 'Fjern',
                choose: {
                    files: {
                        one: 'Vælg en fil',
                        other: 'Vælg filer'
                    },
                    images: {
                        one: 'Vælg et billede',
                        other: 'Vælg billeder'
                    }
                }
            },
            dialog: {
                done: 'Færdig',
                showFiles: 'Vis filer',
                tabs: {
                    names: {
                        preview: 'Vis',
                        file: 'Computer',
                        gdrive: 'Google Drev',
                        url: 'Direkte link'
                    },
                    file: {
                        drag: 'Drop en fil her',
                        nodrop: 'Hent filer fra din computer',
                        or: 'eller',
                        button: 'Hent fil fra din computer',
                        also: 'Du kan også hente fra'
                    },
                    url: {
                        title: 'Filer fra en Web adresse',
                        line1: 'Vælg en fil fra en web adresse.',
                        line2: 'Skriv bare linket til filen.',
                        input: 'Indsæt link her...',
                        button: 'Upload / Send'
                    },
                    preview: {
                        unknownName: 'ukendt',
                        change: 'Annuller',
                        back: 'Tilbage',
                        done: 'Fortsæt',
                        unknown: {
                            title: 'Uploader / sender... Vent for at se mere.',
                            done: 'Fortsæt uden at vente på resultat'
                        },
                        regular: {
                            title: 'Tilføje fil?',
                            line1: 'Du er ved at tilføje filen ovenfor.',
                            line2: 'Venligst accepter.'
                        },
                        image: {
                            title: 'Tilføj billede?',
                            change: 'Annuller'
                        },
                        crop: {
                            title: 'Beskær og tilføj dette billede',
                            done: 'Udfør'
                        },
                        error: {
                            "default": {
                                title: 'Hov!',
                                text: 'Noget gik galt under upload.',
                                back: 'Venligst prøv igen'
                            },
                            image: {
                                title: 'Du kan kun vælge billeder.',
                                text: 'Prøv igen med en billedfil.',
                                back: 'Vælg billede'
                            },
                            size: {
                                title: 'Den fil du valgte, er desværre større end tilladt.',
                                text: 'Venligst prøv med en mindre fil.'
                            },
                            loadImage: {
                                title: 'Fejl',
                                text: 'Kan ikke åbne billede'
                            }
                        },
                        multiple: {
                            title: 'Du har valgt %files% filer',
                            question: 'Vil du tilføje alle disse filer?',
                            tooManyFiles: 'Du har valgt for mange filer. %max% er maximum.',
                            tooFewFiles: 'Du har valgt %files% filer. Men du skal vælge mindst %min%.',
                            clear: 'Fjern alle',
                            done: 'Fortsæt'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.da = function(n) {
            if (n === 1) {
                return 'one';
            }
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.de = {
            uploading: 'Hochladen... Bitte warten.',
            loadingInfo: 'Laden der Informationen...',
            errors: {
                "default": 'Error',
                baddata: 'Falscher Wert',
                size: 'Datei zu groß',
                upload: 'Kann nicht hochgeladen werden',
                user: 'Hochladen abgebrochen',
                info: 'Informationen können nicht geladen werden',
                image: 'Nur Bilder sind erlaubt',
                createGroup: 'Datei-Gruppe kann nicht erstellt werden',
                deleted: 'Datei wurde gelöscht'
            },
            draghere: 'Ziehen Sie eine Datei hier hinein',
            file: {
                one: '%1 Datei',
                other: '%1 Dateien'
            },
            buttons: {
                cancel: 'Abbrechen',
                remove: 'Löschen',
                choose: {
                    files: {
                        one: 'Wählen Sie eine Datei',
                        other: 'Wählen Sie die Dateien'
                    },
                    images: {
                        one: 'Wählen Sie ein Bild',
                        other: 'Wählen Sie Bilder'
                    }
                }
            },
            dialog: {
                done: 'Fertig',
                showFiles: 'Dateien anzeigen',
                tabs: {
                    names: {
                        'empty-pubkey': 'Willkommen',
                        preview: 'Vorschau',
                        file: 'Lokale Dateien',
                        url: 'Web-Links',
                        camera: 'Kamera'
                    },
                    file: {
                        drag: 'Ziehen Sie eine Datei hier hinein',
                        nodrop: 'Laden Sie Dateien von Ihrem PC hoch',
                        cloudsTip: 'Cloud Speicher<br>und soziale Dienste',
                        or: 'oder',
                        button: 'Wählen Sie eine lokale Datei',
                        also: 'Sie können sie auch wählen von'
                    },
                    url: {
                        title: 'Dateien vom Web',
                        line1: 'Holen Sie sich irgendeine Datei vom Web.',
                        line2: 'Geben Sie einfach den Link an.',
                        input: 'Bitte geben Sie den Link hier an...',
                        button: 'Hochladen'
                    },
                    camera: {
                        capture: 'Machen Sie ein Foto',
                        mirror: 'Spiegel',
                        retry: 'Berechtigungen erneut anfordern',
                        pleaseAllow: {
                            title: 'Bitte erlauben Sie den Zugriff auf Ihre Kamera',
                            text: 'Sie wurden gebeten, dieser Website den Zugriff auf Ihre Kamera zu erlauben. Um mit Ihrer Kamera Fotos machen zu können, müssen Sie diese Erlaubnis erteilen.'
                        },
                        notFound: {
                            title: 'Keine Kamera festgestellt',
                            text: 'Es sieht so aus, als hätten Sie keine Kamera an dieses Gerät angeschlossen.'
                        }
                    },
                    preview: {
                        unknownName: 'nicht bekannt',
                        change: 'Abbrechen',
                        back: 'Zurück',
                        done: 'Hinzufügen',
                        unknown: {
                            title: 'Hochladen... Bitte warten Sie auf die Vorschau.',
                            done: 'Vorschau überspringen und Datei annehmen'
                        },
                        regular: {
                            title: 'Diese Datei hinzufügen?',
                            line1: 'Diese Datei wird nun hinzugefügt.',
                            line2: 'Bitte bestätigen Sie.'
                        },
                        image: {
                            title: 'Dieses Bild hinzufügen?',
                            change: 'Abbrechen'
                        },
                        crop: {
                            title: 'Dieses Bild beschneiden und hinzufügen',
                            done: 'Fertig',
                            free: 'frei'
                        },
                        error: {
                            "default": {
                                title: 'Oops!',
                                text: 'Etwas ist während dem Hochladen schief gelaufen.',
                                back: 'Bitte versuchen Sie es erneut'
                            },
                            image: {
                                title: 'Nur Bilder sind akzeptiert.',
                                text: 'Bitte veruschen Sie es erneut mit einer anderen Datei.',
                                back: 'Bild wählen'
                            },
                            size: {
                                title: 'Die gewählte Datei überschreitet das Limit.',
                                text: 'Bitte veruschen Sie es erneut mit einer anderen Datei.'
                            },
                            loadImage: {
                                title: 'Fehler',
                                text: 'Das Bild kann nicht geladen werden'
                            }
                        },
                        multiple: {
                            title: 'Sie haben %files% Dateien gewählt',
                            question: 'Möchten Sie all diese Datein hinzufügen?',
                            tooManyFiles: 'Sie haben zu viele Dateien gewählt. %max% ist das Maximum.',
                            tooFewFiles: 'Sie haben %files% Dateien. Es sind mindestens %min% nötig.',
                            clear: 'Alle löschen',
                            done: 'Fertig'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.de = function(n) {
            if (n === 1) {
                return 'one';
            }
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.en = {
            uploading: 'Uploading... Please wait.',
            loadingInfo: 'Loading info...',
            errors: {
                "default": 'Error',
                baddata: 'Incorrect value',
                size: 'File too big',
                upload: 'Can’t upload',
                user: 'Upload canceled',
                info: 'Can’t load info',
                image: 'Only images allowed',
                createGroup: 'Can’t create file group',
                deleted: 'File was deleted'
            },
            draghere: 'Drop a file here',
            file: {
                one: '%1 file',
                other: '%1 files'
            },
            buttons: {
                cancel: 'Cancel',
                remove: 'Remove',
                choose: {
                    files: {
                        one: 'Choose a file',
                        other: 'Choose files'
                    },
                    images: {
                        one: 'Choose an image',
                        other: 'Choose images'
                    }
                }
            },
            dialog: {
                done: 'Done',
                showFiles: 'Show files',
                tabs: {
                    names: {
                        'empty-pubkey': 'Welcome',
                        preview: 'Preview',
                        file: 'Local Files',
                        url: 'Arbitrary Links',
                        camera: 'Camera',
                        facebook: 'Facebook',
                        dropbox: 'Dropbox',
                        gdrive: 'Google Drive',
                        instagram: 'Instagram',
                        vk: 'VK',
                        evernote: 'Evernote',
                        box: 'Box',
                        skydrive: 'OneDrive',
                        flickr: 'Flickr',
                        huddle: 'Huddle'
                    },
                    file: {
                        drag: 'Drop a file here',
                        nodrop: 'Upload files from your computer',
                        cloudsTip: 'Cloud storages<br>and social networks',
                        or: 'or',
                        button: 'Choose a local file',
                        also: 'You can also choose it from'
                    },
                    url: {
                        title: 'Files from the Web',
                        line1: 'Grab any file off the web.',
                        line2: 'Just provide the link.',
                        input: 'Paste your link here...',
                        button: 'Upload'
                    },
                    camera: {
                        capture: 'Take a photo',
                        mirror: 'Mirror',
                        retry: 'Request permissions again',
                        pleaseAllow: {
                            title: 'Please allow access to your camera',
                            text: 'You have been prompted to allow camera access from this site. ' + 'In order to take pictures with your camera you must approve this request.'
                        },
                        notFound: {
                            title: 'No camera detected',
                            text: 'Looks like you have no camera connected to this device.'
                        }
                    },
                    preview: {
                        unknownName: 'unknown',
                        change: 'Cancel',
                        back: 'Back',
                        done: 'Add',
                        unknown: {
                            title: 'Uploading... Please wait for a preview.',
                            done: 'Skip preview and accept'
                        },
                        regular: {
                            title: 'Add this file?',
                            line1: 'You are about to add the file above.',
                            line2: 'Please confirm.'
                        },
                        image: {
                            title: 'Add this image?',
                            change: 'Cancel'
                        },
                        crop: {
                            title: 'Crop and add this image',
                            done: 'Done',
                            free: 'free'
                        },
                        error: {
                            "default": {
                                title: 'Oops!',
                                text: 'Something went wrong during the upload.',
                                back: 'Please try again'
                            },
                            image: {
                                title: 'Only image files are accepted.',
                                text: 'Please try again with another file.',
                                back: 'Choose image'
                            },
                            size: {
                                title: 'The file you selected exceeds the limit.',
                                text: 'Please try again with another file.'
                            },
                            loadImage: {
                                title: 'Error',
                                text: 'Can’t load image'
                            }
                        },
                        multiple: {
                            title: 'You’ve chosen %files%',
                            question: 'Do you want to add all of these files?',
                            tooManyFiles: 'You’ve chosen too many files. %max% is maximum.',
                            tooFewFiles: 'You’ve chosen %files%. At least %min% required.',
                            clear: 'Remove all',
                            done: 'Done'
                        }
                    }
                },
                footer: {
                    text: 'powered by',
                    link: 'photolia'
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.en = function(n) {
            if (n === 1) {
                return 'one';
            }
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.es = {
            uploading: 'Subiendo... Por favor espere.',
            loadingInfo: 'Cargando información...',
            errors: {
                "default": 'Error',
                baddata: 'Valor incorrecto',
                size: 'Archivo demasiado grande',
                upload: 'No se puede subir',
                user: 'Subida cancelada',
                info: 'No se puede cargar la información',
                image: 'Solo se permiten imágenes',
                createGroup: 'No se puede crear el grupo de archivos',
                deleted: 'El archivo fue eliminado'
            },
            draghere: 'Arrastra un archivo aquí',
            file: {
                one: '%1 archivo',
                other: '%1 archivos'
            },
            buttons: {
                cancel: 'Cancelar',
                remove: 'Eliminar',
                choose: {
                    files: {
                        one: 'Escoge un archivo',
                        other: 'Escoge archivos'
                    },
                    images: {
                        one: 'Escoge una imagen',
                        other: 'Escoge imágenes'
                    }
                }
            },
            dialog: {
                done: 'Hecho',
                showFiles: 'Mostrar archivos',
                tabs: {
                    names: {
                        'empty-pubkey': 'Bienvenido',
                        preview: 'Previsualización',
                        file: 'Archivos locales',
                        url: 'Enlaces arbitrarios',
                        camera: 'Cámara'
                    },
                    file: {
                        drag: 'Arrastra una archivo aquí',
                        nodrop: 'Sube fotos desde tu ordenador',
                        cloudsTip: 'Almacenamiento en la nube<br>y redes sociales',
                        or: 'o',
                        button: 'Elige un archivo de tu ordenador',
                        also: 'Tambien puedes seleccionarlo de'
                    },
                    url: {
                        title: 'Archivos de la Web',
                        line1: 'Coge cualquier archivo de la web.',
                        line2: 'Solo danos el link.',
                        input: 'Pega tu link aquí...',
                        button: 'Subir'
                    },
                    camera: {
                        capture: 'Hacer una foto',
                        mirror: 'Espejo',
                        retry: 'Solicitar permisos de nuevo',
                        pleaseAllow: {
                            title: 'Por favor, permite el acceso a tu cámara',
                            text: 'Este sitio ha pedido permiso para acceder a la cámara. ' + 'Para tomar imágenes con tu cámara debes aceptar esta petición.'
                        },
                        notFound: {
                            title: 'No se ha detectado ninguna cámara',
                            text: 'Parece que no tienes ninguna cámara conectada a este dispositivo.'
                        }
                    },
                    preview: {
                        unknownName: 'desconocido',
                        change: 'Cancelar',
                        back: 'Atrás',
                        done: 'Añadir',
                        unknown: {
                            title: 'Subiendo. Por favor espera para una vista previa.',
                            done: 'Saltar vista previa y aceptar'
                        },
                        regular: {
                            title: '¿Quieres subir este archivo?',
                            line1: 'Estás a punto de subir el archivo de arriba.',
                            line2: 'Confírmalo por favor.'
                        },
                        image: {
                            title: '¿Quieres subir esta imagen?',
                            change: 'Cancelar'
                        },
                        crop: {
                            title: 'Cortar y añadir esta imagen',
                            done: 'Listo',
                            free: 'libre'
                        },
                        error: {
                            "default": {
                                title: 'Ups!',
                                text: 'Algo salió mal durante la subida.',
                                back: 'Por favor, inténtalo de nuevo.'
                            },
                            image: {
                                title: 'Solo se aceptan archivos de imagen.',
                                text: 'Por favor, inténtalo de nuevo con otro archivo.',
                                back: 'Escoger imagen'
                            },
                            size: {
                                title: 'El archivo que has seleccinado excede el límite.',
                                text: 'Por favor, inténtalo de nuevo con otro archivo.'
                            },
                            loadImage: {
                                title: 'Error',
                                text: 'No puede cargar la imagen'
                            }
                        },
                        multiple: {
                            title: 'Has escogido %files%',
                            question: '¿Quieres añadir todos estos archivos?',
                            tooManyFiles: 'Has escogido demasiados archivos. %max% es el máximo.',
                            tooFewFiles: 'Has escogido %files%. Hacen falta al menos %min%.',
                            clear: 'Eliminar todo',
                            done: 'Hecho'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.es = function(n) {
            if (n === 1) {
                return 'one';
            }
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.fr = {
            uploading: 'Envoi en cours... Merci de patientier.',
            loadingInfo: 'Chargement des informations...',
            errors: {
                "default": 'Erreur',
                baddata: 'Valeur incorrecte',
                size: 'Fichier trop volumineux',
                upload: 'Envoi impossible',
                user: 'Envoi annulé',
                info: 'Impossible de charger les informations',
                image: 'Seules les images sont autorisées',
                createGroup: 'Création d\'1 groupe impossible',
                deleted: 'Le fichier a été supprimé'
            },
            draghere: 'Glissez-déposez un fichier ici',
            file: {
                one: '%1 fichier',
                other: '%1 fichiers'
            },
            buttons: {
                cancel: 'Annuler',
                remove: 'Supprimer',
                choose: {
                    files: {
                        one: 'Sélectionner un fichier',
                        other: 'Sélectionner des fichiers'
                    },
                    images: {
                        one: 'Sélectionner une image',
                        other: 'Sélectionner des images'
                    }
                }
            },
            dialog: {
                done: 'Terminer',
                showFiles: 'Voir les fichiers',
                tabs: {
                    names: {
                        preview: 'Avant-première',
                        file: 'Fichier en local',
                        url: 'Une adresse web',
                        'empty-pubkey': 'Bienvenue',
                        camera: 'Appareil photo'
                    },
                    file: {
                        drag: 'Glissez-déposez un fichier ici',
                        nodrop: 'Envoyez des fichiers depuis votre ordinateur',
                        cloudsTip: 'Stockage sur le cloud<br>et réseaux sociaux',
                        or: 'ou',
                        button: 'Choisir un fichier local',
                        also: 'Vous pouvez également le sélectionner depuis'
                    },
                    url: {
                        title: 'Fichiers depuis le Web',
                        line1: 'Prenez n\'importe quel fichier depuis un site web.',
                        line2: 'Saisissez simplement son adresse.',
                        input: 'Collez le lien ici...',
                        button: 'Envoi'
                    },
                    camera: {
                        capture: 'Prendre une photo',
                        mirror: 'Miroir',
                        retry: 'Envoyer une nouvelle demande de permission',
                        pleaseAllow: {
                            title: 'Autorisez l\'accès à votre appareil photo',
                            text: 'Vous avez été invité à autoriser l\'accès à votre appareil photo. Pour prendre des photos avec votre appareil photo vous devez approuver cette demande.'
                        },
                        notFound: {
                            title: 'Aucun appareil photo détecté',
                            text: 'Il semblerait que vous n\'ayez pas d\'appareil photo connecté à cet appareil.'
                        }
                    },
                    preview: {
                        unknownName: 'inconnu',
                        change: 'Annuler',
                        back: 'Retour',
                        done: 'Ajouter',
                        unknown: {
                            title: 'Envoi en cours... Merci de patientier pour prévisualiser.',
                            done: 'Passer la prévisualisation et accepter'
                        },
                        regular: {
                            title: 'Ajouter ce fichier ?',
                            line1: 'Vous êtes sur le point d\'ajouter le fichier ci-dessus.',
                            line2: 'Merci de confirmer.'
                        },
                        image: {
                            title: 'Ajouter cette image ?',
                            change: 'Annuler'
                        },
                        crop: {
                            title: 'Recadrer et ajouter cette image',
                            done: 'Terminer',
                            free: 'libre'
                        },
                        error: {
                            "default": {
                                title: 'Oups!',
                                text: 'Quelque chose n\'a pas fonctionné pendant l\'envoi.',
                                back: 'Merci de bien vouloir recommencer'
                            },
                            image: {
                                title: 'Seules les images sont acceptées.',
                                text: 'Merci de bien vouloir recommencer avec un autre fichier.',
                                back: 'Choisir une image'
                            },
                            size: {
                                title: 'Le fichier sélectionné est trop volumineux.',
                                text: 'Merci de bien vouloir recommencer avec un autre fichier.'
                            },
                            loadImage: {
                                title: 'Erreur',
                                text: 'Impossible de charger l\'image'
                            }
                        },
                        multiple: {
                            title: 'Vous avez choisi %files%',
                            question: 'Voulez vous ajouter tous ces fichiers ?',
                            clear: 'Tout retirer',
                            done: 'Terminer',
                            tooManyFiles: 'Vous avez choisi trop de fichiers. %max% est le maximum.',
                            tooFewFiles: 'Vous avez choisi %fichiers%. %min% est le minimum.'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.fr = function(n) {
            if (n === 1) {
                return 'one';
            }
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.he = {
            uploading: 'טוען... אנא המתן.',
            loadingInfo: 'טוען מידע...',
            errors: {
                "default": 'שגיאה',
                baddata: 'ערך שגוי',
                size: 'קובץ גדול מידי',
                upload: 'לא ניתן להעלות',
                user: 'העלאה בוטלה',
                info: 'לא ניתן לטעון מידע',
                image: 'ניתן להעלות רק תמונות',
                createGroup: 'לא ניתן ליצור קבוצה',
                deleted: 'הקובץ נמחק'
            },
            draghere: 'שחרר כאן קובץ',
            file: {
                one: 'קובץ %1',
                other: '%1 קבצים'
            },
            buttons: {
                cancel: 'ביטול',
                remove: 'הסר',
                choose: {
                    files: {
                        one: 'בחר קובץ',
                        other: 'בחר קבצים'
                    },
                    images: {
                        one: 'בחר תמונה',
                        other: 'בחר תמונות'
                    }
                }
            },
            dialog: {
                done: 'סיום',
                showFiles: 'הצג קבצים',
                tabs: {
                    names: {
                        facebook: 'פייסבוק',
                        dropbox: 'דרופבוקס',
                        gdrive: 'כונן גוגל',
                        instagram: 'אינסטגרם',
                        url: 'לינק מהאינטרנט'
                    },
                    file: {
                        drag: 'שחרר כאן קובץ',
                        nodrop: 'העלה קבצים מהמחשב',
                        or: 'או',
                        button: 'בחר קובץ מהמחשב',
                        also: 'ניתן לבחור גם מ'
                    },
                    url: {
                        title: 'קובץ מהאינטרנט',
                        line1: 'גרור קובץ מהאינטרנט',
                        line2: 'ספק את כתובת הקובץ',
                        input: 'הדבק את כתובת הקובץ...',
                        button: 'העלה'
                    },
                    preview: {
                        unknownName: 'לא ידוע',
                        change: 'ביטול',
                        back: 'חזרה',
                        done: 'הוסף',
                        unknown: {
                            title: 'מעלה... נא המתן לתצוגה מקדימה.',
                            done: 'דלג על תצוגה מקדימה'
                        },
                        regular: {
                            title: 'להוסיף קובץ זה?',
                            line1: 'קובץ זה יועלה',
                            line2: 'נא אשר.'
                        },
                        image: {
                            title: 'להוסיף תמונה זו?',
                            change: 'ביטול'
                        },
                        crop: {
                            title: 'חתוך והוסף תמונה זו',
                            done: 'סיום'
                        },
                        error: {
                            "default": {
                                title: 'אופס!',
                                text: 'משהו השתבש בזמן ההעלאה.',
                                back: 'נא נסה שוב'
                            },
                            image: {
                                title: 'ניתן לקבל רק קבצי תמונות.',
                                text: 'נא נסה שוב עם קובץ אחר.',
                                back: 'בחר תמונה'
                            },
                            size: {
                                title: 'הקובץ שבחרת חורג מהגבול.',
                                text: 'נא נסה שוב עם קובץ אחר.'
                            },
                            loadImage: {
                                title: 'שגיאה',
                                text: 'טעינת התמונה נכשלה'
                            }
                        },
                        multiple: {
                            title: 'בחרת %files%',
                            question: 'אתה מעוניין להוסיף את כל הקבצים האלו?',
                            tooManyFiles: 'בחרת יותר מידי קבצים. יש לבחור מקסימום %max% קבצים.',
                            tooFewFiles: 'בחרת %files%. יש לבחור לפחות %min%.',
                            clear: 'הסר הכל',
                            done: 'סיום'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.he = function(n) {
            if (n === 1) {
                return 'one';
            }
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.it = {
            uploading: 'Caricamento in corso... Si prega di attendere.',
            loadingInfo: 'Caricamento informazioni in corso...',
            errors: {
                "default": 'Errore',
                baddata: 'Valore errato',
                size: 'Il file è troppo grande',
                upload: 'Impossibile fare l’upload',
                user: 'Upload cancellato',
                info: 'Impossibile caricare le informazioni',
                image: 'Sono ammesse solo immagini',
                createGroup: 'Impossibile creare gruppo di file',
                deleted: 'Il file è stato eliminato'
            },
            draghere: 'Trascina un file qui',
            file: {
                one: 'file %1',
                other: 'file %1'
            },
            buttons: {
                cancel: 'Cancella',
                remove: 'Rimuovi',
                choose: {
                    files: {
                        one: 'Seleziona un file',
                        other: 'Seleziona file'
                    },
                    images: {
                        one: 'Seleziona un’immagine',
                        other: 'Seleziona immagini'
                    }
                }
            },
            dialog: {
                done: 'Fatto',
                showFiles: 'Mostra file',
                tabs: {
                    names: {
                        'empty-pubkey': 'Benvenuto',
                        preview: 'Anteprima',
                        file: 'File locali',
                        url: 'Link arbitrari',
                        camera: 'Fotocamera'
                    },
                    file: {
                        drag: 'Trascina un file qui',
                        nodrop: 'Carica file dal tuo computer',
                        cloudsTip: 'Salvataggi nel cloud<br>e servizi sociali',
                        or: 'o',
                        button: 'Seleziona un file locale',
                        also: 'Puoi anche scegliere da'
                    },
                    url: {
                        title: 'File dal web',
                        line1: 'Preleva un file dal web.',
                        line2: 'È sufficiente fornire il link.',
                        input: 'Incolla il tuo link qui...',
                        button: 'Carica'
                    },
                    camera: {
                        capture: 'Scatta una foto',
                        mirror: 'Specchio',
                        retry: 'Richiedi di nuovo le autorizzazioni',
                        pleaseAllow: {
                            title: 'Consenti l’accesso alla tua fotocamera',
                            text: 'Ti è stato richiesto di consentire l’accesso alla fotocamera da questo sito. Per scattare le foto con la tua fotocamera devi accettare questa richiesta.'
                        },
                        notFound: {
                            title: 'Nessuna fotocamera rilevata',
                            text: 'Non risulta che tu non abbia una fotocamera collegata a questo dispositivo.'
                        }
                    },
                    preview: {
                        unknownName: 'sconosciuto',
                        change: 'Cancella',
                        back: 'Indietro',
                        done: 'Aggiungi',
                        unknown: {
                            title: 'Caricamento in corso... Attendi l’anteprima.',
                            done: 'Salta l’anteprima e accetta'
                        },
                        regular: {
                            title: 'Vuoi aggiungere questo file?',
                            line1: 'Stai per aggiungere il file sopra.',
                            line2: 'Conferma.'
                        },
                        image: {
                            title: 'Vuoi aggiungere questa immagine?',
                            change: 'Cancella'
                        },
                        crop: {
                            title: 'Ritaglia e aggiungi questa immagine',
                            done: 'Fatto',
                            free: 'gratis'
                        },
                        error: {
                            "default": {
                                title: 'Ops!',
                                text: 'Si è verificato un problema durante l’upload.',
                                back: 'Si prega di riprovare'
                            },
                            image: {
                                title: 'Sono accettati solo file immagine.',
                                text: 'Riprova con un altro file.',
                                back: 'Scegli immagine'
                            },
                            size: {
                                title: 'Il file selezionato supera il limite.',
                                text: 'Riprova con un altro file.'
                            },
                            loadImage: {
                                title: 'Errore',
                                text: 'Impossibile caricare l’immagine'
                            }
                        },
                        multiple: {
                            title: 'Hai selezionato %files%',
                            question: 'Vuoi aggiungere tutti questi file?',
                            tooManyFiles: 'Hai selezionato troppi file. %max% è il massimo.',
                            tooFewFiles: 'Hai selezionato %files%. È richiesto almeno %min%.',
                            clear: 'Rimuovi tutto',
                            done: 'Fatto'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.it = function(n) {
            if (n === 1) {
                return 'one';
            }
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.ja = {
            uploading: 'アップロードしています… 完了までお待ち下さい。',
            loadingInfo: '読み込み中…',
            errors: {
                "default": 'エラー',
                baddata: '間違った値',
                size: 'ファイルが大きすぎます',
                upload: 'アップロードできませんでした',
                user: 'アップロードがキャンセルされました',
                info: '読み込みに失敗しました',
                image: 'アップロードできるのは画像ファイルのみです',
                createGroup: 'グループの作成に失敗しました',
                deleted: '削除されたファイルです'
            },
            draghere: 'ここにファイルをドロップ',
            file: {
                other: '%1ファイル'
            },
            buttons: {
                cancel: 'キャンセル',
                remove: '削除',
                choose: {
                    files: {
                        one: 'ファイルを選択',
                        other: 'ファイルを選択'
                    },
                    images: {
                        one: '画像を選択',
                        other: '画像を選択'
                    }
                }
            },
            dialog: {
                done: '完了',
                showFiles: 'ファイルを表示',
                tabs: {
                    names: {
                        preview: 'プレビュー',
                        file: 'ローカルファイル',
                        url: 'URLを直接入力'
                    },
                    file: {
                        drag: 'ここにファイルをドロップ',
                        nodrop: 'ファイルを選択してアップロード',
                        cloudsTip: 'クラウドストレージ<br>およびソーシャルサービス',
                        or: 'もしくは',
                        button: 'ローカルのファイルを選択',
                        also: '次からも選択可能です：'
                    },
                    url: {
                        title: 'ウェブ上のファイル',
                        line1: 'ウェブ上からファイルを取得します。',
                        line2: 'URLを入力してください。',
                        input: 'ここにURLを貼り付けしてください…',
                        button: 'アップロード'
                    },
                    preview: {
                        unknownName: '不明なファイル',
                        change: 'キャンセル',
                        back: '戻る',
                        done: '追加',
                        unknown: {
                            title: 'アップロードしています… プレビューの表示をお待ちください。',
                            done: 'プレビューの確認をスキップして完了'
                        },
                        regular: {
                            title: 'このファイルを追加しますか？',
                            line1: 'こちらのファイルを追加しようとしています。',
                            line2: '確認してください。'
                        },
                        image: {
                            title: 'この画像を追加しますか？',
                            change: 'キャンセル'
                        },
                        crop: {
                            title: '画像の切り取りと追加',
                            done: '完了',
                            free: 'リセット'
                        },
                        error: {
                            "default": {
                                title: '失敗しました',
                                text: 'アップロード中に不明なエラーが発生しました。',
                                back: 'もう一度お試し下さい'
                            },
                            image: {
                                title: '画像ファイルのみ許可されています',
                                text: '他のファイルで再度お試し下さい。',
                                back: '画像を選択'
                            },
                            size: {
                                title: 'ファイルサイズが大きすぎます。',
                                text: '他のファイルで再度お試し下さい。'
                            },
                            loadImage: {
                                title: 'エラー',
                                text: '画像のロードに失敗しました。'
                            }
                        },
                        multiple: {
                            title: '%files%つのファイルを選択中',
                            question: 'これら全てのファイルを追加しますか？',
                            tooManyFiles: '選択ファイルが多すぎます。%max%つ以下にしてください。',
                            tooFewFiles: '選択ファイルが少なすぎます。%files%つ選択中です。少なくとも%min%つ選択してください。',
                            clear: '全て削除',
                            done: '完了'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.ja = function(n) {
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.lv = {
            uploading: 'Augšupielādē... Lūdzu, gaidiet.',
            errors: {
                "default": 'Kļūda',
                image: 'Atļauti tikai attēli'
            },
            draghere: 'Velciet failus šeit',
            file: {
                zero: '%1 failu',
                one: '%1 fails',
                other: '%1 faili'
            },
            buttons: {
                cancel: 'Atcelt',
                remove: 'Dzēst'
            },
            dialog: {
                title: 'Ielādēt jebko no jebkurienes',
                poweredby: 'Darbināts ar',
                support: {
                    images: 'Attēli',
                    audio: 'Audio',
                    video: 'Video',
                    documents: 'Dokumenti'
                },
                tabs: {
                    file: {
                        title: 'Mans dators',
                        line1: 'Paņemiet jebkuru failu no jūsu datora.',
                        line2: 'Izvēlēties ar dialogu vai ievelciet iekšā.',
                        button: 'Meklēt failus'
                    },
                    url: {
                        title: 'Faili no tīmekļa',
                        line1: 'Paņemiet jebkuru failu no tīmekļa.',
                        line2: 'Tikai uzrādiet linku.',
                        input: 'Ielīmējiet linku šeit...',
                        button: 'Ielādēt'
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.lv = function(n) {
            if (n === 0) {
                return 'zero';
            }
            if ((n % 10 === 1) && (n % 100 !== 11)) {
                return 'one';
            }
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.nb = {
            uploading: 'Laster opp... Vennligst vent.',
            loadingInfo: 'Laster inn info...',
            errors: {
                "default": 'Feil',
                baddata: 'Ugyldig verdi',
                size: 'Filen er for stor',
                upload: 'Kan ikke laste opp',
                user: 'Opplasting avbrutt',
                info: 'Kan ikke laste inn info',
                image: 'Kun bilder er tillatt',
                createGroup: 'Kan ikke opprette filgruppe',
                deleted: 'Filen er slettet'
            },
            draghere: 'Dra en fil hit',
            file: {
                one: '%1 fil',
                other: '%1 filer'
            },
            buttons: {
                cancel: 'Avbryt',
                remove: 'Fjern',
                choose: {
                    files: {
                        one: 'Velg en fil',
                        other: 'Velg filer'
                    },
                    images: {
                        one: 'Velg et bilde',
                        other: 'Velg bilder'
                    }
                }
            },
            dialog: {
                done: 'Ferdig',
                showFiles: 'Vis filer',
                tabs: {
                    names: {
                        preview: 'Forhåndsvising',
                        file: 'Lokale filer',
                        url: 'Direktelink'
                    },
                    file: {
                        drag: 'Dra og slipp en fil her',
                        nodrop: 'Last opp filer fra datamaskinen',
                        cloudsTip: 'Skylagring<br>og sosiale tjenester',
                        or: 'eller',
                        button: 'Velg en lokal fil',
                        also: 'Du kan også velge det fra'
                    },
                    url: {
                        title: 'Filer fra internett',
                        line1: 'Velg hvilken som helst fil fra internett.',
                        line2: 'Bare gi oss linken.',
                        input: 'Lim inn linken her...',
                        button: 'Last opp'
                    },
                    preview: {
                        unknownName: 'ukjent',
                        change: 'Avbryt',
                        back: 'Tilbake',
                        done: 'Legg til',
                        unknown: {
                            title: 'Laster opp... Vennligst vent på forhåndsvisning.',
                            done: 'Hopp over forhåndsvisning og godkjenn'
                        },
                        regular: {
                            title: 'Legge til denne filen?',
                            line1: 'Filen legges nå til.',
                            line2: 'Vennligst bekreft.'
                        },
                        image: {
                            title: 'Legge til dette bildet?',
                            change: 'Avbryt'
                        },
                        crop: {
                            title: 'Kutt og legg til dette bildet',
                            done: 'Ferdig',
                            free: 'frigjør'
                        },
                        error: {
                            "default": {
                                title: 'Ops!',
                                text: 'Noe gikk galt under opplastingen.',
                                back: 'Vennligst prøv igjen'
                            },
                            image: {
                                title: 'Kun bilder er akseptert.',
                                text: 'Prøv igjen med en annen fil.',
                                back: 'Velg bilde'
                            },
                            size: {
                                title: 'Den valgte filen overskrider tilatt størrelse.',
                                text: 'Vennligst prøv igjen med en annen fil.'
                            },
                            loadImage: {
                                title: 'Feil',
                                text: 'Kan ikke laste bildet'
                            }
                        },
                        multiple: {
                            title: 'Du har valgt %files%',
                            question: 'Ønsker du å legge til alle filene?',
                            tooManyFiles: 'Du har valgt for mange filer. %max% er maksimum.',
                            tooFewFiles: 'Du har valgt %files%. Minimum %min% er påkrevd.',
                            clear: 'Fjern alle',
                            done: 'Ferdig'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.nb = function(n) {
            if (n === 1) {
                return 'one';
            }
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.nl = {
            uploading: 'Uploaden... Even geduld.',
            loadingInfo: 'Laden informatie...',
            errors: {
                "default": 'Fout',
                baddata: 'Ongeldige waarde',
                size: 'Bestand is te groot',
                upload: 'Kan niet uploaden',
                user: 'Upload geannulleerd',
                info: 'Kan informatie niet laden',
                image: 'Alleen afbeeldingen toegestaan',
                createGroup: 'Kan bestandsgroep niet maken',
                deleted: 'Bestand is verwijderd'
            },
            draghere: 'Drop hier een bestand',
            file: {
                one: '%1 bestand',
                other: '%1 bestanden'
            },
            buttons: {
                cancel: 'Annuleren',
                remove: 'Verwijderen',
                choose: {
                    files: {
                        one: 'Kies een bestand',
                        other: 'Kies bestanden'
                    },
                    images: {
                        one: 'Kies een afbeelding',
                        other: 'Kies afbeeldingen'
                    }
                }
            },
            dialog: {
                done: 'Klaar',
                showFiles: 'Toon bestanden',
                tabs: {
                    names: {
                        preview: 'Voorvertoning',
                        file: 'Computer',
                        url: 'Directe links'
                    },
                    file: {
                        drag: 'Drop hier een bestand',
                        nodrop: 'Upload bestanden van je computer',
                        or: 'of',
                        button: 'Selecteer een bestand van je computer',
                        also: 'Je kan ook selecteren van'
                    },
                    url: {
                        title: 'Bestanden van het web',
                        line1: 'Selecteer een bestand van het web.',
                        line2: 'Voer de link in.',
                        input: 'Plak de link hier...',
                        button: 'Upload'
                    },
                    preview: {
                        unknownName: 'onbekend',
                        change: 'Annuleren',
                        back: 'Terug',
                        done: 'Toevoegen',
                        unknown: {
                            title: 'Uploaden... Wacht op de voorvertoning.',
                            done: 'Voorvertoning overslaan an accepteren'
                        },
                        regular: {
                            title: 'Dit bestand toevoegen?',
                            line1: 'Je staat op het punt bovenstaand bestand toe te voegen.',
                            line2: 'Bevestig.'
                        },
                        image: {
                            title: 'Voeg deze afbeelding toe?',
                            change: 'Annuleren'
                        },
                        crop: {
                            title: 'Afbeelding bijknippen en toevoegen',
                            done: 'Klaar'
                        },
                        error: {
                            "default": {
                                title: 'Oeps!',
                                text: 'Er is een fout opgetreden tijdens het uploaden.',
                                back: 'Probeer het nog eens'
                            },
                            image: {
                                title: 'Alleen afbeeldingen worden geaccepteerd.',
                                text: 'Probeer het nog eens met een andere bestand.',
                                back: 'Selecteer afbeelding'
                            },
                            size: {
                                title: 'Het geselecteerd bestand is groter dan de limiet.',
                                text: 'Probeer het nog eens met een andere bestand.'
                            },
                            loadImage: {
                                title: 'Fout',
                                text: 'Kan afbeelding niet laden'
                            }
                        },
                        multiple: {
                            title: 'Je hebt de volgende bestanden geselecteerd %files%',
                            question: 'Wil je al deze bestanden toevoegen?',
                            tooManyFiles: 'Je hebt teveel bestanden geselecteerd. %max% is het maximum.',
                            tooFewFiles: 'Je hebt de volgende bestanden geselecteerd %files%. Minimaal %min% is verplicht.',
                            clear: 'Verwijder alle bestanden',
                            done: 'Klaar'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.nl = function(n) {
            if (n === 1) {
                return 'one';
            }
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.pl = {
            uploading: 'Przesyłanie... Proszę czekać.',
            loadingInfo: 'Loading info...',
            errors: {
                "default": 'Błąd',
                baddata: 'Niepoprawna wartość',
                size: 'Plik zbyt duży',
                upload: 'Nie udało się przesłać',
                user: 'Przesyłanie anulowane',
                info: 'Nie udało się załadować informacji',
                image: 'Dozwolone są tylko obrazy',
                createGroup: 'Nie udało się utworzyć grupy plików',
                deleted: 'Plik został usunięty'
            },
            draghere: 'Upuść plik tutaj',
            file: {
                one: '%1 plik',
                few: '%1 pliki',
                many: '%1 plików'
            },
            buttons: {
                cancel: 'Anuluj',
                remove: 'Usuń',
                choose: {
                    files: {
                        one: 'Wybierz plik',
                        other: 'Wybierz pliki'
                    },
                    images: {
                        one: 'Wybierz obraz',
                        other: 'Wybierz obrazy'
                    }
                }
            },
            dialog: {
                done: 'Wykonano',
                showFiles: 'Pokaż pliki',
                tabs: {
                    names: {
                        'empty-pubkey': 'Witaj',
                        preview: 'Podgląd',
                        file: 'Pliki lokalne',
                        url: 'Plik z Sieci',
                        camera: 'Aparat'
                    },
                    file: {
                        drag: 'Upuść plik tutaj',
                        nodrop: 'Prześlij pliki z Twojego komputera',
                        cloudsTip: 'Dane w chmurze<br>i sieci społecznościowe',
                        or: 'lub',
                        button: 'Wybierz plik lokalny',
                        also: 'Możesz również wybrać z'
                    },
                    url: {
                        title: 'Pliki z Sieci',
                        line1: 'Złap jakikolwiej plik z sieci.',
                        line2: 'Podaj adres.',
                        input: 'Wklej link...',
                        button: 'Prześlij'
                    },
                    camera: {
                        capture: 'Zrób zdjęcie',
                        mirror: 'Lustro',
                        retry: 'Poproś ponownie o dostęp',
                        pleaseAllow: {
                            title: 'Prośba o udostępnienie aparatu',
                            text: 'Zostałeś poproszony przez tę stronę o dostęp do aparatu. ' + 'Aby robić zdjecia, musisz zaakceptować tę prośbę.'
                        },
                        notFound: {
                            title: 'Nie wykryto aparatu.',
                            text: 'Wygląda na to, że nie masz podłączonego aparatu do tego urządzenia.'
                        }
                    },
                    preview: {
                        unknownName: 'nieznany',
                        change: 'Anuluj',
                        back: 'Wstecz',
                        done: 'Dodaj',
                        unknown: {
                            title: 'Przesyłanie... Proszę czekać na podgląd.',
                            done: 'Omiń podgląd i zaakceptuj.'
                        },
                        regular: {
                            title: 'Dodać ten plik?',
                            line1: 'Zamierzasz dodać nowy plik.',
                            line2: 'Potwierdź, proszę.'
                        },
                        image: {
                            title: 'Dodać ten obraz?',
                            change: 'Anuluj'
                        },
                        crop: {
                            title: 'Przytnij i dodaj ten obraz',
                            done: 'Wykonano',
                            free: 'wolny'
                        },
                        error: {
                            "default": {
                                title: 'Oops!',
                                text: 'Coś poszło nie tak podczas przesyłania.',
                                back: 'Spróbuj ponownie'
                            },
                            image: {
                                title: 'Akceptowane są tylko obrazy.',
                                text: 'Spróbuj ponownie z innym plikiem.',
                                back: 'Wybierz obraz'
                            },
                            size: {
                                title: 'Plik, który wybrałeś, przekracza dopuszczalny rozmiar',
                                text: 'Spróbuj ponownie z innym plikiem.'
                            },
                            loadImage: {
                                title: 'Błąd',
                                text: 'Nie udało się załadować obrazu'
                            }
                        },
                        multiple: {
                            title: 'Wybrałeś %files%',
                            question: 'Czy chcesz dodać wszystkie te pliki?',
                            tooManyFiles: 'Wybrałeś zbyt wiele plików. Maksimum to %max%.',
                            tooFewFiles: 'Wybrałeś %files%. Wymagane jest co najmniej %min%.',
                            clear: 'Usuń wszystkie',
                            done: 'Wykonano'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.pl = function(n) {
            var _ref;
            if (n === 1) {
                return 'one';
            } else if (((2 <= (_ref = n % 10) && _ref <= 4)) && ((n / 10 % 10 | 0) !== 1)) {
                return 'few';
            } else {
                return 'many';
            }
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.pt = {
            uploading: 'Fazendo upload... Aguarde.',
            loadingInfo: 'Carregando informações...',
            errors: {
                "default": 'Erro',
                baddata: 'Valor incorreto',
                size: 'Arquivo muito grande',
                upload: 'Não foi possível fazer o upload',
                user: 'Upload cancelado',
                info: 'Não foi possível carregar as informações',
                image: 'Apenas imagens são permitidas',
                createGroup: 'Não foi possível criar o grupo de arquivos',
                deleted: 'O arquivo foi excluído'
            },
            draghere: 'Arraste um arquivo para cá',
            file: {
                one: '%1 arquivo',
                other: '%1 arquivos'
            },
            buttons: {
                cancel: 'Cancelar',
                remove: 'Excluir',
                choose: {
                    files: {
                        one: 'Escolha um arquivo',
                        other: 'Escolha arquivos'
                    },
                    images: {
                        one: 'Escolha um imagem',
                        other: 'Escolha imagens'
                    }
                }
            },
            dialog: {
                done: 'OK',
                showFiles: 'Mostrar arquivos',
                tabs: {
                    names: {
                        preview: 'Pré-estréia',
                        file: 'Computador',
                        url: 'Link da web'
                    },
                    file: {
                        drag: 'Arraste um arquivo para cá',
                        nodrop: 'Faça upload de arquivos do seu computador',
                        or: 'ou',
                        button: 'Escolha um arquivo do computador',
                        also: 'Você também pode escolher arquivos de'
                    },
                    url: {
                        title: 'Arquivos da web',
                        line1: 'Faça upload de qualquer arquivo da web.',
                        line2: 'Apenas informe o link.',
                        input: 'Cole seu link aqui...',
                        button: 'Upload'
                    },
                    preview: {
                        unknownName: 'desconhecido',
                        change: 'Cancelar',
                        back: 'Voltar',
                        done: 'Adicionar',
                        unknown: {
                            title: 'Fazendo upload... Aguarde o preview.',
                            done: 'Pular preview e aceitar'
                        },
                        regular: {
                            title: 'Adicionar esse arquivo?',
                            line1: 'Você está prestes a adicionar o arquivo acima.',
                            line2: 'Por favor, confirme.'
                        },
                        image: {
                            title: 'Adicionar essa imagem?',
                            change: 'Cancelar'
                        },
                        crop: {
                            title: 'Cortar e adicionar essa imagem',
                            done: 'OK',
                            free: 'livre'
                        },
                        error: {
                            "default": {
                                title: 'Oops!',
                                text: 'Alguma coisa deu errado durante o upload.',
                                back: 'Por favor, tente novamente'
                            },
                            image: {
                                title: 'Apenas arquivos de imagem são aceitos.',
                                text: 'Por favor, tente novamente com outro arquivo.',
                                back: 'Escolher a imagem'
                            },
                            size: {
                                title: 'O arquivo que você escolheu excede o limite.',
                                text: 'Por favor, tente novamente com outro arquivo.'
                            },
                            loadImage: {
                                title: 'Erro',
                                text: 'Não foi possível carregar a imagem'
                            }
                        },
                        multiple: {
                            title: 'Você escolheu',
                            question: 'Você quer adicionar todos esses arquivos?',
                            clear: 'Excluir todos',
                            done: 'OK'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.pt = function(n) {
            if (n === 1) {
                return 'one';
            }
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.ru = {
            uploading: 'Идет загрузка',
            loadingInfo: 'Загрузка информации...',
            errors: {
                "default": 'Ошибка',
                baddata: 'Некорректные данные',
                size: 'Слишком большой файл',
                upload: 'Ошибка при загрузке',
                user: 'Загрузка прервана',
                info: 'Ошибка при загрузке информации',
                image: 'Разрешены только изображения',
                createGroup: 'Не удалось создать группу файлов',
                deleted: 'Файл удалён'
            },
            draghere: 'Перетащите файл сюда',
            file: {
                one: '%1 файл',
                few: '%1 файла',
                many: '%1 файлов'
            },
            buttons: {
                cancel: 'Отмена',
                remove: 'Удалить',
                choose: {
                    files: {
                        one: 'Выбрать файл',
                        other: 'Выбрать файлы'
                    },
                    images: {
                        one: 'Выбрать изображение',
                        other: 'Выбрать изображения'
                    }
                }
            },
            dialog: {
                done: 'Готово',
                showFiles: 'Показать файлы',
                tabs: {
                    names: {
                        preview: 'Предпросмотр',
                        'empty-pubkey': 'Приветствие',
                        file: 'Локальные файлы',
                        vk: 'ВКонтакте',
                        url: 'Произвольная ссылка',
                        camera: 'Камера'
                    },
                    file: {
                        drag: 'Перетащите файл сюда',
                        nodrop: 'Загрузка файлов с вашего компьютера',
                        cloudsTip: 'Облачные хранилища<br>и социальные сети',
                        or: 'или',
                        button: 'Выберите локальный файл',
                        also: 'Вы также можете загрузить файлы, используя:'
                    },
                    url: {
                        title: 'Файлы с других сайтов',
                        line1: 'Загрузите любой файл из сети.',
                        line2: '',
                        input: 'Укажите здесь ссылку...',
                        button: 'Загрузить'
                    },
                    camera: {
                        capture: 'Сделать снимок',
                        mirror: 'Отразить',
                        retry: 'Повторно запросить разрешение',
                        pleaseAllow: {
                            title: 'Пожалуйста, разрешите доступ к камере',
                            text: 'Для того, чтобы сделать снимок, мы запросили разрешение ' + 'на доступ к камере с этого сайта.'
                        },
                        notFound: {
                            title: 'Камера не найдена',
                            text: 'Скорее всего камера не подключена или не настроена.'
                        }
                    },
                    preview: {
                        unknownName: 'неизвестно',
                        change: 'Отмена',
                        back: 'Назад',
                        done: 'Добавить',
                        unknown: {
                            title: 'Загрузка... Пожалуйста подождите.',
                            done: 'Пропустить предварительный просмотр'
                        },
                        regular: {
                            title: 'Загрузить этот файл?',
                            line1: 'Вы собираетесь добавить этот файл:',
                            line2: 'Пожалуйста, подтвердите.'
                        },
                        image: {
                            title: 'Добавить это изображение?',
                            change: 'Отмена'
                        },
                        crop: {
                            title: 'Обрезать и добавить это изображение',
                            done: 'Готово',
                            free: 'произв.'
                        },
                        error: {
                            "default": {
                                title: 'Ой!',
                                text: 'Что-то пошло не так во время загрузки.',
                                back: 'Пожалуйста, попробуйте ещё раз'
                            },
                            image: {
                                title: 'Можно загружать только изображения.',
                                text: 'Попробуйте загрузить другой файл.',
                                back: 'Выберите изображение'
                            },
                            size: {
                                title: 'Размер выбранного файла превышает лимит.',
                                text: 'Попробуйте загрузить другой файл.'
                            },
                            loadImage: {
                                title: 'Ошибка',
                                text: 'Изображение не удалось загрузить'
                            }
                        },
                        multiple: {
                            title: 'Вы выбрали %files%',
                            question: 'Вы хотите добавить все эти файлы?',
                            tooManyFiles: 'Вы выбрали слишком много файлов. %max% максимум.',
                            tooFewFiles: 'Вы выбрали %files%. Нужно не меньше %min%.',
                            clear: 'Удалить все',
                            done: 'Готово'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.ru = function(n) {
            if (((n / 10 % 10 | 0) === 1) || (n % 10 === 0) || (n % 10 > 4)) {
                return 'many';
            } else if (n % 10 === 1) {
                return 'one';
            } else {
                return 'few';
            }
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.sv = {
            uploading: 'Laddar... Var god vänta.',
            loadingInfo: 'Laddar info...',
            errors: {
                "default": 'Error',
                baddata: 'Felaktigt värde',
                size: 'Filen är för stor',
                upload: 'Kan inte ladda upp',
                user: 'Uppladdning avbruten',
                info: 'Kan inte ladda informationen',
                image: 'Endast bilder tillåtna',
                createGroup: 'Kan inte skapa filgrupp',
                deleted: 'Fil raderad'
            },
            draghere: 'Dra filen hit',
            file: {
                one: '%1 fil',
                other: '%1 filer'
            },
            buttons: {
                cancel: 'Avbryt',
                remove: 'Ta bort',
                choose: {
                    files: {
                        one: 'Välj fil',
                        other: 'Välj filer'
                    },
                    images: {
                        one: 'Välj en fil',
                        other: 'Välj filer'
                    }
                }
            },
            dialog: {
                done: 'Klar',
                showFiles: 'Visa filer',
                tabs: {
                    names: {
                        'empty-pubkey': 'Välkommen',
                        preview: 'Förhandsgranskning',
                        file: 'Lokala filer',
                        url: 'Direkta länkar',
                        camera: 'Kamera'
                    },
                    file: {
                        drag: 'Släpp en fil hit',
                        nodrop: 'Ladda upp filer från din dator',
                        cloudsTip: 'Cloud storages<br>och sociala nätverk',
                        or: 'eller',
                        button: 'Välj en lokal fil',
                        also: 'Du kan också välja den från'
                    },
                    url: {
                        title: 'Filer från webben',
                        line1: 'Välj en fil från en web adress.',
                        line2: 'Agge bara länken til filen.',
                        input: 'Klistra in din länk här...',
                        button: 'Ladda upp'
                    },
                    camera: {
                        capture: 'Ta ett foto',
                        mirror: 'Spegel',
                        retry: 'Begär tillstånd igen',
                        pleaseAllow: {
                            title: 'Vänligen ge tillgång till din kamera',
                            text: 'Du har uppmanats att tillåta att denna webbplats får tillgång till din kamera.' + 'För att ta bilder med din kamera måste du godkänna denna begäran.'
                        },
                        notFound: {
                            title: 'Ingen kamera funnen',
                            text: 'Det varkar som att du inte har något kamera ansluten till denna enheten.'
                        }
                    },
                    preview: {
                        unknownName: 'okänd',
                        change: 'Avbryt',
                        back: 'Tillbaka',
                        done: 'Lägg till',
                        unknown: {
                            title: 'Laddar... Vänligen vänta på förhandsgranskning.',
                            done: 'Skippa förhandsgranskning och acceptera'
                        },
                        regular: {
                            title: 'Lägg till denna filen?',
                            line1: 'Du håller på att lägga till filen ovan.',
                            line2: 'Vänligen bekräfta.'
                        },
                        image: {
                            title: 'Lägg till denna bilden?',
                            change: 'Avbryt'
                        },
                        crop: {
                            title: 'Beskär och lägg till denna bild',
                            done: 'Klar',
                            free: 'free'
                        },
                        error: {
                            "default": {
                                title: 'Oops!',
                                text: 'Någonting gick fel under uppladdningen.',
                                back: 'Vänligen försök igen'
                            },
                            image: {
                                title: 'Endast bildfiler accepteras.',
                                text: 'Vänligen försök igen med en annan fil.',
                                back: 'Välj bild'
                            },
                            size: {
                                title: 'Filen du har valt är för stor.',
                                text: 'Vänligen försök igen med en annan fil.'
                            },
                            loadImage: {
                                title: 'Error',
                                text: 'Kan inte ladda bild'
                            }
                        },
                        multiple: {
                            title: 'Du har valt %files%',
                            question: 'Vill du lägga till alla dessa filer?',
                            tooManyFiles: 'Du har valt för många filer. %max% är max.',
                            tooFewFiles: 'Du har valt %files%. Minst %min% krävs.',
                            clear: 'Ta bort alla',
                            done: 'Klar'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.sv = function(n) {
            if (n === 1) {
                return 'one';
            }
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.tr = {
            uploading: 'Yükleniyor... Lütfen bekleyin.',
            loadingInfo: 'Bilgiler yükleniyor...',
            errors: {
                "default": 'Hata',
                baddata: 'Geçersiz değer',
                size: 'Dosya çok büyük',
                upload: 'Yüklenemedi',
                user: 'Yükleme iptal edildi',
                info: 'Bilgiler getirilemedi',
                image: 'Sadece resim dosyası yüklenebilir',
                createGroup: 'Dosya grubu yaratılamıyor',
                deleted: 'Dosya silinmiş'
            },
            draghere: 'Buraya bir dosya bırakın',
            file: {
                other: '%1 dosya'
            },
            buttons: {
                cancel: 'İptal',
                remove: 'Kaldır',
                choose: {
                    files: {
                        one: 'Dosya Seçin',
                        other: 'Dosya Seçin'
                    },
                    images: {
                        one: 'Resim Dosyası Seçin',
                        other: 'Resim Dosyası Seçin'
                    }
                }
            },
            dialog: {
                done: 'Bitti',
                showFiles: 'Dosyaları Göster',
                tabs: {
                    names: {
                        'empty-pubkey': 'Hoş geldiniz',
                        preview: 'Önizleme',
                        file: 'Bilgisayar',
                        url: 'Dış Bağlantılar',
                        camera: 'Kamera'
                    },
                    file: {
                        drag: 'Buraya bir dosya bırakın',
                        nodrop: 'Bilgisayarınızdan dosya yükleyin',
                        or: 'ya da',
                        button: 'Bilgisayardan bir dosya seç',
                        also: 'Diğer yükleme seçenekleri',
                        cloudsTip: 'Bulut depolamalar<br>ve sosyal hizmetler'
                    },
                    url: {
                        title: 'Webden dosyalar',
                        line1: 'Webden herhangi bir dosya seçin.',
                        line2: 'Dosya bağlantısını sağlayın.',
                        input: 'Bağlantınızı buraya yapıştırın...',
                        button: 'Yükle'
                    },
                    camera: {
                        capture: 'Fotoğraf çek',
                        mirror: 'Ayna',
                        retry: 'Tekrar izin iste',
                        pleaseAllow: {
                            title: 'Lütfen kameranıza erişilmesine izin verin',
                            text: 'Bu siteden kamera erişimine izin vermeniz talep ediliyor. Kameranızla fotoğraf çekmek için bu isteği onaylamanız gerekmektedir.'
                        },
                        notFound: {
                            title: 'Kamera algılanamadı',
                            text: 'Bu cihaza kamera bağlantısının olmadığı görünüyor.'
                        }
                    },
                    preview: {
                        unknownName: 'bilinmeyen',
                        change: 'İptal',
                        back: 'Geri',
                        done: 'Ekle',
                        unknown: {
                            title: 'Yükleniyor... Önizleme için lütfen bekleyin.',
                            done: 'Önizlemeyi geç ve kabul et'
                        },
                        regular: {
                            title: 'Bu dosya eklensin mi?',
                            line1: 'Yukarıdaki dosyayı eklemek üzeresiniz.',
                            line2: 'Lütfen onaylayın.'
                        },
                        image: {
                            title: 'Bu görsel eklensin mi?',
                            change: 'İptal'
                        },
                        crop: {
                            title: 'Bu görseli kes ve ekle',
                            done: 'Bitti'
                        },
                        error: {
                            "default": {
                                title: 'Aman!',
                                text: 'Yükleme sırasında bir hata oluştu.',
                                back: 'Lütfen tekrar deneyin.'
                            },
                            image: {
                                title: 'Sadece resim dosyaları kabul edilmektedir.',
                                text: 'Lütfen başka bir dosya ile tekrar deneyin.',
                                back: 'Resim dosyası seç'
                            },
                            size: {
                                title: 'Seçtiğiniz dosya limitleri aşıyor.',
                                text: 'Lütfen başka bir dosya ile tekrar deneyin.'
                            },
                            loadImage: {
                                title: 'Hata',
                                text: 'Resim dosyası yüklenemedi'
                            }
                        },
                        multiple: {
                            title: '%files% dosya seçtiniz',
                            question: 'Bu dosyaların hepsini eklemek istiyor musunuz?',
                            tooManyFiles: 'Fazla sayıda dosya seçtiniz, en fazla %max% dosya olabilir.',
                            tooFewFiles: '%files% dosya seçtiniz, en az %min% dosya olmalıdır.',
                            clear: 'Hepsini kaldır',
                            done: 'Bitti'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.tr = function(n) {
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.zhTW = {
            uploading: '上傳中...請等待',
            loadingInfo: '正在讀取資訊...',
            errors: {
                "default": '錯誤',
                baddata: '錯誤資料',
                size: '檔案太大',
                upload: '無法上傳',
                user: '上傳被取消',
                info: '無法讀取資訊',
                image: '只允許圖片檔案',
                createGroup: '無法建立檔案群組',
                deleted: '檔案已被刪除'
            },
            draghere: '拖放檔案到這裡',
            file: {
                other: '%1 個檔案'
            },
            buttons: {
                cancel: '取消',
                remove: '刪除',
                choose: {
                    files: {
                        one: '選擇檔案',
                        other: '選擇檔案'
                    },
                    images: {
                        one: '選擇圖片',
                        other: '選擇圖片'
                    }
                }
            },
            dialog: {
                done: '完成',
                showFiles: '顯示檔案',
                tabs: {
                    names: {
                        'empty-pubkey': '歡迎',
                        preview: '預覽',
                        file: '從本機上傳',
                        url: '任意圖片連結',
                        camera: '相機'
                    },
                    file: {
                        drag: '拖放檔案到這裡',
                        nodrop: '從你的本機中上傳',
                        cloudsTip: '雲端硬碟<br>與社群網站',
                        or: '或者',
                        button: '從本機中選取檔案',
                        also: '你也可以選自'
                    },
                    url: {
                        title: '來自網際網路的檔案',
                        line1: '從網際網路選取檔案',
                        line2: '只需提供連結',
                        input: '將連結複製至此...',
                        button: '上傳'
                    },
                    camera: {
                        capture: '拍照',
                        mirror: '鏡像',
                        retry: '重新取得相機權限',
                        pleaseAllow: {
                            title: '請允許使存取您的相機',
                            text: '你一直在提示允許來自這個網站的訪問攝像頭。' + '為了拍照用你的相機，你必須批准這一請求。'
                        },
                        notFound: {
                            title: '沒有找到相機',
                            text: '看起來你有沒有將連接相機。'
                        }
                    },
                    preview: {
                        unknownName: '未知',
                        change: '取消',
                        back: '返回',
                        done: '加入',
                        unknown: {
                            title: '上傳中...請等待預覽',
                            done: '跳過預覽，直接接受'
                        },
                        regular: {
                            title: '加入這個檔案？',
                            line1: '你將加入上面的檔案。',
                            line2: '請確認。'
                        },
                        image: {
                            title: '加入這個圖片？',
                            change: '取消'
                        },
                        crop: {
                            title: '裁切並加入這個圖片',
                            done: '完成',
                            free: '自由裁切'
                        },
                        error: {
                            "default": {
                                title: '錯誤！',
                                text: '上傳過程中出錯。',
                                back: '請重試'
                            },
                            image: {
                                title: '只允許上傳圖片檔案。',
                                text: '請選擇其他檔案重新上傳。',
                                back: '選擇圖片'
                            },
                            size: {
                                title: '你選取的檔案超過了100MB的上限',
                                text: '請用另一個檔案再試一次。'
                            },
                            loadImage: {
                                title: '錯誤',
                                text: '無法讀取圖片'
                            }
                        },
                        multiple: {
                            title: '你已經選擇 %files%',
                            question: '你要加入所有檔案嗎？',
                            tooManyFiles: '你選了太多的檔案. 最多可選擇%max%. 請刪除一些。',
                            tooFewFiles: '你所選擇的檔案 %files%. 至少要 %min% .',
                            clear: '清空',
                            done: '完成'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.zhTW = function(n) {
            return 'other';
        };
    });

}).call(this);
(function() {
    photolia.namespace('locale.translations', function(ns) {
        return ns.zh = {
            uploading: '上传中...请等待',
            loadingInfo: '正在读取信息...',
            errors: {
                "default": '错误',
                baddata: '错误数据',
                size: '文件太大',
                upload: '无法上传',
                user: '上传被取消',
                info: '无法读取信息',
                image: '只允许图形文件',
                createGroup: '无法建立文件组',
                deleted: '文件已被删除'
            },
            draghere: '拖放文件到这里',
            file: {
                other: '%1 个文件'
            },
            buttons: {
                cancel: '取消',
                remove: '删除'
            },
            dialog: {
                done: '完成',
                showFiles: '显示文件',
                tabs: {
                    names: {
                        url: '任意图片链接'
                    },
                    file: {
                        drag: '拖放文件到这里',
                        nodrop: '从你的电脑中上传',
                        or: '或者',
                        button: '从电脑中选取文件',
                        also: '你也可以选自'
                    },
                    url: {
                        title: '来自互联网的文件',
                        line1: '从互联网选取文件',
                        line2: '只需提供链接',
                        input: '将链接拷贝至此...',
                        button: '上传'
                    },
                    preview: {
                        unknownName: '未知',
                        change: '取消',
                        back: '返回',
                        done: '添加',
                        unknown: {
                            title: '上传中...请等待预览',
                            done: '跳过预览，直接接受'
                        },
                        regular: {
                            title: '添加这个文件?',
                            line1: '你将添加上面的文件。',
                            line2: '请确认。'
                        },
                        image: {
                            title: '添加这个图片?',
                            change: '取消'
                        },
                        crop: {
                            title: '剪裁并添加这个图片',
                            done: '完成'
                        },
                        error: {
                            "default": {
                                title: '错误!',
                                text: '上传过程中出错。',
                                back: '请重试'
                            },
                            image: {
                                title: '只允许上传图片文件。',
                                text: '请选择其他文件重新上传。',
                                back: '选择图片'
                            },
                            size: {
                                title: '你选取的文件超过了100MB的上限',
                                text: '请用另一个文件再试一次。'
                            },
                            loadImage: {
                                title: '错误',
                                text: '无法读取图片'
                            }
                        },
                        multiple: {
                            title: '你已经选择 %files%',
                            question: '你要添加所有文件吗？',
                            tooManyFiles: '你选了太多的文件. 最多可选择%max%. 请删除一些。',
                            clear: '清空',
                            done: '完成'
                        }
                    }
                }
            }
        };
    });

    photolia.namespace('locale.pluralize', function(ns) {
        return ns.zh = function() {
            return 'other';
        };
    });

}).call(this);

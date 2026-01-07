/**
 * THE ENGINE - VANILLA BMW JS
 * Lightweight, localized, high performance.
 */

const translations = {
    de: {
        nav: {
            home: "Startseite",
            services: "Leistungen",
            appointment: "Online-Termin",
            about: "Über uns",
            examples: "Reparaturbeispiele",
            contact: "Kontakt",
            imprint: "Impressum",
            privacy: "Datenschutz",
            close: "ZURÜCK / SCHLIESSEN"
        },
        hero: {
            title: "Ihr zuverlässiger BMW Service",
            subtitle: "Qualität, Erfahrung und Leidenschaft für Ihr Fahrzeug. Wir sorgen dafür, dass Ihr BMW stets in Bestform bleibt.",
            cta: "Termin vereinbaren",
            secondary_cta: "Leistungen",
            usps: [
                "Zahlung nach Reparatur",
                "Offizielle Abwicklung mit Belegen",
                "Nur Original BMW Ersatzteile",
                "Rückruf innerhalb von 5 Minuten"
            ]
        },
        services: {
            title: "Unsere Leistungen",
            cta: "Mehr erfahren",
            items: [
                { title: "Wartung & TO", desc: "Ölwechsel, Filtertausch und Bremsenservice nach Werkvorgaben.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M14.7 6.3L13.7 9.3L9.3 10.3L6.3 14.7L3 21L9.3 17.7L13.7 18.7L14.7 13.7L21 3L14.7 6.3ZM14.7 6.3L16.5 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
                { title: "Mechanik", desc: "Fahrwerk, Stoßdämpfer und Motorreparatur mit Garantie.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="currentColor"/></svg>' },
                { title: "Elektrik", desc: "Fehlersuche und Programmierung mit BMW Diagnosesoftware.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>' },
                { title: "Klima & CO", desc: "Befüllung, Reinigung und Desinfektion der Klimaanlage.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
                { title: "Detailing", desc: "Premium-Wäsche, Politur und Keramikversiegelung für Ihren BMW.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>' },
                { title: "Zubehör", desc: "Nachrüstung von Original BMW Teilen und Software-Updates.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/><path d="M12 8V16M8 12H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' }
            ]
        },
        examples: {
            title: "Reparaturbeispiele",
            subtitle: "Ein Einblick in unsere tägliche Qualitätsarbeit"
        },
        contact: {
            title: "Kontakt",
            subtitle: "Wir sind für Sie da",
            form_name: "Ihr Name",
            form_email: "E-Mail Adresse",
            form_phone: "Telefonnummer",
            form_message: "Ihre Nachricht",
            form_submit: "Nachricht senden",
            info_address: "Moskau, Prospekt Vernadskogo 36",
            info_phone: "+7 (999) 123-45-67",
            info_hours: "Mo-So 09:00 - 21:00"
        },
        stats: {
            years: "14+",
            years_text: "Jahre Erfahrung",
            rating: "5.0",
            rating_text: "Bewertung",
            clients: "10.000+",
            clients_text: "Zufriedene Kunden"
        },
        promotions: {
            title: "Aktuelle Aktionen",
            subtitle: "Exklusive Angebote für Ihren BMW",
            items: [
                { title: "Kostenlose Diagnose", desc: "Komplette Durchsicht von Motor und Fahrwerk.", label: "Gratis", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
                { title: "20% Werkstatt-Rabatt", desc: "Auf alle Servicearbeiten bis Ende des Monats.", label: "-20%", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M19 5L5 19M6.5 6.5H6.51M17.5 17.5H17.51" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
                { title: "0% Finanzierung", desc: "Bequeme Ratenzahlung ohne Zinsen.", label: "BMW Credit", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M3 10H21M7 15H9M2 8H22C23.1046 8 24 8.89543 24 10V20C24 21.1046 23.1046 22 22 22H2C0.89543 22 0 21.1046 0 20V10C0 8.89543 0.89543 8 2 8ZM6 4H18V8H6V4Z" fill="currentColor"/></svg>' }
            ]
        },
        process: {
            title: "In 4 Schritten zum Ziel",
            subtitle: "So einfach funktioniert unser Service",
            steps: [
                { title: "Beratung", desc: "Wir beantworten Ihre Fragen und klären den Ablauf." },
                { title: "Diagnose", desc: "Wir finden die genaue Ursache des Problems." },
                { title: "Kalkulation", desc: "Transparente Kosten- und Zeitplanung." },
                { title: "Übergabe", desc: "Perfekt repariertes Fahrzeug zum Wunschtermin." }
            ]
        },
        legal: {
            cookie_text: "Wir verwenden Cookies, um die Nutzererfahrung auf unserer Website zu verbessern.",
            accept: "Akzeptieren",
            more: "Mehr erfahren"
        },
        brands: {
            title: "Kompetenz für alle BMW Linien",
            items: ["M Power", "Alpina", "Individual", "i-Series", "X-Drive"]
        },
        advantages: {
            title: "Ihre Vorteile bei uns",
            items: [
                { title: "2 Jahre Garantie", desc: "Auf alle ausgeführten Arbeiten und verbauten Originalteile." },
                { title: "Teile auf Lager", desc: "Über 5.000 BMW Originalteile direkt ab Lager verfügbar." },
                { title: "Meisterbetrieb", desc: "Zertifizierte BMW-Techniker mit langjähriger Erfahrung." }
            ]
        },
        cta_banner: {
            title: "Sichern Sie sich 10% Rabatt",
            subtitle: "Auf Ihren ersten Service bei uns. Jetzt Termin anfragen!",
            button: "Rabatt anfordern"
        },
        tow_truck: {
            title: "Kostenloser Abschleppdienst",
            desc: "Innerhalb Moskaus bringen wir Ihren BMW kostenlos in unsere Werkstatt, wenn die Reparatur bei uns durchgeführt wird."
        },
        reviews: {
            title: "Was unsere Kunden sagen",
            items: [
                { name: "Maximilian S.", text: "Hervorragender Service für meinen M4. Kompetent und transparent.", rating: 5 },
                { name: "Elena K.", text: "Schnelle Diagnose und faire Preise. Komme gerne wieder.", rating: 5 },
                { name: "Thomas W.", text: "Endlich eine Werkstatt, die BMW wirklich versteht.", rating: 5 }
            ]
        },
        reality: {
            title: "Einblick in unsere Werkstatt",
            subtitle: "Transparenz in jedem Arbeitsschritt"
        },
        footer: {
            copy: "© 2026 BMW SERVICE GERMANY. ALL RIGHTS RESERVED."
        },
        legal_page: {
            imprint: {
                tmg_title: "Angaben gemäß § 5 TMG",
                tmg_content: "BMW Service Germany GmbH<br>Moskau, Prospekt Vernadskogo 36",
                contact_title: "Kontakt",
                contact_content: "Telefon: +7 (999) 123-45-67<br>E-Mail: service@bmw-performance.ru",
                tax_title: "Umsatzsteuer-ID",
                tax_content: "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>RU 123456789",
                editorial_title: "Redaktionell verantwortlich",
                editorial_content: "Max Mustermann<br>BMW Service Performance 1<br>Moskau, Prospekt Vernadskogo 36",
                dispute_title: "EU-Streitschlichtung",
                dispute_text: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:",
                dispute_email_text: "Unsere E-Mail-Adresse finden Sie oben im Impressum.",
                universal_title: "Verbraucher-streitbeilegung/Universal-schlichtungsstelle",
                universal_text: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
            },
            privacy: {
                section1_title: "1. Datenschutz auf einen Blick",
                general_notes_title: "Allgemeine Hinweise",
                general_notes_text: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.",
                section2_title: "2. Hosting",
                hosting_text: "Wir hosten die Inhalte unserer Website bei folgendem Anbieter:",
                hosting_details: "Externes Hosting. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.",
                section3_title: "3. Allgemeine Hinweise und Pflichtinformationen",
                protection_title: "Datenschutz",
                protection_text: "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
                responsible_title: "Hinweis zur verantwortlichen Stelle",
                responsible_text_pre: "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:",
                responsible_address: "BMW Service Germany GmbH<br>Moskau, Prospekt Vernadskogo 36<br>E-Mail: datenschutz@bmw-performance.ru",
                section4_title: "4. Datenerfassung auf dieser Website",
                cookies_title: "Cookies",
                cookies_text: "Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert."
            }
        },
        common: {
            back: "← Zurück zur Startseite"
        }
    },
    ru: {
        nav: {
            home: "Главная",
            services: "Услуги",
            appointment: "Запись онлайн",
            about: "О нас",
            examples: "Примеры работ",
            contact: "Контакты",
            imprint: "Импрессум",
            privacy: "Политика конфиденциальности",
            close: "НАЗАД / ЗАКРЫТЬ"
        },
        hero: {
            title: "Ваш надежный BMW сервис",
            subtitle: "Качество, опыт и страсть к вашему автомобилю. Мы позаботимся о том, чтобы ваш BMW всегда был в идеальной форме.",
            cta: "Записаться на сервис",
            secondary_cta: "Наши услуги",
            usps: [
                "Оплата после ремонта",
                "Официальное оформление (заказ-наряды/чеки)",
                "Только оригинальные запчасти BMW",
                "Перезвоним за 5 минут"
            ]
        },
        services: {
            title: "Наши услуги",
            cta: "Подробнее",
            items: [
                { title: "ТО и Обслуживание", desc: "Замена масла, фильтров и тормозов по стандартам BMW.", icon: "🔧" },
                { title: "Слесарный ремонт", desc: "Ремонт ходовой, двигателя и подвески с гарантией.", icon: "⚙️" },
                { title: "Электрика", desc: "Диагностика и программирование дилерским софтом.", icon: "🔌" },
                { title: "Кондиционер", desc: "Заправка, чистка и антибактериальная обработка.", icon: "❄️" },
                { title: "Детейлинг", desc: "Премиум-мойка, полировка и керамика для вашего авто.", icon: "✨" },
                { title: "Доп. услуги", desc: "Установка оригинального оборудования и обновление ПО.", icon: "📱" }
            ]
        },
        examples: {
            title: "Примеры работ",
            subtitle: "Взгляд на наше ежедневное стремление к качеству"
        },
        contact: {
            title: "Контакты",
            subtitle: "Мы всегда на связи",
            form_name: "Ваше имя",
            form_email: "Ваш Email",
            form_phone: "Номер телефона",
            form_message: "Ваше сообщение",
            form_submit: "Отправить сообщение",
            info_address: "Москва, проспект Вернадского, 36",
            info_phone: "+7 (999) 123-45-67",
            info_hours: "Пн-Вс 09:00 - 21:00"
        },
        stats: {
            years: "14+",
            years_text: "Лет опыта",
            rating: "5.0",
            rating_text: "Рейтинг",
            clients: "10.000+",
            clients_text: "Довольных клиентов"
        },
        promotions: {
            title: "Актуальные акции",
            subtitle: "Заботимся о вашем бюджете и безопасности",
            items: [
                { title: "Бесплатная диагностика", desc: "Полная проверка двигателя и подвески.", label: "Бесплатно", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
                { title: "Скидка 20% на ремонт", desc: "На все виды работ до конца месяца.", label: "-20%", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M19 5L5 19M6.5 6.5H6.51M17.5 17.5H17.51" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
                { title: "Рассрочка 0%", desc: "Удобная оплата частями без переплат.", label: "Кредит", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M3 10H21M7 15H9M2 8H22C23.1046 8 24 8.89543 24 10V20C24 21.1046 23.1046 22 22 22H2C0.89543 22 0 21.1046 0 20V10C0 8.89543 0.89543 8 2 8ZM6 4H18V8H6V4Z" fill="currentColor"/></svg>' }
            ]
        },
        process: {
            title: "Всего 4 шага к цели",
            subtitle: "Быстро и профессионально исправим любую поломку",
            steps: [
                { title: "Консультация", desc: "Расскажем как мы работаем и ответим на вопросы." },
                { title: "Диагностика", desc: "Выясним в чем именно проблема." },
                { title: "Расчет", desc: "Сориентируем по точной стоимости и срокам." },
                { title: "Результат", desc: "Запишем вас на удобное время и вернем исправное авто." }
            ]
        },
        legal: {
            cookie_text: "Мы используем файлы cookie для улучшения работы сайта.",
            accept: "Принять",
            more: "Подробнее"
        },
        brands: {
            title: "Компетенция во всех линейках BMW",
            items: ["M Power", "Alpina", "Individual", "i-Series", "X-Drive"]
        },
        advantages: {
            title: "Ваши преимущества у нас",
            items: [
                { title: "2 года гарантии", desc: "На все выполненные работы и установленные оригинальные детали." },
                { title: "Запчасти в наличии", desc: "Более 5.000 оригинальных деталей BMW на складе." },
                { title: "Мастера-эксперты", desc: "Сертифицированные техники BMW с многолетним опытом." }
            ]
        },
        cta_banner: {
            title: "Получите скидку 10%",
            subtitle: "На ваш первый визит к нам. Запишитесь прямо сейчас!",
            button: "Получить скидку"
        },
        tow_truck: {
            title: "Бесплатный эвакуатор",
            desc: "В пределах Москвы мы бесплатно доставим ваш BMW в наш сервис, если ремонт будет проводиться у нас."
        },
        reviews: {
            title: "Что говорят наши клиенты",
            items: [
                { name: "Максим С.", text: "Отличный сервис для моего M4. Компетентно и прозрачно.", rating: 5 },
                { name: "Елена К.", text: "Быстрая диагностика и честные цены. Буду обращаться еще.", rating: 5 },
                { name: "Томас В.", text: "Наконец-то нашел сервис, который действительно понимает BMW.", rating: 5 }
            ]
        },
        reality: {
            title: "Загляните в нашу мастерскую",
            subtitle: "Прозрачность на каждом этапе работы"
        },
        footer: {
            copy: "© 2026 BMW SERVICE GERMANY. ВСЕ ПРАВА ЗАЩИЩЕНЫ."
        },
        legal_page: {
            imprint: {
                tmg_title: "Информация согласно § 5 TMG",
                tmg_content: "БМВ Сервис Германия ГмбХ<br>Москва, проспект Вернадского, 36",
                contact_title: "Контакты",
                contact_content: "Телефон: +7 (999) 123-45-67<br>Email: service@bmw-performance.ru",
                tax_title: "ИНН",
                tax_content: "Идентификационный номер налогоплательщика:<br>RU 123456789",
                editorial_title: "Ответственный за контент",
                editorial_content: "Макс Мустерманн<br>БМВ Сервис Перформанс 1<br>Москва, проспект Вернадского, 36",
                dispute_title: "Разрешение споров в ЕС",
                dispute_text: "Европейская комиссия предоставляет платформу для онлайн-разрешения споров (OS):",
                dispute_email_text: "Наш адрес электронной почты указан выше в выходных данных.",
                universal_title: "Урегулирование потребительских споров",
                universal_text: "Мы не готовы и не обязаны участвовать в процедурах разрешения споров в потребительском арбитраже."
            },
            privacy: {
                section1_title: "1. Обзор защиты данных",
                general_notes_title: "Общая информация",
                general_notes_text: "Следующие примечания дают простой обзор того, что происходит с вашими личными данными при посещении этого веб-сайта.",
                section2_title: "2. Хостинг",
                hosting_text: "Мы размещаем контент нашего сайта у следующего провайдера:",
                hosting_details: "Внешний хостинг. Персональные данные, собранные на этом веб-сайте, хранятся на серверах хостера.",
                section3_title: "3. Общая информация и обязательная информация",
                protection_title: "Защита данных",
                protection_text: "Операторы этих страниц очень серьезно относятся к защите ваших личных данных. Мы обрабатываем ваши личные данные конфиденциально и в соответствии с законодательными нормами защиты данных, а также данной декларацией о защите данных.",
                responsible_title: "Примечание об ответственном органе",
                responsible_text_pre: "Ответственным органом за обработку данных на этом веб-сайте является:",
                responsible_address: "БМВ Сервис Германия ГмбХ<br>Москва, проспект Вернадского, 36<br>Email: datenschutz@bmw-performance.ru",
                section4_title: "4. Сбор данных на этом веб-сайте",
                cookies_title: "Cookies",
                cookies_text: "Наши интернет-страницы используют так называемые «куки». Куки — это небольшие текстовые файлы, которые не наносят вреда вашему устройству. Они сохраняются либо временно на время сеанса (сеансовые куки), либо постоянно (постоянные куки) на вашем устройстве."
            }
        },
        common: {
            back: "← Назад на главную"
        }
    }
};

class BMWApp {
    constructor() {
        this.lang = localStorage.getItem('bmw_lang') || 'de';
        this.init();
    }

    init() {
        // Apply initial language state immediately
        this.applyLanguageClasses();
        this.render();

        // Show content after first render to prevent "flash of German"
        document.body.classList.add('app-ready');

        this.setupListeners();
        this.handleScroll();
        this.initScrollReveal();
    }

    applyLanguageClasses() {
        document.documentElement.lang = this.lang;
        document.querySelectorAll('#lang-switcher button').forEach(btn => {
            btn.classList.toggle('active-lang', btn.getAttribute('data-lang') === this.lang);
        });
    }

    setupListeners() {
        // Lang switch
        const buttons = document.querySelectorAll('#lang-switcher button');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.switchLanguage(btn.getAttribute('data-lang'));
            });
        });

        // Sticky nav & Active link update
        window.addEventListener('scroll', () => {
            this.handleScroll();
            this.handleActiveLink();
        });

        // Mobile menu toggle
        const mobBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        if (mobBtn && navLinks) {
            mobBtn.addEventListener('click', () => {
                const isActive = navLinks.classList.toggle('active');
                mobBtn.classList.toggle('active');
                document.body.style.overflow = isActive ? 'hidden' : '';
            });

            // Close menu on link click & scroll smoothly (browser handled but JS ensured)
            navLinks.querySelectorAll('.nav-link, .btn-primary').forEach(link => {
                link.addEventListener('click', () => {
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        // Immediate active class update
                        navLinks.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                        if (link.classList.contains('nav-link')) link.classList.add('active');

                        // Close menu
                        mobBtn.classList.remove('active');
                        navLinks.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            });

            // Close link inside menu
            const closeLink = document.getElementById('mobile-close-link');
            if (closeLink) {
                closeLink.addEventListener('click', () => {
                    mobBtn.classList.remove('active');
                    navLinks.classList.remove('active');
                    document.body.style.overflow = '';
                });
            }
        }

        // Cookie Banner
        const banner = document.getElementById('cookie-banner');
        const acceptBtn = document.getElementById('accept-cookies');

        if (banner && acceptBtn) {
            if (!localStorage.getItem('bmw_cookies_accepted')) {
                setTimeout(() => banner.classList.add('visible'), 2000);
            }

            acceptBtn.addEventListener('click', () => {
                localStorage.setItem('bmw_cookies_accepted', 'true');
                banner.classList.remove('visible');
            });
        }
    }

    switchLanguage(lang) {
        if (this.lang === lang) return;
        this.lang = lang;
        localStorage.setItem('bmw_lang', lang);

        // Add fade out/in effect for content
        document.body.style.opacity = '0';
        setTimeout(() => {
            this.render();
            document.body.style.opacity = '1';
        }, 300);
    }

    render() {
        const data = translations[this.lang];
        document.documentElement.lang = this.lang;

        // Update regular i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const keys = key.split('.');
            let val = data;
            keys.forEach(k => { val = val?.[k]; });

            if (val) {
                if (key === 'hero.title') {
                    el.innerHTML = val.split('<br>').map(line =>
                        `<span class="reveal-text"><span>${line}</span></span>`
                    ).join('<br>');
                } else {
                    el.textContent = val;
                }
            }
        });

        // Update Hero USPs
        const uspList = document.getElementById('hero-usps');
        if (uspList) {
            uspList.innerHTML = data.hero.usps.map(usp => `
                <li class="scroll-reveal">${usp}</li>
            `).join('');
        }

        // Update Brands (Information)
        const brandsContainer = document.getElementById('brands-container');
        if (brandsContainer) {
            brandsContainer.innerHTML = data.brands.items.map(brand => `
                <div class="brand-item"><span>${brand}</span></div>
            `).join('');
        }

        // Update Advantages (Information)
        const advantagesGrid = document.getElementById('advantages-grid');
        if (advantagesGrid) {
            advantagesGrid.innerHTML = data.advantages.items.map(adv => `
                <div class="adv-card scroll-reveal">
                    <h3>${adv.title}</h3>
                    <p>${adv.text || adv.desc}</p>
                </div>
            `).join('');
        }

        // Update Services Grid
        const grid = document.getElementById('services-grid');
        if (grid) {
            grid.innerHTML = data.services.items.map((item, idx) => `
                <div class="service-card scroll-reveal">
                    <div class="hover-glow"></div>
                    <span class="num">/ 0${idx + 1}</span>
                    <span class="icon">${item.icon}</span>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <a href="#contact" class="service-link">
                        ${data.services.cta} <span>→</span>
                    </a>
                </div>
            `).join('');
        }

        // Update Promotions
        const promoGrid = document.getElementById('promotions-grid');
        if (promoGrid) {
            promoGrid.innerHTML = data.promotions.items.map(promo => `
                <div class="promo-card scroll-reveal">
                    ${promo.icon ? promo.icon : ''}
                    <div class="promo-label">${promo.label}</div>
                    <h3>${promo.title}</h3>
                    <p>${promo.desc}</p>
                    <a href="#contact" class="service-link" style="margin-top: auto;">${data.services.cta} <span>→</span></a>
                </div>
            `).join('');
        }

        // Update Process Steps
        const processSteps = document.getElementById('process-steps');
        if (processSteps) {
            processSteps.innerHTML = data.process.steps.map((step, idx) => `
                <div class="process-step scroll-reveal">
                    <div class="step-num">${idx + 1}</div>
                    <div class="step-content">
                        <h3>${step.title}</h3>
                        <p>${step.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        // Update Reviews (Information)
        const reviewsGrid = document.getElementById('reviews-grid');
        if (reviewsGrid) {
            reviewsGrid.innerHTML = data.reviews.items.map(rev => `
                <div class="review-card scroll-reveal">
                    <div class="rating">
                        ${Array(rev.rating).fill('<svg viewBox="0 0 24 24" fill="currentColor" class="star-icon"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>').join('')}
                    </div>
                    <p>"${rev.text}"</p>
                    <div class="author-block">
                        <div class="avatar-placeholder">${rev.name.charAt(0)}</div>
                        <span class="author">${rev.name}</span>
                    </div>
                </div>
            `).join('');
        }

        // Re-init reveal for all new items
        this.initScrollReveal();

        // Update active class in switcher
        document.querySelectorAll('#lang-switcher button').forEach(btn => {
            btn.classList.toggle('active-lang', btn.getAttribute('data-lang') === this.lang);
        });
    }

    initScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    }

    handleScroll() {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    handleActiveLink() {
        const scrollPos = window.scrollY + 180; // Adjusted for better UX
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                let firstMatchFound = false;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (!firstMatchFound && link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                        firstMatchFound = true;
                    }
                });
            }
        });
    }
}

// Fire it up with extra body style for smooth transitions
document.body.style.transition = 'opacity 0.6s ease';
document.addEventListener('DOMContentLoaded', () => new BMWApp());

/**
 * THE ENGINE - VANILLA BMW JS
 * Lightweight, localized, high performance.
 */

const translations = {
    de: {
        nav: {
            advantages: "Vorteile",
            promotions: "Aktionen",
            services: "Leistungen",
            to: "Wartung (TO)",
            contact: "Kontakt",
            imprint: "Impressum",
            privacy: "Datenschutz",
            close: "ZURÜCK"
        },
        hero_slider: {
            slides: [
                { title: "Diagnose der Elektronik", price: "2.990 ₽", subtitle: "Bis zum Aktionsende", cta: "Termin vereinbaren" },
                { title: "Ölwechsel für jeden BMW", price: "12.900 ₽", subtitle: "Schnell und nach BMW-Standard", cta: "Termin vereinbaren" },
                { title: "50% Vorteil für Neukunden", price: "-50%", subtitle: "Beim ersten Besuch", cta: "Termin vereinbaren" },
                { title: "Preisformel 4-6-8", price: "BMW 2020+", subtitle: "Originale Formel der Wartung", cta: "Mehr erfahren" }
            ]
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
            subtitle: "Breites Spektrum für Wartung und Reparatur",
            cta: "Mehr erfahren",
            cta_primary: "Termin vereinbaren",
            cta_telegram: "Über Telegram buchen",
            items: [
                { title: "Wartung & TO", desc: "Ölwechsel, Filtertausch und Bremsenservice nach Werkvorgaben.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M15 7a4 4 0 0 0-6 3.465V12l-6.5 6.5a2.121 2.121 0 1 0 3 3L12 15h1.535A4 4 0 0 0 15 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
                { title: "Mechanik", desc: "Fahrwerk, Stoßdämpfer und Motorreparatur mit Garantie.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
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
            form_error: "Bitte füllen Sie alle Pflichtfelder aus.",
            form_success: "Vielen Dank! Ihre Nachricht wurde gesendet. Wir melden uns schnellstmöglich bei Ihnen.",
            email_error: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
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
            title: "Serviceangebote",
            subtitle: "Aktuelle Aktionen und Sonderangebote",
            items: [
                { title: "Fahrzeugaufbewahrung an Feiertagen", desc: "Lagerung + выгодный сервис в праздники.", label: "Special", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M3 11L12 3L21 11V21H3V11Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>' },
                { title: "Elektronik-Diagnose", desc: "Diagnose der elektronischen Systeme.", label: "2.990 ₽", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
                { title: "Diagnose als Geschenk", desc: "Kostenlos bei Paket-TO.", label: "Gift", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M20 12V22H4V12" stroke="currentColor" stroke-width="2"/><path d="M2 7H22V12H2V7Z" stroke="currentColor" stroke-width="2"/><path d="M12 22V7" stroke="currentColor" stroke-width="2"/><path d="M12 7C12 7 10 7 9 6C8 5 8 3 10 3C12 3 12 7 12 7Z" stroke="currentColor" stroke-width="2"/><path d="M12 7C12 7 14 7 15 6C16 5 16 3 14 3C12 3 12 7 12 7Z" stroke="currentColor" stroke-width="2"/></svg>' },
                { title: "Ölwechsel", desc: "Ölwechsel nach BMW-Standard.", label: "12.900 ₽", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M7 7h10v10a5 5 0 0 1-10 0V7Z" stroke="currentColor" stroke-width="2"/><path d="M9 3h6v4H9V3Z" stroke="currentColor" stroke-width="2"/></svg>' },
                { title: "Neukunden-Vorteil", desc: "50% auf den ersten Besuch.", label: "-50%", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M19 5L5 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M6.5 6.5H6.51M17.5 17.5H17.51" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
                { title: "BMW 2020+ Ölservice", desc: "Fixpreis für BMW ab 2020.", label: "Fix", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M4 7H20" stroke="currentColor" stroke-width="2"/><path d="M6 7V19H18V7" stroke="currentColor" stroke-width="2"/><path d="M9 11H15" stroke="currentColor" stroke-width="2"/></svg>' },
                { title: "Sonderdiagnose", desc: "Schneller Check wichtiger Systeme.", label: "Check", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
                { title: "Fahrwerk — Meisterwerk", desc: "Komplexe Fahrwerksprüfung.", label: "Pro", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M7 4v16M17 4v16M7 12h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
                { title: "Paket-TO Fixpreis", desc: "Komplexe Wartung nach Paket.", label: "4-6-8", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M4 4h16v16H4V4Z" stroke="currentColor" stroke-width="2"/><path d="M8 9h8M8 12h8M8 15h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
                { title: "Ölservice ab", desc: "Maslo-Service ab 8.000 ₽.", label: "8.000 ₽", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M12 2v20" stroke="currentColor" stroke-width="2"/><path d="M7 7h10v10H7V7Z" stroke="currentColor" stroke-width="2"/></svg>' },
                { title: "Getriebeölwechsel", desc: "ATF-Wechsel zum Fixpreis.", label: "Fix", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M8 6h8v12H8V6Z" stroke="currentColor" stroke-width="2"/><path d="M6 10h2M16 10h2M6 14h2M16 14h2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
                { title: "Saisonaler Reifenservice", desc: "Reifenwechsel + Auswuchten.", label: "Season", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 3v18M3 12h18" stroke="currentColor" stroke-width="2"/></svg>' },
                { title: "Karosserie Fixpreis", desc: "Karosseriearbeiten nach Preisformel.", label: "Fix", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M4 15l4-8h8l4 8" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M6 15h12v5H6v-5Z" stroke="currentColor" stroke-width="2"/></svg>' },
                { title: "Bremsen — Meisterwerk", desc: "Bremsenservice nach Standard.", label: "Pro", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7v10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' }
            ]
        },
        to: {
            title: "Wartung (TO)",
            subtitle: "Technische Wartung nach BMW-Reglement",
            items: [
                { title: "Wartungspaket 4", desc: "Basis-Check + Verbrauchsmaterial.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
                { title: "Wartungspaket 6", desc: "Erweitert: Filter + Bremsenprüfung.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M7 7h10v10H7V7Z" stroke="currentColor" stroke-width="2"/><path d="M9 9h6v6H9V9Z" stroke="currentColor" stroke-width="2"/></svg>' },
                { title: "Wartungspaket 8", desc: "Maximal: Diagnose + Flüssigkeiten.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4.5-7 4.5 2.5-7L2 9h7l3-7Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>' },
                { title: "Ölservice", desc: "Ölwechsel + Filter nach Standard.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M7 7h10v10a5 5 0 0 1-10 0V7Z" stroke="currentColor" stroke-width="2"/><path d="M9 3h6v4H9V3Z" stroke="currentColor" stroke-width="2"/></svg>' }
            ]
        },
        consult: {
            title: "Brauchen Sie eine Meisterberatung?",
            subtitle: "Rufen Sie an oder hinterlassen Sie eine Anfrage – wir helfen gern.",
            form_name: "Ihr Name",
            form_phone: "Telefonnummer",
            consent: "Ich stimme der Verarbeitung personenbezogener Daten zu",
            submit: "Senden"
        },
        video: {
            title: "Video Capture",
            subtitle: "Video Capture macht den Serviceprozess komplett transparent. Während der Wartung sendet Ihnen der Meister eine detaillierte Video-Übersicht des Fahrzeugzustands. Ablauf und Freigaben – bequem per Smartphone.",
            steps: [
                { title: "ABWEICHUNGEN FIXIEREN.", desc: "Der Meister dokumentiert Auffälligkeiten und zeigt sie im Video." },
                { title: "BENACHRICHTIGUNG.", desc: "Sie erhalten eine Nachricht mit dem Videolink." },
                { title: "ANSEHEN.", desc: "Sie sehen den Zustand und die Empfehlungen direkt am Smartphone." },
                { title: "FREIGABE.", desc: "Sie stimmen Arbeiten remote zu – schnell und transparent." }
            ]
        },
        locations: {
            north: "Nord",
            east: "Ost",
            south: "Süd",
            items: [
                { id: "north", name: "Borishof Nord", phone: "+7 (495) 033-11-60", address: "Moskau, Standort Nord", map: "https://yandex.ru/maps/" },
                { id: "east", name: "Borishof Ost", phone: "+7 (495) 033-11-61", address: "Moskau, Standort Ost", map: "https://yandex.ru/maps/" },
                { id: "south", name: "Borishof Süd", phone: "+7 (495) 033-11-62", address: "Moskau, Standort Süd", map: "https://yandex.ru/maps/" }
            ],
            map_link: "Auf Yandex Maps öffnen"
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
            more: "Mehr erfahren",
            accept_all: "Accept all",
            reject: "Reject non-essential",
            settings: "Settings",
            settings_link: "Cookie-Einstellungen",
            settings_title: "Cookie-Einstellungen",
            cat_necessary: "Necessary",
            cat_necessary_desc: "Erforderlich für den Betrieb der Website.",
            cat_maps: "External media / Maps",
            cat_maps_desc: "Lädt externe Karteninhalte (z.B. Yandex/Google Maps).",
            cat_fonts: "Fonts",
            cat_fonts_desc: "Lädt externe Schriftarten (Google Fonts).",
            save: "Speichern"
        },
        maps: {
            placeholder: "Karte wird erst nach Zustimmung geladen",
            load: "Karte laden"
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
            advantages: "Преимущества",
            promotions: "Акции",
            services: "Услуги",
            to: "ТО",
            contact: "Контакты",
            imprint: "Импрессум",
            privacy: "Конфиденциальность",
            close: "НАЗАД"
        },
        hero_slider: {
            slides: [
                { title: "Диагностика электронных систем", price: "2 990 ₽", subtitle: "До конца акции", cta: "Записаться" },
                { title: "Замена масла для любого BMW", price: "12 900 ₽", subtitle: "Быстро и по стандарту BMW", cta: "Записаться" },
                { title: "Скидка 50% для новых клиентов", price: "-50%", subtitle: "На первый визит", cta: "Записаться" },
                { title: "Формула цены 4-6-8", price: "BMW 2020+", subtitle: "Оригинальная формула ТО", cta: "Подробнее" }
            ]
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
            subtitle: "Широкий спектр услуг для обслуживания и ремонта",
            cta: "Подробнее",
            cta_primary: "Записаться",
            cta_telegram: "Записаться через Telegram",
            items: [
                { title: "ТО и Обслуживание", desc: "Замена масла, фильтров и тормозов по стандартам BMW.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M15 7a4 4 0 0 0-6 3.465V12l-6.5 6.5a2.121 2.121 0 1 0 3 3L12 15h1.535A4 4 0 0 0 15 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
                { title: "Слесарный ремонт", desc: "Ремонт ходовой, двигателя и подвески с гарантией.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
                { title: "Электрика", desc: "Диагностика и программирование дилерским софтом.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>' },
                { title: "Кондиционер", desc: "Заправка, чистка и антибактериальная обработка.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
                { title: "Детейлинг", desc: "Премиум-мойка, полировка и керамика для вашего авто.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>' },
                { title: "Доп. услуги", desc: "Установка оригинального оборудования и обновление ПО.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/><path d="M12 8V16M8 12H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' }
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
            form_error: "Пожалуйста, заполните все обязательные поля.",
            form_success: "Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.",
            email_error: "Пожалуйста, введите корректный адрес электронной почты.",
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
            title: "Сервисные предложения",
            subtitle: "Актуальные акции и специальные предложения",
            items: [
                { title: "Хранение автомобиля в праздники", desc: "Хранение + выгодный сервис.", label: "Special", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M3 11L12 3L21 11V21H3V11Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>' },
                { title: "Диагностика электронных систем", desc: "Быстрая диагностика электроники.", label: "2 990 ₽", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
                { title: "Диагностика в подарок", desc: "При пакетном ТО — бесплатно.", label: "Подарок", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M20 12V22H4V12" stroke="currentColor" stroke-width="2"/><path d="M2 7H22V12H2V7Z" stroke="currentColor" stroke-width="2"/><path d="M12 22V7" stroke="currentColor" stroke-width="2"/><path d="M12 7C12 7 10 7 9 6C8 5 8 3 10 3C12 3 12 7 12 7Z" stroke="currentColor" stroke-width="2"/><path d="M12 7C12 7 14 7 15 6C16 5 16 3 14 3C12 3 12 7 12 7Z" stroke="currentColor" stroke-width="2"/></svg>' },
                { title: "Замена масла", desc: "По стандарту BMW.", label: "12 900 ₽", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M7 7h10v10a5 5 0 0 1-10 0V7Z" stroke="currentColor" stroke-width="2"/><path d="M9 3h6v4H9V3Z" stroke="currentColor" stroke-width="2"/></svg>' },
                { title: "Выгода на первый визит", desc: "Скидка 50% для новых клиентов.", label: "-50%", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M19 5L5 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M6.5 6.5H6.51M17.5 17.5H17.51" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
                { title: "Масляный сервис BMW 2020+", desc: "Фиксированная цена для BMW 2020+.", label: "Fix", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M4 7H20" stroke="currentColor" stroke-width="2"/><path d="M6 7V19H18V7" stroke="currentColor" stroke-width="2"/><path d="M9 11H15" stroke="currentColor" stroke-width="2"/></svg>' },
                { title: "Спецпредложения по диагностике", desc: "Проверка ключевых систем.", label: "Check", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
                { title: "Подвеска — шедевр", desc: "Комплексная проверка подвески.", label: "Pro", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M7 4v16M17 4v16M7 12h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
                { title: "Комплексное ТО по фиксированной цене", desc: "Пакеты обслуживания 4-6-8.", label: "4-6-8", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M4 4h16v16H4V4Z" stroke="currentColor" stroke-width="2"/><path d="M8 9h8M8 12h8M8 15h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
                { title: "Масляный сервис от 8 000 ₽", desc: "Оптимальный сервис масла.", label: "8 000 ₽", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M12 2v20" stroke="currentColor" stroke-width="2"/><path d="M7 7h10v10H7V7Z" stroke="currentColor" stroke-width="2"/></svg>' },
                { title: "Замена масла в АКПП", desc: "Фиксированная цена.", label: "Fix", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M8 6h8v12H8V6Z" stroke="currentColor" stroke-width="2"/><path d="M6 10h2M16 10h2M6 14h2M16 14h2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
                { title: "Сезонный шиномонтаж", desc: "Шины, балансировка, хранение.", label: "Season", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 3v18M3 12h18" stroke="currentColor" stroke-width="2"/></svg>' },
                { title: "Кузовной ремонт по фиксированной цене", desc: "По формуле стоимости.", label: "Fix", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><path d="M4 15l4-8h8l4 8" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M6 15h12v5H6v-5Z" stroke="currentColor" stroke-width="2"/></svg>' },
                { title: "Тормозная система — шедевр", desc: "Обслуживание тормозов.", label: "Pro", icon: '<svg viewBox="0 0 24 24" fill="none" class="promo-icon"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7v10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' }
            ]
        },
        to: {
            title: "ТО",
            subtitle: "Техническое обслуживание по регламенту BMW",
            items: [
                { title: "ТО Пакет 4", desc: "Базовая проверка + расходники.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' },
                { title: "ТО Пакет 6", desc: "Расширенно: фильтры + проверка тормозов.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M7 7h10v10H7V7Z" stroke="currentColor" stroke-width="2"/><path d="M9 9h6v6H9V9Z" stroke="currentColor" stroke-width="2"/></svg>' },
                { title: "ТО Пакет 8", desc: "Максимум: диагностика + жидкости.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4.5-7 4.5 2.5-7L2 9h7l3-7Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>' },
                { title: "Замена масла", desc: "Масло + фильтр по стандарту.", icon: '<svg viewBox="0 0 24 24" fill="none" class="icon-svg"><path d="M7 7h10v10a5 5 0 0 1-10 0V7Z" stroke="currentColor" stroke-width="2"/><path d="M9 3h6v4H9V3Z" stroke="currentColor" stroke-width="2"/></svg>' }
            ]
        },
        consult: {
            title: "Требуется консультация мастера?",
            subtitle: "Звоните или оставьте заявку и мы ответим на все Ваши вопросы",
            form_name: "Ваше имя",
            form_phone: "Номер телефона",
            consent: "Я согласен(на) на обработку персональных данных",
            submit: "Отправить"
        },
        video: {
            title: "Video Capture",
            subtitle: "Video Capture делает процесс обслуживания автомобиля полностью прозрачным для Вас. Во время технического обслуживания мастер-консультант отправит Вам подробный видеообзор технического состояния автомобиля. Контролировать процесс и согласовывать работы можно прямо со смартфона.",
            steps: [
                { title: "ФИКСАЦИЯ ОТКЛОНЕНИЙ.", desc: "Наш технический специалист сделает видеозапись любых дополнительных отклонений с цветовым индикатором Жёлтый или Красный." },
                { title: "УВЕДОМЛЕНИЕ.", desc: "Вы получите письмо с уникальной ссылкой на просмотр видео по Вашему автомобилю." },
                { title: "ПРОСМОТР.", desc: "Пройдя по уникальной ссылке, вы попадаете на персональную веб-страницу с видеороликом и фотографиями с графическими аннотациями." },
                { title: "СОГЛАСОВАНИЕ.", desc: "Каждое выявленное отклонение сопровождается калькуляцией, учитывающей Ваши индивидуальные условия. Просто выберите «Согласовать» для авторизации работ или «Заказать обратный звонок», если Вы хотите, чтобы наш специалист связался с Вами для дополнительных разъяснений." }
            ]
        },
        locations: {
            north: "Север",
            east: "Восток",
            south: "Юг",
            items: [
                { id: "north", name: "БорисХоф Север", phone: "+7 (495) 033-11-60", address: "Москва — Север", map: "https://yandex.ru/maps/" },
                { id: "east", name: "БорисХоф Восток", phone: "+7 (495) 033-11-61", address: "Москва — Восток", map: "https://yandex.ru/maps/" },
                { id: "south", name: "БорисХоф Юг", phone: "+7 (495) 033-11-62", address: "Москва — Юг", map: "https://yandex.ru/maps/" }
            ],
            map_link: "Открыть в Яндекс Картах"
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
            more: "Подробнее",
            accept_all: "Принять все",
            reject: "Отклонить необязательные",
            settings: "Настройки",
            settings_link: "Настройки cookies",
            settings_title: "Настройки cookies",
            cat_necessary: "Необходимые",
            cat_necessary_desc: "Нужны для работы сайта.",
            cat_maps: "Внешние медиа / Карты",
            cat_maps_desc: "Загружает внешние карты (например, Yandex/Google Maps).",
            cat_fonts: "Шрифты",
            cat_fonts_desc: "Загружает внешние шрифты (Google Fonts).",
            save: "Сохранить"
        },
        maps: {
            placeholder: "Карта загружается только после согласия",
            load: "Загрузить карту"
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
        this.lang = this.getInitialLang();
        this.init();
    }

    getInitialLang() {
        try {
            const params = new URLSearchParams(window.location.search);
            const urlLang = params.get('lang');
            if (urlLang === 'de' || urlLang === 'ru') return urlLang;
        } catch (_) {
            // ignore
        }
        return localStorage.getItem('bmw_lang') || 'ru';
    }

    scrollToHash(hash, options = {}) {
        if (!hash || !hash.startsWith('#')) return;
        const id = hash.slice(1);
        if (!id) return;

        const target = document.getElementById(id);
        if (!target) return;

        const nav = document.getElementById('navbar');
        const navHeight = nav ? nav.getBoundingClientRect().height : 0;
        const extraOffset = typeof options.extraOffset === 'number' ? options.extraOffset : 12;

        const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
        const top = Math.max(0, Math.round(targetTop - navHeight - extraOffset));

        const prefersReduced =
            typeof window !== 'undefined' &&
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const behavior = options.behavior || (prefersReduced ? 'auto' : 'smooth');

        window.scrollTo({ top, behavior });
    }

    init() {
        // Ensure language is saved if not set
        if (!localStorage.getItem('bmw_lang')) {
            localStorage.setItem('bmw_lang', this.lang);
        }
        
        // Apply initial language state immediately
        this.applyLanguageClasses();
        this.render();

        // Show content after first render to prevent "flash of German"
        document.body.classList.add('app-ready');

        this.setupListeners();
        this.handleScroll();
        this.initScrollReveal();
        this.initConsent();
        this.initMapConsent();
        this.applyConsentToFeatures(this.getConsent() || this.getDefaultConsent());
        this.updateLanguageUrls();
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

        // Unified hash scrolling for desktop + mobile (prevents default anchor jump under fixed navbar)
        this.bindHashLinkScrolling({ mobBtn, navLinks });

        // Location selector (header)
        const locationSelect = document.getElementById('location-select');
        if (locationSelect) {
            locationSelect.addEventListener('change', () => {
                const val = locationSelect.value;
                if (!val) return;
                // Prefer scroll to specific location card, fallback to contact section
                if (document.getElementById(`loc-${val}`)) {
                    this.scrollToHash(`#loc-${val}`, { extraOffset: 20 });
                } else {
                    this.scrollToHash('#contact', { extraOffset: 20 });
                }
            });
        }

        if (mobBtn && navLinks) {
            mobBtn.addEventListener('click', () => {
                const isActive = navLinks.classList.toggle('active');
                mobBtn.classList.toggle('active');
                mobBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
                document.body.style.overflow = isActive ? 'hidden' : '';
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

        // Contact Form Handler
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const formData = {
                    name: document.getElementById('name').value.trim(),
                    email: document.getElementById('email').value.trim(),
                    phone: document.getElementById('phone').value.trim(),
                    message: document.getElementById('message').value.trim()
                };

                // Get current translations
                const data = translations[this.lang] || translations['de'];
                
                // Basic validation
                if (!formData.name || !formData.email || !formData.message) {
                    alert(data.contact?.form_error || 'Bitte füllen Sie alle Pflichtfelder aus.');
                    return;
                }

                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(formData.email)) {
                    alert(data.contact?.email_error || 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
                    return;
                }

                // Here you would normally send the data to a server
                // For now, we'll just show a success message
                const successMsg = data.contact?.form_success || 'Vielen Dank! Ihre Nachricht wurde gesendet.';
                alert(successMsg);
                
                // Reset form
                contactForm.reset();
                
                // Reset floating labels
                contactForm.querySelectorAll('input, textarea').forEach(field => {
                    field.dispatchEvent(new Event('blur'));
                });
            });
        }

        // Consult Form Handler
        const consultForm = document.getElementById('consult-form');
        if (consultForm) {
            consultForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const data = translations[this.lang] || translations['de'];
                const name = document.getElementById('consult-name')?.value?.trim();
                const phone = document.getElementById('consult-phone')?.value?.trim();
                const consent = document.getElementById('consult-consent')?.checked;

                if (!name || !phone || !consent) {
                    alert(data.contact?.form_error || 'Пожалуйста, заполните все обязательные поля.');
                    return;
                }

                alert(data.contact?.form_success || 'Спасибо! Ваша заявка отправлена.');
                consultForm.reset();
            });
        }
    }

    bindHashLinkScrolling({ mobBtn, navLinks } = {}) {
        if (this._hashScrollBound) return;
        this._hashScrollBound = true;

        document.addEventListener('click', (e) => {
            const link = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
            if (!link) return;

            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            if (href === '#') return;

            const targetId = href.slice(1);
            if (!targetId) return;
            if (!document.getElementById(targetId)) return;

            e.preventDefault();

            // Update active state if user clicked a nav link
            if (link.classList.contains('nav-link')) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                this.applyAriaCurrentToNav();
            } else {
                // If it points to a section, try to sync nav active state too
                const navMatch = document.querySelector(`.nav-link[href="${href}"]`);
                if (navMatch) {
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    navMatch.classList.add('active');
                    this.applyAriaCurrentToNav();
                }
            }

            // If mobile menu is open, close it before scrolling (layout stability)
            if (mobBtn && navLinks && navLinks.classList.contains('active')) {
                mobBtn.classList.remove('active');
                navLinks.classList.remove('active');
                mobBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }

            // Update URL hash without jumping
            if (history && history.pushState) {
                history.pushState(null, '', href);
            } else {
                location.hash = href;
            }

            requestAnimationFrame(() => this.scrollToHash(href));
        }, { passive: false });
    }

    switchLanguage(lang) {
        if (this.lang === lang) return;
        this.lang = lang;
        localStorage.setItem('bmw_lang', lang);
        // Keep language in URL for unique URLs (?lang=de|ru)
        try {
            const url = new URL(window.location.href);
            url.searchParams.set('lang', lang);
            window.history.replaceState(null, '', url.toString());
        } catch (_) {
            // ignore
        }

        // Add fade out/in effect for content
        document.body.style.opacity = '0';
        setTimeout(() => {
            this.render();
            // Update consent-related UI texts after language switch
            this.updateMapConsentUI();
            this.updateLanguageUrls();
            document.body.style.opacity = '1';
        }, 300);
    }

    render() {
        const data = translations[this.lang] || translations.de;
        if (!data) return;
        document.documentElement.lang = this.lang;

        // Update page title for legal pages
        const titleEl = document.querySelector('title[data-i18n-title]');
        if (titleEl) {
            const key = titleEl.getAttribute('data-i18n-title');
            const keys = key.split('.');
            let val = data;
            keys.forEach(k => { val = val?.[k]; });
            if (val) {
                titleEl.textContent = val + ' | BMW SERVICE';
            }
        }

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
                } else if (key.startsWith('legal_page.')) {
                    // Use innerHTML for legal page content that contains <br> tags
                    el.innerHTML = val;
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

        // Update TO grid
        const toGrid = document.getElementById('to-grid');
        if (toGrid && data.to?.items) {
            toGrid.innerHTML = data.to.items.map((item, idx) => `
                <div class="service-card scroll-reveal">
                    <div class="hover-glow"></div>
                    <span class="num">/ 0${idx + 1}</span>
                    <span class="icon">${item.icon || ''}</span>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <a href="#contact" class="service-link">
                        ${data.services?.cta || 'Подробнее'} <span>→</span>
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

        // Update Locations (3 локации как у донора)
        const locGrid = document.getElementById('locations-grid');
        if (locGrid && data.locations?.items) {
            const mapLinkText = data.locations.map_link || 'Открыть в картах';
            locGrid.innerHTML = data.locations.items.map(loc => `
                <div class="location-card" id="loc-${loc.id}">
                    <h3>${loc.name}</h3>
                    <p class="text-dim">${loc.address}</p>
                    <a class="loc-phone" href="tel:${(loc.phone || '').replace(/[^+\\d]/g, '')}">${loc.phone}</a><br>
                    <a class="service-link loc-map" href="${loc.map}" target="_blank" rel="noopener noreferrer">${mapLinkText} <span>→</span></a>
                </div>
            `).join('');
        }

        // Re-init reveal for all new items
        this.initScrollReveal();

        // Update active class in switcher
        document.querySelectorAll('#lang-switcher button').forEach(btn => {
            btn.classList.toggle('active-lang', btn.getAttribute('data-lang') === this.lang);
        });

        // Keep a11y state consistent after re-render updates
        this.applyAriaCurrentToNav();

        // Keep internal language URLs consistent
        this.updateLanguageUrls();
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
        if (!nav) return;
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
                this.applyAriaCurrentToNav();
            }
        });
    }

    applyAriaCurrentToNav() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const isActive = link.classList.contains('active');
            if (isActive) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    updateLanguageUrls() {
        const lang = this.lang;
        if (lang !== 'de' && lang !== 'ru') return;

        document.querySelectorAll('a[href]').forEach(a => {
            const href = a.getAttribute('href');
            if (!href) return;
            if (href === '#' || href.startsWith('#')) return;
            if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
            if (href.includes('lang=')) return;

            // Split hash safely
            const parts = href.split('#');
            const path = parts[0];
            const hash = parts.length > 1 ? parts.slice(1).join('#') : '';

            // Only apply to html navigations (index/legal), keep other assets untouched
            const isHtml = path.endsWith('.html') || path.endsWith('./') || path.endsWith('../') || path.includes('legal/') || path.includes('index.html');
            if (!isHtml) return;

            const sep = path.includes('?') ? '&' : '?';
            const nextHref = `${path}${sep}lang=${encodeURIComponent(lang)}${hash ? `#${hash}` : ''}`;
            a.setAttribute('href', nextHref);
        });
    }

    // ---- Consent (GDPR) ----
    getConsentStorageKey() {
        return 'bmw_consent_v1';
    }

    // Cookies helpers (1st-party). Best when сайт на домене/хостинге (http/https), не file://
    setCookie(name, value, days = 180) {
        try {
            const maxAge = Math.floor(days * 24 * 60 * 60);
            const encoded = encodeURIComponent(String(value));
            const isHttps = typeof location !== 'undefined' && String(location.protocol).toLowerCase() === 'https:';
            const secure = isHttps ? '; Secure' : '';
            document.cookie = `${encodeURIComponent(name)}=${encoded}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;
            return true;
        } catch (_) {
            return false;
        }
    }

    getCookie(name) {
        try {
            const encodedName = encodeURIComponent(name) + '=';
            const parts = String(document.cookie || '').split(';');
            for (let part of parts) {
                part = part.trim();
                if (part.startsWith(encodedName)) {
                    return decodeURIComponent(part.slice(encodedName.length));
                }
            }
            return null;
        } catch (_) {
            return null;
        }
    }

    getDefaultConsent() {
        return { necessary: true, maps: false, fonts: false };
    }

    getConsent() {
        try {
            const key = this.getConsentStorageKey();
            const raw = this.getCookie(key);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== 'object') return null;
            return {
                necessary: true,
                maps: !!parsed.maps,
                fonts: !!parsed.fonts
            };
        } catch (_) {
            return null;
        }
    }

    setConsent(next) {
        const consent = {
            necessary: true,
            maps: !!next.maps,
            fonts: !!next.fonts
        };
        this.setCookie(this.getConsentStorageKey(), JSON.stringify(consent), 180);
        this.applyConsentToFeatures(consent);
        this.updateCookieUI(consent);
    }

    initConsent() {
        // Banner + modal (exist only on index.html)
        this.cookieBanner = document.getElementById('cookie-banner');
        this.cookieModal = document.getElementById('cookie-modal');

        // Buttons
        const btnAcceptAll = document.getElementById('cookie-accept-all');
        const btnReject = document.getElementById('cookie-reject');
        const btnSettings = document.getElementById('cookie-settings');
        const btnSave = document.getElementById('cookie-save');
        const footerSettingsLink = document.getElementById('cookie-settings-link');

        // Inputs
        this.mapsToggle = document.getElementById('consent-maps');
        this.fontsToggle = document.getElementById('consent-fonts');

        // Close modal click targets
        if (this.cookieModal) {
            this.cookieModal.querySelectorAll('[data-cookie-close]').forEach(el => {
                el.addEventListener('click', () => this.closeCookieModal());
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') this.closeCookieModal();
            });
        }

        if (footerSettingsLink) {
            footerSettingsLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.openCookieModal();
            });
        }

        if (btnSettings) btnSettings.addEventListener('click', () => this.openCookieModal());

        if (btnAcceptAll) {
            btnAcceptAll.addEventListener('click', () => {
                this.setConsent({ maps: true, fonts: true });
                if (this.cookieBanner) this.cookieBanner.classList.remove('show');
            });
        }

        if (btnReject) {
            btnReject.addEventListener('click', () => {
                this.setConsent({ maps: false, fonts: false });
                if (this.cookieBanner) this.cookieBanner.classList.remove('show');
            });
        }

        if (btnSave) {
            btnSave.addEventListener('click', () => {
                this.setConsent({
                    maps: this.mapsToggle ? this.mapsToggle.checked : false,
                    fonts: this.fontsToggle ? this.fontsToggle.checked : false
                });
                this.closeCookieModal();
                if (this.cookieBanner) this.cookieBanner.classList.remove('show');
            });
        }

        // Initialize UI state
        const existing = this.getConsent();
        if (!existing) {
            if (this.cookieBanner) setTimeout(() => this.cookieBanner.classList.add('show'), 800);
            // Ensure toggles reflect defaults
            this.updateCookieUI(this.getDefaultConsent());
        } else {
            this.updateCookieUI(existing);
        }
    }

    updateCookieUI(consent) {
        if (this.mapsToggle) this.mapsToggle.checked = !!consent.maps;
        if (this.fontsToggle) this.fontsToggle.checked = !!consent.fonts;
        this.updateMapConsentUI();
    }

    openCookieModal() {
        if (!this.cookieModal) return;
        const consent = this.getConsent() || this.getDefaultConsent();
        this.updateCookieUI(consent);
        this.cookieModal.classList.add('show');
        this.cookieModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('cookie-modal-open');
    }

    closeCookieModal() {
        if (!this.cookieModal) return;
        this.cookieModal.classList.remove('show');
        this.cookieModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('cookie-modal-open');
    }

    applyConsentToFeatures(consent) {
        // Fonts
        if (consent.fonts) this.ensureGoogleFontsLoaded();
        // Maps: enforce consent (including revocation)
        this.syncMapWithConsent(consent);
    }

    ensureGoogleFontsLoaded() {
        // Load Outfit only after consent
        if (document.getElementById('gf-outfit')) return;
        const link = document.createElement('link');
        link.id = 'gf-outfit';
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;600;800&display=swap';
        document.head.appendChild(link);

        // Optional preconnect after consent (safe now)
        const pc1 = document.createElement('link');
        pc1.rel = 'preconnect';
        pc1.href = 'https://fonts.googleapis.com';
        pc1.id = 'gf-preconnect-1';

        const pc2 = document.createElement('link');
        pc2.rel = 'preconnect';
        pc2.href = 'https://fonts.gstatic.com';
        pc2.crossOrigin = 'anonymous';
        pc2.id = 'gf-preconnect-2';

        if (!document.getElementById(pc1.id)) document.head.prepend(pc1);
        if (!document.getElementById(pc2.id)) document.head.prepend(pc2);
    }

    // ---- Map consent ----
    initMapConsent() {
        this.mapContainer = document.getElementById('map-container');
        if (!this.mapContainer) return;

        // bind current button (placeholder can be re-rendered on consent revoke)
        this.bindLoadMapButton();

        // Auto-load if user already consented previously
        const consent = this.getConsent();
        if (consent?.maps) {
            this.loadMapIframe();
        } else {
            this.updateMapConsentUI();
        }
    }

    bindLoadMapButton() {
        if (!this.mapContainer) return;
        const btn = this.mapContainer.querySelector('#load-map-btn');
        if (!btn) return;
        // Avoid double-binding when placeholder re-renders
        if (btn.dataset.bound === '1') return;
        btn.dataset.bound = '1';
        btn.addEventListener('click', () => {
            const consent = this.getConsent() || this.getDefaultConsent();
            if (!consent.maps) {
                this.openCookieModal();
                return;
            }
            this.loadMapIframe();
        });
    }

    updateMapConsentUI() {
        if (!this.mapContainer) return;
        // If iframe already loaded, keep it as-is (revocation handled elsewhere)
        const hasIframe = !!this.mapContainer.querySelector('iframe');
        if (hasIframe) return;

        const consent = this.getConsent() || this.getDefaultConsent();
        const btn = this.mapContainer.querySelector('#load-map-btn');
        if (!btn) return;
        btn.disabled = !consent.maps;
        btn.classList.toggle('is-disabled', !consent.maps);
    }

    renderMapPlaceholder() {
        if (!this.mapContainer) return;
        // Don't overwrite if iframe exists
        if (this.mapContainer.querySelector('iframe')) return;
        const data = translations[this.lang] || translations['de'];
        const text = data?.maps?.placeholder || 'Карта загружается только после согласия';
        const btnText = data?.maps?.load || 'Загрузить карту';

        this.mapContainer.innerHTML = `
            <div class="map-consent-inner">
                <p class="map-consent-text">${text}</p>
                <button type="button" id="load-map-btn" class="btn-secondary map-load-btn">${btnText}</button>
            </div>
        `;
        this.bindLoadMapButton();
        this.updateMapConsentUI();
    }

    syncMapWithConsent(consent) {
        if (!this.mapContainer) return;
        const iframe = this.mapContainer.querySelector('iframe');

        // If consent revoked: remove iframe and restore placeholder
        if (!consent.maps) {
            if (iframe) iframe.remove();
            this.renderMapPlaceholder();
            return;
        }

        // Consent granted: allow loading; if map already loaded keep it,
        // otherwise enable button (and optionally auto-load for convenience).
        if (iframe) return;

        // Ensure placeholder exists
        if (!this.mapContainer.querySelector('.map-consent-inner')) {
            this.renderMapPlaceholder();
        }

        // Auto-load after consent to match "после согласия и клика/автозагрузки"
        this.loadMapIframe();
    }

    loadMapIframe() {
        if (!this.mapContainer) return;
        if (this.mapContainer.querySelector('iframe')) return;

        const src = this.mapContainer.getAttribute('data-map-src');
        if (!src) return;

        // Remove placeholder
        const inner = this.mapContainer.querySelector('.map-consent-inner');
        if (inner) inner.remove();

        const iframe = document.createElement('iframe');
        iframe.className = 'map-iframe';
        iframe.src = src;
        iframe.title = 'Карта расположения сервиса BMW';
        iframe.loading = 'lazy';
        iframe.referrerPolicy = 'no-referrer-when-downgrade';
        this.mapContainer.appendChild(iframe);
    }
}

// Fire it up with extra body style for smooth transitions
document.body.style.transition = 'opacity 0.6s ease';
document.addEventListener('DOMContentLoaded', () => new BMWApp());

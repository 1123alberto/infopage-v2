const i18n = {
    el: {
        name: "Αγγελος Μοσχοπουλος",
        title: "Χειρουργός Οδοντίατρος",
        download: "Λήψη επαφής",
        phone: "Τηλέφωνο ιατρείου",
        appointment: "Κλείστε ραντεβού",
        email: "Email",
        website_dentplant: "Website: dentplant.gr",
        website_ismile: "Website: i-smile.gr",
        toggle_lang: "English"
    },
    en: {
        name: "Angelo Moshopoulos",
        title: "Dental Surgeon",
        download: "Download info",
        phone: "Telephone number",
        appointment: "Appointment",
        email: "Email",
        website_dentplant: "Website: dentplant.gr",
        website_ismile: "Website: i-smile.gr",
        toggle_lang: "Ελληνικά"
    }
};

let currentLang = 'el';

function updateUI(lang) {
    document.documentElement.lang = lang;
    document.getElementById('display-name').textContent = i18n[lang].name;
    document.getElementById('display-title').textContent = i18n[lang].title;
    document.getElementById('lang-toggle-btn').textContent = i18n[lang].toggle_lang;
    
    // Update links
    document.querySelector('[data-translate="download"]').lastChild.textContent = i18n[lang].download;
    document.querySelector('[data-translate="phone"]').lastChild.textContent = i18n[lang].phone;
    document.querySelector('[data-translate="appointment"]').lastChild.textContent = i18n[lang].appointment;
    document.querySelector('[data-translate="email"]').lastChild.textContent = i18n[lang].email;
    document.querySelector('[data-translate="website_dentplant"]').lastChild.textContent = i18n[lang].website_dentplant;
    document.querySelector('[data-translate="website_ismile"]').lastChild.textContent = i18n[lang].website_ismile;

    // Update VCF link
    const vcfLink = document.querySelector('[data-translate="download"]');
    vcfLink.href = lang === 'el' ? 'data/contacts.vcf' : 'data/contacts-en.vcf';
}

function toggleLanguage() {
    currentLang = currentLang === 'el' ? 'en' : 'el';
    updateUI(currentLang);
    localStorage.setItem('preferredLang', currentLang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Check for saved preference
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && i18n[savedLang]) {
        currentLang = savedLang;
    }
    
    updateUI(currentLang);
    
    // Add entry animation
    setTimeout(() => {
        document.querySelector('.app-container').classList.add('visible');
    }, 100);

    document.getElementById('lang-toggle-btn').addEventListener('click', toggleLanguage);
});

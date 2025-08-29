/**
 * ========================================
 * 🚀 Amer Developer Portfolio - FINAL SCRIPT (تم التصحيح الكامل)
 * Version: 17.7 | تم إصلاح الأخطاء 1-6 | تم إزالة updateActiveLink الزائدة
 * Author: Amer Developer
 * ========================================
 */
// =======================
// 1. عناصر DOM
// =======================
const logoImg = document.getElementById('logo-img');
const languageSwitcher = document.getElementById('language-switcher');
const languageMenu = document.getElementById('language-menu');
const toast = document.getElementById('toast');
const yearSpan = document.getElementById('year');
const adminPanel = document.getElementById('admin-panel');
const passwordModal = document.getElementById('password-modal');
const typingText = document.getElementById('typing-text');
// نموذج الاتصال
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const sendEmailBtn = document.getElementById('send-email');
const sendWhatsAppBtn = document.getElementById('send-whatsapp');
// لوحة التحكم
const editModeOverlay = document.getElementById('edit-mode-overlay');
const siteFrame = document.getElementById('site-frame');
// رفع الملفات
const projectImageInput = document.getElementById('input-project-image');
const projectVideoInput = document.getElementById('input-project-video');
const imageFilename = document.getElementById('image-filename');
const videoFilename = document.getElementById('video-filename');
// قوائم الحذف
const deleteProjectList = document.getElementById('delete-project-list');
const deleteSkillList = document.getElementById('delete-skill-list');
const deleteToolList = document.getElementById('delete-tool-list');
// الشبكات
const skillsGrid = document.getElementById('skills-grid');
const toolsGrid = document.getElementById('tools-grid');
const projectsGrid = document.getElementById('projects-grid');
const projectsEmpty = document.getElementById('projects-empty');
const servicesGrid = document.getElementById('services-grid');
// النوافذ المنبثقة
const tiktokModal = document.getElementById('tiktok-modal');
const adminPassword = document.getElementById('admin-password');
const passwordError = document.getElementById('password-error');
// الأقسام والتنقل
const sections = document.querySelectorAll('.section, #home');
const navLinks = document.querySelectorAll('.nav-link');
// نص "من أنا" (فقرات متعددة)
const aboutText = document.getElementById('about-text');
const aboutText2 = document.getElementById('about-text-2');
const aboutText3 = document.getElementById('about-text-3');
// اسم البطل (لتغيير "Amer" إلى "عامر" بالعربية)
const heroName = document.getElementById('hero-name');
// النماذج
const formProject = document.getElementById('form-project');
const formSkill = document.getElementById('form-skill');
const formTool = document.getElementById('form-tool');
// حاوية نماذج الإدارة
const adminForms = document.getElementById('admin-forms');
const formAddProject = document.getElementById('form-add-project');
const formAddSkill = document.getElementById('form-add-skill');
const formAddTool = document.getElementById('form-add-tool');
const deleteSections = document.getElementById('delete-sections');
// عنوان الصفحة وعنوان المشاريع
const projectsTitle = document.getElementById('projects-title');
// عناصر قسم الخدمات
const orderServiceBtn = document.getElementById('order-service-btn');
const servicesActions = document.getElementById('services-actions');
const cancelSelection = document.getElementById('cancel-selection');
const confirmOrder = document.getElementById('confirm-order');
// =======================
// 2. نظام الترجمة
// =======================
const translations = {
  ar: {
    home: 'الرئيسية',
    about: 'من أنا',
    skills: 'المهارات',
    tools: 'الأدوات',
    services: 'الخدمات',
    projects: 'المشاريع',
    contact: 'اتصل بي',
    'I offer professional development services tailored to your needs.': 'أقدم خدمات تطوير احترافية مخصصة لاحتياجاتك.',
    'More About Me': 'مزيد من التفاصيل',
    'Hello, I\'m': 'مرحبًا، أنا',
    'Building digital solutions': 'أبني حلولًا رقمية تساعدك على الظهور بشكل احترافي وفعّال في السوق الرقمي',
    'About Me': 'من أنا',
    'My Skills': 'مهاراتي',
    'My Tools': 'الأدوات',
    'My Services': 'خدماتي',
    'Latest Projects': 'أحدث %d مشاريع',
    'Contact Me': 'اتصل بي',
    'Your Name': 'اسمك',
    'Your Email': 'بريدك الإلكتروني',
    'Your Message': 'رسالتك',
    'Send via Email': 'إرسال عبر البريد الإلكتروني',
    'Send via WhatsApp': 'إرسال عبر واتساب',
    'I am available for collaboration': 'أنا متاح للتعاون والعمل على مشاريع جديدة، لا تتردد في التواصل معي لأي استفسار أو عرض عمل.',
    'Admin Panel': 'لوحة التحكم',
    'Add Project': 'إضافة مشروع',
    'Add Skill': 'إضافة مهارة',
    'Add Tool': 'إضافة أداة',
    'Delete Project': 'حذف مشروع',
    'Delete Skill': 'حذف مهارة',
    'Delete Tool': 'حذف أداة',
    'Project Name': 'اسم المشروع',
    'Project URL': 'رابط المشروع',
    'Upload Image': 'تحميل صورة',
    'Upload Video (optional)': 'تحميل فيديو (اختياري)',
    'Short Description': 'وصف مختصر',
    'Skill Abbreviation': 'اختصار المهارة (مثل: HTML)',
    'Full Name': 'الاسم الكامل (مثل: HyperText Markup Language)',
    'Tool Abbreviation': 'اختصار الأداة (مثل: Git)',
    'Save Project': 'حفظ المشروع',
    'Add Skill': 'إضافة مهارة',
    'Add Tool': 'إضافة أداة',
    'Sending...': 'جاري الإرسال...',
    'Success Email': 'تم إرسال الرسالة بنجاح، سيتم التواصل معك عبر البريد الإلكتروني خلال 24 ساعة',
    'Success WhatsApp': 'تم إرسال الرسالة بنجاح، سيتم التواصل معك عبر واتساب خلال 24 ساعة',
    'Error': 'تعذر إرسال الرسالة',
    'Error Network': 'تحقق من اتصالك بالإنترنت وحاول مرة أخرى.',
    'Error Invalid Email': 'يرجى إدخال بريد إلكتروني صحيح.',
    'Confirm Delete': 'هل أنت متأكد أنك تريد حذف هذا العنصر؟',
    'Enter Password': 'أدخل كلمة المرور للتأكيد',
    'Incorrect Password': 'كلمة المرور غير صحيحة',
    'No projects to delete': 'لا توجد مشاريع للحذف',
    'No skills to delete': 'لا توجد مهارات للحذف',
    'No tools to delete': 'لا توجد أدوات للحذف',
    'Enter Admin Password': 'أدخل كلمة مرور الإدارة',
    'This area is protected. Enter the password to continue.': 'هذه المنطقة محمية. أدخل كلمة المرور للمتابعة.',
    'Enter': 'أدخل',
    'Cancel': 'إلغاء',
    'TikTok Service Notice': 'إشعار خدمة تيك توك',
    'Got It': 'حسنًا',
    'Change Logo': 'تغيير الشعار',
    'Change About Text': 'تغيير نص "من أنا"',
    'Control Site Live': 'التحكم المباشر في الموقع',
    'No projects added yet.': 'لم تُضف مشاريع بعد.',
    'Back': 'العودة',
    'Order Service': 'اطلب خدمة',
    'Cancel Selection': 'إلغاء التحديد',
    'Confirm Order': 'تأكيد الطلب',
    'Service Selected': 'تم تحديد خدمة واحدة',
    'Services Selected': 'تم تحديد %d خدمات',
    'Please select at least one service': 'يرجى تحديد خدمة واحدة على الأقل',
    'Landing Pages': 'صفحات الهبوط',
    'Websites': 'مواقع الويب',
    'Python Scripts': 'سكربتات بايثون',
    'Support & Maintenance': 'الدعم والصيانة',
    'Landing Pages Desc': 'تصميم صفحات هبوط احترافية لزيادة التحويلات والتفاعل.',
    'Websites Desc': 'تطوير مواقع ويب حديثة وسريعة وسهلة الاستخدام.',
    'Python Scripts Desc': 'كتابة سكربتات بايثون لأتمتة المهام وتحليل البيانات.',
    'Support & Maintenance Desc': 'دعم فني وصيانة دورية لضمان استقرار موقعك.'
  },
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    tools: 'Tools',
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact',
    'I offer professional development services tailored to your needs.': 'I offer professional development services tailored to your needs.',
    'More About Me': 'More About Me',
    'Hello, I\'m': 'Hello, I\'m',
    'Building digital solutions': 'I build digital solutions that help you appear professionally and effectively in the digital market',
    'About Me': 'About Me',
    'My Skills': 'My Skills',
    'My Tools': 'My Tools',
    'My Services': 'My Services',
    'Latest Projects': 'Latest %d Projects',
    'Contact Me': 'Contact Me',
    'Your Name': 'Your Name',
    'Your Email': 'Your Email',
    'Your Message': 'Your Message',
    'Send via Email': 'Send via Email',
    'Send via WhatsApp': 'Send via WhatsApp',
    'I am available for collaboration': 'I am available for collaboration and new projects. Feel free to reach out for any inquiries or job offers.',
    'Admin Panel': 'Admin Panel',
    'Add Project': 'Add Project',
    'Add Skill': 'Add Skill',
    'Add Tool': 'Add Tool',
    'Delete Project': 'Delete Project',
    'Delete Skill': 'Delete Skill',
    'Delete Tool': 'Delete Tool',
    'Project Name': 'Project Name',
    'Project URL': 'Project URL',
    'Upload Image': 'Upload Image',
    'Upload Video (optional)': 'Upload Video (optional)',
    'Short Description': 'Short Description',
    'Skill Abbreviation': 'Skill Abbreviation (e.g. HTML)',
    'Full Name': 'Full Name (e.g. HyperText Markup Language)',
    'Tool Abbreviation': 'Tool Abbreviation (e.g. Git)',
    'Save Project': 'Save Project',
    'Add Skill': 'Add Skill',
    'Add Tool': 'Add Tool',
    'Sending...': 'Sending...',
    'Success Email': 'Message sent successfully! I will contact you via email within 24 hours.',
    'Success WhatsApp': 'Message sent successfully! I will contact you via WhatsApp within 24 hours.',
    'Error': 'Failed to send message',
    'Error Network': 'Please check your internet connection and try again.',
    'Error Invalid Email': 'Please enter a valid email address.',
    'Confirm Delete': 'Are you sure you want to delete this item?',
    'Enter Password': 'Enter password to confirm',
    'Incorrect Password': 'Incorrect password',
    'No projects to delete': 'No projects to delete',
    'No skills to delete': 'No skills to delete',
    'No tools to delete': 'No tools to delete',
    'Enter Admin Password': 'Enter Admin Password',
    'This area is protected. Enter the password to continue.': 'This area is protected. Enter the password to continue.',
    'Enter': 'Enter',
    'Cancel': 'Cancel',
    'TikTok Service Notice': 'TikTok Service Notice',
    'Got It': 'Got It',
    'Change Logo': 'Change Logo',
    'Change About Text': 'Change About Text',
    'Control Site Live': 'Control Site Live',
    'No projects added yet.': 'No projects added yet.',
    'Back': 'Back',
    'Order Service': 'Order Service',
    'Cancel Selection': 'Cancel Selection',
    'Confirm Order': 'Confirm Order',
    'Service Selected': '1 service selected',
    'Services Selected': '%d services selected',
    'Please select at least one service': 'Please select at least one service',
    'Landing Pages': 'Landing Pages',
    'Websites': 'Websites',
    'Python Scripts': 'Python Scripts',
    'Support & Maintenance': 'Support & Maintenance',
    'Landing Pages Desc': 'Professional landing pages to increase conversions and engagement.',
    'Websites Desc': 'Modern, fast, and user-friendly websites.',
    'Python Scripts Desc': 'Python scripts for automation and data analysis.',
    'Support & Maintenance Desc': 'Technical support and regular maintenance for stability.'
  }
};
// =======================
// 3. إدارة اللغة
// =======================
let currentLang = localStorage.getItem('lang') || 'en';
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    heroName.textContent = 'عامر';
  } else {
    document.documentElement.removeAttribute('dir');
    heroName.textContent = 'Amer';
  }
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang][key]) {
      const value = translations[lang][key];
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else if (el.tagName === 'LABEL') {
        el.textContent = value;
      } else if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(el.tagName)) {
        el.textContent = value;
      } else if (el.tagName === 'P' && !el.id.startsWith('about-text')) {
        el.textContent = value;
      } else {
        el.textContent = value;
      }
    }
  });
  if (lang === 'ar') {
    aboutText.textContent = 'مرحبًا، أنا عامر من مصر 🇪🇬، مطوّر ويب ومبرمج مهتم بتحويل الأفكار إلى حلول رقمية عملية وفعّالة. بدأت رحلتي في عالم البرمجة بالتعلّم الذاتي، ومع كل مشروع أنجزه أكتسب خبرة أعمق ورؤية أوسع.';
    aboutText2.textContent = 'أعمل على تصميم وبرمجة مواقع عصرية متجاوبة وسهلة الاستخدام، مع التركيز على تجربة المستخدم وأدق التفاصيل. أتقن استخدام HTML، CSS، وJavaScript لتطوير واجهات احترافية، بالإضافة إلى Python لبناء أدوات وتطبيقات ذكية.';
    aboutText3.textContent = 'أسعى دائمًا لتطوير مهاراتي وإضافة تقنيات جديدة إلى صندوق أدواتي، بهدف تقديم أفضل قيمة ممكنة لكل عميل. وأؤمن أن نجاح أي مشروع يبدأ من فهم الهدف والرؤية بوضوح، ثم تحويلهما إلى منتج رقمي يحقق المطلوب بكفاءة واحترافية.';
  } else {
    aboutText.textContent = 'Hello, I\'m Amer from Egypt 🇪🇬, a web developer and programmer passionate about turning ideas into practical and effective digital solutions. I started my journey in programming through self-learning, and with every project I complete, I gain deeper experience and broader vision.';
    aboutText2.textContent = 'I specialize in designing and coding modern, responsive, and user-friendly websites, with a strong focus on user experience and fine details. I master HTML, CSS, and JavaScript to create professional interfaces, along with Python for building smart tools and applications.';
    aboutText3.textContent = 'I always strive to improve my skills and add new technologies to my toolkit, aiming to deliver the highest possible value to every client. I believe that the success of any project starts with a clear understanding of the goal and vision, then transforming them into a digital product that achieves the desired outcome efficiently and professionally.';
  }
  document.title = lang === 'ar' 
    ? 'عامر المطور | حلول برمجية مبتكرة لمستقبل رقمي متطور' 
    : 'Amer Developer | Innovative Software Solutions for an Advanced Digital Future';
  updateProjectsTitle();
  document.querySelectorAll('#language-menu li').forEach(li => {
    li.classList.toggle('active', li.dataset.lang === lang);
  });
  languageMenu.hidden = true;
  renderDeleteProjectList();
  renderDeleteSkillList();
  renderDeleteToolList();
  renderSkills();
  renderTools();
  renderServices();
  // ✅ تم إصلاح الخطأ رقم 1: تأكد من إعادة رسم المشاريع عند تغيير اللغة
  renderProjects(); 
  typingText.textContent = '';
  typeRole();
  showToast(`Language changed to ${lang.toUpperCase()}`);
}
languageSwitcher.addEventListener('click', (e) => {
  e.stopPropagation();
  languageMenu.hidden = !languageMenu.hidden;
});
document.addEventListener('click', (e) => {
  if (!languageSwitcher.contains(e.target)) {
    languageMenu.hidden = true;
  }
});
document.querySelectorAll('#language-menu li').forEach(li => {
  li.addEventListener('click', () => {
    setLanguage(li.dataset.lang);
  });
});
// =======================
// 4. تأثير الكتابة
// =======================
const roles = {
  en: ['Front-end Developer', 'Back-end Developer', 'Full-stack Developer'],
  ar: ['مطوّر واجهات أمامية', 'مطوّر واجهات خلفية', 'مطوّر متكامل']
};
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
function typeRole() {
  const currentRole = roles[currentLang]?.[roleIndex];
  if (!currentRole) return;
  if (isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }
  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => {
      isDeleting = true;
      typeRole();
    }, 1000);
    return;
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles[currentLang].length;
    setTimeout(typeRole, 1500);
    return;
  }
  const typingSpeed = 250;
  const erasingSpeed = 100;
  setTimeout(typeRole, isDeleting ? erasingSpeed : typingSpeed);
}
// =======================
// 5. تأثيرات التمرير والتنقل النشط
// =======================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
      if (id === 'services') {
        orderServiceBtn.style.display = 'inline-flex';
      } else {
        orderServiceBtn.style.display = 'none';
      }
    }
  });
}, { threshold: 0.4, rootMargin: '-80px 0px 0px 0px' });
sections.forEach(section => observer.observe(section));

// ✅ تم إزالة الوظيفة الزائدة updateActiveLink() والأحداث المرتبطة بها (الخطأ رقم 6)
// لا حاجة لها لأن IntersectionObserver يكفي

// =======================
// 6. الوصول للإدارة (8 نقرات)
// =======================
let clickCount = 0;
let lastClickTime = 0;
logoImg.addEventListener('click', () => {
  const now = Date.now();
  if (now - lastClickTime < 2000) {
    clickCount++;
  } else {
    clickCount = 1;
  }
  lastClickTime = now;
  if (clickCount >= 8) {
    openPasswordModal();
    clickCount = 0;
  }
});
const heroAvatar = document.querySelector('.hero-avatar');
let mobileClickCount = 0;
let lastMobileClickTime = 0;
if (heroAvatar) {
  heroAvatar.addEventListener('click', () => {
    if (window.innerWidth > 768) return;
    const now = Date.now();
    if (now - lastMobileClickTime < 2000) {
      mobileClickCount++;
    } else {
      mobileClickCount = 1;
    }
    lastMobileClickTime = now;
    if (mobileClickCount >= 8) {
      openPasswordModal();
      mobileClickCount = 0;
      showToast('Admin access triggered via avatar!');
    }
  });
}
function openPasswordModal() {
  passwordModal.classList.add('show');
  passwordModal.hidden = false;
  adminPassword.value = '';
  passwordError.style.display = 'none';
}
function closePasswordModal() {
  passwordModal.classList.remove('show');
  setTimeout(() => {
    passwordModal.hidden = true;
  }, 300);
}
// =======================
// 7. التحقق من كلمة المرور (بدون تشفير)
// =======================
async function checkPassword() {
  const pass = adminPassword.value;
  const correctPassword = 'ameramer9.1.2010';
  if (pass === correctPassword) {
    closePasswordModal();
    toggleAdminPanel();
    renderDeleteProjectList();
    renderDeleteSkillList();
    renderDeleteToolList();
    showToast('Admin panel unlocked! Manual edit mode enabled.', 'success');
  } else {
    passwordError.textContent = translations[currentLang]['Incorrect Password'];
    passwordError.style.display = 'block';
  }
}
function toggleAdminPanel() {
  adminPanel.style.display = adminPanel.style.display === 'block' ? 'none' : 'block';
}
// =======================
// 8. تحكمات الإدارة
// =======================
function closeAllForms() {
  [formAddProject, formAddSkill, formAddTool, deleteSections].forEach(f => f.style.display = 'none');
}
function openAddProject() { closeAllForms(); formAddProject.style.display = 'block'; }
function openAddSkill() { closeAllForms(); formAddSkill.style.display = 'block'; }
function openAddTool() { closeAllForms(); formAddTool.style.display = 'block'; }
function openDeleteProject() { closeAllForms(); deleteSections.style.display = 'block'; }
function openDeleteSkill() { closeAllForms(); deleteSections.style.display = 'block'; }
function openDeleteTool() { closeAllForms(); deleteSections.style.display = 'block'; }
function changeLogo() {
  const newText = prompt('Upload new logo image path (e.g. /assets/images/new-logo.png):', logoImg.src);
  if (newText && newText.trim()) {
    logoImg.src = newText;
    showToast('Update logo path manually in data.json', 'warning');
  }
}
function changeAboutText() {
  const newText = prompt('Enter new About Me text:', aboutText.textContent);
  if (newText && newText.trim()) {
    aboutText.textContent = newText;
    showToast('Update "about" text manually in data.json', 'warning');
  }
}
// =======================
// 9. وضع التحرير المباشر
// =======================
function enterEditMode() {
  editModeOverlay.style.display = 'block';
  siteFrame.src = './';
}
function exitEditMode() {
  editModeOverlay.style.display = 'none';
}
// =======================
// 10. عرض رفع الملفات
// =======================
[projectImageInput, projectVideoInput].forEach(input => {
  input.addEventListener('change', function() {
    const filenameSpan = this === projectImageInput ? imageFilename : videoFilename;
    const placeholder = this === projectImageInput ? 'Upload Image' : 'Upload Video (optional)';
    filenameSpan.textContent = this.files.length ? this.files[0].name : translations[currentLang][placeholder];
  });
});
// =======================
// 11. إدارة البيانات (باستخدام data.json)
// =======================
const defaultSkills = [
  { short: 'HTML', full: 'HyperText Markup Language', desc_en: 'Structure of web pages and content organization.', desc_ar: 'هيكل صفحات الويب وصياغة المحتوى بطريقة منظمة.' },
  { short: 'CSS', full: 'Cascading Style Sheets', desc_en: 'Styling and adding aesthetic touches to design consistency.', desc_ar: 'تنسيق الصفحات وإضافة لمسات جمالية وتناسق في التصميم.' },
  { short: 'JavaScript', full: 'JavaScript', desc_en: 'Adding interactivity and motion to make the site dynamic.', desc_ar: 'إضافة التفاعلية والحركة لجعل الموقع ديناميكي.' },
  { short: 'Python', full: 'Python', desc_en: 'Programming applications and building smart tools and practical solutions.', desc_ar: 'برمجة التطبيقات وبناء أدوات ذكية وحلول عملية.' },
  { short: 'Tailwind CSS', full: 'Tailwind CSS', desc_en: 'Designing professional interfaces quickly and flexibly with clean code.', desc_ar: 'تصميم واجهات احترافية بسرعة ومرونة باستخدام كود نظيف.' },
  { short: 'AI Tools', full: 'Artificial Intelligence Tools', desc_en: 'Leveraging AI technologies to enhance performance and creativity.', desc_ar: 'استغلال تقنيات الذكاء الاصطناعي لتحسين الأداء والإبداع.' }
];
const defaultTools = [
  { short: 'Git', full: 'Git', desc_en: 'Managing and tracking changes in programming projects.', desc_ar: 'إدارة وتتبع التغييرات في المشاريع البرمجية.' },
  { short: 'GitHub', full: 'GitHub', desc_en: 'Saving and sharing code with easy collaboration.', desc_ar: 'حفظ ومشاركة الأكواد والعمل الجماعي بسهولة.' },
  { short: 'VS Code', full: 'Visual Studio Code', desc_en: 'Powerful and flexible code editor supporting all technologies.', desc_ar: 'محرر أكواد قوي ومرن يدعم جميع التقنيات.' },
  { short: 'Figma', full: 'Figma', desc_en: 'Designing user interfaces and experiences professionally.', desc_ar: 'تصميم واجهات وتجربة مستخدم بشكل احترافي.' },
  { short: 'AI Tools', full: 'Artificial Intelligence Tools', desc_en: 'Using AI tools to improve work and save time.', desc_ar: 'استخدام أدوات الذكاء الاصطناعي في تحسين العمل وتوفير الوقت.' }
];
const defaultProjects = [];
const defaultServices = [
  { name: 'Landing Pages', desc: 'Landing Pages Desc', message: 'أرغب في طلب خدمة تصميم صفحة هبوط.', message_en: 'I want to order a Landing Page service.' },
  { name: 'Websites', desc: 'Websites Desc', message: 'أرغب في طلب خدمة تطوير موقع ويب.', message_en: 'I want to order a Website development service.' },
  { name: 'Python Scripts', desc: 'Python Scripts Desc', message: 'أرغب في طلب خدمة سكربت بايثون.', message_en: 'I want to order a Python script service.' },
  { name: 'Support & Maintenance', desc: 'Support & Maintenance Desc', message: 'أرغب في طلب خدمة الدعم والصيانة.', message_en: 'I want to order a Support & Maintenance service.' }
];
let skills = [];
let tools = [];
let projects = [];
let services = [];
async function loadData() {
  try {
    const response = await fetch('data.json');
    if (response.ok) {
      const data = await response.json();
      skills = data.skills || defaultSkills;
      tools = data.tools || defaultTools;
      projects = data.projects || defaultProjects;
      services = data.services || defaultServices;
    } else {
      skills = defaultSkills;
      tools = defaultTools;
      projects = defaultProjects;
      services = defaultServices;
    }
  } catch (err) {
    console.warn('Could not load data.json, using defaults:', err);
    skills = defaultSkills;
    tools = defaultTools;
    projects = defaultProjects;
    services = defaultServices;
  }
  renderAll();
  setLanguage(currentLang);
}
// تم تعطيل saveData تمامًا
// لا يوجد دالة saveData()
// =======================
// 12. دوال العرض
// =======================
function renderAll() {
  renderSkills();
  renderTools();
  renderProjects();
  renderServices();
}
function renderSkills() {
  if (!skillsGrid) return;
  skillsGrid.innerHTML = '';
  skills.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    const desc = currentLang === 'ar' ? skill.desc_ar : skill.desc_en;
    card.innerHTML = `
      <h3>${skill.short}</h3>
      <p>${desc}</p>
      <div class="tooltip">${currentLang === 'ar' ? `الكامل: ${skill.full}<br>الوصف: ${desc}` : `Full: ${skill.full}<br>Desc: ${desc}`}</div>
    `;
    skillsGrid.appendChild(card);
  });
}
function renderTools() {
  if (!toolsGrid) return;
  toolsGrid.innerHTML = '';
  tools.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    const desc = currentLang === 'ar' ? tool.desc_ar : tool.desc_en;
    card.innerHTML = `
      <h3>${tool.short}</h3>
      <p>${desc}</p>
      <div class="tooltip">${currentLang === 'ar' ? `الكامل: ${tool.full}<br>الوصف: ${desc}` : `Full: ${tool.full}<br>Desc: ${desc}`}</div>
    `;
    toolsGrid.appendChild(card);
  });
}
function renderProjects() {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = '';
  if (projects.length === 0) {
    projectsEmpty.style.display = 'block';
    return;
  }
  projectsEmpty.style.display = 'none';
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    // ✅ تم استخدام نظام الترجمة هنا أيضًا
    const desc = currentLang === 'ar' ? project.desc_ar : project.desc_en;
    card.innerHTML = `
      <img src="${project.image}" alt="${project.name}" class="project-img">
      <div class="project-content">
        <h3>${project.name}</h3>
        <p>${desc}</p>
        <a href="${project.link}" class="btn" target="_blank">View Project</a>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
  updateProjectsTitle();
}
function updateProjectsTitle() {
  const count = projects.length;
  const key = 'Latest Projects';
  const template = translations[currentLang][key];
  if (projectsTitle) {
    projectsTitle.textContent = template.replace('%d', count);
  }
}
function renderServices() {
  if (!servicesGrid) return;
  servicesGrid.innerHTML = '';
  services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    const descKey = service.desc;
    const desc = translations[currentLang][descKey];
    const name = translations[currentLang][service.name];
    card.innerHTML = `
      <h3>${name}</h3>
      <p>${desc}</p>
    `;
    servicesGrid.appendChild(card);
  });
}
// =======================
// 13. قوائم الحذف
// =======================
function renderDeleteProjectList() {
  if (!deleteProjectList) return;
  deleteProjectList.innerHTML = '';
  if (projects.length === 0) {
    deleteProjectList.innerHTML = `<p>${translations[currentLang]['No projects to delete']}</p>`;
    return;
  }
  projects.forEach((p, i) => {
    const item = document.createElement('div');
    item.className = 'delete-item';
    item.innerHTML = `<span>${p.name}</span><button onclick="confirmAndDelete('project', ${i})">🗑️</button>`;
    deleteProjectList.appendChild(item);
  });
}
function renderDeleteSkillList() {
  if (!deleteSkillList) return;
  deleteSkillList.innerHTML = '';
  if (skills.length === 0) {
    deleteSkillList.innerHTML = `<p>${translations[currentLang]['No skills to delete']}</p>`;
    return;
  }
  skills.forEach((s, i) => {
    const item = document.createElement('div');
    item.className = 'delete-item';
    item.innerHTML = `<span>${s.short}</span><button onclick="confirmAndDelete('skill', ${i})">🗑️</button>`;
    deleteSkillList.appendChild(item);
  });
}
function renderDeleteToolList() {
  if (!deleteToolList) return;
  deleteToolList.innerHTML = '';
  if (tools.length === 0) {
    deleteToolList.innerHTML = `<p>${translations[currentLang]['No tools to delete']}</p>`;
    return;
  }
  tools.forEach((t, i) => {
    const item = document.createElement('div');
    item.className = 'delete-item';
    item.innerHTML = `<span>${t.short}</span><button onclick="confirmAndDelete('tool', ${i})">🗑️</button>`;
    deleteToolList.appendChild(item);
  });
}
// =======================
// 14. تأكيد والحذف
// =======================
async function confirmAndDelete(type, index) {
  const t = translations[currentLang];
  if (!confirm(t['Confirm Delete'])) return;
  const pass = prompt(t['Enter Password']);
  if (!pass) return;
  const correctPassword = 'ameramer9.1.2010';
  if (pass === correctPassword) {
    if (type === 'project') projects.splice(index, 1);
    else if (type === 'skill') skills.splice(index, 1);
    else if (type === 'tool') tools.splice(index, 1);
    renderDeleteProjectList();
    renderDeleteSkillList();
    renderDeleteToolList();
    renderAll();
    showToast('Item deleted from preview. Update data.json manually!', 'warning');
  } else {
    showToast(t['Incorrect Password'], 'error');
  }
}
// =======================
// 15. نموذج الاتصال - البريد الإلكتروني وواتساب
// =======================
document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  setLanguage(currentLang);
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  const waNumber = '201280787721';
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  sendWhatsAppBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const t = translations[currentLang];
    if (!name || !email || !message) {
      showToast(t['Error'], 'error');
      return;
    }
    if (!isValidEmail(email)) {
      showToast(t['Error Invalid Email'], 'error');
      return;
    }
    let whatsappMessage = `Hello Amer Abdo,
`;
    whatsappMessage += `My name is ${name}
`;
    whatsappMessage += `Email: ${email}
`;
    whatsappMessage += `Message: ${message}
`;
    whatsappMessage += `Sent from your portfolio website.`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  });
  sendEmailBtn.addEventListener('click', async () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const t = translations[currentLang];
    if (!name || !email || !message) {
      showToast(t['Error'], 'error');
      return;
    }
    if (!isValidEmail(email)) {
      showToast(t['Error Invalid Email'], 'error');
      return;
    }
    const originalText = sendEmailBtn.textContent;
    sendEmailBtn.textContent = t['Sending...'];
    sendEmailBtn.disabled = true;
    try {
      const response = await fetch('https://formspree.io/f/xdkdjqzo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      if (response.ok) {
        showToast(t['Success Email'], 'success');
        contactForm.reset();
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      showToast(t['Error Network'], 'error');
    } finally {
      sendEmailBtn.textContent = originalText;
      sendEmailBtn.disabled = false;
    }
  });
});
// =======================
// 16. نماذج الإدارة
// =======================
formProject.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('input-project-name').value;
  const link = document.getElementById('input-project-link').value;
  const imageFile = projectImageInput.files[0];
  const videoFile = projectVideoInput.files[0];
  const descEn = document.getElementById('input-project-desc-en').value;
  const descAr = document.getElementById('input-project-desc-ar').value;
  const imageUrl = imageFile ? `/assets/images/${imageFile.name}` : 'assets/images/project-placeholder.jpg';
  const videoUrl = videoFile ? `/assets/videos/${videoFile.name}` : '';
  const newProject = {
    name,
    link,
    image: imageUrl,
    video: videoUrl,
    desc_en: descEn,
    desc_ar: descAr
  };
  const code = JSON.stringify(newProject, null, 2);
  prompt('✅ انسخ هذا الكود وأضفه يدويًا إلى قسم "projects" في ملف data.json:', code);
  projects.unshift(newProject);
  renderAll();
  formProject.reset();
  imageFilename.textContent = translations[currentLang]['Upload Image'];
  videoFilename.textContent = translations[currentLang]['Upload Video (optional)'];
  showToast('Project added to preview. Update data.json manually!', 'success');
});
formSkill.addEventListener('submit', (e) => {
  e.preventDefault();
  const short = document.getElementById('input-skill-short').value;
  const full = document.getElementById('input-skill-full').value;
  const descEn = document.getElementById('input-skill-desc-en').value;
  const descAr = document.getElementById('input-skill-desc-ar').value;
  const newSkill = {
    short,
    full,
    desc_en: descEn,
    desc_ar: descAr
  };
  const code = JSON.stringify(newSkill, null, 2);
  prompt('✅ انسخ هذا الكود وأضفه يدويًا إلى قسم "skills" في ملف data.json:', code);
  skills.push(newSkill);
  renderAll();
  formSkill.reset();
  showToast('Skill added to preview. Update data.json manually!', 'success');
});
formTool.addEventListener('submit', (e) => {
  e.preventDefault();
  const short = document.getElementById('input-tool-short').value;
  const full = document.getElementById('input-tool-full').value;
  const descEn = document.getElementById('input-skill-desc-en').value;
  const descAr = document.getElementById('input-skill-desc-ar').value;
  const newTool = {
    short,
    full,
    desc_en: descEn,
    desc_ar: descAr
  };
  const code = JSON.stringify(newTool, null, 2);
  prompt('✅ انسخ هذا الكود وأضفه يدويًا إلى قسم "tools" في ملف data.json:', code);
  tools.push(newTool);
  renderAll();
  formTool.reset();
  showToast('Tool added to preview. Update data.json manually!', 'success');
});
// =======================
// 17. الإشعارات وردود الفعل
// =======================
function showToast(message, type = 'success') {
  if (!toast) return;
  toast.textContent = message;
  toast.className = 'toast';
  toast.classList.add(type, 'show');
  setTimeout(() => toast.classList.remove('show'), 5000);
}
// =======================
// 18. منطق قسم الخدمات
// =======================
orderServiceBtn.addEventListener('click', () => {
  document.querySelectorAll('.service-card').forEach(card => {
    card.classList.add('selectable');
    card.classList.remove('selected');
    card.onclick = () => {
      card.classList.toggle('selected');
    };
  });
  servicesActions.style.display = 'block';
  orderServiceBtn.style.display = 'none';
});
cancelSelection.addEventListener('click', () => {
  document.querySelectorAll('.service-card').forEach(card => {
    card.classList.remove('selectable', 'selected');
    card.onclick = null;
  });
  servicesActions.style.display = 'none';
  orderServiceBtn.style.display = 'inline-flex';
});
confirmOrder.addEventListener('click', () => {
  const selected = document.querySelectorAll('.service-card.selected');
  if (selected.length === 0) {
    showToast(translations[currentLang]['Please select at least one service'], 'error');
    return;
  }
  const serviceNames = Array.from(selected).map(card => {
    const h3 = card.querySelector('h3').textContent;
    return services.find(s => translations[currentLang][s.name] === h3);
  });
  let message = '';
  if (serviceNames.length === 1) {
    message = currentLang === 'ar' ? serviceNames[0].message : serviceNames[0].message_en;
  } else {
    const messages = serviceNames.map(s => currentLang === 'ar' ? s.message : s.message_en);
    message = messages.join('\n');
  }
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  messageInput.value = message;
  showToast('Service request ready! Please fill your name and email.', 'success');
  document.querySelectorAll('.service-card').forEach(card => {
    card.classList.remove('selectable', 'selected');
    card.onclick = null;
  });
  servicesActions.style.display = 'none';
  orderServiceBtn.style.display = 'inline-flex';
});

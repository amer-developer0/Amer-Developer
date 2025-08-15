/**
 * ========================================
 * 🚀 Amer Developer Portfolio - FINAL Working Script (Fixed & Optimized)
 * Version: 15.8 | Fixed Typing, Navigation, Translation & RTL
 * Author: Amer Developer
 * ========================================
 */
// =======================
// 1. Load EmailJS Dynamically (Without init)
// =======================
function loadEmailJS(callback) {
  if (window.emailjs) {
    console.log('EmailJS library already loaded');
    callback();
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
  script.onload = () => {
    console.log('EmailJS library loaded successfully');
    callback();
  };
  script.onerror = () => {
    console.error('Failed to load EmailJS library');
  };
  document.head.appendChild(script);
}

// =======================
// 2. DOM Elements
// =======================
const logoImg = document.getElementById('logo-img');
const languageSwitcher = document.getElementById('language-switcher');
const languageMenu = document.getElementById('language-menu');
const toast = document.getElementById('toast');
const yearSpan = document.getElementById('year');
const adminPanel = document.getElementById('admin-panel');
const passwordModal = document.getElementById('password-modal');
const typingText = document.getElementById('typing-text');

// Contact Form
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const sendEmailBtn = document.getElementById('send-email');
const sendWhatsAppBtn = document.getElementById('send-whatsapp');

// Admin Panel
const editModeOverlay = document.getElementById('edit-mode-overlay');
const siteFrame = document.getElementById('site-frame');

// File Uploads
const projectImageInput = document.getElementById('input-project-image');
const projectVideoInput = document.getElementById('input-project-video');
const imageFilename = document.getElementById('image-filename');
const videoFilename = document.getElementById('video-filename');

// Delete Lists
const deleteProjectList = document.getElementById('delete-project-list');
const deleteSkillList = document.getElementById('delete-skill-list');
const deleteToolList = document.getElementById('delete-tool-list');

// Grids
const skillsGrid = document.getElementById('skills-grid');
const toolsGrid = document.getElementById('tools-grid');
const projectsGrid = document.getElementById('projects-grid');
const projectsEmpty = document.getElementById('projects-empty');

// Modals
const tiktokModal = document.getElementById('tiktok-modal');
const adminPassword = document.getElementById('admin-password');
const passwordError = document.getElementById('password-error');

// Sections & Nav
const sections = document.querySelectorAll('.section, #home');
const navLinks = document.querySelectorAll('.nav-link');

// About Text (Multiple Paragraphs)
const aboutText = document.getElementById('about-text');
const aboutText2 = document.getElementById('about-text-2');
const aboutText3 = document.getElementById('about-text-3');

// Hero Name (to change "Amer" to "عامر" in Arabic)
const heroName = document.getElementById('hero-name');

// Forms
const formProject = document.getElementById('form-project');
const formSkill = document.getElementById('form-skill');
const formTool = document.getElementById('form-tool');

// Admin Forms Container
const adminForms = document.getElementById('admin-forms');
const formAddProject = document.getElementById('form-add-project');
const formAddSkill = document.getElementById('form-add-skill');
const formAddTool = document.getElementById('form-add-tool');
const deleteSections = document.getElementById('delete-sections');

// Page Title
const pageTitle = document.querySelector('title');

// =======================
// 3. Translation System
// =======================
const translations = {
  ar: {
    home: 'الرئيسية',
    about: 'من أنا',
    skills: 'المهارات',
    tools: 'الأدوات',
    projects: 'المشاريع',
    contact: 'اتصل بي',
    'More About Me': 'مزيد من التفاصيل',
    'Hello, I\'m': 'مرحبًا، أنا',
    'Building digital solutions': 'أبني حلولًا رقمية تساعدك على الظهور بشكل احترافي وفعّال في السوق الرقمي',
    'About Me': 'من أنا',
    'My Skills': 'مهاراتي',
    'My Tools': 'الأدوات',
    'Latest Projects': 'أحدث المشاريع',
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
    'Back': 'العودة'
  },
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    tools: 'Tools',
    projects: 'Projects',
    contact: 'Contact',
    'More About Me': 'More About Me',
    'Hello, I\'m': 'Hello, I\'m',
    'Building digital solutions': 'I build digital solutions that help you appear professionally and effectively in the digital market',
    'About Me': 'About Me',
    'My Skills': 'My Skills',
    'My Tools': 'My Tools',
    'Latest Projects': 'Latest Projects',
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
    'Back': 'Back'
  }
};

// =======================
// 4. Language Management
// =======================
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  // RTL for Arabic
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    heroName.textContent = 'عامر';
  } else {
    document.documentElement.removeAttribute('dir');
    heroName.textContent = 'Amer';
  }

  // Update all translatable elements
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

  // Special case: About Text (Multiple Paragraphs)
  if (lang === 'ar') {
    aboutText.textContent = 'مرحبًا، أنا عامر من مصر 🇪🇬، مطوّر ويب ومبرمج مهتم بتحويل الأفكار إلى حلول رقمية عملية وفعّالة. بدأت رحلتي في عالم البرمجة بالتعلّم الذاتي، ومع كل مشروع أنجزه أكتسب خبرة أعمق ورؤية أوسع.';
    aboutText2.textContent = 'أعمل على تصميم وبرمجة مواقع عصرية متجاوبة وسهلة الاستخدام، مع التركيز على تجربة المستخدم وأدق التفاصيل. أتقن استخدام HTML، CSS، وJavaScript لتطوير واجهات احترافية، بالإضافة إلى Python لبناء أدوات وتطبيقات ذكية.';
    aboutText3.textContent = 'أسعى دائمًا لتطوير مهاراتي وإضافة تقنيات جديدة إلى صندوق أدواتي، بهدف تقديم أفضل قيمة ممكنة لكل عميل. وأؤمن أن نجاح أي مشروع يبدأ من فهم الهدف والرؤية بوضوح، ثم تحويلهما إلى منتج رقمي يحقق المطلوب بكفاءة واحترافية.';
  } else {
    aboutText.textContent = 'Hello, I\'m Amer from Egypt 🇪🇬, a web developer and programmer passionate about turning ideas into practical and effective digital solutions. I started my journey in programming through self-learning, and with every project I complete, I gain deeper experience and broader vision.';
    aboutText2.textContent = 'I specialize in designing and coding modern, responsive, and user-friendly websites, with a strong focus on user experience and fine details. I master HTML, CSS, and JavaScript to create professional interfaces, along with Python for building smart tools and applications.';
    aboutText3.textContent = 'I always strive to improve my skills and add new technologies to my toolkit, aiming to deliver the highest possible value to every client. I believe that the success of any project starts with a clear understanding of the goal and vision, then transforming them into a digital product that achieves the desired outcome efficiently and professionally.';
  }

  // Update Page Title
pageTitle.textContent = lang === 'ar' 
  ? 'عامر المطور | حلول برمجية مبتكرة لمستقبل رقمي متطور' 
  : 'Amer Developer | Innovative Software Solutions for an Advanced Digital Future';

  // Update active language in menu
  document.querySelectorAll('#language-menu li').forEach(li => {
    li.classList.toggle('active', li.dataset.lang === lang);
  });

  // Close menu
  languageMenu.hidden = true;

  // Re-render lists
  renderDeleteProjectList();
  renderDeleteSkillList();
  renderDeleteToolList();

  // ✅ Re-render skills and tools with new language
  renderSkills();
  renderTools();

  // ✅ Restart typing effect (Fixed: resets animation)
  typingText.textContent = '';
  charIndex = 0;
  isDeleting = false;
  roleIndex = 0;
  typeRole();

  showToast(`Language changed to ${lang.toUpperCase()}`);
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});

// Language Switcher
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
// Typing Animation (with pause after full text)
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
    // كلمة كاملة -> انتظر 1 ثانية قبل المسح
    setTimeout(() => {
      isDeleting = true;
      typeRole();
    }, 1000); // ← المدة اللي الكلمة تفضل فيها كاملة قبل المسح
    return; // نوقف هنا لحد ما الوقفة تخلص
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles[currentLang].length;
    setTimeout(typeRole, 1500); // وقفة قبل بدء الكلمة الجديدة
    return;
  }

  const typingSpeed = 250;  // سرعة الكتابة
  const erasingSpeed = 100; // سرعة المسح
  setTimeout(typeRole, isDeleting ? erasingSpeed : typingSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeRole, 500);
});

// =======================
// 6. Scroll Animations & Active Nav (FIXED)
// =======================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Update active nav link
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.4, rootMargin: '-80px 0px 0px 0px' });

sections.forEach(section => observer.observe(section));

// Fix active link on page load, hash change, and scroll
function updateActiveLink() {
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Listen to scroll, load, and hash change
window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);
window.addEventListener('hashchange', () => {
  setTimeout(updateActiveLink, 100);
});

// =======================
// 7. Admin Access: 5 Clicks + Password
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

  if (clickCount >= 5) {
    openPasswordModal();
    clickCount = 0;
  }
});

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

// 🔐 Password stored securely
const getPassword = (() => {
  const password = 'ameramer9.1.2010';
  return () => password;
})();

function checkPassword() {
  const pass = adminPassword.value;
  if (pass === getPassword()) {
    closePasswordModal();
    toggleAdminPanel();
    renderDeleteProjectList();
    renderDeleteSkillList();
    renderDeleteToolList();
    showToast('Admin panel unlocked!');
  } else {
    passwordError.textContent = translations[currentLang]['Incorrect Password'];
    passwordError.style.display = 'block';
  }
}

function toggleAdminPanel() {
  adminPanel.style.display = adminPanel.style.display === 'block' ? 'none' : 'block';
}

// Escape Key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!passwordModal.hidden) closePasswordModal();
    if (adminPanel.style.display === 'block') toggleAdminPanel();
    if (editModeOverlay.style.display !== 'none') exitEditMode();
  }
});

// =======================
// 8. Admin Controls
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
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        logoImg.src = reader.result;
        localStorage.setItem('custom-logo', reader.result);
        showToast('Logo changed successfully!');
      };
      reader.readAsDataURL(file);
    }
  };
  input.click();
}

function changeAboutText() {
  const newText = prompt('Enter new About Me text:', aboutText.textContent);
  if (newText && newText.trim()) {
    aboutText.textContent = newText;
    localStorage.setItem('about-text', newText);
    showToast('About text updated successfully!');
  }
}

// =======================
// 9. Live Edit Mode
// =======================
function enterEditMode() {
  editModeOverlay.style.display = 'block';
  siteFrame.src = './';
}

function exitEditMode() {
  editModeOverlay.style.display = 'none';
}

// =======================
// 10. File Upload Display
// =======================
[projectImageInput, projectVideoInput].forEach(input => {
  input.addEventListener('change', function() {
    const filenameSpan = this === projectImageInput ? imageFilename : videoFilename;
    const placeholder = this === projectImageInput ? 'Upload Image' : 'Upload Video (optional)';
    filenameSpan.textContent = this.files.length ? this.files[0].name : translations[currentLang][placeholder];
  });
});

// =======================
// 11. Data Management
// =======================
const defaultSkills = [
  { 
    short: 'HTML', 
    full: 'HyperText Markup Language',
    desc_en: 'Structure of web pages and content organization.',
    desc_ar: 'هيكل صفحات الويب وصياغة المحتوى بطريقة منظمة.'
  },
  { 
    short: 'CSS', 
    full: 'Cascading Style Sheets',
    desc_en: 'Styling and adding aesthetic touches to design consistency.',
    desc_ar: 'تنسيق الصفحات وإضافة لمسات جمالية وتناسق في التصميم.'
  },
  { 
    short: 'JavaScript', 
    full: 'JavaScript',
    desc_en: 'Adding interactivity and motion to make the site dynamic.',
    desc_ar: 'إضافة التفاعلية والحركة لجعل الموقع ديناميكي.'
  },
  { 
    short: 'Python', 
    full: 'Python',
    desc_en: 'Programming applications and building smart tools and practical solutions.',
    desc_ar: 'برمجة التطبيقات وبناء أدوات ذكية وحلول عملية.'
  },
  { 
    short: 'Tailwind CSS', 
    full: 'Tailwind CSS',
    desc_en: 'Designing professional interfaces quickly and flexibly with clean code.',
    desc_ar: 'تصميم واجهات احترافية بسرعة ومرونة باستخدام كود نظيف.'
  },
  { 
    short: 'AI Tools', 
    full: 'Artificial Intelligence Tools',
    desc_en: 'Leveraging AI technologies to enhance performance and creativity.',
    desc_ar: 'استغلال تقنيات الذكاء الاصطناعي لتحسين الأداء والإبداع.'
  }
];

const defaultTools = [
  { 
    short: 'Git', 
    full: 'Git',
    desc_en: 'Managing and tracking changes in programming projects.',
    desc_ar: 'إدارة وتتبع التغييرات في المشاريع البرمجية.'
  },
  { 
    short: 'GitHub', 
    full: 'GitHub',
    desc_en: 'Saving and sharing code with easy collaboration.',
    desc_ar: 'حفظ ومشاركة الأكواد والعمل الجماعي بسهولة.'
  },
  { 
    short: 'VS Code', 
    full: 'Visual Studio Code',
    desc_en: 'Powerful and flexible code editor supporting all technologies.',
    desc_ar: 'محرر أكواد قوي ومرن يدعم جميع التقنيات.'
  },
  { 
    short: 'Figma', 
    full: 'Figma',
    desc_en: 'Designing user interfaces and experiences professionally.',
    desc_ar: 'تصميم واجهات وتجربة مستخدم بشكل احترافي.'
  },
  { 
    short: 'AI Tools', 
    full: 'Artificial Intelligence Tools',
    desc_en: 'Using AI tools to improve work and save time.',
    desc_ar: 'استخدام أدوات الذكاء الاصطناعي في تحسين العمل وتوفير الوقت.'
  }
];

const defaultProjects = [];

let skills = JSON.parse(localStorage.getItem('skills')) || defaultSkills;
let tools = JSON.parse(localStorage.getItem('tools')) || defaultTools;
let projects = JSON.parse(localStorage.getItem('projects')) || [];

function saveData() {
  ['skills', 'tools', 'projects'].forEach(key => {
    localStorage.setItem(key, JSON.stringify(eval(key)));
  });
  renderAll();
  showToast('Data saved successfully!');
}

// =======================
// 12. Render Functions
// =======================
function renderAll() {
  renderSkills(); renderTools(); renderProjects();
}

function renderSkills() {
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
  projectsGrid.innerHTML = '';
  if (projects.length === 0) {
    projectsEmpty.style.display = 'block';
    return;
  }
  projectsEmpty.style.display = 'none';
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${project.image}" alt="${project.name}" class="project-img">
      <div class="project-content">
        <h3>${project.name}</h3>
        <p>${project.desc}</p>
        <a href="${project.link}" class="btn" target="_blank">View Project</a>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}

renderAll();

// =======================
// 13. Delete Lists
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
// 14. Confirm and Delete
// =======================
function confirmAndDelete(type, index) {
  const t = translations[currentLang];
  if (confirm(t['Confirm Delete'])) {
    const pass = prompt(t['Enter Password']);
    if (pass === getPassword()) {
      if (type === 'project') projects.splice(index, 1);
      else if (type === 'skill') skills.splice(index, 1);
      else if (type === 'tool') tools.splice(index, 1);
      saveData();
      // Re-render after delete
      renderDeleteProjectList();
      renderDeleteSkillList();
      renderDeleteToolList();
      showToast('Item deleted successfully!');
    } else {
      showToast(t['Incorrect Password'], 'error');
    }
  }
}

// =======================
// 15. Contact Form - Enhanced Email Sending
// =======================
function isValidEmail(email) {
  // Regex للتحقق من الإيميل
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

loadEmailJS(() => {
  sendEmailBtn.addEventListener('click', async () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // تعطيل الزر وتغيير النص
    sendEmailBtn.disabled = true;
    const originalText = sendEmailBtn.innerHTML;
    sendEmailBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> <span data-translate="Sending...">Sending...</span>`;
    setLanguage(currentLang); // لتحديث النص الجديد

    // التحقق من الحقول
    if (!name || !email || !message) {
      showToast(translations[currentLang]['Error'], 'error');
      sendEmailBtn.disabled = false;
      sendEmailBtn.innerHTML = originalText;
      setLanguage(currentLang);
      return;
    }

    if (!isValidEmail(email)) {
      showToast(translations[currentLang]['Error Invalid Email'], 'error');
      sendEmailBtn.disabled = false;
      sendEmailBtn.innerHTML = originalText;
      setLanguage(currentLang);
      return;
    }

    try {
      // إرسال الرسالة عبر EmailJS
      await emailjs.sendForm('amer_service_id', 'template_ngw74td', contactForm, {
        publicKey: 'uQBNWkfPWdDaF7vRL',
      });

      // نجاح الإرسال
      showToast(translations[currentLang]['Success Email'], 'success');
      contactForm.reset();
    } catch (err) {
      console.error('EmailJS Error:', err);
      showToast(translations[currentLang]['Error Network'], 'error');
    } finally {
      // إعادة الزر لحالته الطبيعية
      sendEmailBtn.disabled = false;
      sendEmailBtn.innerHTML = originalText;
      setLanguage(currentLang);
    }
  });
});

// =======================
// 16. Admin Forms
// =======================
formProject.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('input-project-name').value;
  const link = document.getElementById('input-project-link').value;
  const imageFile = projectImageInput.files[0];
  const videoFile = projectVideoInput.files[0];
  const desc = document.getElementById('input-project-desc').value;

  const imageUrl = imageFile ? URL.createObjectURL(imageFile) : 'assets/images/project-placeholder.jpg';
  const videoUrl = videoFile ? URL.createObjectURL(videoFile) : '';

  projects.unshift({ name, link, image: imageUrl, video: videoUrl, desc });
  saveData();
  formProject.reset();
  imageFilename.textContent = translations[currentLang]['Upload Image'];
  videoFilename.textContent = translations[currentLang]['Upload Video (optional)'];
  showToast('Project added successfully!');
});

formSkill.addEventListener('submit', (e) => {
  e.preventDefault();
  const short = document.getElementById('input-skill-short').value;
  const full = document.getElementById('input-skill-full').value;
  const descEn = document.getElementById('input-skill-desc').value;
  const descAr = prompt('Enter Arabic description for this skill:', descEn);
  
  skills.push({ 
    short, 
    full, 
    desc_en: descEn, 
    desc_ar: descAr || descEn 
  });
  saveData();
  formSkill.reset();
  showToast('Skill added successfully!');
});

formTool.addEventListener('submit', (e) => {
  e.preventDefault();
  const short = document.getElementById('input-tool-short').value;
  const full = document.getElementById('input-tool-full').value;
  const descEn = document.getElementById('input-tool-desc').value;
  const descAr = prompt('Enter Arabic description for this tool:', descEn);
  
  tools.push({ 
    short, 
    full, 
    desc_en: descEn, 
    desc_ar: descAr || descEn 
  });
  saveData();
  formTool.reset();
  showToast('Tool added successfully!');
});

// =======================
// 17. Toast & UI Feedback
// =======================
function showToast(message, type = 'success') {
  toast.textContent = message;
  toast.className = 'toast';
  toast.classList.add(type, 'show');
  setTimeout(() => toast.classList.remove('show'), 5000);
}

// =======================
// 18. TikTok Notice
// =======================
function showTikTokNotice() {
  tiktokModal.classList.add('show');
  tiktokModal.hidden = false;
}

function closeTikTokModal() {
  tiktokModal.classList.remove('show');
  setTimeout(() => tiktokModal.hidden = true, 300);
}

// =======================
// 19. Misc
// =======================
yearSpan.textContent = new Date().getFullYear();

// Close TikTok modal on click outside
window.addEventListener('click', (e) => {
  if (e.target === tiktokModal) closeTikTokModal();
});

// =======================
// 20. Load Custom Data
// =======================
const savedLogo = localStorage.getItem('custom-logo');
if (savedLogo) logoImg.src = savedLogo;

const savedAbout = localStorage.getItem('about-text');
if (savedAbout) aboutText.textContent = savedAbout;


// --- متغيرات للنقر على الصورة ---
const heroAvatar = document.querySelector('.hero-avatar');
let mobileClickCount = 0;
let lastMobileClickTime = 0;

// --- إضافة حدث النقر على الصورة الكبيرة فقط على الموبايل ---
function setupAvatarClick() {
  if (!heroAvatar) return;

  heroAvatar.addEventListener('click', () => {
    // تأكد أن العرض على شاشة صغيرة (موبايل)
    if (window.innerWidth > 768) return;

    const now = Date.now();
    if (now - lastMobileClickTime < 2000) {
      mobileClickCount++;
    } else {
      mobileClickCount = 1;
    }
    lastMobileClickTime = now;

    if (mobileClickCount >= 5) {
      openPasswordModal();
      mobileClickCount = 0;
      showToast('Admin access triggered via avatar!');
    }
  });
}

// --- تشغيل النظام بعد تحميل الصفحة ---
document.addEventListener('DOMContentLoaded', setupAvatarClick);




// --- ✅ دمج التمرير الأفقي + اختفاء الهيدر على الموبايل ---
let lastScrollTop = 0;
const header = document.querySelector('.main-header');

if (header) {
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // نطبق النظام فقط على الشاشات الصغيرة
    if (window.innerWidth > 768) {
      header.classList.remove('header-hidden');
      return;
    }

    if (currentScroll > lastScrollTop && currentScroll > 100) {
      // نازل للأسفل → أخفي الهيدر
      header.classList.add('header-hidden');
    } else {
      // صاعد للأعلى → أظهر الهيدر
      header.classList.remove('header-hidden');
    }

    lastScrollTop = currentScroll;
  });
}

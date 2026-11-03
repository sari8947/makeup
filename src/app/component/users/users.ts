// מייבאים את הדקורטור שמגדיר מחלקה כקומפוננטת Angular.
import { Component } from '@angular/core';
// מייבאים את טופס הוספת איש הקשר ואת טיפוס הנתונים שהוא מחזיר.
import { AddContact, NewContact } from './add-contact/add-contact';

// מגדיר אילו אפשרויות סינון קיימות ברשימת אנשי הקשר.
type ContactFilter = 'all' | 'vip';

// מתאר את כל המידע שנשמר עבור איש קשר ברשימה.
interface Contact {
  // מזהה ייחודי שמאפשר ל-Angular לעקוב אחרי אנשי קשר.
  id: number;
  // השם המלא של איש הקשר.
  name: string;
  // ראשי התיבות שמופיעים במקום תמונת פרופיל.
  initials: string;
  // כתובת הדואר האלקטרוני של איש הקשר.
  email: string;
  // מספר הטלפון של איש הקשר.
  phone: string;
  // צבע הרקע של סמל ראשי התיבות בכרטיס.
  color: string;
  // מציין אם איש הקשר מסומן כאיש קשר VIP.
  vip: boolean;
}

// הגדרות הקומפוננטה של רשימת אנשי הקשר.
@Component({
  // מאפשר להשתמש בטופס הוספת איש קשר בתבנית של הקומפוננטה.
  imports: [AddContact],
  // השם שבו משתמשים כדי להציג את הקומפוננטה בתבנית אחרת.
  selector: 'app-users',
  // קובץ העיצוב של הקומפוננטה.
  styleUrl: './users.css',
  // קובץ ה-HTML של הקומפוננטה.
  templateUrl: './users.html',
})
// הקומפוננטה מנהלת את הנתונים והפעולות של רשימת אנשי הקשר.
export class Users {
  // אפשרויות הסינון שמוצגות מעל רשימת אנשי הקשר.
  readonly filters: { label: string; value: ContactFilter }[] = [
    // הצגת כל אנשי הקשר.
    { label: 'הכל', value: 'all' },
    // הצגת אנשי הקשר שסומנו כ-VIP בלבד.
    { label: 'אנשי קשר VIP', value: 'vip' },
  ];

  // אנשי הקשר לדוגמה שמופיעים ברשימה בעת טעינת הקומפוננטה.
  contacts: Contact[] = [
    // איש הקשר הראשון ברשימה.
    {
      // מזהה ייחודי של איש הקשר.
      id: 1,
      // שם איש הקשר.
      name: 'נועה לוי',
      // ראשי התיבות לתצוגה.
      initials: 'נל',
      // כתובת המייל ליצירת קשר.
      email: 'noa.levi@example.com',
      // מספר הטלפון ליצירת קשר.
      phone: '050-123-4567',
      // צבע הכרטיס של איש הקשר.
      color: '#e9d8ff',
      // איש הקשר מסומן כ-VIP.
      vip: true,
    },
    // איש הקשר השני ברשימה.
    {
      // מזהה ייחודי של איש הקשר.
      id: 2,
      // שם איש הקשר.
      name: 'איתי כהן',
      // ראשי התיבות לתצוגה.
      initials: 'אכ',
      // כתובת המייל ליצירת קשר.
      email: 'itai.cohen@example.com',
      // מספר הטלפון ליצירת קשר.
      phone: '052-234-5678',
      // צבע הכרטיס של איש הקשר.
      color: '#d8eaff',
      // איש הקשר אינו מסומן כ-VIP.
      vip: false,
    },
    // איש הקשר השלישי ברשימה.
    {
      // מזהה ייחודי של איש הקשר.
      id: 3,
      // שם איש הקשר.
      name: 'מאיה אברהם',
      // ראשי התיבות לתצוגה.
      initials: 'מא',
      // כתובת המייל ליצירת קשר.
      email: 'maya.avraham@example.com',
      // מספר הטלפון ליצירת קשר.
      phone: '054-345-6789',
      // צבע הכרטיס של איש הקשר.
      color: '#ffe5d5',
      // איש הקשר אינו מסומן כ-VIP.
      vip: false,
    },
    // איש הקשר הרביעי ברשימה.
    {
      // מזהה ייחודי של איש הקשר.
      id: 4,
      // שם איש הקשר.
      name: 'עומר רז',
      // ראשי התיבות לתצוגה.
      initials: 'ער',
      // כתובת המייל ליצירת קשר.
      email: 'omer.raz@example.com',
      // מספר הטלפון ליצירת קשר.
      phone: '050-456-7890',
      // צבע הכרטיס של איש הקשר.
      color: '#d9f1e6',
      // איש הקשר אינו מסומן כ-VIP.
      vip: false,
    },
    // איש הקשר החמישי ברשימה.
    {
      // מזהה ייחודי של איש הקשר.
      id: 5,
      // שם איש הקשר.
      name: 'שירה מזרחי',
      // ראשי התיבות לתצוגה.
      initials: 'שמ',
      // כתובת המייל ליצירת קשר.
      email: 'shira.mizrahi@example.com',
      // מספר הטלפון ליצירת קשר.
      phone: '052-567-8901',
      // צבע הכרטיס של איש הקשר.
      color: '#ffe0e8',
      // איש הקשר מסומן כ-VIP.
      vip: true,
    },
    // איש הקשר השישי ברשימה.
    {
      // מזהה ייחודי של איש הקשר.
      id: 6,
      // שם איש הקשר.
      name: 'דניאל פרידמן',
      // ראשי התיבות לתצוגה.
      initials: 'דפ',
      // כתובת המייל ליצירת קשר.
      email: 'daniel.friedman@example.com',
      // מספר הטלפון ליצירת קשר.
      phone: '054-678-9012',
      // צבע הכרטיס של איש הקשר.
      color: '#fff0c9',
      // איש הקשר אינו מסומן כ-VIP.
      vip: false,
    },
  ];

  // מחרוזת החיפוש שהוקלדה בשדה החיפוש.
  searchTerm = '';
  // הסינון שנבחר כרגע: כולם או אנשי VIP.
  activeFilter: ContactFilter = 'all';
  // קובע אם טופס הוספת איש קשר מוצג כרגע.
  isAddingContact = false;

  // מחזיר את אנשי הקשר שעומדים גם בחיפוש וגם בסינון הנבחר.
  get filteredContacts(): Contact[] {
    // מסיר רווחים מיותרים ומכין את החיפוש להשוואה שאינה רגישה לאותיות.
    const query = this.searchTerm.trim().toLocaleLowerCase('he');

    // מסנן את הרשימה המקורית לפי החיפוש ולפי סוג הסינון הפעיל.
    return this.contacts.filter((contact) => {
      // בודק אם איש הקשר מתאים לחיפוש, או שאין כרגע מחרוזת חיפוש.
      const matchesSearch =
        query.length === 0 ||
        // מחפש את מחרוזת החיפוש בתוך השם, כתובת המייל או מספר הטלפון.
        [contact.name, contact.email, contact.phone]
          .some((value) => value.toLocaleLowerCase('he').includes(query));
      // בודק אם נבחרה הצגת כולם או שאיש הקשר מסומן כ-VIP.
      const matchesFilter =
        this.activeFilter === 'all' ||
        (this.activeFilter === 'vip' && contact.vip);

      // מציג את איש הקשר רק אם הוא מתאים גם לחיפוש וגם לסינון.
      return matchesSearch && matchesFilter;
    });
  }

  // מעדכן את מונח החיפוש לפי הטקסט שבשדה החיפוש.
  updateSearch(event: Event): void {
    // קורא את הערך שהוקלד ומציב אותו במשתנה החיפוש.
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  // משנה את אפשרות הסינון הפעילה.
  setFilter(filter: ContactFilter): void {
    this.activeFilter = filter;
  }

  // הופך את מצב ה-VIP של איש הקשר: מסומן הופך ללא מסומן ולהפך.
  toggleVip(contact: Contact): void {
    contact.vip = !contact.vip;
  }

  // מוסיף לרשימה איש קשר חדש שהתקבל מטופס ההוספה.
  addContact(contact: NewContact): void {
    // יוצר ראשי תיבות משתי המילים הראשונות בשם איש הקשר.
    const initials = contact.name
      // מסיר רווחים בתחילת השם ובסופו.
      .trim()
      // מפצל את השם למילים לפי רווח אחד או יותר.
      .split(/\s+/)
      // לוקח לכל היותר את שתי המילים הראשונות.
      .slice(0, 2)
      // בוחר את האות הראשונה מכל מילה.
      .map((part) => part[0])
      // מחבר את האותיות למחרוזת אחת.
      .join('');
    // רשימת צבעים אפשריים לרקע של ראשי התיבות.
    const colors = ['#e9d8ff', '#d8eaff', '#ffe5d5', '#d9f1e6', '#ffe0e8', '#fff0c9'];
    // בוחר צבע לפי מספר אנשי הקשר שכבר קיימים.
    const colorIndex = this.contacts.length % colors.length;

    // בונה רשימה חדשה שבה איש הקשר החדש מופיע ראשון.
    this.contacts = [
      // מעתיק את הפרטים שהגיעו מהטופס ומוסיף להם שדות תצוגה ומזהה.
      {
        // מעתיק את השם, המייל, הטלפון ומצב ה-VIP שהוזנו בטופס.
        ...contact,
        // מייצר מזהה חדש על ידי מציאת המזהה הגבוה ביותר והוספת 1.
        id: Math.max(0, ...this.contacts.map((existing) => existing.id)) + 1,
        // שומר את ראשי התיבות שחושבו מהשם.
        initials,
        // משייך לאיש הקשר צבע רקע מתוך רשימת הצבעים.
        color: colors[colorIndex],
        // שומר את מצב ה-VIP שנבחר בטופס.
        vip: contact.vip,
      },
      // שומר אחריו את כל אנשי הקשר שהיו ברשימה.
      ...this.contacts,
    ];
    // סוגר את טופס ההוספה לאחר שמירת איש הקשר.
    this.isAddingContact = false;
    // מנקה את החיפוש כדי שאיש הקשר החדש יוצג.
    this.searchTerm = '';
    // מחזיר את הסינון להצגת כל אנשי הקשר.
    this.activeFilter = 'all';
  }
}

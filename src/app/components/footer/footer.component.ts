import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footerNav = [
    {
      title: 'Support',
      links: [
        {
          title: 'Contact Us',
          url: '/contact',
        },
        {
          title: 'FAQs',
          url: '/faqs',
        },
        {
          title: 'In-Store Pickup',
          url: '/in-store-pickup',
        },
        {
          title: 'Return Policy',
          url: '/return-policy',
        },
      ],
    },
    {
      title: 'Shop',
      links: [
        {
          title: 'Cookies',
          url: '/cookies',
        },
        {
          title: 'Drinks',
          url: '/drinks',
        },
        {
          title: 'Toppings',
          url: '/toppings',
        },
        {
          title: 'Snacks',
          url: '/snacks',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          title: 'Our Story',
          url: '/our-story',
        },
        {
          title: 'Careers',
          url: '/careers',
        },
        {
          title: 'Terms & Conditions',
          url: '/terms-and-conditions',
        },
        {
          title: 'Privacy & Cookie Policy',
          url: '/privacy-and-cookie-policy',
        },
      ],
    },
    {
      title: 'Contact',
      links: [
        {
          title: '(617) 775-7865',
          url: 'tel:6177757865',
        },
        {
          title: 'support@mail.com',
          url: 'mailto:support@mail.com',
        },
        {
          title: '2 Maple Street, Boston, MA 89898',
          url: 'https://goo.gl/maps/4Q4Z9JZ2J2J2',
        },
      ],
    },
  ];
}

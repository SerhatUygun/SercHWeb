import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface CategoryFeature {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

interface DetailedFeature {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
  techStack?: string[];
}

interface PricingTier {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  recommended?: boolean;
  ctaText: string;
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition(':enter', [
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('cardHover', [
      state('normal', style({
        transform: 'scale(1)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
      })),
      state('hovered', style({
        transform: 'scale(1.05)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
      })),
      transition('normal <=> hovered', animate('0.3s ease-in-out'))
    ])
  ]
})
export class FeaturesComponent implements OnInit {
  activeTab = 'all';
  cardStates: { [key: string]: string } = {};

  categoryFeatures: CategoryFeature[] = [
    {
      icon: '🎨',
      title: 'Modern Design',
      description: 'Create stunning user interfaces with modern design principles',
      benefits: ['Responsive Layouts', 'Custom Animations', 'Intuitive UX', 'Brand Consistency']
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Lightning-fast performance optimized for all devices',
      benefits: ['Fast Loading', 'Code Optimization', 'Caching Strategies', 'Resource Management']
    },
    {
      icon: '🛡️',
      title: 'Security',
      description: 'Enterprise-grade security for your applications',
      benefits: ['SSL Certificates', 'Data Encryption', 'Regular Audits', 'Compliance Standards']
    },
    {
      icon: '🤖',
      title: 'AI Integration',
      description: 'Harness the power of artificial intelligence',
      benefits: ['Smart Analytics', 'Predictive Models', 'Automation Tools', 'ML Algorithms']
    },
    {
      icon: '🔄',
      title: 'DevOps',
      description: 'Streamlined development and deployment processes',
      benefits: ['CI/CD Pipeline', 'Docker Support', 'Cloud Integration', 'Monitoring Tools']
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Optimized experience across all devices',
      benefits: ['Responsive Design', 'Touch Support', 'PWA Features', 'Native-like Feel']
    }
  ];

  detailedFeatures: DetailedFeature[] = [
    {
      tag: 'NEW',
      tagColor: '#10B981',
      title: 'AI-Powered Analytics Dashboard',
      description: 'Get deep insights into your application performance and user behavior with our advanced analytics platform.',
      image: 'https://cdn.sisense.com/wp-content/uploads/Data-Exploration-1-1024x528-1.png',
      benefits: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom reporting',
        'User behavior tracking'
      ],
      techStack: ['TensorFlow.js', 'D3.js', 'WebSocket', 'Redux']
    },
    {
      tag: 'TRENDING',
      tagColor: '#3B82F6',
      title: 'Cloud Infrastructure',
      description: 'Scale your application effortlessly with our cloud-native infrastructure solutions.',
      image: 'https://media-assets-cdn.zenduty.com/blogscontent/2023/12/Cloud_vs_traditional.webp',
      benefits: [
        'Auto-scaling',
        'Load balancing',
        'Disaster recovery',
        'Global CDN'
      ],
      techStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      tag: 'ENTERPRISE',
      tagColor: '#8B5CF6',
      title: 'Security Suite',
      description: 'Comprehensive security features to protect your application and user data.',
      image: 'https://freschesolutions.com/wp-content/uploads/2023/09/ibmi-security-suite-featured-2-1140x601.webp',
      benefits: [
        'DDoS protection',
        'WAF integration',
        'Regular security audits',
        'Compliance monitoring'
      ],
      techStack: ['OAuth 2.0', 'JWT', 'SSL/TLS', 'HashiCorp Vault']
    }
  ];

  pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      price: 99,
      period: 'month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Responsive Design',
        'Basic Analytics',
        '5GB Storage',
        'SSL Certificate',
        'Email Support',
        '2 Team Members'
        
      ],
      ctaText: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: 199,
      period: 'month',
      description: 'Ideal for growing businesses',
      recommended: true,
      features: [
        'All Starter Features',
        'Advanced Analytics',
        '20GB Storage',
        'Priority Support',
        'Custom Domain',
        '5 Team Members',
        'API Access',
        'Weekly Backups'
      ],
      ctaText: 'Get Started'
    },
    {
      name: 'Enterprise',
      price: 399,
      period: 'month',
      description: 'For large organizations with complex needs',
      features: [
        'All Pro Features',
        'Unlimited Storage',
        'AI-Powered Analytics',
        '24/7 Dedicated Support',
        'Multiple Domains',
        'Unlimited Team Members',
        'Custom Integration',
        'Daily Backups',
        'SLA Guarantee'
      ],
      ctaText: 'Contact Sales'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.initCardStates();
  }

  private initCardStates(): void {
    this.categoryFeatures.forEach((_, index) => {
      this.cardStates[`card-${index}`] = 'normal';
    });
  }

  onCardHover(cardId: string, isHovered: boolean): void {
    this.cardStates[cardId] = isHovered ? 'hovered' : 'normal';
  }

  filterFeatures(category: string): void {
    this.activeTab = category;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
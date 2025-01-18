import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface Feature {
  icon: string;
  title: string;
  description: string;
  link: string;
}

interface Stat {
  value: number;
  label: string;
  progress: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out')
      ])
    ]),
    trigger('slideIn', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('0.6s ease-out')
      ])
    ]),
    trigger('cardAnimation', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('0.6s {{delay}}ms ease-out')
      ], { params: { delay: '0' } })
    ]),
    trigger('scrollAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.8s ease-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  features: Feature[] = [
    {
      icon: '🚀',
      title: 'Innovative Solutions',
      description: 'We bring creative ideas to life with cutting-edge technology and modern design principles.',
      link: '/contact'
    },
    {
      icon: '🛠️',
      title: '24/7 Support',
      description: 'Our dedicated team is always here to help you succeed in your digital journey.',
      link: '/contact'
    },
    {
      icon: '📈',
      title: 'Scalable Architecture',
      description: 'Build solutions that grow seamlessly with your business needs and future demands.',
      link: '/contact'
    }
  ];

  stats: Stat[] = [
    {
      value: 15,
      label: 'Websites Created',
      progress: 75
    },
    {
      value: 100,
      label: 'Happy Clients',
      progress: 85
    },
    {
      value: 500,
      label: 'Development Hours',
      progress: 95
    }
  ];

  private intersectionObserver!: IntersectionObserver;
  private animationStarted = false;

  constructor() {}

  ngOnInit(): void {
    this.initScrollHandler();
    this.initIntersectionObserver();
  }

  ngAfterViewInit(): void {
    this.setupStatsSectionObserver();
  }

  private initScrollHandler(): void {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    });
  }

  private initIntersectionObserver(): void {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.animationStarted) {
            this.animateCounters();
            this.animationStarted = true;
          }
        });
      },
      {
        threshold: 0.2
      }
    );
  }

  private setupStatsSectionObserver(): void {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      this.intersectionObserver.observe(statsSection);
    }
  }

  private animateCounters(): void {
    const counters = document.querySelectorAll('.number');
    
    const animate = (counter: Element) => {
      const target = Number(counter.getAttribute('data-target'));
      const duration = 2000; // Animation duration in milliseconds
      const steps = 100; // Number of steps
      const stepValue = target / steps;
      let current = 0;
      
      const updateCounter = () => {
        current += stepValue;
        if (current < target) {
          counter.textContent = Math.ceil(current).toString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString();
          // Animate progress bar after counter completion
          const statItem = counter.closest('.stat-item');
          const progressBar = statItem?.querySelector('.progress-bar') as HTMLElement;
          if (progressBar) {
            const progress = this.stats.find(stat => stat.value === target)?.progress || 0;
            progressBar.style.width = `${progress}%`;
          }
        }
      };
      
      requestAnimationFrame(updateCounter);
    };

    counters.forEach(counter => animate(counter));
  }

  ngOnDestroy(): void {
    // Cleanup
    this.intersectionObserver?.disconnect();
    window.removeEventListener('scroll', this.initScrollHandler);
  }
}
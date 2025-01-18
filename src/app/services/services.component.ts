import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    { 
      title: 'Web Development', 
      description: 'Custom web solutions built with cutting-edge technologies for optimal performance and user experience.', 
      icon: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', 
      features: ['Responsive Design', 'Custom CMS Integration', 'E-commerce Solutions', 'Performance Optimization', 'SEO-friendly Structure'] 
    },
    { 
      title: 'Mobile Development', 
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.', 
      icon: 'https://simpleprogrammer.com/wp-content/uploads/2016/12/Untitled-1-768x432.png', 
      features: ['iOS Development', 'Android Development', 'Cross-platform Solutions', 'App Store Optimization', 'Mobile UI/UX Design'] 
    },
    { 
      title: 'UI/UX Design', 
      description: 'User-centered design solutions that create engaging and intuitive digital experiences.', 
      icon: 'https://mobitouch.net/_next/image?url=https%3A%2F%2Fnew.mobitouch.pl%2Fwp-content%2Fuploads%2F2023%2F09%2FUI-Designera_-Blog-Main.jpg&w=1920&q=75', 
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing', 'Design Systems'] 
    }
  ];

  detailedServices = [
    { 
      title: 'Web Development', 
      description: 'Our web development services are designed to create powerful, scalable, and secure web applications that drive business growth.', 
      image: 'https://www.uplers.com/wp-content/uploads/2021/12/full-stack-web-developers.png', 
      features: ['Custom Website Development', 'E-commerce Solutions', 'Progressive Web Apps', 'Content Management Systems', 'API Development & Integration', 'Cloud Solutions', 'Website Maintenance & Support'] 
    },
    { 
      title: 'Mobile Development', 
      description: 'We create innovative mobile applications that engage users and deliver real business value across all platforms.', 
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*FxnQJi1ORB17IC1p', 
      features: ['Native iOS & Android Apps', 'Cross-platform Development', 'Mobile App UI/UX Design', 'App Testing & QA', 'App Store Optimization', 'App Maintenance & Updates', 'Integration with Backend Systems'] 
    }
  ];

  processSteps = [
    { title: 'Discovery', description: 'Understanding your requirements and business goals' },
    { title: 'Planning', description: 'Creating detailed project roadmap and architecture' },
    { title: 'Development', description: 'Building your solution with agile methodology' },
    { title: 'Launch', description: 'Deploying and maintaining your solution' }
  ];

  technologies = [
    { name: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
    { name: 'Angular', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2560px-Angular_full_color_logo.svg.png' },
    { name: 'Vue.js', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png' },
    { name: 'Node.js', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png' },
    { name: 'Python', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' },
    { name: 'PHP', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png' }
  ];
}

import React from 'react';
import { Mail, MapPin, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-md border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#" className="text-2xl font-bold flex items-center gap-2 mb-4">
              <span className="text-3xl text-aithos-accent">*</span>
              <span className="gradient-text">AithosAI</span>
            </a>
            <p className="text-muted-foreground mb-6">
              AI automation solutions that save time and accelerate business growth.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-aithos-blue/20 transition-colors"
                aria-label="Twitter"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.01C21 4.5 20.02 4.84 19 5C18.2 4.13 17.06 3.5 15.81 3.5C13.47 3.5 11.5 5.47 11.5 7.81C11.5 8.13 11.53 8.44 11.6 8.73C8.28 8.57 5.34 6.81 3.29 4.21C2.94 4.82 2.74 5.51 2.74 6.24C2.74 7.65 3.44 8.9 4.5 9.64C3.8 9.62 3.14 9.43 2.56 9.12V9.16C2.56 11.19 4.07 12.88 6.03 13.25C5.7 13.34 5.34 13.39 4.97 13.39C4.71 13.39 4.46 13.37 4.21 13.32C4.72 14.99 6.28 16.21 8.12 16.24C6.68 17.37 4.87 18.05 2.9 18.05C2.57 18.05 2.24 18.03 1.92 17.99C3.77 19.19 5.98 19.9 8.35 19.9C15.8 19.9 19.86 13.46 19.86 7.89C19.86 7.71 19.86 7.54 19.85 7.36C20.84 6.67 21.72 5.8 22.44 4.79L22 4.01Z" fill="currentColor"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-aithos-blue/20 transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-aithos-blue/20 transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-aithos-accent mt-0.5" />
                <div>
                  <p className="text-foreground">Aithos AI</p>
                  <p className="text-muted-foreground">Melbourne</p>
                  <p className="text-muted-foreground">Victoria 3000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-aithos-accent" />
                <a href="mailto:contact@aithos.ai" className="text-foreground hover:text-aithos-accent transition-colors">
                  dion.doanh.tran@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-aithos-accent" />
                <a href="tel:+14155559876" className="text-foreground hover:text-aithos-accent transition-colors">
                  +61 468 959 908
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest updates on AI automation and industry insights.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-secondary border-none focus-visible:ring-aithos-blue"
              />
              <Button className="bg-aithos-blue hover:bg-aithos-blue/90 button-bounce">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 mt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Aithos AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

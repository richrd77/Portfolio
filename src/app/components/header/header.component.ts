import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ric-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('na') private navElement!: ElementRef<HTMLElement>;
  @ViewChild('log') private logo!: ElementRef<HTMLImageElement>;

  ngAfterViewInit(): void {
    if (!!window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.logo.nativeElement.src = 'assets/logo/logo-dark.png';
        return;
      } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        this.logo.nativeElement.src = 'assets/logo/logo-light.png';
        return;
      }
    }
    this.logo.nativeElement.src = 'assets/logo/logo-accent.png';
    return;
  }


  public ShowMenu(event: MouseEvent): void {
    this.navElement.nativeElement.classList.add('show');
    event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    console.log('body clicked');
    this.navElement.nativeElement.classList.remove('show');
  }
}

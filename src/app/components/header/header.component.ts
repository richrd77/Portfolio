import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'ric-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @ViewChild('na') private navElement!: ElementRef<HTMLElement>;

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

import { animate, style, transition, trigger } from "@angular/animations";

export const routeanimation = trigger('routefade', [
    transition('* <=> *', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate(500, style({ opacity: 1, transform: 'translateX(0)' }))
    ])
]);
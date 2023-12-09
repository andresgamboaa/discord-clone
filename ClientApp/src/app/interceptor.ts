import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StorageService } from "./services/storage-service.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    
    constructor(private storageService: StorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.storageService.isLoggedIn()) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.storageService.getToken()}`
                }
            });
        }
        return next.handle(req);
    }
}
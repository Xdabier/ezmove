import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { PubSubInterface } from "../interfaces/pub-sub.interface";

@Injectable({
	providedIn: "root"
})
export class PubSubService {
	private _listeners = new Subject<PubSubInterface>();

	sub(): Observable<PubSubInterface> {
		return this._listeners.asObservable();
	}

	pub(filterBy: PubSubInterface): void {
		this._listeners.next(filterBy);
	}
}

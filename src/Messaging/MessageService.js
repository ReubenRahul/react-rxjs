// MessageService.js
import { Subject, BehaviorSubject } from 'rxjs';

const sub = new Subject();
const behaviouSubject = new BehaviorSubject('Congrtulation, YOu are part of this group');

export  {
  sub,
  behaviouSubject
}

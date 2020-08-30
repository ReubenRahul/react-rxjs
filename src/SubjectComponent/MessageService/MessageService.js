import { Subject } from 'rxjs';

const subscriber = new Subject();

const messageService = {
  send: function (msg)  {
    console.log('send', msg)
    subscriber.next(8)
  }
}

export  {
  messageService,
  subscriber
}
